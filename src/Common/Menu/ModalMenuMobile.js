import React from 'react';

import CloseBtn from "../../img/close_btn.svg";
import CloseBtnHover from "../../img/close_btn_hover.svg";
import Tg from "../../img/Telegram_white.svg";
import TgHover from "../../img/Telegram_hover.svg";
import Fb from "../../img/Facebook_white.svg";
import FbHover from "../../img/Facebook_hover.svg";
import Inst from "../../img/Instagram_white.svg";
import InstHover from "../../img/Instagram_hover.svg";

import {IconImageHover} from "../IconImage/IconImageHover";
import {TextLink} from "../Text/TextLink";
import {Text} from "../Text/Text";
import {MobileContainer, SocialContainer, TextContainer} from "./Menu.styled";


export const ModalMenuMobile = ({toggle}) =>
    <MobileContainer>
        <header>
            <div onClick={() => toggle()}>
                <IconImageHover
                    height='32px'
                    width='32px'
                    margin='0 0 0 0'
                    img={CloseBtn}
                    imgHover={CloseBtnHover}
                />
            </div>
        </header>
        <main>
            <TextContainer>
                <TextLink
                    text='ПАРКОВКА'
                    weight='500'
                    margin='0 0 15px 0'
                    size='22px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                />
                <TextLink
                    text='СТРАХОВКА'
                    weight='500'
                    margin='0 0 15px 0'
                    size='22px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                />
                <TextLink
                    text='БЕНЗИН'
                    weight='500'
                    margin='0 0 15px 0'
                    size='22px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                />
                <TextLink
                    text='ОБСЛУЖИВАНИЕ'
                    weight='500'
                    margin='0 0 15px 0'
                    size='22px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                />
            </TextContainer>
            <SocialContainer>
                <IconImageHover
                    height='32px'
                    width='32px'
                    margin='0 24px 0 0'
                    img={Tg}
                    imgHover={TgHover}/>
                <IconImageHover
                    height='32px'
                    width='32px'
                    margin='0 24px 0 0'
                    img={Fb}
                    imgHover={FbHover}/>
                <IconImageHover
                    height='32px'
                    width='32px'
                    margin='0 24px 0 0'
                    img={Inst}
                    imgHover={InstHover}/>
            </SocialContainer>
        </main>
        <footer>
            <Text
                text='Eng'
                weight='bold'
                margin='0'
                size='13px'
                color='#0EC261'
            />
        </footer>
    </MobileContainer>
;