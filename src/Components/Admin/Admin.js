import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import {PrivateRoute} from "../../Router/PrivateRoute";
import {AdminPage} from "./AdminPage/AdminPage";
import {LoginPage} from "./LoginPage/LoginPage";
import {postRequest} from "../../Functions/RequestsToApiFactory";
import {refreshUrlPages} from "../../Environments/ApiFactoryUrls";
import {formatDateToToken} from "../../Functions/Format";

export const Admin = () => {

    const history = useHistory();

    const [auth, setAuth] = useState(null);

    useEffect(() => {
        if(auth && (new Date().getTime() > auth.expires_in)) {
            postRequest(refreshUrlPages, {"refresh_token": `${auth.refresh_token}`}, `Basic ${auth.main_token}`)
                .then(result => {
                    let obj = {...result, main_token: auth.main_token, expires_in: formatDateToToken(result.expires_in)};
                    setAuth(obj);
                }, error => setAuth(null));
        }
    });

    return (
        <Switch>
            <Route exact path='/admin/login' render={() => <LoginPage setAuth={setAuth} history={history}/>}/>
            <PrivateRoute
                path='/'
                auth={auth}
                component={<AdminPage auth={auth} setAuth={setAuth} history={history}/>}
            />
        </Switch>
    )
}