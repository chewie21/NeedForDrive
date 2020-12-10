import React, {useState} from 'react';

import {Menu} from "../../Common/Menu/Menu";
import {Header} from "../../Common/Header/Header";
import {ModalMenu} from "../../Common/Menu/ModalMenu";
import {OrderInfoList} from "../../Common/OrderInfo/OrderInfoList";
import {Nav} from "./Nav/Nav";

import {useNav} from "../../Hooks/useNav";
import {useModal} from "../../Hooks/useModal";
import {useGetRequest} from "../../Hooks/useGetRequest";

import {
    carsUrlPages,
    categoriesUrlPages,
    citiesUrlPages,
    orderStatusUrlPages,
    orderUrlPages,
    pointsUrlPages,
    rateUrlPages,
    secret
} from "../../Environments/ApiFactoryUrls";

import {
    Container,
    FixedHeader,
    FixedOrder,
    HeaderContainer,
    InfoContainer,
    LinkContainer,
    MainContainer,
    MobileContainer,
    NavContainer,
    OrderButton,
    OrderContainer,
    OrderContent,
    OrderMenu,
    StepContainer
} from "./OrderPage.styled";
import {FixedFooterMobile, FixedHeaderMobile, MainMobile} from "./Mobile/Mobile.styled";
import {IconImageHover} from "../../Common/IconImage/IconImageHover";

import {UserLocation} from "../../Common/UserLocation/UserLocation";
import {OrderEdit} from "../../Common/OrderEdit/OrderEdit";
import {postRequest} from "../../Functions/RequestsToApiFactory";
import {SwitchSteps} from "./Steps/SwitchSteps";
import {ModalOrder} from "../../Common/OrderInfo/ModalOrder/ModalOrder";
import {ModalMenuMobile} from "../../Common/Menu/ModalMenuMobile";
import {HeaderMobile} from "../../Common/Header/HeaderMobile";
import {MobileFooter} from "./Mobile/MobileFooter";
import {sendOrder} from "../../Functions/AddToOrder";

import orderTabletIcon from '../../img/tabletOrder.svg';
import orderTabletIconHover from '../../img/tabletOrderHover.svg';

export const OrderPage = ({userLocation, confirmedUserLocation, confirmUserLocation, history}) => {

    const nav = useNav();
    const modalMenu = useModal();
    const modalOrder = useModal();
    const confirmOrder = useModal();
    const cities = useGetRequest(citiesUrlPages);
    const points = useGetRequest(pointsUrlPages);
    const cars = useGetRequest(carsUrlPages);
    const categories = useGetRequest(categoriesUrlPages);
    const rate = useGetRequest(rateUrlPages);
    const orderStatus = useGetRequest(orderStatusUrlPages);

    const [order, setOrder] = useState(null);

    const newOrder = (order, status, history, setError) => {
        postRequest(orderUrlPages, sendOrder(order, status), secret)
            .then((response) => {
                localStorage.setItem(`orderId`, response.data.id);
                history.push('/placedOrder')
            }).catch(() => setError(true));
    }

    return (
        <OrderContainer>

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
            {modalOrder.active && <ModalOrder {...modalOrder} order={order}/>}

            <Container>
                { modalMenu.active && <ModalMenu mainPage={false} { ...modalMenu}/> }
                { order && <OrderButton>
                    <IconImageHover
                        height='32px'
                        width='32px'
                        margin='0'
                        img={orderTabletIcon}
                        imgHover={orderTabletIconHover}
                        onClick={modalOrder.toggle}
                    />
                </OrderButton>}
                <OrderMenu>
                    <Menu {...modalMenu}/>
                </OrderMenu>
                <OrderContent>
                    <FixedHeader>
                        <HeaderContainer className='container-xl'>
                            <Header userLocation={userLocation}/>
                        </HeaderContainer>
                        <NavContainer className='container-fluid'>
                            <LinkContainer className='container-xl'>
                                <Nav {...nav}/>
                            </LinkContainer>
                        </NavContainer>
                    </FixedHeader>
                    <MainContainer className='container-xl'>
                        <StepContainer>
                            <SwitchSteps
                                order={order} setOrder={setOrder}
                                userLocation={userLocation} confirmedUserLocation={confirmedUserLocation}
                                cities={cities}
                                points={points}
                                cars={cars}
                                categories={categories}
                                rate={rate}
                                nav={nav}
                                confirmOrder={confirmOrder.toggle}
                            />
                        </StepContainer>
                    </MainContainer>
                    {order &&
                        <FixedOrder>
                            <div className='container-xl d-flex justify-content-end p-0 h-100'>
                                <InfoContainer>
                                    <OrderInfoList order={order} {...nav} toggle={confirmOrder.toggle}/>
                                </InfoContainer>
                            </div>
                        </FixedOrder>
                    }
                </OrderContent>
            </Container>
            <MobileContainer>
                { modalMenu.active && <ModalMenuMobile mainPage={false} { ...modalMenu} userLocation={userLocation}/> }

                <FixedHeaderMobile>
                    <HeaderMobile {...modalMenu}/>
                </FixedHeaderMobile>

                <MainMobile>
                    <SwitchSteps
                        order={order} setOrder={setOrder}
                        userLocation={userLocation} confirmedUserLocation={confirmedUserLocation}
                        cities={cities}
                        points={points}
                        cars={cars}
                        categories={categories}
                        rate={rate}
                        nav={nav}
                        confirmOrder={confirmOrder.toggle}
                    />
                </MainMobile>

                {order &&
                    <FixedFooterMobile>
                        <MobileFooter
                            navs={nav.navs}
                            setActiveStep={nav.setActiveStep}
                            order={order}
                            modalOrder={modalOrder.toggle}
                            confirmOrder={confirmOrder.toggle}
                        />
                    </FixedFooterMobile>
                }
            </MobileContainer>
        </OrderContainer>
    );
}
