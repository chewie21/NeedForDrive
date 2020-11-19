import React, {useEffect, useState} from "react";

import {Color} from "./Color";
import {AdditionalServices} from "./AdditionalServices";
import {SelectRate} from "./SelectRate";
import {SelectDate} from "./SelectDate";
import {addPriceToOrder, deletePriceFromOrder} from "../../../../Functions/AddToOrder";

export const Step3 = ({order, setOrder, rate, changeUnlockSteps, removeUnlockSteps}) => {

    const [thisPrice, setThisPrice] = useState(null);

    useEffect(() => {
        console.log(order);
        if(order.rentTime && rate.response) {
            let price;
            if(order.rate.value === `Поминутно`) {
                price = order.rentTime.minutes * order.rate.price;
            } else if (order.rate.value === `На сутки`) {
                price = order.rentTime.days * order.rate.price;
            }
            if(price !== thisPrice) {
                setThisPrice(price);
                setOrder(addPriceToOrder(order, price));
                changeUnlockSteps(2);
            }
        } else if (!order.rentTime && thisPrice) {
            setThisPrice(null);
            setOrder(deletePriceFromOrder(order, `price`));
            removeUnlockSteps(2);
        }
    });

    return (
        <React.Fragment>
            <Color order={order} setOrder={setOrder}/>
            <SelectDate order={order} setOrder={setOrder}/>
            <SelectRate {...rate} order={order} setOrder={setOrder}/>
            <AdditionalServices order={order} setOrder={setOrder} thisPrice={thisPrice}/>
        </React.Fragment>
    )
}