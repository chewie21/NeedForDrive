import React, {useEffect, useState} from "react";
import {CustomCheck, CustomLabelChek} from "../../../../Common/Button/CheckBox";
import {Text} from "../../../../Common/Text/Text";
import {addServiceToOrder, deleteServiceFromOrder} from "../../../../Functions/AddToOrder";

export const AdditionalServices = ({order, setOrder, thisPrice}) => {

    const data = [
        {name: `fullTank`, value: `500`, label: `Полный бак`},
        {name: `babyChair`, value: `200`, label: `Детское кресло`},
        {name: `rightDrive`, value: `1600`, label: `Правый руль`},
    ]

    const [options, setOptions] = useState(null);

    const [state, setState] = useState({
        fullTank: false,
        babyChair: false,
        rightDrive: false
    });

    const handleChange = (event, item) => {
        if(event.target.checked) {
            setOrder(addServiceToOrder(order, item));
        } else {
            setOrder(deleteServiceFromOrder(order, item));
        }
        setState({...state, [event.target.name]: event.target.checked});
    }

    useEffect(() => {
        let obj = {...state};
        if(order) {
            data.forEach(item => {
                if(order[item.name]) obj[item.name] = true
            })
            setState(obj);
        }
    }, []);

    useEffect(() => {
       if(thisPrice !== options) {
           setOptions(thisPrice);
           if(!thisPrice) {
               let orderObj = {...order}
               let obj = {...state};
               data.forEach(item => {
                   if(orderObj[item.name]) delete orderObj[item.name];
               });
               for(const key in obj) {
                   obj[key] = false;
               }
               setState(obj);
               setOrder(orderObj);
           }
       }
    });

    return (
        <React.Fragment>
            <Text
                weight='300'
                size='14px'
                color={thisPrice ? '#121212' : '#999999'}
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
                    disabled={!thisPrice}
                />
            ))}
        </React.Fragment>

    )
}