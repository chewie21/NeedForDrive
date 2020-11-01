import React from 'react';

import CloseBtn from '../../img/close_btn.svg';
import CloseBtnHover from '../../img/close_btn_hover.svg';
import Inst from '../../img/Instagram_white.svg';
import Fb from '../../img/Facebook_white.svg';
import Tg from '../../img/Telegram_white.svg';
import InstHover from '../../img/Instagram_hover.svg';
import FbHover from '../../img/Facebook_hover.svg';
import TgHover from '../../img/Telegram_hover.svg';

import {IconImage} from "../IconImage/IconImage";
import {TextLink} from "../Text/TextLink";
import {Left, Middle, ModalMenuContainer, Right, RightMainPage, SocialContainer, TextContainer} from "./Menu.styled";

export const ModalMenu = (props) =>
    <ModalMenuContainer>
        <Left>
            <div onClick={() => props.toggle()}>
                <IconImage
                    height='32px'
                    width='32px'
                    margin='32px 0 0 0'
                    img={CloseBtn}
                    imgHover={CloseBtnHover}
                />
            </div>
        </Left>
        <Middle>
            <TextContainer>
                <TextLink
                    text='Парковка'
                    weight='500'
                    margin='0 0 15px 0'
                    size='32px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                />
                <TextLink
                    text='СТРАХОВКА'
                    weight='500'
                    margin='0 0 15px 0'
                    size='32px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                />
                <TextLink
                    text='БЕНЗИН'
                    weight='500'
                    margin='0 0 15px 0'
                    size='32px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                />
                <TextLink
                    text='ОБСЛУЖИВАНИЕ'
                    weight='500'
                    margin='0 0 15px 0'
                    size='32px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                />
            </TextContainer>
            <SocialContainer>
                <IconImage
                    height='32px'
                    width='32px'
                    margin='0 24px 0 0'
                    img={Tg}
                    imgHover={TgHover}/>
                <IconImage
                    height='32px'
                    width='32px'
                    margin='0 24px 0 0'
                    img={Fb}
                    imgHover={FbHover}/>
                <IconImage
                    height='32px'
                    width='32px'
                    margin='0 24px 0 0'
                    img={Inst}
                    imgHover={InstHover}/>
            </SocialContainer>
        </Middle>
        {props.mainPage ? <RightMainPage/> : <Right/>}
    </ModalMenuContainer>
;
