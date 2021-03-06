import React from "react";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";

import {Step1} from "./Step1/Step1";
import {Step2} from "./Step2/Step2";
import {Step3} from "./Step3/Step3";
import {Step4} from "./Step4/Step4";

export const SwitchSteps = ({
        order, setOrder,
        userLocation, confirmedUserLocation,
        cities, points, cars, categories, rate,
        nav,
        confirmOrder
    }) => {

    const history = useHistory();

    return (
        <Switch>
            {!order && history.location.pathname !== '/order/step1' &&
                <Redirect from='/order' to='/order/step1'/>
            }
            <Route exact path='/order/step1'
                   render={() =>
                       <Step1
                           userLocation={userLocation}
                           confirmedUserLocation={confirmedUserLocation}
                           order={order}
                           setOrder={setOrder}
                           {...nav}
                           cities={cities}
                           points={points}
                       />
                   }
            />
            <Route exact path='/order/step2'
                   render={() =>
                       <Step2 order={order}
                              setOrder={setOrder}
                              cars={cars}
                              categories={categories}
                              {...nav}
                       />
                   }
            />
            <Route exact path='/order/step3'
                   render={() =>
                       <Step3 order={order}
                              setOrder={setOrder}
                              {...nav}
                              rate={rate}
                       />
                   }
            />
            <Route exact path='/order/step4'
                   render={() =>
                       <Step4 order={order} confirmOrder={confirmOrder}/>
                   }
            />
        </Switch>
    )
}