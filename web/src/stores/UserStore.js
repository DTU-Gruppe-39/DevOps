import {decorate, observable} from "mobx";
import {authenticationStore} from "./AuthenticationStore";



class UserStore {
    constructor(){
        this.getUsers();
    }
    getUsers(){
        const localurl = "http://localhost:8080/api/user";
        const serverurl = "https://test-devops69.herokuapp.com/api/user";
        console.log("Getting users");
        fetch(serverurl, {
            method: "GET",
            headers: {
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            }
        })
            .then(function (response) {
                if (response.ok){
                    response.json().then(function (jsonresponse) {
                        userStore.userList = jsonresponse;
                        userStore.getUserSelect(jsonresponse);
                    })
                }
                else {
                    alert("Status code: " + response.status + "\n " + response.statusText);
                }
            })
    }

    getUserSelect(list){
        list.map((result, key) => (
            userStore.userSelect.push({label: result.email, value: result.id})
        ))
    }

    userList = [{
        email: "",
        id: "",
        role: ""
    }];
    inputUser = {
        email: "",
        id: '',
        role: ""
    };
    updateUser = {
        email: "",
        id: '',
        role: ""
    };
    user = {
        email: "",
        role: ""
    };
    loginDetails = {
        username: "",
        password: ""
    };
    createUser = {
        user: this.user,
        loginDetails: {
            username:"",
            password:""
        }
    };
    // currStatus = [{label: "", value: ""}];
    confirmPassword = "";
    userSelect = [];
    modal = false;
    profileModal = false;
    //currUser = [{label: "", value: ""}];

}

decorate(UserStore, {
    userList: observable,
    inputUser: observable,
    updateUser: observable,
    userSelect: observable,
    currUser: observable,
    modal:observable,
    profileModal:observable,
    newUser:observable,
    createUser:observable
});

export const userStore = new UserStore();