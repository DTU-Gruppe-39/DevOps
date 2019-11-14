import React from "react";
import styled from "styled-components";
import Draggable from "../draggable";
import Droppable from "../droppable";
import {taskStore} from "../../stores/TaskStore";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../../views/TaskOverview.css"
import {stakeHolderStore} from "../../stores/StakeholdersStore";

const Wrapper = styled.div`
    // width: 100%;
    padding-top: 32px;
    display: flex;
    justify-content: center;
    `;

const Item = styled.div`
    padding: 16px;
    color: #555;
    margin: 8px;
    background-color: white;
    border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#555',
    // width: '350px',
    height: '550px',
    // margin: 'px',
    padding: '4px'
};

function checkTaskStatus() {
    taskStore.taskList.map(function (task, key) {
        return
        console.log(task.Status.toString());
        if (task.Status.toString() === "In progress") {
            taskStore.List.map((task, key) => (
                    console.log(task.name.toString()),
                        <Item><p key={key}>{task.name}</p></Item>
                ),
            )
        } else {
        }
    })
}

export default class containers extends React.Component{
    render() {
        return (
            <div className="spacer">

            <Row className="justify-content-center col-11">

                <Wrapper className="col-12">
                    <Col className="col-3">
                        <h3><center>To-Do</center></h3>
                        <Droppable id="drop1" style={droppableStyle}>
                            <Draggable id="item1">
                                {taskStore.taskList.map((task, key) => (
                                    // console.log(task.taskStatus.toString())
                                    // if (task.taskStatus.toString() === "In progress") {
                                    taskStore.taskList.map((task, key) => (
                                            console.log(task.name.toString()),
                                                <Item><p key={key}><b>{task.name}</b> <br/>
                                                    {task.description}</p></Item>
                                        ),
                                    )))
                                    // } else {
                                    // }
                                }
                            </Draggable>
                            <Draggable id="item2">
                                <Item>Dette er en case</Item>
                            </Draggable>
                        </Droppable>
                    </Col>

                    <Col className="col-3">
                        <h3><center>In-Progress</center></h3>
                        <Droppable id="drop2" style={droppableStyle}/>
                    </Col>

                    <Col className="col-3">
                        <h3><center>Completed</center></h3>
                        <Droppable id="drop3" style={droppableStyle}/>
                    </Col>

                    <Col className="col-3">
                        <h3><center>Add Task</center></h3>

                        <form className="justify-content-center" onSubmit={getOnSubmit} >
                            <label>
                                <input className="form-control" type="" placeholder="Task title"
                                    // value={taskStore.inputTask.taskName}
                                       onChange={(e) => taskStore.inputTask.name = e.target.value} required/>
                            </label>

                            <textarea className="form-control" rows="3" id="taskDescription" placeholder="Task description"
                                // value={taskStore.inputTask.taskDescription}
                                      onChange={(e) => taskStore.inputTask.description = e.target.value} required/>
                            <label>
                                <select className="browser-default custom-select" required>
                                    <option value="">Select state</option >
                                    <option value="1">To-Do</option>
                                    <option value="2">In-Progress</option>
                                    <option value="3">Completed</option>
                                </select>
                            </label>
                            <input className="btn btn-success" id="submit" type="submit" value="Submit"/>
                        </form>
                    </Col>


                </Wrapper>

            </Row>
            </div>
        )
    }
}

function getOnSubmit() {
    return (e) => {
        e.preventDefault();
        taskStore.inputTask.status = 'NotStarted';
        taskStore.inputTask.id = (taskStore.taskList.length + 1) + '';
        // taskStore.inputTask.Responsible.id = (taskStore.taskList.length + 2) + '';
        taskStore.taskList.push(taskStore.inputTask);
        taskStore.inputTask = {
            name: '',
            description: '',
            id: '',
            // Responsible: {id:"", name:""},
            responsible: "",
            status: ''
        };
    };
}