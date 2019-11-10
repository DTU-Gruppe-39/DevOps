import React from "react";
import styled from "styled-components";
import Draggable from "../draggable";
import Droppable from "../droppable";
import {taskStore} from "../../stores/TaskStore";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Wrapper = styled.div`
    // width: 100%;
    padding 32px;
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
    width: '350px',
    height: '550px',
    margin: '30px',
    padding: '8px'
};

function checkTaskStatus() {
    taskStore.taskList.map(function (task, key) {
        console.log(task.taskStatus.toString());
        if (task.taskStatus.toString() === "In progress") {
            taskStore.taskList.map((task, key) => (
                    console.log(task.taskName.toString()),
                        <Item><p key={key}>{task.taskName}</p></Item>
                ),
            )
        } else {
        }
    })
}

export default class containers extends React.Component{
    render() {
        return (
            <Row className="justify-content-center">

                <Wrapper>
                    <Col md="auto">
                        <h3><center>To-Do</center></h3>
                        <Droppable id="drop1" style={droppableStyle}>
                            <Draggable id="item1">
                                {taskStore.taskList.map((task, key) => (
                                    // console.log(task.taskStatus.toString())
                                    // if (task.taskStatus.toString() === "In progress") {
                                        taskStore.taskList.map((task, key) => (
                                                console.log(task.taskName.toString()),
                                                    <Item><p key={key}><b>{task.taskName}</b> <br/>
                                                        {task.taskDescription}</p></Item>
                                            ),
                                        )))
                                    // } else {
                                    // }
                                }
                            </Draggable>
                            <Draggable id="item2"><Item>Dette er en case</Item></Draggable>
                        </Droppable>
                    </Col>

                    <Col md="auto">
                        <h3><center>In-Progress</center></h3>
                        <Droppable id="drop2" style={droppableStyle}/>
                    </Col>

                    <Col md="auto">
                        <h3><center>Completed</center></h3>
                        <Droppable id="drop3" style={droppableStyle}/>
                    </Col>
                </Wrapper>

            </Row>
        )
    }
}