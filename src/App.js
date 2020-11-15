import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";


import {MainPage} from "./Components/MainPage/MainPage";
import {OrderPage} from "./Components/OrderPage/OrderPage";
import {useUserLocation} from "./Hooks/useUserLocation";


const App = () => {

    const userLocation = useUserLocation();

    return (

        <Switch>
            <Route path='/order' render={() => <OrderPage {...userLocation}/>}/>
            <Route path='/main' render={() => <MainPage {...userLocation}/>}/>
            <Redirect from='/' to='/main'/>
        </Switch>
    );
}

export default withRouter(App);
