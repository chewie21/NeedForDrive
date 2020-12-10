import React, {useEffect} from "react";

import {orderStatusUrlPages, orderUrlPages} from "../../Environments/ApiFactoryUrls";

import {ModalMenu} from "../../Common/Menu/ModalMenu";
import {Menu} from "../../Common/Menu/Menu";
import {Header} from "../../Common/Header/Header";
import {OrderInfoList} from "../../Common/OrderInfo/OrderInfoList";

import {useModal} from "../../Hooks/useModal";
import {useGetRequest} from "../../Hooks/useGetRequest";

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
    OrderContent,
    OrderMenu,
    StepContainer
} from "../OrderPage/OrderPage.styled";
import {PlacedOrderContainer} from "./PlacedOrderPage.styled";
import {Text} from "../../Common/Text/Text";
import {FixedHeaderMobile, MainMobile} from "../OrderPage/Mobile/Mobile.styled";
import {IconImageHover} from "../../Common/IconImage/IconImageHover";

import {OrderInfoMain} from "../../Common/OrderInfo/OrderInfoMain";
import {OrderEdit} from "../../Common/OrderEdit/OrderEdit";
import {sendOrder} from "../../Functions/AddToOrder";
import {putRequest} from "../../Functions/RequestsToApiFactory";
import {UserLocation} from "../../Common/UserLocation/UserLocation";
import {ModalMenuMobile} from "../../Common/Menu/ModalMenuMobile";
import {HeaderMobile} from "../../Common/Header/HeaderMobile";
import {ModalOrder} from "../../Common/OrderInfo/ModalOrder/ModalOrder";

import orderTabletIcon from "../../img/tabletOrder.svg";
import orderTabletIconHover from "../../img/tabletOrderHover.svg";

export const PlacedOrderPage = ({userLocation, orderId, history, confirmedUserLocation, confirmUserLocation}) => {

    const modalMenu = useModal();
    const orderEdit = useModal();
    const modalOrder = useModal();

    const order = useGetRequest(`${orderUrlPages}/${orderId}`);
    const orderStatus = useGetRequest(orderStatusUrlPages);

    const cancelOrder = (order, status, history, setError) => {
        putRequest(orderUrlPages, order.id, sendOrder(order, status))
            .then(() => {
                localStorage.removeItem('orderId');
                history.push('/main');
            }).catch(() => setError(true));
    }

    useEffect(() => {
        if(order.error) {
            history.push('/main');
        }
    })

    return (
        order.response &&
            <PlacedOrderContainer>
                {modalOrder.active && <ModalOrder {...modalOrder} order={order.response.data}/>}
                { userLocation && !confirmedUserLocation &&
                    <UserLocation userLocation={userLocation} confirmUserLocation={confirmUserLocation}/>}
                { orderEdit.active && orderStatus.response &&
                    <OrderEdit
                        toggle={orderEdit.toggle}
                        order={order.response.data}
                        orderStatus={orderStatus.response.data[3]}
                        title='Отменить заказ'
                        successFunc={cancelOrder}
                        history={history}
                    />
                }
                <OrderButton>
                    <IconImageHover
                        height='32px'
                        width='32px'
                        margin='0'
                        img={orderTabletIcon}
                        imgHover={orderTabletIconHover}
                        onClick={modalOrder.toggle}
                    />
                </OrderButton>

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
                                    <Text
                                        weight='bold'
                                        size='14px'
                                        color='#121212'
                                        margin='0'
                                    >
                                        Заказ номер {order.response.data.id}
                                    </Text>
                                </LinkContainer>
                            </NavContainer>
                        </FixedHeader>
                        <MainContainer className='container-xl'>
                            <StepContainer>
                                <OrderInfoMain order={order.response.data}/>
                            </StepContainer>
                        </MainContainer>
                        <FixedOrder>
                            <div className='container-xl d-flex justify-content-end p-0 h-100'>
                                <InfoContainer>
                                    <OrderInfoList order={order.response.data} toggle={orderEdit.toggle}/>
                                </InfoContainer>
                            </div>
                        </FixedOrder>
                    </OrderContent>
                </Container>
                <MobileContainer>
                    { modalMenu.active && <ModalMenuMobile mainPage={false} { ...modalMenu} userLocation={userLocation}/> }

                    <FixedHeaderMobile>
                        <HeaderMobile {...modalMenu}/>
                    </FixedHeaderMobile>

                    <MainMobile>
                        <OrderInfoMain order={order.response.data} toggle={orderEdit.toggle}/>
                    </MainMobile>

                </MobileContainer>
            </PlacedOrderContainer>
    )
};