import React from "react";

import {Container, PriceContainer, RowContainer} from "./OrderInfo.styled";
import {Text} from "../../../Common/Text/Text";
import {Button} from "../../../Common/Button/Button";
import {OrderListItem} from "./OrderListItem";
import {Link} from "react-router-dom";

export const OrderInfo = ({order, navs, setActiveStep}) =>

    <Container>
        <Text weight='500'
              margin='0 0 26px 0'
              size='18px'
              color='#121212'
              textAlign='end'
        >
            Ваш заказ:
        </Text>
        <RowContainer>
            {Object.keys(order).map((item, index) =>
                item !== `price` && item !== `meanPrice`
                && <OrderListItem key={index} order={order} item={item} index={index}/>
            )}
        </RowContainer>
        {(order.price || order.meanPrice) &&
            <PriceContainer>
                <Text
                    weight='500'
                    margin='0'
                    size='16px'
                    color='#121212'
                >
                    {`Цена:`}
                </Text>
                <Text
                    weight='normal'
                    margin='0 0 0 5px'
                    size='16px'
                    color='#121212'
                >
                    {order.price ? order.price : order.meanPrice} ₽
                </Text>
            </PriceContainer>
        }
        {navs.map((item, index) => (
            item.active && navs[index + 1] &&!navs[index + 1].lock &&
                <Link key={index} to={navs[index +1].to} onClick={() => setActiveStep(index + 1)}>
                    <Button size='18px'
                            color='linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)'
                            hoverColor='linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)'
                            clickColor='linear-gradient(90deg, #076432 2.61%, #013C27 112.6%)'
                            width='100%'
                    >
                        {item.button}
                    </Button>
                </Link>
            ))}
    </Container>