import React from "react";

import {Left, Middle, ModalOrderContainer, Container, MobileContainer, ModalOrderContent} from "./ModalOrder.styled";
import {IconImageHover} from "../../IconImage/IconImageHover";
import CloseBtn from "../../../img/close_btn.svg";
import CloseBtnHover from "../../../img/close_btn_hover.svg";
import {ModalOrderItem} from "./ModalOrderItem";
import {formatDateToOrderList} from "../../../Functions/Format";

export const ModalOrder = ({toggle, order}) =>
    <ModalOrderContainer>
        <Container>
            <Left>
                <IconImageHover
                    onClick={toggle}
                    height='32px'
                    width='32px'
                    margin='32px 0 0 0'
                    img={CloseBtn}
                    imgHover={CloseBtnHover}
                />
            </Left>
            <Middle>
                <ModalOrderContent>
                    {Object.keys(order).map((item, index) => (
                        (item === `pointId` &&
                            <ModalOrderItem
                                key={index}
                                value={`${order.cityId.name}, ${order.pointId.address}`}
                                label='Пункт выдачи'
                            />) ||
                        (item === `carId` &&
                            <ModalOrderItem
                                key={index}
                                value={order.carId.name}
                                label='Модель'
                            />) ||
                        (item === `color` &&
                            <ModalOrderItem
                                key={index}
                                value={order.color}
                                label='Цвет'
                            />) ||
                        (item === `dateTo` &&
                            <ModalOrderItem
                                key={index}
                                value={formatDateToOrderList(order.dateTo - order.dateFrom)}
                                label='Длительность аренды'
                            />) ||
                        (item === `rateId` &&
                            <ModalOrderItem
                                key={index}
                                value={order.rateId.rateTypeId.name}
                                label='Тариф'
                            />) ||
                        (item === `isFullTank` &&
                            <ModalOrderItem
                                key={index}
                                value='Да'
                                label='Полный бак'
                            />) ||
                        (item === `isNeedChildChair` &&
                            <ModalOrderItem
                                key={index}
                                value='Да'
                                label='Детское кресло'
                            />) ||
                        (item === `isRightWheel` &&
                            <ModalOrderItem
                                key={index}
                                value='Да'
                                label='Правый руль'
                            />)
                    ))}
                    {(order.price || order.meanPrice) &&
                    <ModalOrderItem
                        value={order.price ? `${order.price} ₽` : `${order.meanPrice} ₽`}
                        label='Цена'
                    />}
                </ModalOrderContent>
            </Middle>
        </Container>
        <MobileContainer>
            <IconImageHover
                onClick={toggle}
                height='30px'
                width='30px'
                margin='0 0 28px 0'
                img={CloseBtn}
                imgHover={CloseBtnHover}
            />
            {Object.keys(order).map((item, index) => (
                (item === `pointId` &&
                    <ModalOrderItem
                        key={index}
                        value={`${order.cityId.name}, ${order.pointId.address}`}
                        label='Пункт выдачи'
                    />) ||
                (item === `carId` &&
                    <ModalOrderItem
                        key={index}
                        value={order.carId.name}
                        label='Модель'
                    />) ||
                (item === `color` &&
                    <ModalOrderItem
                        key={index}
                        value={order.color}
                        label='Цвет'
                    />) ||
                (item === `dateTo` &&
                    <ModalOrderItem
                        key={index}
                        value={formatDateToOrderList(order.dateTo - order.dateFrom)}
                        label='Длительность аренды'
                    />) ||
                (item === `rateId` &&
                    <ModalOrderItem
                        key={index}
                        value={order.rateId.rateTypeId.name}
                        label='Тариф'
                    />) ||
                (item === `isFullTank` &&
                    <ModalOrderItem
                        key={index}
                        value='Да'
                        label='Полный бак'
                    />) ||
                (item === `isNeedChildChair` &&
                    <ModalOrderItem
                        key={index}
                        value='Да'
                        label='Детское кресло'
                    />) ||
                (item === `isRightWheel` &&
                    <ModalOrderItem
                        key={index}
                        value='Да'
                        label='Правый руль'
                    />)
            ))}
            {(order.price || order.meanPrice) &&
            <ModalOrderItem
                value={order.price ? `${order.price} ₽` : `${order.meanPrice} ₽`}
                label='Цена'
            />}
        </MobileContainer>
    </ModalOrderContainer>