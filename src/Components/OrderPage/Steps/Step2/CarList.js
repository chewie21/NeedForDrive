import React, {useEffect, useState} from "react";
import {Card, CardImg} from "./Step2.styled";
import {Text} from "../../../../Common/Text/Text";
import {addCarToOrder} from "../../../../Functions/AddToOrder";
import {formatImgPath} from "../../../../Functions/Format";
import {mainUrlPages} from "../../../../Environments/ApiFactoryUrls";

export const CarList = ({filter, changeUnlockSteps, order, setOrder, response}) => {

    const [options, setOptions] = useState(null);
    const [carFilter, setCarFilter] = useState(null);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        if (order.carId && activeCard !== order.carId.name) setActiveCard(order.carId.name);
        if (response && filter !== carFilter) {
            let arr = []
            if(filter === 'Все модели') {
                arr = response.data;
            } else {
                arr = response.data.filter(item => item.categoryId.name === filter);
            }
            setCarFilter(filter);
            setOptions(arr);
        }
    });

    return (
        options && options.map((item, index) => (
            <Card
                key={index}
                border={item.name === activeCard ? '1px solid #0EC261' : '1px solid #EEEEEE'}
                borderHover={item.name === activeCard ? '1px solid #0EC261' : '1px solid #999999'}
                onClick={() => {
                    setOrder(addCarToOrder(order, item));
                    setActiveCard(item.id);
                    changeUnlockSteps(1);
                }}>
                <Text
                    weight='normal'
                    margin='0 0 6px 0'
                    size='18px'
                    color='#121212'
                >{item.name}</Text>
                <Text
                    weight='normal'
                    margin='0 0 36px 0'
                    size='14px'
                    color='#999999'
                >{item.priceMin} - {item.priceMax} ₽</Text>
                <CardImg
                    float='right'
                    width='80%'
                    src={formatImgPath(item, mainUrlPages)}
                />
            </Card>
        ))
    )
}