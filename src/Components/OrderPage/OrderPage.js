import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";

import {Menu} from "../../Common/Menu/Menu";
import {Header} from "../../Common/Header/Header";
import {useModalMenu} from "../../Hooks/useModalMenu";
import {ModalMenu} from "../../Common/Menu/ModalMenu";
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
import {OrderInfo} from "./Info/OrderInfo";
import {NavItem} from "./Nav/NavItem";
import {Step1} from "./Steps/Step1/Step1";

export const OrderPage = ({userLocation}) => {

    const modalMenu = useModalMenu();

    const [order, setOrder] = useState(null);

    const [navs, setNavs] = useState([
        {id: 1, to: '/order/step1', text: 'Местоположение', active: true, lock: false, img: false},
        {id: 2, to: '/step2', text: 'Модель', active: false, lock: true, img: true},
        {id: 3, to: '/step3', text: 'Дополнительно', active: false, lock: true, img: true},
        {id: 4, to: '/step4', text: 'Итого', active: false, lock: true, img: false}
    ]);

    return (
        <Container>
            { modalMenu.active && <ModalMenu mainPage={false} { ...modalMenu}/> }
            <OrderMenu>
                <Menu {...modalMenu}/>
            </OrderMenu>
            <OrderContent>
                <HeaderContainer className='container'>
                    <Header userLocation={userLocation}/>
                </HeaderContainer>
                    <NavContainer className='container-fluid'>
                        <LinkContainer className='container'>
                            {navs.map((nav) => (
                                !nav.lock ?
                                <Link to={nav.to} key={nav.id}>
                                    <NavItem
                                        key={nav.id}
                                        text={nav.text}
                                        active={nav.active}
                                        lock={nav.lock}
                                        img={nav.img}
                                    />
                                </Link> :
                                    <NavItem
                                        to={nav.to}
                                        key={nav.id}
                                        text={nav.text}
                                        active={nav.active}
                                        lock={nav.lock}
                                        img={nav.img}
                                    />
                            ))}
                        </LinkContainer>
                    </NavContainer>
                    <MainContainer className='container'>
                        <StepContainer>
                            <Switch>
                                <Route path='/order/step1'
                                       render={() => <Step1 userLocation={userLocation} setOrder={setOrder} setNavs={setNavs}/>}
                                />
                                <Redirect from='/order' to='/order/step1'/>
                            </Switch>
                        </StepContainer>
                        {order && <InfoContainer>
                            <OrderInfo order={order}/>
                        </InfoContainer>}
                    </MainContainer>
            </OrderContent>
        </Container>
    );
}
