import styled from "styled-components";
import React from "react";

import {Button} from "../../../Common/Button/Button";
import {Text} from "../../../Common/Text/Text";

export const Slider = (props) => {
    const Slide = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url(${props.img}) no-repeat center;
        background-size: cover;
    `;

    const SlideContent = styled.div`
        padding: 20%;
        @media(max-width: 1024px) {
            padding: 10%; 
            p:first-child {
                font-size: 30px !important;
            }
        }    
    `;

    return (
        <Slide>
            <SlideContent>
                <Text
                    text={props.title}
                    weight='500'
                    margin='0 0 8px 0'
                    size='40px'
                    color='#FFFFFF'
                />
                <Text
                    text={props.second}
                    weight='300'
                    margin='0 0 32px 0'
                    size='24px'
                    color='#FFFFFF'
                />
                <Button
                    text='Подробнее'
                    color={`linear-gradient(${props.gradient})`}
                    clickColor={`linear-gradient(${props.clickGradient})`}
                    hoverColor={`linear-gradient(${props.hoverGradient})`}
                    size='18px'
                />
            </SlideContent>
        </Slide>
    )
}