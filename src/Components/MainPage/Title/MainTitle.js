import React from 'react';
import {Link} from "react-router-dom";

import {Header} from "../../../Common/Header/Header";
import {Text} from "../../../Common/Text/Text";
import {Button} from "../../../Common/Button/Button";
import {MainContainer, MainTitleContainer} from "./Title.styled";

export const MainTitle = ({userLocation}) =>

    <MainTitleContainer>
        <Header userLocation={userLocation}/>
        <main>
            <MainContainer>
                <Text color='#121212' size='70px' margin='0'  weight='bold'>Каршеринг</Text>
                <Text color='#0EC261' size='70px' margin='0 0 34px 0' weight='bold'>Need for drive</Text>
                <Text color='#999999' size='26px' margin='0' weight='300'>Поминутная аренда авто твоего города</Text>
            </MainContainer>
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
        </main>
        <footer className='d-flex justify-content-between'>
            <Text color='#999999' size='13px' margin='0' weight='normal'>© 2016-2019 «Need for drive»</Text>
            <Text color='#121212' size='13px' margin='0' weight='normal'>8 (495) 234-22-44</Text>
        </footer>
    </MainTitleContainer>


