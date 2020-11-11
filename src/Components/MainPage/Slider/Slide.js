import React from "react";

import {Button} from "../../../Common/Button/Button";
import {Text} from "../../../Common/Text/Text";
import {Slide, SlideContent} from "./Slider.styled";

export const Slider = (props) =>

    <Slide img={props.img}>
        <SlideContent>
            <Text weight='500' margin='0 0 8px 0' size='40px' color='#FFFFFF'>{props.title}</Text>
            <Text weight='300' margin='0 0 32px 0' size='24px' color='#FFFFFF'>{props.second}</Text>
            <Button
                color={`linear-gradient(${props.gradient})`}
                clickColor={`linear-gradient(${props.clickGradient})`}
                hoverColor={`linear-gradient(${props.hoverGradient})`}
                size='18px'
            >
                Подробнее
            </Button>
        </SlideContent>
    </Slide>