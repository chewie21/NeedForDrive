import React from "react";

import OrderArrow from '../../../img/order_arrow.svg';
import OrderArrowActive from '../../../img/order_arrow_active.svg';

import {TextLink} from "../../../Common/Text/TextLink";
import {Text} from "../../../Common/Text/Text";
import {IconImage} from "../../../Common/IconImage/IconImage";
import {ActiveContainer, LockContainer} from "./NavItem.styled";

export const NavItem = (props) => {
    return (
         props.lock ?
            <LockContainer>
                {props.img && <IconImage
                    height='8px'
                    width='7px'
                    margin='0 3px 0 0'
                    img={OrderArrow}
                />}
                <Text
                    weight='bold'
                    margin='0'
                    size='14px'
                    color='#999999'
                    text={props.text}
                />
            </LockContainer> :
            <ActiveContainer>
                {props.img && <IconImage
                    height='8px'
                    width='7px'
                    margin='0 3px 0 0'
                    img={OrderArrowActive}
                />}
                {props.active ?
                    <Text
                        weight='bold'
                        margin='0'
                        size='14px'
                        color='#0EC261'
                        colorHover='#0EC261'
                        text={props.text}
                    /> :
                    <Text
                        weight='bold'
                        margin='0'
                        size='14px'
                        color='#121212'
                        colorHover='#0EC261'
                        text={props.text}
                    />
                }
            </ActiveContainer>
    )
}