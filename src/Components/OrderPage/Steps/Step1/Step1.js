import React, {useState} from "react";
import {SelectCity} from "./SelectCity";
import {SelectPoint} from "./SelcetPoint";

export const Step1 = ({
      userLocation, confirmedUserLocation,
      order, setOrder,
      removeUnlockSteps, changeUnlockSteps,
      cities, points
    }) => {

    const [changeCity, setChangeCity] = useState(null);

    return (
        <React.Fragment>
            <SelectCity
                changeCity={changeCity}
                setChangeCity={setChangeCity}
                userLocation={userLocation}
                confirmedUserLocation={confirmedUserLocation}
                setOrder={setOrder}
                order={order}
                removeUnlockSteps={removeUnlockSteps}
                {...cities}
            />
            <SelectPoint
                changeCity={changeCity}
                setOrder={setOrder}
                changeUnlockSteps={changeUnlockSteps}
                removeUnlockSteps={removeUnlockSteps}
                order={order}
                {...points}
            />
        </React.Fragment>
    )
}