import React, {useEffect, useState} from "react";
import {Card, CardImg} from "./Step2.styled";
import {Text} from "../../../../Common/Text/Text";
import DefaultImg from '../../../../img/defaulImg.png';
import {mainUrl, mainUrlPages} from "../../../../Environments/ApiFactoryUrls";

export const CarList = ({filter, changeUnlockSteps, order, setOrder, response}) => {

    const [options, setOptions] = useState(null);
    const [carFilter, setCarFilter] = useState(null);
    const [activeCard, setActiveCard] = useState(null);


    useEffect(() => {
        if (order.car && activeCard !== order.car.id) setActiveCard(order.car.id);
        if (response && filter !== carFilter) {
            let arr = []
            if(filter === 'Все модели') {
                arr = response.data
            } else {
                arr = response.data.filter(item => item.categoryId.name === filter);
            }
            setCarFilter(filter);
            setOptions(arr);
        }
    });

    const addToOrder = (item) => {
        const obj = {
            point: order.point,
            car: item
        }
        setOrder(obj);
        setActiveCard(item.id);
        changeUnlockSteps(1);
    }

    return (
        options && options.map((item, index) => (
            <Card
                key={index}
                border={item.id === activeCard ? '1px solid #0EC261' : '1px solid #EEEEEE'}
                borderHover={item.id === activeCard ? '1px solid #0EC261' : '1px solid #999999'}
                onClick={() => addToOrder(item)}>
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
                    height='116px'
                    src={
                        item.thumbnail.path ?
                        item.thumbnail.path.charAt(0) === '/' ?
                        `${mainUrl}${item.thumbnail.path}` :
                        item.thumbnail.path :
                        DefaultImg
                    }
                />
            </Card>
        ))
    )
}