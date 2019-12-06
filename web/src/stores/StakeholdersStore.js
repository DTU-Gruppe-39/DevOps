import {decorate, observable} from "mobx";
import {authenticationStore} from "../stores/AuthenticationStore";

class StakeholdersStore {
    getStakeholders(){
        // const localurl = "http://localhost:5005/api/task";
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
        id: '',
        name: '',
        contact_person: '',
        email: '',
        stakeholder_type: true
    }];
    inputStakeholder = {
        id: '',
        name: '',
        contact_person: '',
        email: '',
        stakeholder_type: true
    };
    updateStakeholder = {
        id: '',
        name: '',
        contact_person: '',
        email: '',
        stakeholder_type: true
    };
    modalShow = false;
    modalKey;
    modalDropdown = false;
    inputModalShow = false;
}


decorate(StakeholdersStore, {
    stakeholderList: observable,
    inputStakeholder: observable,
    updateStakeholder:observable,
    modalDropdown:observable,
    modalKey:observable,
    modalShow:observable,
    inputModalShow:observable
});

export const stakeHolderStore = new StakeholdersStore();