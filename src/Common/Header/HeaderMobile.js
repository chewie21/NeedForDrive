import React from "react";

import {IconImageHover} from "../IconImage/IconImageHover";
import {Text} from "../Text/Text";

import BurgerImg from "../../img/menu_btn_mobile.svg";
import BurgerImgHover from "../../img/menu_btn_hover.svg";

export const HeaderMobile = ({toggle}) =>
    <div className='d-flex justify-content-between'>
        <div onClick={toggle}>
            <IconImageHover
                height='32px'
                width='32px'
                margin='0 0 0 0'
                img={BurgerImg}
                imgHover={BurgerImgHover}
            />
        </div>
        <Text weight='bold' margin='0' color='#0EC261' size='30px'>Need for drive</Text>
    </div>