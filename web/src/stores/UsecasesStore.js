import {decorate, observable} from "mobx";
import {authenticationStore} from "./AuthenticationStore";

class UsecasesStore {
    constructor(){
        this.getUsecases();
    }
    getUsecases(){
        const localurl = "http://localhost:8080/api/usecase";
        const serverurl = "https://test-devops69.herokuapp.com/api/usecase";
        console.log("Getting usecases");
        fetch(serverurl, {
            method: "GET",
            headers: {
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            }
        })
            .then((response)=>response.json()
                .then((jsonresponse)=>{
                    console.log(jsonresponse);
                    this.usecasesList = jsonresponse;
                })
            )
    }
    usecasesList = [{
        id: "",
        userStory: '',
        priority: '',
        responsible: ''
    }];
    inputUsecases = {
        id: null,
        userStory: '',
        priority: '',
        responsible: ''
    }
}


decorate(UsecasesStore, {
    usecasesList: observable,
    inputUsecases: observable
});

export const usecasesStore = new UsecasesStore();