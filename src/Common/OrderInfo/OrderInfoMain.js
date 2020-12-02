import React from "react";

import {Text} from "../Text/Text";
import {formatDateToOrderMain, formatImgPath, formatNumber} from "../../Functions/Format";
import {
    ButtonContainer,
    CarNumber,
    Container,
    ContentImg,
    MainContainer,
    MainRow,
    SuccessContainer
} from "./OrderInfo.styled";
import {Button} from "../Button/Button";

export const OrderInfoMain = ({order, toggle}) =>
    <Container>
        {order.id && <SuccessContainer>
            <Text
                weight='normal'
                size='24px'
                margin='0'
                color='#121212'
            >
                Ваш заказ подтвержден
            </Text>
        </SuccessContainer>}
        <MainContainer>
            <div>
                <Text
                    weight='normal'
                    size='18px'
                    color='#121212'
                    margin='0 0 8px 0'
                >
                    {order.carId.name}
                </Text>
                {order.carId.number && <CarNumber>
                    {formatNumber(order.carId.number)}
                </CarNumber>}
                {order.carId.tank ?
                    <MainRow>
                        <Text
                            weight='bold'
                            size='14px'
                            color='#121212'
                            margin='0'
                        >
                            Топливо
                        </Text>
                        <Text
                            weight='300'
                            size='14px'
                            color='#121212'
                            margin='0 0 0 5px'
                        >
                            {order.carId.tank} %
                        </Text>
                    </MainRow> : ''
                }
                <MainRow>
                    <Text
                        weight='bold'
                        size='14px'
                        color='#121212'
                        margin='0 0 24px 0'
                    >
                        Доступна с
                    </Text>
                    <Text
                        weight='300'
                        size='14px'
                        color='#121212'
                        margin='0 0 0 5px'
                    >
                        {formatDateToOrderMain(order.dateFrom)}
                    </Text>
                </MainRow>
            </div>
            <ContentImg
                src={formatImgPath(order.carId)}
            />
            <ButtonContainer>
                {order.id ?
                    <Button
                        size='18px'
                        width='100%'
                        padding='15px 20% 15px 20%'
                        color='linear-gradient(90deg, #493013 0%, #7B0C3B 100%)'
                        hoverColor='linear-gradient(90deg, #2D1D0B 0%, #5F082C 100%)'
                        clickColor='linear-gradient(90deg, #181006 0%, #460722 100%)'
                        onClick={toggle}
                    >
                        Отменить
                    </Button> :
                    <Button
                        size='18px'
                        width='100%'
                        padding='15px 20% 15px 20%'
                        color='linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)'
                        hoverColor='linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)'
                        clickColor='linear-gradient(90deg, #076432 2.61%, #013C27 112.6%)'
                        onClick={toggle}
                    >
                        Заказать
                    </Button>}
            </ButtonContainer>
        </MainContainer>
    </Container>
;