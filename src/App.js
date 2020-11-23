import React from "react";
import {Redirect, Route, Switch, withRouter, useHistory} from "react-router-dom";

import {MainPage} from "./Components/MainPage/MainPage";
import {OrderPage} from "./Components/OrderPage/OrderPage";
import {useUserLocation} from "./Hooks/useUserLocation";
import {PlacedOrderPage} from "./Components/PlacedOrderPage/PlacedOrderPage";


const App = () => {

    const userLocation = useUserLocation();
    const history = useHistory();

    const orderId = localStorage.getItem(`orderId`);

    return (
        <Switch>
            <Route path='/order' render={() => <OrderPage history={history} {...userLocation}/>}/>
            <Route path='/main' render={() => <MainPage {...userLocation}/>}/>
            {orderId && <Route path='/placedOrder' render={() => <PlacedOrderPage history={history} {...userLocation} orderId={orderId}/>}/>}
            {orderId ? <Redirect from='/' to='/placedOrder'/> : <Redirect from='/' to='/main'/>}
        </Switch>
    );
}

export default withRouter(App);
