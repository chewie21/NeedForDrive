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
                {
                    item === 'point' ? 'Пункт выдачи' :
                    item === 'car' ? 'Модель' : ''
                }
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
                {
                    item === 'point' ? `${order[item].city}, ${order[item].label}` :
                    item === 'car' ? `${order[item].name}` : ''
                }
            </Text>
        </RightSection>
    </Row>