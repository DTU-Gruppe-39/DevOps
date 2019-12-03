import React from "react";
import "./TaskOverview.css"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react";
import Select from "react-select"
import {Button, Modal} from "react-bootstrap";
import {taskStore} from "../stores/TaskStore";
import KanbanTest from "../containers/test/dragdropTest";
import api, {postTask, putTask, deleteTask} from "../stores/Api";


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
                        <Modal show={taskStore.modalShow} size={"lg"}>
                            <Modal.Header>
                                <Modal.Title> Editing task </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                        <li>
                                            <b> Name </b>
                                            <input name="name" type="text" placeholder="Name"
                                                   value={taskStore.updateTask.name}
                                                   onChange={(e) => taskStore.updateTask.name = e.target.value} required/>
                                        </li>
                                        <li>
                                            <b> Description </b>
                                            <input name="description" type="text" placeholder="Description"
                                                   value={taskStore.updateTask.description}
                                                   onChange={(e) => taskStore.updateTask.description = e.target.value}
                                                   required/>
                                        </li>

                                        <li>
                                            <b> Responsible </b>
                                            <input name="responsible" type="text" placeholder="Task Responsible name"
                                                   value={taskStore.updateTask.responsible}
                                                // value={taskStore.inputTask.responsible.name}
                                                   onChange={(e) => taskStore.updateTask.responsible = e.target.value}
                                                // onChange={(e) => taskStore.inputTask.responsible.name = e.target.value}
                                                   required/>
                                        </li>
                                        <li>
                                            <b> Status </b>
                                            <Select options={taskStore.statusOption} value={taskStore.currStatus} onChange={(e) => taskStore.currStatus = e} required>
                                            </Select>
                                        </li>
                                    
                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant={"secondary"} onClick={updateTaskFunc(false)}>
                                    Discard changes
                                </Button>
                                <Button variant={"primary"} onClick={updateTaskFunc(true)}>
                                    Save changes
                                </Button>
                            </Modal.Footer>

                        </Modal>
                        <div>
                            <table>
                                <tr>
                                    <th>Task name</th>
                                    <th>Task Description</th>
                                    {/*<th>TaskId</th>*/}
                                    <th>TaskResponsible</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Remove</th>
                                </tr>
                                {taskStore.taskList.map((task, key) => (
                                    <tr>
                                        <td>{task.name}</td>
                                        <td>{task.description}</td>
                                        {/*<td>{task.id}</td>*/}
                                        {/*<td>{task.responsible.name}</td>*/}
                                        <td>{task.responsible}</td>
                                        <td>{task.status}</td>
                                        <td> <Button variant={"primary"} onClick={editfunc(key, task)}>Edit</Button> </td>
                                        <td><button variant={"danger"} onClick={deleteFunc(task.id, key)}>Delete</button></td>
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


    function updateTaskFunc(save) {
        return (e) => {
            e.preventDefault();
            if(save === true){
                // taskStore.updateTask.status = taskStore.currStatus.value;
                taskStore.updateTask.status = taskStore.currStatus.value;
                taskStore.taskList[taskStore.modalKey].name = taskStore.updateTask.name;
                taskStore.taskList[taskStore.modalKey].id = taskStore.updateTask.id;
                taskStore.taskList[taskStore.modalKey].description = taskStore.updateTask.description;
                taskStore.taskList[taskStore.modalKey].responsible = taskStore.updateTask.responsible;
                taskStore.taskList[taskStore.modalKey].status = taskStore.updateTask.status;
                putTask(taskStore.taskList[taskStore.modalKey]);

            }
                taskStore.updateTask = {
                    name: '',
                    description: '',
                    id: '',
                    responsible: '',
                    status: ''
                };
                taskStore.modalKey = 0;
                taskStore.modalShow = false;
        }
    }

    function editfunc(key, task) {
        return (e) => {
            e.preventDefault();
            // can maybe do this with updateTask = task
            taskStore.updateTask.description = task.description;
            taskStore.updateTask.id = task.id;
            taskStore.updateTask.name = task.name;
            taskStore.updateTask.responsible = task.responsible;
            taskStore.updateTask.status = task.status;
            taskStore.modalKey = key;
            taskStore.currStatus.value = task.status;
            taskStore.currStatus.label = task.status;
            taskStore.modalShow = true;
        }
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
        };

    }

}

export default observer(TaskOverview);
