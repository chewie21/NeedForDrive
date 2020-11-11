import {LeftSection, MiddleSection, RightSection, Row} from "./OrderInfo.styled";
import {Text} from "../../../Common/Text/Text";
import React from "react";

export const OrderListItem = ({order, item, index}) =>

    <Row key={index}>
        <LeftSection>
            <Text
                weight='300'
                margin='0'
                size='14px'
                color='#121212'
            >
                {item}
            </Text>
        </LeftSection>
        <MiddleSection/>
        <RightSection>
            <Text
                weight='300'
                margin='0'
                size='14px'
                color='#999999'
            >
                {order[item]}
            </Text>
        </RightSection>
    </Row>