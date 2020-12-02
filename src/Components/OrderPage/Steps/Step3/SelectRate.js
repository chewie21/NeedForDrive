import React, {useEffect, useState} from "react";

import {CustomRadio, CustomRadioLabel} from "../../../../Common/Button/RadioButton";
import RadioGroup from "@material-ui/core/RadioGroup";
import {addParamToOrder} from "../../../../Functions/AddToOrder";

import {Container} from "./Step3.styled";
import {Text} from "../../../../Common/Text/Text";

export const SelectRate = ({response, order, setOrder}) => {

    const [selection, setSelection] = useState(null);

    useEffect(() => {
        if(response && !selection && order.color) {
            if (order.rateId) {
                setSelection(order.rateId.price);
            } else {
                setSelection(response.data[0].price);
                setOrder(addParamToOrder(order, `rateId`, response.data[0]))
            }
        }
    });

    const changeRate = (item) => {
        setOrder(addParamToOrder(order, `rateId`, item));
        setSelection(item.price);
    };

    return (
        <Container>
            <Text
                weight='300'
                size='14px'
                color='#121212'
                margin='0 0 16px 0'
            >
                Тариф
            </Text>
            {response && <RadioGroup value={selection}>
                {response.data.map((item, index) =>
                        <CustomRadioLabel
                            onChange={() => changeRate(item)}
                            key={index}
                            value={item.price}
                            control={<CustomRadio/>}
                            label={`${item.rateTypeId.name}, ${item.price} ₽/${item.rateTypeId.unit}`}
                        />
                    )}
            </RadioGroup>}
        </Container>
    )
}