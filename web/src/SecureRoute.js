import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {authenticationStore} from "./stores/AuthenticationStore";

const SecureRoute = ({ component: Component, isAuthenticated, ...rest }) => (
        <Route {...rest} render={props => (
            authenticationStore.currentAuthentication.isAuthenticated
            ?
            (<Component {...props}/>)
            :
            (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
        )}/>
    );

export default SecureRoute;