import React from 'react';
import PropTypes from 'prop-types';
import {taskStore} from "../../stores/TaskStore";

export default class Droppable extends React.Component{
    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        console.log(data + "transfered into " + e.target.id);
        if(e.target.id.toString() === "drop1") {
            console.log("Updating status outside");
            taskStore.taskList.map((task, key) => {
                console.log(task.id + " task id");
                console.log(data + " target");
                if(task.id===data){
                    taskStore.updateTask.status ="NotStarted"
                    console.log("Updating status inside");
                }
            })
        }
        e.target.appendChild(document.getElementById(data));
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

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
}

