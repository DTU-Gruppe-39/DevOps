import React from 'react';
import PropTypes from 'prop-types';
import {taskStore} from "../../stores/TaskStore";
import {putTask} from "../../stores/Api";
import {userStore} from "../../stores/UserStore";

export default class Droppable extends React.Component{
    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        console.log(data + "transfered into " + e.target.id);
        if(e.target.id.toString() === "To-Do") {
            taskStore.taskList.map((task, key) => {
                if(task.id===data){
                    taskStore.taskList[key].status = "NotStarted";
                    userStore.userList.map((user, ukey) => {
                        if(user.email === taskStore.taskList[key].responsible){
                            taskStore.taskList[key].responsible = user.id;
                        }
                    });
                    putTask(taskStore.taskList[key]).then(function (response) {
                        if (response.ok){
                            taskStore.getTasks();
                        }
                        else {
                            alert("Status code: " + response.status + "\n Status: " + response.statusText);
                        }
                    });
                    console.log("task status has changed to: " + task.status + "(To-Do)");
                }
            })
        } else if (e.target.id.toString() === "In-Progress") {
            taskStore.taskList.map((task, key) => {
                if(task.id===data){
                    taskStore.taskList[key].status = "InProgress";
                    userStore.userList.map((user, ukey) => {
                        if(user.email === taskStore.taskList[key].responsible){
                            taskStore.taskList[key].responsible = user.id;
                        }
                    });
                    putTask(taskStore.taskList[key]).then(function (response) {
                        if (response.ok){
                            taskStore.getTasks();
                        }
                        else {
                            alert("Status code: " + response.status + "\n Status: " + response.statusText);
                        }
                    });
                    console.log("task status has changed to: " + task.status + "(In-Progress)");
                }
            })
        } else if (e.target.id.toString() === "Completed") {
            taskStore.taskList.map((task, key) => {
                if(task.id===data){
                    taskStore.taskList[key].status = "Done";
                    userStore.userList.map((user, ukey) => {
                       if(user.email === taskStore.taskList[key].responsible){
                           taskStore.taskList[key].responsible = user.id;
                       }
                    });
                    putTask(taskStore.taskList[key]).then(function (response) {
                        if (response.ok){
                            taskStore.getTasks();
                        }
                        else {
                            alert("Status code: " + response.status + "\n Status: " + response.statusText);
                        }
                    });
                    console.log("task status has changed to: " + task.status + "(Completed)");
                }
            })
        }
        e.target.appendChild(document.getElementById(data));
    };

    allowDrop = (e) => {
        e.preventDefault();
    };

    render(){
        return (
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};
