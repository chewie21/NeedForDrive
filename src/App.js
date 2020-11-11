import React, {useEffect, useState} from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";

import {MainPage} from "./Components/MainPage/MainPage";
import {OrderPage} from "./Components/OrderPage/OrderPage";

const App = (props) => {

    const {history} = props.history;

    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const str =  position.coords.longitude + ', ' + position.coords.latitude;
                const key = `941d25b3-c4cd-4c8d-a363-67789eb0ff5e`;
                const api =`https://geocode-maps.yandex.ru/1.x/?apikey=${key}&format=json&geocode=${str}&kind=locality&lang=ru_RU`;
                fetch(api)
                    .then(res => res.json())
                    .then(result => {
                        setUserLocation(result.response.GeoObjectCollection.featureMember[0].GeoObject);
                    }, error => console.error(error));
            }
        );
    }, [])

    return (
        <BrowserRouter>
          <Switch>
            <Route history={history} path='/order' render={() => <OrderPage userLocation={userLocation}/>}/>
            <Route history={history} path='/main' render={() => <MainPage userLocation={userLocation}/>}/>
            <Redirect from='/' to='/main'/>
          </Switch>
        </BrowserRouter>
    );

}

export default withRouter(App);
