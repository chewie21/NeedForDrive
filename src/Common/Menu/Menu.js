import React from 'react';

import BurgerImg from '../../img/menu_btn.svg';
import BurgerImgHover from '../../img/menu_btn_hover.svg';

import {IconImage} from "../IconImage/IconImage";
import {Text} from "../Text/Text";
import {MenuContainer, MenuLangContainer} from "./Menu.styled";

export const Menu = ({toggle}) =>
    <MenuContainer>
        <div onClick={toggle}>
            <IconImage
                height='32px'
                width='32px'
                margin='32px 0 0 0'
                img={BurgerImg}
                imgHover={BurgerImgHover}
            />
        </div>
        <MenuLangContainer>
            <Text
                weight='bold'
                margin='0'
                size='13px'
                color='#0EC261'
            >
                Eng
            </Text>
        </MenuLangContainer>
    </MenuContainer>
;