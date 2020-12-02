import React, {useEffect, useState} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {Container, Row, Style} from "./Step3.styled";
import {Text} from "../../../../Common/Text/Text";
import {addDateFromToOrder, addParamToOrder, deleteParamFromOrder} from "../../../../Functions/AddToOrder";

export const SelectDate = ({order, setOrder}) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        if(order) {
            if(order.dateFrom) setStartDate(new Date(order.dateFrom));
            if(order.dateTo) setEndDate(new Date(order.dateTo));
        }
    }, [order]);

    const nowDate = new Date();
    const startMinTime = new Date();
    const endMinTime = new Date();
    const maxTime = new Date();

    return (
        <Container>
            <Style/>
            <Text
                weight='300'
                size='14px'
                color='#121212'
                margin='0 0 16px 0'
            >
                Дата аренды
            </Text>
            <Row>
                <Text
                    weight='300'
                    size='14px'
                    color='#121212'
                    margin='0 8px 0 0'
                    width='18px'
                    textAlign='end'
                >
                    C
                </Text>
                <DatePicker
                    placeholderText='Выберите дату и время'
                    selected={startDate}
                    onChange={date => {
                        if (date) {
                            if (date.getDate() === nowDate.getDate() && date.getHours() === 0) {
                                date.setHours(nowDate.getHours(), Math.ceil(nowDate.getMinutes()/5)*5);
                            }
                        }
                        setOrder(addDateFromToOrder(order, date ? date.getTime() : null));
                        setStartDate(date);
                        setEndDate(null);
                    }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={5}
                    timeCaption="time"
                    dateFormat="dd/MM/yyyy HH:mm"
                    className='date-pick-active'
                    isClearable
                    minDate={nowDate}
                    minTime={startDate ?
                        startDate.getDate() === nowDate.getDate() ?
                            startMinTime : startMinTime.setHours(0, 0) :
                        startMinTime
                    }
                    maxTime={maxTime.setHours(23, 59)}
                />
            </Row>
            <Row>
                <Text
                    weight='300'
                    size='14px'
                    color='#121212'
                    margin='0 8px 0 0'
                    width='18px'
                    textAlign='end'
                >
                    По
                </Text>
                <DatePicker
                    disabled={!startDate}
                    placeholderText='Выберите дату и время'
                    selected={endDate}
                    onChange={date => {
                        setEndDate(date);
                        if(date) {
                            if(date.getMonth() === startDate.getMonth() &&
                                date.getDate() <= startDate.getDate()) {
                                date.setDate(startDate.getDate());
                                if (date.getHours() === 0) {
                                    date.setHours(startDate.getHours(), startDate.getMinutes() + 5);
                                }
                            }
                            setOrder(addParamToOrder(order, `dateTo`, date.getTime()));
                        } else {
                            setOrder(deleteParamFromOrder(order, `dateTo`));
                        }

                    }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={5}
                    timeCaption="time"
                    dateFormat="dd/MM/yyyy HH:mm"
                    className={startDate ? 'date-pick-active' : 'date-pick-disabled'}
                    isClearable
                    minDate={startDate ? startDate : nowDate}
                    minTime={startDate ?
                                endDate ?
                                    (endDate.getMonth() === startDate.getMonth() && endDate.getDate() === startDate.getDate()) ?
                                        endMinTime.setHours(startDate.getHours(), startDate.getMinutes() + 5) :
                                        endMinTime.setHours(0, 0)
                                    :
                                    endMinTime.setHours(startDate.getHours(), startDate.getMinutes() + 5) :
                            endMinTime.setHours(nowDate.getHours(), nowDate.getMinutes() + 5)}
                    maxTime={maxTime.setHours(23, 59)}
                />
            </Row>
        </Container>
    )
}