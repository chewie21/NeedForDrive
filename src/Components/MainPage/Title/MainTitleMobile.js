import React from 'react';
import {Link} from "react-router-dom";

import {Text} from "../../../Common/Text/Text";
import {Button} from "../../../Common/Button/Button";
import {MainTitleFooter, MainTitleHeader, MainTitleMain, MainTitleMobileContainer} from "./Title.styled";
import {HeaderMobile} from "../../../Common/Header/HeaderMobile";

export const MainTitleMobile = ({toggle}) =>
    <MainTitleMobileContainer>
        <MainTitleHeader>
            <HeaderMobile toggle={toggle}/>
        </MainTitleHeader>
        <MainTitleMain>
            <Text margin='0 0 6px 0' color='#121212' size='32px' weight='bold'>Каршеринг</Text>
            <Text margin='0 0 16px 0' color='#0EC261' size='32px' weight='bold'>Need for drive</Text>
            <Text margin='0 0 32px 0' color='#999999' size='18px' weight='300'>Поминутная аренда авто твоего города</Text>
            <Link to='/order'>
                <Button size='18px'
                        padding='15px 20% 15px 20%'
                        color='linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)'
                        hoverColor='linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)'
                        clickColor='linear-gradient(90deg, #076432 2.61%, #013C27 112.6%)'
                >
                    Забронировать
                </Button>
            </Link>
        </MainTitleMain>
        <MainTitleFooter>
            <Text color='#0EC261' weight='normal' margin='0 0 8px 0' size='13px'>8 (495) 234-22-44</Text>
            <Text color='#EEEEEE' weight='normal' margin='0' size='13px'>© 2016-2019 «Need for drive»</Text>
        </MainTitleFooter>
    </MainTitleMobileContainer>


