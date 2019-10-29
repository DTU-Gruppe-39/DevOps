import React from "react";
import "./TaskOverview.css"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react";
import {taskStore} from "../stores/TaskStore";


    function TaskOverview() {
        return(
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div>
                            <table>
                                <tr>
                                    <th>Task name</th>
                                    <th>Task Description</th>
                                    <th>TaskId</th>
                                    <th>Taskworkers</th>
                                    <th>Status</th>
                                </tr>
                                {taskStore.taskList.map((task, key) => (
                                    <tr>
                                        <td key={key}>{task.taskName}</td>
                                        <td key={key}>{task.taskDescription}</td>
                                        <td key={key}>{task.taskId}</td>
                                        <td key={key}>{task.taskWorkers}</td>
                                        <td key={key}>{task.taskStatus}</td>
                                    </tr>),
                                )}
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

export default observer(TaskOverview);