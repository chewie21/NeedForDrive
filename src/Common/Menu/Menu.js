import React, {useState} from 'react';

import BurgerImg from '../../img/menu_btn.svg';
import BurgerImgHover from '../../img/menu_btn_hover.svg';

import {IconImageHover} from "../IconImage/IconImageHover";
import {Text} from "../Text/Text";
import {MenuContainer, MenuLangContainer} from "./Menu.styled";

export const Menu = ({toggle}) =>
    <MenuContainer>
        <div onClick={() => toggle()}>
            <IconImageHover
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
                text='Eng'
            />
        </MenuLangContainer>
    </MenuContainer>
;