import {decorate, observable} from "mobx";

class AuthenticationStore {
    constructor(){
        this.getAuthentication();
    }
    currentAuthentication = {
        token: '',
        isAuthenticated: false,
        user: {
            email: "",
            role: ""
        }
    };
    inputLogin = {
        username: '',
        password: ''
    };
    login(){
        const localurl = "http://localhost:5005/api/authentication/login";
        const serverurl = "https://test-devops69.herokuapp.com/api/authentication/login";
        console.log("Trying logging user in");
        fetch(serverurl, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.inputLogin)
        })
            .then(function (response) {
                    if (response.ok) {
                        console.log("Login success")
                        response.text().then(function (jwt) {
                            console.log(jwt);
                            authenticationStore.setToken(jwt);
                            authenticationStore.getAuthentication();
                        })
                    }
                    else
                        console.log(response.status+": Error while logging in");
                }
            )
    }
    getAuthentication (){
        this.getToken();
    }
    getToken() {
        if (!(localStorage.getItem("secureToken") === null)) {
            console.log(localStorage.getItem("secureToken"))
            this.currentAuthentication.token = localStorage.getItem("secureToken");
            this.getUser();
        }
        else
            console.log("Token is null")
    }
    setToken(token) {
        localStorage.setItem("secureToken", token);
    }
    removeToken(){
        localStorage.removeItem("secureToken");
        this.currentAuthentication = '';
    }
    removeUser() {
        this.currentAuthentication.user = {
            email: '',
            role: ''
        }
    }
    getUser() {
        const localurl = "http://localhost:5005/api/authentication/validate";
        const serverurl = "https://test-devops69.herokuapp.com/api/authentication/validate";
        console.log("Getting User");
        fetch(serverurl, {
            method: "GET",
            headers: {
                'Authorization': "Bearer "+this.currentAuthentication.token
            }
        }).then(function (response) {
                console.log(response.status);
                if (response.ok) {
                    response.json().then(function (user) {
                        console.log(user);
                        authenticationStore.currentAuthentication.user = user;
                        authenticationStore.currentAuthentication.isAuthenticated = true;
                    })
                } else
                    console.log(response.status + ": error while getting user")
            })
    }

    logout() {
        this.removeToken();
        this.currentAuthentication.isAuthenticated = false;
        this.removeUser();
    }
}

decorate(AuthenticationStore, {
    currentAuthentication: observable,
    inputLogin: observable
});

export const authenticationStore = new AuthenticationStore();