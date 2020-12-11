import React from "react";
import {Redirect, Route, Switch, useHistory, withRouter} from "react-router-dom";

import {MainPage} from "./Components/MainPage/MainPage";
import {OrderPage} from "./Components/OrderPage/OrderPage";
import {useUserLocation} from "./Hooks/useUserLocation";
import {PlacedOrderPage} from "./Components/PlacedOrderPage/PlacedOrderPage";
import {Admin} from "./Components/Admin/Admin";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./Common/Theme";

const App = () => {

    const {userLocation, confirmedUserLocation, confirmUserLocation} = useUserLocation();
    const history = useHistory();

    const orderId = localStorage.getItem(`orderId`);

    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route path='/order' render={() =>
                    <OrderPage
                        history={history}
                        userLocation={userLocation}
                        confirmUserLocation={confirmUserLocation}
                        confirmedUserLocation={confirmedUserLocation}
                    />}
                />
                <Route path='/main' render={() =>
                    <MainPage
                        userLocation={userLocation}
                        confirmUserLocation={confirmUserLocation}
                        confirmedUserLocation={confirmedUserLocation}
                    />}
                />
                <Route path='/admin' render={() => <Admin/>}/>
                <Route path='/placedOrder' render={() =>
                    <PlacedOrderPage
                        history={history}
                        userLocation={userLocation}
                        confirmUserLocation={confirmUserLocation}
                        confirmedUserLocation={confirmedUserLocation}
                        orderId={orderId}/>}
                />
                {orderId ? <Redirect from='/' to='/placedOrder'/> : <Redirect from='/' to='/main'/>}
            </Switch>
        </ThemeProvider>
    );
}

export default withRouter(App);
