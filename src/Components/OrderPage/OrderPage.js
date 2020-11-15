import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {Menu} from "../../Common/Menu/Menu";
import {Header} from "../../Common/Header/Header";
import {ModalMenu} from "../../Common/Menu/ModalMenu";

import {useNav} from "../../Hooks/useNav";
import {useModalMenu} from "../../Hooks/useModalMenu";

import {OrderInfo} from "./Order/OrderInfo";
import {Step1} from "./Steps/Step1/Step1";
import {Step2} from "./Steps/Step2/Step2";
import {Nav} from "./Nav/Nav";

import {
    Container,
    HeaderContainer,
    InfoContainer, LinkContainer,
    MainContainer,
    NavContainer,
    OrderContent,
    OrderMenu,
    StepContainer
} from "./OrderPage.styled";
import {useGetRequest} from "../../Hooks/useGetRequest";
import {
    carsUrl, carsUrlPages,
    categoriesUrl, categoriesUrlPages,
    citiesUrl,
    citiesUrlPages,
    pointsUrl,
    pointsUrlPages
} from "../../Environments/ApiFactoryUrls";
import {UserLocation} from "../../Common/UserLocation/UserLocation";

export const OrderPage = ({userLocation, confirmedUserLocation, confirmUserLocation}) => {

    const modalMenu = useModalMenu();
    const nav = useNav();

    const [order, setOrder] = useState(null);

    const cities = useGetRequest(citiesUrlPages);
    const points = useGetRequest(pointsUrlPages);
    const cars = useGetRequest(carsUrlPages);
    const categories = useGetRequest(categoriesUrlPages);

    return (
        <Container>
            { modalMenu.active && <ModalMenu mainPage={false} { ...modalMenu}/> }
            { userLocation && !confirmedUserLocation &&
            <UserLocation userLocation={userLocation} confirmUserLocation={confirmUserLocation}/>}
            <OrderMenu>
                <Menu {...modalMenu}/>
            </OrderMenu>
            <OrderContent>
                <HeaderContainer className='container'>
                    <Header userLocation={userLocation}/>
                </HeaderContainer>
                <NavContainer className='container-fluid'>
                    <LinkContainer className='container'>
                        <Nav {...nav}/>
                    </LinkContainer>
                </NavContainer>
                <MainContainer className='container'>
                    <StepContainer>
                        <Switch>
                            {!order && <Redirect exact from='/order/step2' to='/order/step1'/>}
                            {!order && <Redirect exact from='/order/step3' to='/order/step1'/>}
                            <Route exact path='/order/step1'
                                   render={() =>
                                       <Step1
                                           userLocation={userLocation}
                                           confirmedUserLocation={confirmedUserLocation}
                                           order={order}
                                           setOrder={setOrder}
                                           {...nav}
                                           cities={cities}
                                           points={points}
                                       />
                                   }
                            />
                            <Route exact path='/order/step2'
                                   render={() =>
                                       <Step2 order={order}
                                              setOrder={setOrder}
                                              cars={cars}
                                              categories={categories}
                                              {...nav}
                                       />
                                   }
                            />
                            <Redirect exact from='/order' to='/order/step1'/>
                        </Switch>
                    </StepContainer>
                    {order && <InfoContainer>
                        <OrderInfo order={order} {...nav}/>
                    </InfoContainer>}
                </MainContainer>
            </OrderContent>
        </Container>
    );
}
