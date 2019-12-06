import {decorate, observable} from "mobx";
import {authenticationStore} from "./AuthenticationStore";

class UsecasesStore {
    getUsecases(){
        // const localurl = "http://localhost:8080/api/usecase";
        const serverurl = "https://test-devops69.herokuapp.com/api/usecase";
        console.log("Getting usecases");
        fetch(serverurl, {
            method: "GET",
            headers: {
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            }
        }) // add exception handling
            .then(function (response) {
                if (response.ok){
                    response.json().then(function (jsonresponse) {
                        //console.log(jsonresponse);
                        usecasesStore.usecasesList = jsonresponse;
                    })
                }
                else {
                    alert("Status code: " + response.status + "\n " + response.statusText);
                }
            })
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
    };

    updateUsecases = {
        id: null,
        userStory: '',
        priority: '',
        responsible: ''
    };

    modalShow = false;
    modalKey;
    modalDropdown = false;
    inputModalShow = false;
}


decorate(UsecasesStore, {
    usecasesList: observable,
    inputUsecases: observable,
    updateUsecases:observable,
    modalDropdown:observable,
    modalKey:observable,
    modalShow:observable,
    inputModalShow:observable
});

export const usecasesStore = new UsecasesStore();