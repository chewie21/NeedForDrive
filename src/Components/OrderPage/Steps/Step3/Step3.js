import React, {useEffect, useState} from "react";

import {Color} from "./Color";
import {AdditionalServices} from "./AdditionalServices";
import {SelectRate} from "./SelectRate";
import {SelectDate} from "./SelectDate";
import {addParamToOrder, deleteParamFromOrder} from "../../../../Functions/AddToOrder";

export const Step3 = ({order, setOrder, rate, changeUnlockSteps, removeUnlockSteps}) => {

    const [thisPrice, setThisPrice] = useState(null);

    useEffect(() => {
        if(order.rateId && order.dateFrom && order.dateTo) {
            let price;
            if(order.rateId.rateTypeId.name === `Поминутно`) {
                price =
                    Math.round((order.dateTo - order.dateFrom) / 60 / 1000)
                    * order.rateId.price;
            } else if (order.rateId.rateTypeId.name === `На сутки`) {
                price =
                    (Math.floor((order.dateTo - order.dateFrom) / 60 / 1000 / 60 / 24) + 1)
                    * order.rateId.price;
            }
            if(order.isFullTank) price = price + 500;
            if(order.isNeedChildChair) price = price + 200;
            if(order.isRightWheel) price = price + 1600;
            if(price !== thisPrice) {
                setThisPrice(price);
                setOrder(addParamToOrder(order, `price`, price));
                changeUnlockSteps(2);
            }
        } else if ((!order.dateFrom || !order.dateTo) && thisPrice) {
            setThisPrice(null);
            setOrder(deleteParamFromOrder(order, `price`));
            removeUnlockSteps(2);
        }
    });

    return (
        <React.Fragment>
            <Color order={order} setOrder={setOrder}/>
            <SelectDate order={order} setOrder={setOrder}/>
            <SelectRate {...rate} order={order} setOrder={setOrder}/>
            <AdditionalServices order={order} setOrder={setOrder}/>
        </React.Fragment>
    )
}