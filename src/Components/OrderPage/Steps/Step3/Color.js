import React, {useEffect} from "react";
import {Text} from "../../../../Common/Text/Text";
import {GreenLabel, GreenRadio} from "../../../../Common/Button/RadioButton";
import RadioGroup from "@material-ui/core/RadioGroup";

export const Color = ({order}) => {

    useEffect(() => {
        if(order) {
            let obj = {...order}
            obj.dop = 1;
            console.log(obj);
            console.log(order);
        }

    }, [])

    const changeColor = () => {

    }

    return (
        <React.Fragment>
            <Text
                weight='300'
                size='14px'
                color='#121212'
                margin='0 0 16px 0'
            >
                Цвет
            </Text>
            <RadioGroup row defaultValue='Любой' onChange={changeColor}>
                <GreenLabel
                    value='Любой'
                    control={<GreenRadio/>}
                    label='Любой'
                />
                {order.car.colors.map((item, index) =>
                    <GreenLabel
                        key={index}
                        value={item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                        control={<GreenRadio/>}
                        label={item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                    />
                )}
            </RadioGroup>
        </React.Fragment>
    )
}