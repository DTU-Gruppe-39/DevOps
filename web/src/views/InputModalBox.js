import {taskStore} from "../stores/TaskStore";
import Select from "react-select";
import {userStore} from "../stores/UserStore";
import {Button} from "react-bootstrap";
import React from "react";
import {postTask} from "../stores/Api";
import Modal from "react-bootstrap/Modal";
import {observer} from "mobx-react";
import {projectStore} from "../stores/ProjectStore";


function InputModalBox() {
    return (
        <Modal show={taskStore.inputModalShow} size={"lg"}>
            <Modal.Header>
                <Modal.Title> Creating task </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <li>
                        <b> Name </b>
                        <input name="name" type="text" placeholder="Name"
                               value={taskStore.inputTask.name}
                               onChange={(e) => taskStore.inputTask.name = e.target.value} required/>
                    </li>
                    <li>
                        <b> Description </b>
                        <input name="description" type="text" placeholder="Description"
                               value={taskStore.inputTask.description}
                               onChange={(e) => taskStore.inputTask.description = e.target.value}
                               required/>
                    </li>

                    <li>
                        <b> Responsible </b>
                        <Select options={userStore.userSelect} value={taskStore.inputTask.responsible} onChange={(e) => taskStore.inputTask.responsible = e} required/>
                    </li>
                    <li>
                        {/*might want to remove this and set it to NotStarted as default*/}
                        <b> Status </b>
                        <Select options={taskStore.statusOption} value={taskStore.currStatus} onChange={(e) => taskStore.currStatus = e} required>
                        </Select>
                    </li>

                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant={"secondary"} onClick={updateTaskFunc(false)}>
                    Discard
                </Button>
                <Button variant={"primary"} onClick={updateTaskFunc(true)}>
                    Create task
                </Button>
            </Modal.Footer>

        </Modal>
    );


    function updateTaskFunc(save) {
        return (e) => {
            e.preventDefault();
            if(save === true){
                //taskStore.inputTask.responsible = taskStore.inputTask.responsible.value;
                // taskStore.updateTask.status = taskStore.currStatus.value;
                taskStore.inputTask.status = taskStore.currStatus.value;
                taskStore.inputTask.responsible = taskStore.inputTask.responsible.value;
                taskStore.inputTask.id = 1;
                taskStore.inputTask.projectId = projectStore.currentProject.id;
                taskStore.taskList.push(taskStore.inputTask);
                postTask(taskStore.inputTask).then(function (response) {
                    if (response.ok){
                        taskStore.getTasks();
                    }
                    else{
                        // alerts the status code and the associated text
                        // fx Status Code: 200       Status: OK
                        alert( "Status Code: " + response.status + "\n" + " Status: " + response.statusText)
                    }
                });

            }
            taskStore.inputTask = {
                name: '',
                description: '',
                id: '',
                responsible: '',
                status: '',
                projectId: ''
            };
            taskStore.inputModalShow = false;
        }
    }
}

export default observer(InputModalBox);