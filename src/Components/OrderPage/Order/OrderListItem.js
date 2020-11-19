import {LeftSection, MiddleSection, RightSection, Row} from "./OrderInfo.styled";
import {Text} from "../../../Common/Text/Text";
import React, {useEffect} from "react";

export const OrderListItem = ({order, item, index}) =>

    <Row key={index}>
        <LeftSection>
            <Text
                weight='300'
                margin='0 5px 0 0'
                size='14px'
                color='#121212'
            >
                {order[item].name}
            </Text>
        </LeftSection>
        <MiddleSection/>
        <RightSection>
            <Text
                weight='300'
                margin='0 0 0 5px'
                size='14px'
                color='#999999'
            >
                {order[item].value}
            </Text>
        </RightSection>
    </Row>