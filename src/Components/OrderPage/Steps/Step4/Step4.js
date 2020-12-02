import React from "react";

import {OrderInfoMain} from "../../../../Common/OrderInfo/OrderInfoMain";

export const Step4 = ({order, confirmOrder}) => <OrderInfoMain order={order} toggle={confirmOrder}/>