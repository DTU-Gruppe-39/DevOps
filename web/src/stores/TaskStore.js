import {decorate, observable} from "mobx";
import {authenticationStore} from "./AuthenticationStore";

class TaskStore {
    getTasks(){
        // const localurl = "http://localhost:8080/api/task";
        const serverurl = "https://test-devops69.herokuapp.com/api/task";
        console.log("Getting tasks");
        fetch(serverurl, {
            method: "GET",
            headers: {
                'Authorization': "Bearer "+authenticationStore.currentAuthentication.token
            }
        })
            .then((response)=>response.json()
                .then((jsonresponse)=>{
                    console.log(jsonresponse);
                    this.taskList = jsonresponse;
                })
            )
    }
    viewmode = "List";
    modalShow = false;
    modalKey;
    modalDropdown = false;
    inputModalShow = false;

    //inputModalDropdown = false;
    // taskList = [{
    //     Name: 'TaskOverview',
    //     Description: 'Make a list of the tasks, and present it in a table.',
    //     Id: "1",
    //     // TODO taskworkers should be worker objects or contain the id for the worker with the name
    //     Responsible: {id:"1", name:"Patrick"},
    //     Status: 'InProgress'
    // }];
    taskList = [{
        name: '',
        description: '',
        id: "",
        // TODO taskworkers should be worker objects or contain the id for the worker with the name
        responsible: "",
        status: ''
    }];
    // inputTask = {
    //     Name: '',
    //     Description: '',
    //     Id: '',
    //     Responsible: {id:"", name:""},
    //     Status: ''
    // }
    inputTask = {
        name: '',
        description: '',
        id: '',
        responsible: "",
        status: ''
    };
    updateTask = {
        name: '',
        description: '',
        id: '',
        responsible: "",
        status: ''
    };
    currStatus = [{label: "", value: ""}];
    statusOption = [{label:"Not Started", value:"NotStarted"}, {label: "In Progress", value: "InProgress"}, {label:"Done", value:"Done"}];

}

decorate(TaskStore, {
    viewmode: observable,
    taskList: observable,
    inputTask: observable,
    modalShow: observable,
    updateTask: observable,
    modalDropdown: observable,
    currStatus: observable,
    inputModalShow: observable,
});

export const taskStore = new TaskStore();