import React from 'react';

import {Menu} from "../../Common/Menu/Menu";
import {MainTitle} from "./Title/MainTitle";
import {MainSlider} from "./Slider/MainSlider";
import {MainTitleMobile} from "./Title/MainTitleMobile";
import {ModalMenu} from "../../Common/Menu/ModalMenu";
import {ModalMenuMobile} from "../../Common/Menu/ModalMenuMobile";

import {useModalMenu} from "../../Hooks/useModalMenu";
import {
    Container,
    ContainerMobile,
    MainMenuContainer,
    MainSliderContainer,
    MainTitleContainer
} from "./MainPage.styled";
import {UserLocation} from "../../Common/UserLocation/UserLocation";

export const MainPage = ({userLocation, confirmedUserLocation, confirmUserLocation}) => {

    const modalMenu = useModalMenu();

    return (
        <React.Fragment>
            <Container>
                { modalMenu.active && <ModalMenu mainPage={true} { ...modalMenu }/>}
                { userLocation && !confirmedUserLocation &&
                    <UserLocation userLocation={userLocation} confirmUserLocation={confirmUserLocation}/>}
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
                { modalMenu.active && <ModalMenuMobile {...modalMenu} userLocation={userLocation}/> }
                { userLocation && !confirmedUserLocation &&
                <UserLocation userLocation={userLocation} confirmUserLocation={confirmUserLocation}/>}
            </ContainerMobile>
        </React.Fragment>
    );
}
