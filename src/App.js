import React, {Component} from "react";
import {Route, Switch, Redirect, withRouter, BrowserRouter} from "react-router-dom";

import { MainPage } from "./Components/MainPage/MainPage";
import {OrderPage} from "./Components/OrderPage/OrderPage";

class App extends Component {
  render() {
    const {history} = this.props;
    return (
        <BrowserRouter>
          <Switch>
            <Route history={history} path='/order' component={ OrderPage }/>
            <Route history={history} path='/main' component={ MainPage }/>
            <Redirect from='/' to='/main'/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default withRouter(App);
