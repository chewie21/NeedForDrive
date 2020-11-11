import React from 'react';

import {Menu} from "../../Common/Menu/Menu";
import {MainTitle} from "./Title/MainTitle";
import {MainSlider} from "./Slider/MainSlider";
import {MainTitleMobile} from "./Title/MainTitleMobile";
import {ModalMenu} from "../../Common/Menu/ModalMenu";
import {ModalMenuMobile} from "../../Common/Menu/ModalMenuMobile";

import {useModalMenu} from "../../Hooks/useModalMenu";
import {Container, ContainerMobile, MainMenuContainer, MainSliderContainer, MainTitleContainer} from "./MainPage.styled";

export const MainPage = ({userLocation}) => {

    const modalMenu = useModalMenu();

    return (
        <React.Fragment>
            <Container>
                { modalMenu.active ? <ModalMenu mainPage={true} { ...modalMenu }/> : ''}
                <MainMenuContainer>
                    <Menu {...modalMenu}/>
                </MainMenuContainer>
                <MainTitleContainer>
                    <MainTitle userLocation={userLocation}/>
                </MainTitleContainer>
                <MainSliderContainer>
                    <MainSlider/>
                </MainSliderContainer>
            </Container>
            <ContainerMobile>
                <MainTitleMobile {...modalMenu}/>
                { modalMenu.active ? <ModalMenuMobile {...modalMenu} userLocation={userLocation}/> : ''}
            </ContainerMobile>
        </React.Fragment>
    );
}
