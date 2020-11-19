import React, {useEffect, useState} from "react";
import {Text} from "../../../../Common/Text/Text";
import {GreenLabel, GreenRadio} from "../../../../Common/Button/RadioButton";
import RadioGroup from "@material-ui/core/RadioGroup";
import {addColorToOrder, addParamsToOrder} from "../../../../Functions/AddToOrder";
import {Container} from "./Step3.styled";

export const Color = ({order, setOrder}) => {

    const [filter, setFilter] = useState('Любой')

    useEffect(() => {
        if(order.color) {
            setFilter(order.color.value);
        } else  {
            setOrder(addColorToOrder(order, filter));
        }
    }, [])

    const changeColor = (e) => {
        setFilter(e.target.value);
        setOrder(addColorToOrder(order, e.target.value));
    }

    return (
        <Container>
            <Text
                weight='300'
                size='14px'
                color='#121212'
                margin='0 0 16px 0'
            >
                Цвет
            </Text>
            <RadioGroup row value={filter} onChange={changeColor}>
                <GreenLabel
                    value='Любой'
                    control={<GreenRadio/>}
                    label='Любой'
                />
                {order.car && order.car.colors.map((item, index) =>
                    <GreenLabel
                        key={index}
                        value={item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                        control={<GreenRadio/>}
                        label={item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                    />
                )}
            </RadioGroup>
        </Container>

    )
}