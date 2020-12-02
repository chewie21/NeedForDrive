import React from "react";
import {Link} from "react-router-dom";

import {IconImageHover} from "../../../Common/IconImage/IconImageHover";
import {Center, Left, Right} from "./Mobile.styled";

import ArrowLeft from '../../../img/orderArrowLeft.svg'
import ArrowRight from '../../../img/orderArrowRight.svg'
import OrderCar from '../../../img/orderMobile.svg'


export const MobileFooter = ({navs, setActiveStep, order, modalOrder, confirmOrder}) =>
    navs.map((item, index) => (
        item.active ?
            (
                <React.Fragment>
                    {navs[index - 1] ?
                        <Left>
                            <Link
                                key={index}
                                to={navs[index-1].to}
                                onClick={() => setActiveStep(index - 1)}
                            >
                                <IconImageHover
                                    height='32px'
                                    width='32px'
                                    margin='0 0 0 0'
                                    img={ArrowLeft}
                                    imgHover={ArrowLeft}
                                />
                            </Link>
                        </Left>
                        : ''
                    }
                    {order &&
                        <Center>
                            <IconImageHover
                                onClick={modalOrder}
                                height='32px'
                                width='32px'
                                margin='0 0 0 0'
                                img={OrderCar}
                                imgHover={OrderCar}
                            />
                        </Center>
                    }
                    {navs[index + 1] ? navs[index + 1].lock ? '' :
                        <Right>
                            <Link
                                to={navs[index +1].to}
                                onClick={() => setActiveStep(index + 1)}
                            >
                                <IconImageHover
                                    height='32px'
                                    width='32px'
                                    margin='0 0 0 0'
                                    img={ArrowRight}
                                    imgHover={ArrowRight}
                                />
                            </Link>
                        </Right> :
                        <Right>
                            <IconImageHover
                                height='32px'
                                width='32px'
                                margin='0 0 0 0'
                                img={ArrowRight}
                                imgHover={ArrowRight}
                                onClick={confirmOrder}
                            />
                        </Right>
                    }
                </React.Fragment>
            )
            : ''))