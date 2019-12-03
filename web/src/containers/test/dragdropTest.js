import React from "react";
import styled from "styled-components";
import Draggable from "../draggable";
import Droppable from "../droppable";
import {taskStore} from "../../stores/TaskStore";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../../views/TaskOverview.css"
import {stakeHolderStore} from "../../stores/StakeholdersStore";
import {putTask} from "../../stores/Api";

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
    height: '500px',
    width: '100%',
    // margin: 'px',
    padding: '5px',
    overflow: 'auto'
};


export default class containers extends React.Component{
    render() {
        return (
            <div className="spacer">

                    <Wrapper className="col-12">
                        <Col className="col-4">
                            <h3><center>To-Do</center></h3>
                            <Droppable id="To-Do" style={droppableStyle}>
                                {/*status: NotStarted, InProgress, Done*/}
                                {taskStore.taskList.map((task, key) => {
                                        if (task.status.toString()==="NotStarted") {
                                            return console.log(task.name.toString()),
                                                <Draggable id={task.id}>
                                                    <Item>
                                                        <p key={key}><b>{task.name}</b></p><p>--{task.responsible}--</p><p>{task.description}</p>
                                                    </Item>
                                                </Draggable>;
                                        }
                                    }
                                )}
                            </Droppable>
                        </Col>

                        <Col className="col-4">
                            <h3><center>In-Progress</center></h3>
                            <Droppable id="In-Progress" style={droppableStyle}>
                                {taskStore.taskList.map((task, key) => {
                                        if (task.status.toString()==="InProgress") {
                                            return console.log(task.name.toString()),
                                                <Draggable id={task.id}>
                                                    <Item>
                                                        <p key={key}><b>{task.name}</b></p><p>--{task.responsible}--</p><p>{task.description}</p>
                                                    </Item>
                                                </Draggable>;
                                        }
                                    }
                                )}
                            </Droppable>
                        </Col>

                        <Col className="col-4">
                            <h3><center>Completed</center></h3>
                            <Droppable id="Completed" style={droppableStyle}>
                                {taskStore.taskList.map((task, key) => {
                                        if (task.status.toString()==="Done") {
                                            return console.log(task.name.toString()),
                                                <Draggable id={task.id}>
                                                    <Item>
                                                        <p key={key}><b>{task.name}</b></p><p>--{task.responsible}--</p><p>{task.description}</p>
                                                    </Item>
                                                </Draggable>;
                                        }
                                    }
                                )}
                            </Droppable>
                        </Col>
                    </Wrapper>
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

