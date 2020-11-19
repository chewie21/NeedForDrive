import {GreenLabel, GreenRadio} from "../../../../Common/Button/RadioButton";
import RadioGroup from "@material-ui/core/RadioGroup";
import React, {useEffect} from "react";
import {Container} from "./Step3.styled";
import {Text} from "../../../../Common/Text/Text";
import {addRateTypeToOrder} from "../../../../Functions/AddToOrder";

export const SelectRate = ({response, order, setOrder}) => {

    const [selection, setSelection] = React.useState(null);

    useEffect(() => {
        if(response && !selection) {
            if (order.rate) {
                setSelection(order.rate.price);
            } else {
                setSelection(response.data[0].price);
                setOrder(addRateTypeToOrder(order, response.data[0].rateTypeId.name, response.data[0].price))
            }
        }
    });

    const updateSelection = (event, item) => {
        setOrder(addRateTypeToOrder(order, item.rateTypeId.name, item.price));
        setSelection(+item.price);
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
                        <GreenLabel
                            onChange={(e) => updateSelection(e, item)}
                            key={index}
                            value={item.price}
                            control={<GreenRadio/>}
                            label={`${item.rateTypeId.name}, ${item.price} ₽/${item.rateTypeId.unit}`}
                        />
                    )}
            </RadioGroup>}
        </Container>
    )
}