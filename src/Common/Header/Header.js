import React from "react";

import { Text } from "../Text/Text";
import { IconImage } from "../IconImage/IconImage";

import Img from '../../img/map_point.svg';
import ImgHover from '../../img/map_point_hover.svg'

export const Header = () =>
    <header className='d-flex justify-content-between'>
        <Text color='#0EC261'
              size='30px'
              margin='0'
              weight='bold'
        >
            Need for drive
        </Text>
        <div className='d-flex align-items-center'>
            <IconImage
                height='20px'
                width='20px'
                margin='0 8px 0 0'
                img={Img}
                imgHover={ImgHover}
            />
            <Text color='#999999'
                  margin='0'
                  size='14px'
                  weight='normal'>
                Ульяновск
            </Text>
        </div>
    </header>



