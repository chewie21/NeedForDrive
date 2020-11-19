import React, {useEffect, useState} from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {Container, Row, Style} from "./Step3.styled";
import {Text} from "../../../../Common/Text/Text";
import {addRentTimeToOrder, deleteRentTimeFromOrder} from "../../../../Functions/AddToOrder";

export const SelectDate = ({order, setOrder}) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        if(order) {
            if(order.rentTime) setStartDate(order.rentTime.startDate);
            if(order.rentTime) setEndDate(order.rentTime.endDate);
        }
    }, []);

    const setRentTime = (setOrder, addToOrder, startDate, endDate) => {

        const minutes = Math.round((endDate - startDate) / 60 / 1000);
        const finalMinutes = minutes % 60;

        const hours = Math.floor(minutes / 60);
        const finalHours = hours % 24;

        const days = Math.round(hours / 24);

        const daysStr = days !== 0 ? `${days} д` : '';
        const hoursStr = finalHours !== 0 ? `${finalHours} ч` : '';
        const minutesStr = finalMinutes !== 0 ? `${finalMinutes} м` : '';

        setOrder(addToOrder(order, `${daysStr} ${hoursStr} ${minutesStr}`, minutes, days + 1, startDate, endDate));
    }

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
                        if(date && date.getDate() === nowDate.getDate() && date.getHours() === 0) {
                            date.setHours(nowDate.getHours(), nowDate.getMinutes());
                        }
                        setStartDate(date);
                        setEndDate(null);
                        setOrder(deleteRentTimeFromOrder(order, `rentTime`));
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
                            startMinTime.setHours(startMinTime.getHours(), startMinTime.getMinutes()) : startMinTime.setHours(0, 0) :
                        startMinTime.setHours(startMinTime.getHours(), startMinTime.getMinutes())
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
                        if(date) {
                            if(date.getDate() === startDate.getDate() && date.getHours() === 0) {
                                if(startDate) {
                                    date.setHours(startDate.getHours(), startDate.getMinutes() + 5);
                                } else {
                                    date.setHours(nowDate.getHours(), nowDate.getMinutes() + 5);
                                }
                            }
                            setRentTime(setOrder, addRentTimeToOrder, startDate, date);
                        }
                        setEndDate(date);
                        if(!date) setOrder(deleteRentTimeFromOrder(order, `rentTime`));
                    }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={5}
                    timeCaption="time"
                    dateFormat="dd/MM/yyyy HH:mm"
                    className={startDate ? 'date-pick-active' : 'date-pick-disabled'}
                    isClearable
                    minDate={startDate ? startDate : nowDate}
                    minTime={endDate ?
                        endDate.getDate() === startDate.getDate() ?
                            endMinTime.setHours(startDate.getHours(), startDate.getMinutes() + 5) :
                            endMinTime.setHours(0, 0) :
                        endMinTime.setHours(nowDate.getHours(), nowDate.getMinutes() + 5)
                    }
                    maxTime={maxTime.setHours(23, 59)}
                />
            </Row>
        </Container>
    )
}