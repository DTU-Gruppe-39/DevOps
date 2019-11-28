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
            .then((response)=>response.text()
                .then((response)=>{
                    console.log("Login success")
                    console.log(response)
                    this.setToken(response)

                    this.getAuthentication()
                })
                .catch(function () {
                    console.log(response.status)
                    console.log(response)
                    console.log("Error while logging in")
                })
            )
    }
    getAuthentication (){
        this.getToken();
        this.getUser();
    }
    getToken() {
        console.log(localStorage.getItem("secureToken"))
        this.currentAuthentication.token = localStorage.getItem("secureToken");
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
        }).then((response)=>response.json()
                .then((jsonresponse)=>{
                    console.log(jsonresponse);
                    this.currentAuthentication.user = jsonresponse;
                    this.currentAuthentication.isAuthenticated = true;
                }).catch(function () {
                    console.log("Validating failed: "+response.status);
                })
            )
    }

    logout() {
        this.removeToken();
        this.setIsAuthenticated(false);
        this.removeUser();
    }
}

decorate(AuthenticationStore, {
    currentAuthentication: observable,
    inputLogin: observable
});

export const authenticationStore = new AuthenticationStore();