import {decorate, observable} from "mobx";

class TaskStore {
    taskList = [{
        Name: 'TaskOverview',
        Description: 'Make a list of the tasks, and present it in a table.',
        Id: "1",
        // TODO taskworkers should be worker objects or contain the id for the worker with the name
        Responsible: {id:"1", name:"Patrick"},
        Status: 'In progress'
    }];
    inputTask = {
        Name: '',
        Description: '',
        Id: '',
        Responsible: {id:"", name:""},
        Status: ''
    }
}

decorate(TaskStore, {
    taskList: observable,
    inputTask: observable
});

export const taskStore = new TaskStore();