import React from "react";

import {Text} from "../Text/Text";
import {formatDateToOrderMain, formatImgPath, formatNumber} from "../../Functions/Format";
import {mainUrlPages} from "../../Environments/ApiFactoryUrls";
import {CarNumber, ContentImg, MainRow, MainContainer} from "./OrderInfo.styled";

import DefaultImg from "../../img/defaulImg.png";

export const OrderInfoMain = ({order}) =>
    <MainContainer>
        <div>
            {order.id &&
                <Text
                    weight='normal'
                    size='24px'
                    margin='0 0 16px 0'
                    color='#121212'
                >
                    Ваш заказ подтвержден
                </Text>
            }
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
    </MainContainer>
;