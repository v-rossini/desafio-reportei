import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Data from "./pages/Data";
import Home from "./pages/Home";

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path = "/" exact>
                <Home />
            </Route>
            <Route path = "/data">
                <Data />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;