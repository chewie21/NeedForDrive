import React from "react";

import OrderArrow from '../../../img/order_arrow.svg';
import OrderArrowActive from '../../../img/order_arrow_active.svg';
import {Text} from "../../../Common/Text/Text";
import {IconImage} from "../../../Common/IconImage/IconImage";
import {Container} from "./NavItem.styled";

export const NavItem = ({text, active, lock, img}) =>

        <Container cursor={lock ? 'default' : 'pointer'}>
            {img && <IconImage
                height='8px'
                width='7px'
                margin='0 3px 0 0'
                img={lock ? OrderArrow : OrderArrowActive}
            />}
            <Text
                weight='bold'
                margin='0'
                size='14px'
                color={lock ? '#999999' : active ? '#0EC261' : '#121212'}
            >
                {text}
            </Text>
        </Container>