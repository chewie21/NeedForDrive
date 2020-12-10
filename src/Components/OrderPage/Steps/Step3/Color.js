import React, {useEffect, useState} from "react";
import {Text} from "../../../../Common/Text/Text";
import {CustomRadio} from "../../../../Common/Button/RadioButton";
import RadioGroup from "@material-ui/core/RadioGroup";
import {addParamToOrder} from "../../../../Functions/AddToOrder";
import {Container} from "./Step3.styled";
import {CustomRadioLabel} from "../../../../Common/Button/RadioButtonLabel";

export const Color = ({order, setOrder}) => {

    const [filter, setFilter] = useState(null);

    useEffect(() => {
       if(order.color) {
           setFilter(order.color);
       } else  {
           setFilter(`Любой`);
           setOrder(addParamToOrder(order, `color`, `Любой`));
       }
    }, []);

    const changeColor = (e) => {
        setFilter(e.target.value);
        setOrder(addParamToOrder(order, `color`, e.target.value));
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
            <RadioGroup row value={filter}>
                <CustomRadioLabel
                    value='Любой'
                    control={<CustomRadio/>}
                    label='Любой'
                    onChange={(e) => changeColor(e)}
                />
                {order.carId && order.carId.colors.map((item, index) =>
                    <CustomRadioLabel
                        onChange={(e) => changeColor(e)}
                        key={index}
                        value={item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                        control={<CustomRadio/>}
                        label={item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                    />
                )}
            </RadioGroup>
        </Container>
    )
}