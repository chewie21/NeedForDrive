import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import slide1 from '../../../img/slider1.png';
import slide2 from '../../../img/slider2.png';
import slide3 from '../../../img/slider3.png';
import slide4 from '../../../img/slider4.png';

import { Slider } from "./Slide";
import {Style} from "./Slider.styled";

export const MainSlider = () =>
    <React.Fragment>
        <Style/>
        <Carousel className="h-100">
            <Carousel.Item className="h-100">
                <Slider img={slide1}
                        title="Бесплатная парковка"
                        second="Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах."
                        gradient={`90deg, #13493F 0%, #0C7B1B 100%`}
                        hoverGradient={`90deg, #0E352E 0%, #085612 100%`}
                        clickGradient={`90deg, #071B17 0%, #074710 100%`}
                />
            </Carousel.Item>
            <Carousel.Item className="h-100">
                <Slider img={slide2}
                        title="Страховка"
                        second="Полная страховка страховка автомобиля."
                        gradient={`90deg, #132949 0%, #0C7B67 100%`}
                        hoverGradient={`90deg, #0D1C33 0%, #074F42 100%`}
                        clickGradient={`90deg, #070F1B 0%, #05332B 100%`}
                />
            </Carousel.Item>
            <Carousel.Item className="h-100">
                <Slider img={slide3}
                        title="Бензин"
                        second="Полный бак на любой заправке города за наш счёт."
                        gradient={`90deg, #493013 0%, #7B0C3B 100%`}
                        hoverGradient={`90deg, #2D1D0B 0%, #5F082C 100%`}
                        clickGradient={`90deg, #181006 0%, #460722 100%`}
                />
            </Carousel.Item>
            <Carousel.Item className="h-100">
                <Slider img={slide4}
                        title="Обслуживание"
                        second="Автомобиль проходит еженедельное ТО."
                        gradient={`90deg, #281349 0%, #720C7B 100%`}
                        hoverGradient={`90deg, #190C2F 0%, #520858 100%`}
                        clickGradient={`90deg, #0F071D 0%, #38063D 100%`}
                />
            </Carousel.Item>
        </Carousel>
    </React.Fragment>
;
