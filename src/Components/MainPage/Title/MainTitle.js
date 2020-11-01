import React from 'react';
import {Link} from "react-router-dom";

import {Header} from "../../../Common/Header/Header";
import {Text} from "../../../Common/Text/Text";
import {Button} from "../../../Common/Button/Button";
import {MainContainer, MainTitleContainer} from "./Title.styled";

export const MainTitle = () => {
    return (
        <MainTitleContainer>
            <Header/>
            <main>
                <MainContainer>
                    <Text color='#121212' text='Каршеринг' size='70px' margin='0'  weight='bold'/>
                    <Text color='#0EC261' text='Need for drive' size='70px' margin='0 0 34px 0' weight='bold'/>
                    <Text color='#999999' text='Поминутная аренда авто твоего города' size='26px' margin='0' weight='300'/>
                </MainContainer>
                <Link to='/order'>
                    <Button text='Забронировать'
                            size='18px'
                            color='linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)'
                            hoverColor='linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)'
                            clickColor='linear-gradient(90deg, #076432 2.61%, #013C27 112.6%)'/>
                </Link>
            </main>
            <footer className='d-flex justify-content-between'>
                <Text color='#999999' text='© 2016-2019 «Need for drive»' size='13px' margin='0' weight='normal'/>
                <Text color='#121212' text='8 (495) 234-22-44' size='13px' margin='0' weight='normal'/>
            </footer>
        </MainTitleContainer>
    );
};
