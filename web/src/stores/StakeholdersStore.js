import {decorate, observable} from "mobx";
import {authenticationStore} from "../stores/AuthenticationStore";

class StakeholdersStore {
    constructor(){
        this.getStakeholders();
    }
    getStakeholders(){
        const localurl = "http://localhost:5005/api/task";
        const serverurl = "https://test-devops69.herokuapp.com/api/stakeholder";
        console.log("Getting stakeholders");
        fetch(serverurl, {
            method: "GET",
            headers: {
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            }
        })
            .then((response)=>response.json()
                .then((jsonresponse)=>{
                    console.log(jsonresponse);
                    this.stakeholderList = jsonresponse;
                })
            )
    }
    stakeholderList = [{
        name: '',
        contact_person: '',
        email: '',
        stakeholder_type: true
    }];
    inputStakeholder = {
        name: '',
        contact_person: '',
        email: '',
        stakeholder_type: true
    }
}


decorate(StakeholdersStore, {
    stakeholderList: observable,
    inputStakeholder: observable
});

export const stakeHolderStore = new StakeholdersStore();