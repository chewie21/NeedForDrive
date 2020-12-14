import React, {useState} from "react";

import {Container, Content, Row} from "./OrderEdit.styled";

import {Text} from "../Text/Text";
import {Button} from "../Button/Button";

export const OrderEdit = ({toggle, order, orderStatus, title, successFunc, history}) => {

    const [error, setError] = useState(null);

    return (
        <Container>
            <Content>
                <Text
                    weight='normal'
                    size='24px'
                    margin='0 0 32px 0'
                    color='#121212'
                >
                    {title}
                </Text>
                <Row>
                    <Button
                        padding='15px 20% 15px 20%'
                        size='18px'
                        width='45%'
                        color='linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)'
                        hoverColor='linear-gradient(90deg, #0B934A 2.61%, #026E47 112.6%)'
                        clickColor='linear-gradient(90deg, #076432 2.61%, #013C27 112.6%)'
                        onClick={() => {
                                successFunc(order, orderStatus, history, setError);
                            }
                        }
                    >
                        Да
                    </Button>
                    <Button
                        padding='15px 20% 15px 20%'
                        size='18px'
                        width='45%'
                        color='linear-gradient(90deg, #493013 0%, #7B0C3B 100%)'
                        hoverColor='linear-gradient(90deg, #2D1D0B 0%, #5F082C 100%)'
                        clickColor='linear-gradient(90deg, #181006 0%, #460722 100%)'
                        onClick={toggle}
                    >
                        Нет
                    </Button>
                </Row>
                {error &&
                <Text
                    weight='normal'
                    size='16px'
                    margin='32px 0 0 0'
                    color='#121212'
                >
                    Что-то пошло не так... Повторите попытку или обратитесь в поддержку.
                </Text>}
            </Content>
        </Container>
    )
}