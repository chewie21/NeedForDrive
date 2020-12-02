import React from "react";
import {Redirect, Route, Switch, useHistory, withRouter} from "react-router-dom";

import {MainPage} from "./Components/MainPage/MainPage";
import {OrderPage} from "./Components/OrderPage/OrderPage";
import {useUserLocation} from "./Hooks/useUserLocation";
import {PlacedOrderPage} from "./Components/PlacedOrderPage/PlacedOrderPage";
import {Admin} from "./Components/Admin/Admin";

const App = () => {

    const userLocation = useUserLocation();
    const history = useHistory();

    const orderId = localStorage.getItem(`orderId`);

    return (
        <Switch>
            <Route path='/order' render={() =>
                <OrderPage
                    history={history}
                    userLocation={userLocation.userLocation}
                    confirmUserLocation={userLocation.confirmUserLocation}
                    confirmedUserLocation={userLocation.confirmedUserLocation}
                />}
            />
            <Route path='/main' render={() =>
                <MainPage
                    userLocation={userLocation.userLocation}
                    confirmUserLocation={userLocation.confirmUserLocation}
                    confirmedUserLocation={userLocation.confirmedUserLocation}
                />}
            />
            <Route path='/admin' render={() => <Admin/>}/>
            <Route path='/placedOrder' render={() =>
                <PlacedOrderPage
                    history={history}
                    userLocation={userLocation.userLocation}
                    confirmUserLocation={userLocation.confirmUserLocation}
                    confirmedUserLocation={userLocation.confirmedUserLocation}
                    orderId={orderId}/>}
            />
            {orderId ? <Redirect from='/' to='/placedOrder'/> : <Redirect from='/' to='/main'/>}
        </Switch>
    );
}

export default withRouter(App);
