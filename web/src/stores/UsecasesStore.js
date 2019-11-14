import {decorate, observable} from "mobx";

class UsecasesStore {
    constructor(){
        this.getUsecases();
    }
    getUsecases(){
        const localurl = "http://localhost:8080/api/usecase";
        const serverurl = "https://test-devops69.herokuapp.com/api/usecase";
        console.log("Getting usecases");
        fetch(serverurl)
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