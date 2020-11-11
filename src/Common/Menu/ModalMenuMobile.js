import React from 'react';

import CloseBtn from "../../img/close_btn.svg";
import CloseBtnHover from "../../img/close_btn_hover.svg";
import Tg from "../../img/Telegram_white.svg";
import TgHover from "../../img/Telegram_hover.svg";
import Fb from "../../img/Facebook_white.svg";
import FbHover from "../../img/Facebook_hover.svg";
import Inst from "../../img/Instagram_white.svg";
import InstHover from "../../img/Instagram_hover.svg";

import {IconImage} from "../IconImage/IconImage";
import {TextLink} from "../Text/TextLink";
import {Text} from "../Text/Text";
import {MobileContainer, SocialContainer, TextContainer} from "./Menu.styled";

export const ModalMenuMobile = ({toggle}) =>
    <MobileContainer>
        <header>
            <div onClick={toggle}>
                <IconImage
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
                    weight='500'
                    margin='0 0 15px 0'
                    size='22px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                >ПАРКОВКА</TextLink>
                <TextLink
                    weight='500'
                    margin='0 0 15px 0'
                    size='22px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                >СТРАХОВКА</TextLink>
                <TextLink
                    weight='500'
                    margin='0 0 15px 0'
                    size='22px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                >БЕНЗИН</TextLink>
                <TextLink
                    weight='500'
                    margin='0 0 15px 0'
                    size='22px'
                    color='#FFFFFF'
                    colorHover='#0EC261'
                >ОБСЛУЖИВАНИЕ</TextLink>
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
        </main>
        <footer>
            <Text
                text='Eng'
                weight='bold'
                margin='0'
                size='13px'
                color='#0EC261'
            >Eng</Text>
        </footer>
    </MobileContainer>
;