import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {usecasesStore} from "../stores/UsecasesStore";
import {deleteUsecase, postTask, postUsecase, putUsecase} from "../stores/Api";
import "./Usecases.css";
import {Button, Modal} from "react-bootstrap";
import {taskStore} from "../stores/TaskStore";
import Select from "react-select";
import {userStore} from "../stores/UserStore";


function Usecases() {
    useEffect(()=>{
        usecasesStore.getUsecases();
    },[]);
    return(
        <div className="container">
            <div class="row justify-content-center">
                <Button variant={"primary"} onClick={showInputBox()}>Add</Button>
                <Modal show={usecasesStore.modalShow} size={"lg"}>
                    <Modal.Header>
                        <Modal.Title> Editing usecase </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <label>
                                <input name="userStory" type="text" placeholder="User story"
                                       value={usecasesStore.updateUsecases.userStory}
                                       onChange={(e) => usecasesStore.updateUsecases.userStory = e.target.value}
                                       required/>
                            </label>
                            <label>
                                <input name="priority" type="number" placeholder="Priority"
                                       value={usecasesStore.updateUsecases.priority}
                                       onChange={(e) => usecasesStore.updateUsecases.priority = e.target.value}
                                       required/>
                            </label>
                            <li>
                                <b> Responsible </b>
                                <Select options={userStore.userSelect} value={usecasesStore.updateUsecases.responsible}
                                        onChange={(e) => usecasesStore.updateUsecases.responsible = e} required/>
                            </li>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant={"secondary"} onClick={updateUsecaseFunc(false)}>
                            Discard changes
                        </Button>
                        <Button variant={"primary"} onClick={updateUsecaseFunc(true)}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={usecasesStore.inputModalShow} size={"lg"}>
                    <Modal.Header>
                        <Modal.Title> Creating usecase </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <label>
                                <input name="userStory" type="text" placeholder="User story"
                                       value={usecasesStore.inputUsecases.userStory}
                                       onChange={(e) => usecasesStore.inputUsecases.userStory = e.target.value}
                                       required/>
                            </label>
                            <label>
                                <input name="priority" type="number" placeholder="Priority"
                                       value={usecasesStore.inputUsecases.priority}
                                       onChange={(e) => usecasesStore.inputUsecases.priority = e.target.value}
                                       required/>
                            </label>
                            <li>
                                <b> Responsible </b>
                                <Select options={userStore.userSelect} value={usecasesStore.inputUsecases.responsible}
                                        onChange={(e) => usecasesStore.inputUsecases.responsible = e} required/>
                            </li>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant={"secondary"} onClick={inputUsecaseFunc(false)}>
                            Discard
                        </Button>
                        <Button variant={"primary"} onClick={inputUsecaseFunc(true)}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="usecaseList d-flex justify-content-center">
                    <ul>
                        <h3 className="d-flex justify-content-center">Usecases</h3>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>User story</th>
                                <th>Priority (1-5)</th>
                                <th>Responsible</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                            {usecasesStore.usecasesList.map((usecase, key) => (
                                <tr>
                                    {/*<td key={key}>{"U" + usecase.id}</td>*/}
                                    <td key={key}>{"U" + (key+1)}</td>
                                    <td key={key}>{usecase.userStory}</td>
                                    <td key={key}>{usecase.priority}</td>
                                    <td key={key}>{(usecase.responsible)}</td>
                                    <td> <Button variant={"primary"} onClick={editfunc(key, usecase)}>Edit</Button> </td>
                                    <td><Button variant={"danger"} onClick={deleteFunc(usecase.id, key)}>Delete</Button></td>
                                </tr>),
                            )}
                        </table>
                    </ul>
                </div>
            </div>
        </div>

    );
}

function showInputBox() {
    return (e) => {
        e.preventDefault();
        usecasesStore.inputModalShow = true;
    }
}

function deleteFunc(usecase, key) {
    return (e) => {
        e.preventDefault();
        deleteUsecase(usecase);
        usecasesStore.usecasesList.splice(key,1);

    };
}

function editfunc(key, usecase) {
    return (e) => {
        e.preventDefault();

        usecasesStore.updateUsecases.id = usecase.id;
        usecasesStore.updateUsecases.userStory = usecase.userStory;
        usecasesStore.updateUsecases.priority = usecase.priority;
        usecasesStore.updateUsecases.responsible= usecase.responsible;
        usecasesStore.modalKey = key;
        usecasesStore.modalShow = true;
    }
}

function updateUsecaseFunc(save) {
    return (e) => {
        e.preventDefault();
        if(save === true){
            usecasesStore.updateUsecases.responsible = usecasesStore.updateUsecases.responsible.value;
            usecasesStore.usecasesList[usecasesStore.modalKey].id = usecasesStore.updateUsecases.id;
            usecasesStore.usecasesList[usecasesStore.modalKey].userStory = usecasesStore.updateUsecases.userStory;
            usecasesStore.usecasesList[usecasesStore.modalKey].priority = usecasesStore.updateUsecases.priority;
            usecasesStore.usecasesList[usecasesStore.modalKey].responsible = usecasesStore.updateUsecases.responsible;
            putUsecase(usecasesStore.usecasesList[usecasesStore.modalKey]).then(function (response) {
                if (response.ok){
                    usecasesStore.getUsecases()
                }
                else {
                    // exception handling
                }
            });

        }
        usecasesStore.updateUsecases = {
            id: null,
            userStory: '',
            priority: '',
            responsible: ''
        };
        usecasesStore.modalKey = 0;
        usecasesStore.modalShow = false;
    }
}

function inputUsecaseFunc(save) {
    return (e) => {
        e.preventDefault();
        if(save === true){
            //taskStore.inputTask.responsible = taskStore.inputTask.responsible.value;
            // taskStore.updateTask.status = taskStore.currStatus.value;
            usecasesStore.inputUsecases.responsible = usecasesStore.inputUsecases.responsible.value;
            usecasesStore.inputUsecases.id = 1;
            // might not want to push to the list
            usecasesStore.usecasesList.push(usecasesStore.inputUsecases);
            postUsecase(usecasesStore.inputUsecases).then(function (response) {
                if (response.ok){
                    usecasesStore.getUsecases();
                }
                // alert with bad response code
            });

        }
        usecasesStore.inputUsecases = {
            id: null,
            userStory: '',
            priority: '',
            responsible: ''
        };
        usecasesStore.inputModalShow = false;
    }
}

export default observer(Usecases);