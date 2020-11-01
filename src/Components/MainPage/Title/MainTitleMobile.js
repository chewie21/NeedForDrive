import React from 'react';
import {Link} from "react-router-dom";

import {Text} from "../../../Common/Text/Text";
import {Button} from "../../../Common/Button/Button";
import {IconImage} from "../../../Common/IconImage/IconImage";
import Img from "../../../img/map_point.svg";
import ImgHover from "../../../img/map_point_hover.svg";
import BurgerImg from "../../../img/menu_btn_mobile.svg";
import BurgerImgHover from "../../../img/menu_btn_hover.svg";
import {FirstHeaderRow, MainTitleFooter, MainTitleHeader, MainTitleMain, SecondHeaderRow} from "./Title.styled";

export const MainTitleMobile = ({toggle}) =>
    <div className='d-flex flex-column justify-content-between h-100 w-100'>
        <MainTitleHeader>
            <FirstHeaderRow>
                <div onClick={() => toggle()}>
                    <IconImage
                        height='32px'
                        width='32px'
                        margin='0 0 0 0'
                        img={BurgerImg}
                        imgHover={BurgerImgHover}
                    />
                </div>
                <Text text='Need for drive'
                      weight='bold'
                      margin='0'
                      color='#0EC261'
                      size='30px'/>
            </FirstHeaderRow>
            <SecondHeaderRow>
                <IconImage
                    height='20px'
                    width='20px'
                    margin='0 8px 0 0'
                    img={Img}
                    imgHover={ImgHover}
                />
                <Text color='#999999'
                      text='Ульяновск'
                      margin='0'
                      size='14px'
                      weight='normal'/>
            </SecondHeaderRow>
        </MainTitleHeader>
        <MainTitleMain>
            <Text margin='0 0 6px 0' color='#121212' text='Каршеринг' size='32px' weight='bold'/>
            <Text margin='0 0 16px 0' color='#0EC261' text='Need for drive' size='32px' weight='bold'/>
            <Text margin='0 0 32px 0' color='#999999' text='Поминутная аренда авто твоего город' size='18px' weight='300'/>
            <Link to='/order'>
                <Button text='Забронировать'
                        size='18px'
                        color='linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)'
                        hoverColor='linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)'
                        clickColor='linear-gradient(90deg, #076432 2.61%, #013C27 112.6%)'/>
            </Link>
        </MainTitleMain>
        <MainTitleFooter>
            <Text text='8 (495) 234-22-44' color='#0EC261' weight='normal' margin='0 0 8px 0' size='13px'/>
            <Text text='© 2016-2019 «Need for drive»' color='#EEEEEE' weight='normal' margin='0' size='13px'/>
        </MainTitleFooter>
    </div>
;
