import React, {useEffect} from "react";
import "./TaskOverview.css"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react";
import Select from "react-select"
import {Button, Modal} from "react-bootstrap";
import {taskStore} from "../stores/TaskStore";
import {userStore} from "../stores/UserStore"
import KanbanTest from "../containers/test/dragdropTest";
import InputModalBox from "./InputModalBox";
import {putTask, deleteTask} from "../stores/Api";
import editPencil from "../edit-24px.svg";
import deletelogo from "../baseline_close_black_48dp.png";
import addCircle from "../add_circle-24px.svg";
import {projectStore} from "../stores/ProjectStore";


function TaskOverview() {
    useEffect(()=>{
        taskStore.getTasks();
    },[]);
    return(
        <Container>
            <div className="spacer"/>

            <div className="row justify-content-lg-center">
                <InputModalBox/>
            </div>
            <h3 className="d-flex justify-content-center">Tasks</h3>
            <div className="btn-group " id="overview" role="group">
                <button type="button overviewBtn" className="btn btn-secondary" onClick={clickFunc("List")}>List</button>
                <button type="button overviewBtn" className="btn btn-secondary" onClick={clickFunc("Kanban")}>Kanban</button>
            </div>
            <img className="addButton justify-content-center" src={addCircle} alt="Add task" width="48" height="48" title="Add task" onClick={showInputBox()}/>
            <br/>
            <br/>

            {taskStore.viewmode === "Kanban" &&<div id={"KanbanView"}>
                <KanbanTest />
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
                                        <Select options={userStore.userSelect} value={taskStore.updateTask.responsible} onChange={(e) => taskStore.updateTask.responsible = e} required/>
                                    </li>
                                    <li>
                                        <b> Status </b>
                                        <Select options={taskStore.statusOption} value={taskStore.currStatus} onChange={(e) => taskStore.currStatus = e} required={true}>
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
                                    <th>TaskResponsible</th>
                                    <th>Status</th>
                                    <th>Options</th>
                                </tr>
                                {taskStore.taskList.map((task, key) => (
                                    <tr>
                                        <td>{task.name}</td>
                                        <td>{task.description}</td>
                                        <td>{task.responsible}</td>
                                        <td>{task.status}</td>
                                        {/*<td> <Button variant={"primary"} onClick={editfunc(key, task)}>Edit</Button> </td>*/}
                                        {/*<td><Button variant={"danger"} onClick={deleteFunc(task.id, key)}>Delete</Button></td>*/}
                                        <td> <img src={editPencil} alt="Edit task" width="24" height="24" title="Edit task" onClick={editfunc(key, task)} />
                                            {/*<td> <Button variant={"danger"}  onClick={delFunc(stakeholder.id, key)}>Delete</Button> </td>*/}
                                            <img src={deletelogo} alt="delete task" width="24" height="24" title="Slet fra listen" onClick={deleteFunc(task.id, key)} />
                                        </td>
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

    function showInputBox() {
        return (e) => {
            e.preventDefault();
            taskStore.inputModalShow = true;
            // userStore.currUser.label="";
            // userStore.currUser.value="";

        }
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
                    taskStore.updateTask.responsible = taskStore.updateTask.responsible.value;
                    taskStore.taskList[taskStore.modalKey].name = taskStore.updateTask.name;
                    taskStore.taskList[taskStore.modalKey].id = taskStore.updateTask.id;
                    taskStore.taskList[taskStore.modalKey].description = taskStore.updateTask.description;
                    taskStore.taskList[taskStore.modalKey].responsible = taskStore.updateTask.responsible;
                    taskStore.taskList[taskStore.modalKey].status = taskStore.updateTask.status;
                    taskStore.taskList[taskStore.modalKey].projectId = projectStore.currentProject.id;
                    putTask(taskStore.taskList[taskStore.modalKey]).then(function (response) {
                        if(response.ok){
                            taskStore.getTasks();
                        }
                        else{
                            // alerts the status code and the associated text
                            // fx Status Code: 200       Status: OK
                            alert( "Status Code: " + response.status + "\n" + " Status: " + response.statusText)
                        }
                    });
                }
                taskStore.updateTask = {
                    name: '',
                    description: '',
                    id: '',
                    responsible: '',
                    status: '',
                    projectId: ''
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
                taskStore.updateTask.projectId = projectStore.currentProject.id;
                taskStore.modalKey = key;
                // sometimes crashes !!
                // userStore.currUser.label = userStore.userList[key].email;
                // userStore.currUser.value = userStore.userList[key].id;
                taskStore.currStatus.value = task.status;
                taskStore.currStatus.label = task.status;
                taskStore.modalShow = true;
        }
    }
}

export default observer(TaskOverview);
