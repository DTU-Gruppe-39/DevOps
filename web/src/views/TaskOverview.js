import React from "react";
import "./TaskOverview.css"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react";
import {taskStore} from "../stores/TaskStore";
import KanbanTest from "../containers/test/dragdropTest";
import api, {deleteTask, postTask} from "../stores/Api";


function TaskOverview() {


    return(
        <Container>
            <div className="spacer"/>

            <div className="btn-group " id="overview" role="group">
                <button type="button overviewBtn" className="btn btn-secondary" onClick={clickFunc("List")}>List</button>
                <button type="button overviewBtn" className="btn btn-secondary" onClick={clickFunc("Kanban")}>Kanban</button>
            </div>

            <div className="row justify-content-lg-center">
                <form className="taskrowinput" onSubmit={getOnSubmit()}>
                    <label>
                        <input name="name" type="text" placeholder="Name"
                               value={taskStore.inputTask.name}
                               onChange={(e) => taskStore.inputTask.name = e.target.value} required/>
                    </label>
                    <label>
                        <input name="description" type="text" placeholder="Description"
                               value={taskStore.inputTask.description}
                               onChange={(e) => taskStore.inputTask.description = e.target.value}
                               required/>
                    </label>

                    <label>
                        <input name="responsible" type="text" placeholder="Task Responsible name"
                               value={taskStore.inputTask.responsible}
                               // value={taskStore.inputTask.responsible.name}
                               onChange={(e) => taskStore.inputTask.responsible = e.target.value}
                               // onChange={(e) => taskStore.inputTask.responsible.name = e.target.value}
                               required/>
                    </label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <h3 className="d-flex justify-content-center">Tasks</h3>
            {taskStore.viewmode === "Kanban" &&<div id={"KanbanView"}>
                <KanbanTest>
                </KanbanTest>
            </div>}
            {taskStore.viewmode === "List" && <div id={"ListView"}>
            <Row className="justify-content-md-center col-lg-12 col-md-12">
                <Col md="auto">
                    <div>
                        <table>
                            <tr>
                                <th>Task name</th>
                                <th>Task Description</th>
                                <th>TaskResponsible</th>
                                <th>Status</th>
                                <th>Remove</th>
                            </tr>
                            {taskStore.taskList.map((task, key) => (
                                <tr>
                                    <td>{task.name}</td>
                                    <td>{task.description}</td>
                                    {/*<td>{task.responsible.name}</td>*/}
                                    <td>{task.responsible}</td>
                                    <td>{task.status}</td>
                                    <td><button className="alert-danger" onClick={deleteFunc(task.id, key)}>Delete</button></td>
                                </tr>),
                            )}
                        </table>
                    </div>
                </Col>
            </Row>
            </div>}
        </Container>
    );

    function deleteFunc(task, key) {
        return (e) => {
            e.preventDefault();
            deleteTask(task);
            taskStore.taskList.splice(key,1);

        };
    }


    function clickFunc(mode) {
        return (e) => {
          e.preventDefault();
          taskStore.viewmode = mode;

        };
    }

    function getOnSubmit() {
        return (e) => {
            e.preventDefault();
            taskStore.inputTask.status = 'NotStarted';
            taskStore.inputTask.id = (taskStore.taskList.length + 1) + '';
            // taskStore.inputTask.responsible.id = (taskStore.taskList.length + 2) + '';

            taskStore.taskList.push(taskStore.inputTask);
            postTask(taskStore.inputTask);
            taskStore.inputTask = {
                name: '',
                description: '',
                id: '',
                responsible: '',
                status: ''
            };
            // taskStore.inputTask = {
            //     name: '',
            //     description: '',
            //     id: '',
            //     responsible: {id:"", name:""},
            //     status: ''
            // };

        };

    }

}

export default observer(TaskOverview);
