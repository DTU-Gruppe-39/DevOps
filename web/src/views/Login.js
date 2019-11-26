import {observer} from "mobx-react";
import React from "react";
import {authenticationStore} from "../stores/AuthenticationStore";
import {Redirect} from "react-router-dom";

function Login() {
    return(
        <div className="Login">
            {authenticationStore.currentAuthentication.isAuthenticated ?
                <Redirect to="/Dashboard"/>
                :
                <form className="loginForm" onSubmit={getOnSubmit()}>
                    <label>
                        Username:
                        <input name="email" type="email" placeholder="Email"
                               value={authenticationStore.inputLogin.username}
                               onChange={(e) => authenticationStore.inputLogin.username = e.target.value} required/>
                    </label>
                    <label>
                        Password:
                        <input
                            name="password" type="password" placeholder="Password"
                            value={authenticationStore.inputLogin.password}
                            onChange={(e) => {authenticationStore.inputLogin.password = e.target.value}} required/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            }
        </div>
    )
}

function getOnSubmit() {
    return (e) => {
        e.preventDefault();
        authenticationStore.login();
        authenticationStore.inputLogin = {
            username: "",
            password: ""
        };
    };
}

export default observer(Login);