import React from 'react';

import {Menu} from "../../Common/Menu/Menu";
import {MainTitle} from "./Title/MainTitle";
import {MainSlider} from "./Slider/MainSlider";
import {MainTitleMobile} from "./Title/MainTitleMobile";
import {ModalMenu} from "../../Common/Menu/ModalMenu";
import {ModalMenuMobile} from "../../Common/Menu/ModalMenuMobile";

import {useModal} from "../../Hooks/useModal";
import {
    Container,
    ContainerMobile,
    MainMenuContainer,
    MainSliderContainer,
    MainTitleContainer
} from "./MainPage.styled";
import {UserLocation} from "../../Common/UserLocation/UserLocation";

export const MainPage = ({userLocation, confirmedUserLocation, confirmUserLocation}) => {

    const modalMenu = useModal();

    return (
        <React.Fragment>
            { userLocation && !confirmedUserLocation &&
            <UserLocation userLocation={userLocation} confirmUserLocation={confirmUserLocation}/>}
            <Container>
                { modalMenu.active && <ModalMenu mainPage={true} { ...modalMenu }/>}
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
            </ContainerMobile>
        </React.Fragment>
    );
}
