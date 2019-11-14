import {decorate, observable} from "mobx";



class TaskStore {
    constructor(){
        this.getTasks();
    }
    getTasks(){
        const localurl = "http://localhost:8080/api/task";
        const serverurl = "https://test-devops69.herokuapp.com/api/task";
        console.log("Getting tasks");
        fetch(serverurl)
            .then((response)=>response.json()
                .then((jsonresponse)=>{
                    console.log(jsonresponse);
                    this.taskList = jsonresponse;
                })
            )
    }
    viewmode = "List";
    // taskList = [{
    //     Name: 'TaskOverview',
    //     Description: 'Make a list of the tasks, and present it in a table.',
    //     Id: "1",
    //     // TODO taskworkers should be worker objects or contain the id for the worker with the name
    //     Responsible: {id:"1", name:"Patrick"},
    //     Status: 'InProgress'
    // }];
    taskList = [{
        name: 'TaskOverview',
        description: 'Make a list of the tasks, and present it in a table.',
        id: "1",
        // TODO taskworkers should be worker objects or contain the id for the worker with the name
        responsible: "",
        status: 'InProgress'
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
    }
}

decorate(TaskStore, {
    viewmode: observable,
    taskList: observable,
    inputTask: observable
});

export const taskStore = new TaskStore();