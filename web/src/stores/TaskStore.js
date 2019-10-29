import {decorate, observable} from "mobx";

class TaskStore {
    taskList = [{
        taskName: 'TaskOverview',
        taskDescription: 'Make a list of the tasks, and present it in a table.',
        taskId: "1",
        // TODO taskworkers should be worker objects or contain the id for the worker with the name
        taskWorkers: 'Patrick',
        taskStatus: 'In progress'
    }];
    inputTask = {
        taskName: '',
        taskDescription: '',
        taskId: '',
        taskWorkers: '',
        taskStatus: ''
    }
}

decorate(TaskStore, {
    taskList: observable,
    inputTask: observable
});

export const taskStore = new TaskStore();