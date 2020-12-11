import React from "react";

import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({auth, component}) => {
    return (
        <Route render={() =>
            auth ? component : <Redirect to='/admin/login'/>
        }/>
    )
}