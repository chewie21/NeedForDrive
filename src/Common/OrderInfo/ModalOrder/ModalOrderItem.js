import React from "react";

import {MobileOrderItemContainer} from "./ModalOrder.styled";
import {Text} from "../../Text/Text";

export const ModalOrderItem = ({label, value}) =>
    <MobileOrderItemContainer>
        <Text
            weight='500'
            size='22px'
            color='#FFFFFF'
            margin='0 0 8px 0'
        >
            {label.toUpperCase()}
        </Text>
        <Text
            weight='500'
            size='18px'
            color='#0EC261'
            margin='0'
        >
            {value}
        </Text>
    </MobileOrderItemContainer>