import React, {useState} from "react";
import {SelectCity} from "./SelectCity";
import {SelectPoint} from "./SelcetPoint";

export const Step1 = ({userLocation, setOrder, setNavs}) => {

    const [changeCity, setChangeCity] = useState(null);

    return (
        <React.Fragment>
            <SelectCity
                setChangeCity={setChangeCity}
                userLocation={userLocation}
                setOrder={setOrder}
            />
            <SelectPoint
                changeCity={changeCity}
                setOrder={setOrder}
                setNavs={setNavs}
            />
        </React.Fragment>
    )
}