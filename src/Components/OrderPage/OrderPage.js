import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {Menu} from "../../Common/Menu/Menu";
import {Header} from "../../Common/Header/Header";
import {ModalMenu} from "../../Common/Menu/ModalMenu";

import {useNav} from "../../Hooks/useNav";
import {useModal} from "../../Hooks/useModal";

import {OrderInfoList} from "../../Common/OrderInfo/OrderInfoList";
import {Step1} from "./Steps/Step1/Step1";
import {Nav} from "./Nav/Nav";

import {
    Container,
    HeaderContainer,
    InfoContainer,
    LinkContainer,
    MainContainer,
    NavContainer,
    OrderContent,
    OrderMenu,
    StepContainer
} from "./OrderPage.styled";
import {useGetRequest} from "../../Hooks/useGetRequest";
import {
    carsUrlPages,
    categoriesUrlPages,
    citiesUrlPages,
    orderStatusUrlPages,
    orderUrlPages,
    pointsUrlPages,
    rateUrlPages
} from "../../Environments/ApiFactoryUrls";
import {UserLocation} from "../../Common/UserLocation/UserLocation";
import {Step2} from "./Steps/Step2/Step2";
import {Step3} from "./Steps/Step3/Step3";
import {Step4} from "./Steps/Step4/Step4";
import {OrderEdit} from "../../Common/OrderEdit/OrderEdit";
import {postRequest} from "../../Functions/RequestsToApiFactory";

export const OrderPage = ({userLocation, confirmedUserLocation, confirmUserLocation, history}) => {

    const nav = useNav();
    const modalMenu = useModal();
    const confirmOrder = useModal();
    const cities = useGetRequest(citiesUrlPages);
    const points = useGetRequest(pointsUrlPages);
    const cars = useGetRequest(carsUrlPages);
    const categories = useGetRequest(categoriesUrlPages);
    const rate = useGetRequest(rateUrlPages);
    const orderStatus = useGetRequest(orderStatusUrlPages);

    const [order, setOrder] = useState(null);

    const newOrder = (order, status, history, setError) => {
        postRequest(orderUrlPages, order)
            .then((response) => {
                localStorage.setItem(`orderId`, response.data.id);
                history.push('/placedOrder')
            }).catch(() => setError(true));
    }

    return (
        <Container>
            { modalMenu.active && <ModalMenu mainPage={false} { ...modalMenu}/> }
            { userLocation && !confirmedUserLocation &&
            <UserLocation userLocation={userLocation} confirmUserLocation={confirmUserLocation}/>}
            { confirmOrder.active &&
            <OrderEdit
                toggle={confirmOrder.toggle}
                order={order}
                orderStatus={orderStatus.response.data[0]}
                title='Подтвердить заказ'
                successFunc={newOrder}
                history={history}
            />}
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
                            {!order && <Redirect exact from='/order/step4' to='/order/step1'/>}
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
                            <Route exact path='/order/step3'
                                   render={() =>
                                       <Step3 order={order}
                                              setOrder={setOrder}
                                              {...nav}
                                              rate={rate}
                                       />
                                   }
                            />
                            <Route exact path='/order/step4'
                                   render={() =>
                                       <Step4 order={order}/>
                                   }
                            />
                            <Redirect exact from='/order' to='/order/step1'/>
                        </Switch>
                    </StepContainer>
                    {order && <InfoContainer>
                        <OrderInfoList order={order} {...nav} toggle={confirmOrder.toggle}/>
                    </InfoContainer>}
                </MainContainer>
            </OrderContent>
        </Container>
    );
}
