import React, {useEffect, useState} from "react";
import {CustomCheck, CustomLabelChek} from "../../../../Common/Button/CheckBox";
import {Text} from "../../../../Common/Text/Text";
import {addParamToOrder, deleteParamFromOrder} from "../../../../Functions/AddToOrder";

export const AdditionalServices = ({order, setOrder}) => {

    const data = [
        {name: `isFullTank`, value: `500`, label: `Полный бак`},
        {name: `isNeedChildChair`, value: `200`, label: `Детское кресло`},
        {name: `isRightWheel`, value: `1600`, label: `Правый руль`},
    ]

    const [state, setState] = useState({
        isFullTank: false,
        isNeedChildChair: false,
        isRightWheel: false
    });

    const handleChange = (event, item) => {
        if(event.target.checked) {
            setOrder(addParamToOrder(order, item.name, true));
        } else {
            setOrder(deleteParamFromOrder(order, item.name));
        }
        setState({...state, [event.target.name]: event.target.checked});
    };

    useEffect(() => {
        let obj = {...state};
        if(order) {
            data.forEach(item => {
                if(order[item.name]) obj[item.name] = true
            })
            setState(obj);
        }
    }, []);

    return (
        <React.Fragment>
            <Text
                weight='300'
                size='14px'
                color='#121212'
                margin='0 0 16px 0'
            >
                Доп услуги
            </Text>
            {data.map((item, index) => (
                <CustomLabelChek
                    key={index}
                    onChange={(e) => handleChange(e, item)}
                    checked={state[item.name]}
                    name={item.name}
                    value={item.value}
                    control={<CustomCheck/>}
                    label={`${item.label}, ${item.value}р`}
                />
            ))}
        </React.Fragment>
    )
}