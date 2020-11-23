import React from "react";

import {ModalMenu} from "../../Common/Menu/ModalMenu";
import {Menu} from "../../Common/Menu/Menu";
import {Header} from "../../Common/Header/Header";
import {OrderInfoList} from "../../Common/OrderInfo/OrderInfoList";

import {useModal} from "../../Hooks/useModal";
import {useGetRequest} from "../../Hooks/useGetRequest";

import {
    Container,
    HeaderContainer,
    Info,
    InfoContainer,
    MainContainer,
    OrderInfoListContainer,
    OrderInfoMainContainer,
    PlacedOrderContentContainer,
    PlacedOrderMenuContainer
} from "./PlacedOrderPage.styled";
import {orderStatusUrl, orderStatusUrlPages, orderUrl, orderUrlPages} from "../../Environments/ApiFactoryUrls";
import {OrderInfoMain} from "../../Common/OrderInfo/OrderInfoMain";
import {Text} from "../../Common/Text/Text";
import {OrderEdit} from "../../Common/OrderEdit/OrderEdit";
import {sendOrder} from "../../Functions/AddToOrder";
import {putRequest} from "../../Functions/RequestsToApiFactory";

export const PlacedOrderPage = ({userLocation, orderId, history}) => {

    const modalMenu = useModal();
    const orderEdit = useModal();

    const order = useGetRequest(`${orderUrlPages}/${orderId}`);
    const orderStatus = useGetRequest(orderStatusUrlPages);

    const cancelOrder = (order, status, history, setError) => {
        putRequest(orderUrlPages, order.id, sendOrder(order, status))
            .then(() => {
                localStorage.removeItem('orderId');
                history.push('/main');
            }).catch(() => setError(true));
    }

    return (
        order.response &&
            <Container>
                { modalMenu.active && <ModalMenu mainPage={false} { ...modalMenu}/> }
                { orderEdit.active && orderStatus.response &&
                <OrderEdit
                    toggle={orderEdit.toggle}
                    order={order.response.data}
                    orderStatus={orderStatus.response.data[3]}
                    title='Отменить заказ'
                    successFunc={cancelOrder}
                    history={history}
                /> }
                <PlacedOrderMenuContainer>
                    <Menu {...modalMenu}/>
                </PlacedOrderMenuContainer>
                <PlacedOrderContentContainer>
                    <HeaderContainer className='container'>
                        <Header userLocation={userLocation}/>
                    </HeaderContainer>
                    <InfoContainer className='container-fluid'>
                        <Info className='container'>
                            <Text
                                weight='bold'
                                size='14px'
                                color='#121212'
                                margin='0'
                            >
                                Заказ номер {order.response.data.id}
                            </Text>
                        </Info>
                    </InfoContainer>
                    <MainContainer className='container'>
                        <OrderInfoMainContainer>
                            <OrderInfoMain order={order.response.data}/>
                        </OrderInfoMainContainer>
                        <OrderInfoListContainer>
                            <OrderInfoList order={order.response.data} toggle={orderEdit.toggle}/>
                        </OrderInfoListContainer>
                    </MainContainer>
                </PlacedOrderContentContainer>
            </Container>
    )
}