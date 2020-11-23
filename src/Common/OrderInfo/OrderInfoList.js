import React from "react";
import {Link} from "react-router-dom";

import {ListRowsContainer, PriceContainer} from "./OrderInfo.styled";
import {Text} from "../Text/Text";
import {Button} from "../Button/Button";
import {OrderInfoListItem} from "./OrderInfoListItem";
import {formatDateToOrderList} from "../../Functions/Format";

export const OrderInfoList = ({order, toggle, navs, setActiveStep}) =>
   <React.Fragment>
       <Text weight='500'
             margin='0 0 26px 0'
             size='18px'
             color='#121212'
             textAlign='end'
       >
           Ваш заказ:
       </Text>
       <ListRowsContainer>
           {Object.keys(order).map((item, index) => (
               (item === `pointId` &&
               <OrderInfoListItem
                   key={index}
                   value={`${order.cityId.name}, ${order.pointId.address}`}
                   label='Пункт выдачи'
               />) ||
               (item === `carId` &&
               <OrderInfoListItem
                   key={index}
                   value={order.carId.name}
                   label='Модель'
               />) ||
               (item === `color` &&
               <OrderInfoListItem
                   key={index}
                   value={order.color}
                   label='Цвет'
               />) ||
               (item === `dateTo` &&
               <OrderInfoListItem
                   key={index}
                   value={formatDateToOrderList(order.dateTo - order.dateFrom)}
                   label='Длительность аренды'
               />) ||
               (item === `rateId` &&
               <OrderInfoListItem
                   key={index}
                   value={order.rateId.rateTypeId.name}
                   label='Тариф'
               />) ||
               (item === `isFullTank` &&
               <OrderInfoListItem
                   key={index}
                   value='Да'
                   label='Полный бак'
               />) ||
               (item === `isNeedChildChair` &&
               <OrderInfoListItem
                   key={index}
                   value='Да'
                   label='Детское кресло'
               />) ||
               (item === `isRightWheel` &&
               <OrderInfoListItem
                   key={index}
                   value='Да'
                   label='Правый руль'
               />)
           ))}
       </ListRowsContainer>
       {(order.price || order.meanPrice) &&
       <PriceContainer>
           <Text
               weight='500'
               margin='0'
               size='16px'
               color='#121212'
           >
               Цена:
           </Text>
           <Text
               weight='normal'
               margin='0 0 0 5px'
               size='16px'
               color='#121212'
           >
               {order.price ? order.price : order.meanPrice} ₽
           </Text>
       </PriceContainer>}
       {navs ? navs.map((item, index) => (
               (item.active && navs[index + 1] && !navs[index + 1].lock &&
               <Link key={index} to={navs[index +1].to} onClick={() => setActiveStep(index + 1)}>
                   <Button size='18px'
                           color='linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)'
                           hoverColor='linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)'
                           clickColor='linear-gradient(90deg, #076432 2.61%, #013C27 112.6%)'
                           width='100%'
                           padding='15px 20% 15px 20%'
                   >
                       {item.button}
                   </Button>
               </Link>) ||
               (item.active && !navs[index + 1] &&
               <Button size='18px'
                       key={index}
                       color='linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)'
                       hoverColor='linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)'
                       clickColor='linear-gradient(90deg, #076432 2.61%, #013C27 112.6%)'
                       width='100%'
                       padding='15px 20% 15px 20%'
                       onClick={toggle}
               >
                   {item.button}
               </Button>)
           )) :
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
           </Button>}
   </React.Fragment>
;