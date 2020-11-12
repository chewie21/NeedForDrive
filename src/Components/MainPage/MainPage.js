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

export const MainPage = ({userLocation, setUserLocation, confirmUserLocation, setConfirm}) => {

    const modalMenu = useModalMenu();

    return (
        <React.Fragment>
            <Container>
                { modalMenu.active && <ModalMenu mainPage={true} { ...modalMenu }/>}
                { userLocation && !confirmUserLocation && <UserLocation userLocation={userLocation}
                                                                        setUserLocation={setUserLocation}
                                                                        setConfirm={setConfirm}
                                                            />}
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
                { userLocation && <UserLocation userLocation={userLocation} setUserLocation={setUserLocation}/> }
            </ContainerMobile>
        </React.Fragment>
    );
}
