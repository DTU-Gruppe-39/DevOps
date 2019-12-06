import React, {useEffect} from "react";
import {observer} from "mobx-react";
import "./Stakeholders.css";
import {stakeHolderStore} from "../stores/StakeholdersStore";
import {deleteStakeholder, postStakeholder, putStakeholder} from "../stores/Api";
import {Button, Modal} from "react-bootstrap";
import editPencil from "../edit-24px.svg";
import deletelogo from "../baseline_close_black_48dp.png";
import addCircle from "../add_circle-24px.svg";



    function Stakeholders() {
        useEffect(()=>{
            stakeHolderStore.getStakeholders();
        },[]);
        return (
            <div class="container col-10">
                <div className="row justify-content-lg-center">
                    <Modal show={stakeHolderStore.inputModalShow} size={"lg"}>
                        <Modal.Header>
                            <Modal.Title> Creating stakeholder </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <label>
                                    <input name="name " type="text" placeholder="Name"
                                           value={stakeHolderStore.inputStakeholder.name}
                                           onChange={(e) => stakeHolderStore.inputStakeholder.name = e.target.value} required/>
                                </label>
                                <label>
                                    <input name="contactperson" type="text" placeholder="Contact person"
                                           value={stakeHolderStore.inputStakeholder.contact_person}
                                           onChange={(e) => stakeHolderStore.inputStakeholder.contact_person = e.target.value}
                                           required/>
                                </label>
                                <label>
                                    <input name="email" type="email" placeholder="Email"
                                           value={stakeHolderStore.inputStakeholder.email}
                                           onChange={(e) => stakeHolderStore.inputStakeholder.email = e.target.value} required/>
                                </label>
                                <label>
                                    Direct stakeholder:
                                    <input
                                        name="direct"
                                        type="checkbox"
                                        checked={stakeHolderStore.inputStakeholder.stakeholder_type}
                                        onChange={(e) => {stakeHolderStore.inputStakeholder.stakeholder_type ^= true}}/>
                                </label>

                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant={"secondary"} onClick={inputStakeholderFunc(false)}>
                                Discard
                            </Button>
                            <Button variant={"primary"} onClick={inputStakeholderFunc(true)}>
                                Create
                            </Button>
                        </Modal.Footer>

                    </Modal>
                    <Modal show={stakeHolderStore.modalShow} size={"lg"}>
                        <Modal.Header>
                            <Modal.Title> Editing stakeholder </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <label>
                                    <input name="name " type="text" placeholder="Name"
                                           value={stakeHolderStore.updateStakeholder.name}
                                           onChange={(e) => stakeHolderStore.updateStakeholder.name = e.target.value} required/>
                                </label>
                                <label>
                                    <input name="contactperson" type="text" placeholder="Contact person"
                                           value={stakeHolderStore.updateStakeholder.contact_person}
                                           onChange={(e) => stakeHolderStore.updateStakeholder.contact_person = e.target.value}
                                           required/>
                                </label>
                                <label>
                                    <input name="email" type="email" placeholder="Email"
                                           value={stakeHolderStore.updateStakeholder.email}
                                           onChange={(e) => stakeHolderStore.updateStakeholder.email = e.target.value} required/>
                                </label>
                                <label>
                                    Direct stakeholder:
                                    <input
                                        name="direct"
                                        type="checkbox"
                                        checked={stakeHolderStore.updateStakeholder.stakeholder_type}
                                        onChange={(e) => {stakeHolderStore.updateStakeholder.stakeholder_type ^= true}}/>
                                </label>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant={"secondary"} onClick={updateStakeholderFunc(false)}>
                                Discard changes
                            </Button>
                            <Button variant={"primary"} onClick={updateStakeholderFunc(true)}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="stakeholderList justify-content-center">
                        <ul>
                            <br/>
                            <h3 className="d-flex justify-content-center">Stakeholders</h3>

                            <br/>

                            {/*<Button className="addButton justify-content-end" variant={"primary"} onClick={showInputBox()}>Add stakeholder</Button>*/}
                            <img className="addButton justify-content-center" src={addCircle} alt="Add stakeholder" width="48" height="48" title="Add stakeholder" onClick={showInputBox()}/>

                            <br/>
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Contact Person</th>
                                    <th>Email</th>
                                    <th>Direct Stakeholder</th>
                                    <th>Options</th>
                                </tr>
                                {stakeHolderStore.stakeholderList.map((stakeholder, key) => (
                                    <tr>
                                        <td key={key}>{stakeholder.name}</td>
                                        <td key={key}>{stakeholder.contact_person}</td>
                                        <td key={key}>{stakeholder.email}</td>
                                        <td key={key}>{(stakeholder.stakeholder_type ? "Direct stakeholder" : "Indirect stakeholder")}</td>
                                        {/*<td> <Button variant={"primary"} onClick={editfunc(key, stakeholder)}>Edit</Button> </td>*/}
                                        <td> <img src={editPencil} alt="Edit stakeholder" width="24" height="24" title="Edit stakeholder" onClick={editfunc(key, stakeholder)} />
                                        {/*<td> <Button variant={"danger"}  onClick={delFunc(stakeholder.id, key)}>Delete</Button> </td>*/}
                                        <img src={deletelogo} alt="delete stakeholder" width="24" height="24" title="Slet fra listen" onClick={delFunc(stakeholder.id, key)} />
                                        </td>
                                    </tr>),
                                )}
                            </table>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }

function updateStakeholderFunc(save) {
    return (e) => {
        e.preventDefault();
        if(save === true){
            // taskStore.updateTask.status = taskStore.currStatus.value;
            // taskStore.updateTask.status = taskStore.currStatus.value;

            stakeHolderStore.stakeholderList[stakeHolderStore.modalKey].name = stakeHolderStore.updateStakeholder.name;
            stakeHolderStore.stakeholderList[stakeHolderStore.modalKey].contact_person = stakeHolderStore.updateStakeholder.contact_person;
            stakeHolderStore.stakeholderList[stakeHolderStore.modalKey].email = stakeHolderStore.updateStakeholder.email;
            stakeHolderStore.stakeholderList[stakeHolderStore.modalKey].stakeholder_type = stakeHolderStore.updateStakeholder.stakeholder_type;
            putStakeholder(stakeHolderStore.stakeholderList[stakeHolderStore.modalKey]).then(function (response) {
                if (response.ok){
                    stakeHolderStore.getStakeholders();
                }
                // exception handling
                else{
                    // alerts the status code and the associated text
                    // fx Status Code: 200       Status: OK
                    alert( "Status Code: " + response.status + "\n" + " Status: " + response.statusText)
                }
            });

        }
        stakeHolderStore.updateStakeholder = {
            name: '',
            contact_person: '',
            email: '',
            stakeholder_type: true
        };
        stakeHolderStore.modalKey = 0;
        stakeHolderStore.modalShow = false;
    }
}

function inputStakeholderFunc(save) {
    return (e) => {
        e.preventDefault();
        if(save === true){
            // stakeHolderStore.inputStakeholder.id = 1;
            // might not want to push to the list
            stakeHolderStore.stakeholderList.push(stakeHolderStore.inputStakeholder);
            postStakeholder(stakeHolderStore.inputStakeholder).then(function (response) {
                if (response.ok){
                    stakeHolderStore.getStakeholders();
                }
                // exception handling
                else{
                    // alerts the status code and the associated text
                    // fx Status Code: 200       Status: OK
                    alert( "Status Code: " + response.status + "\n" + " Status: " + response.statusText)
                }
            });

        }
        stakeHolderStore.inputStakeholder = {
            id: '',
            name: '',
            contact_person: '',
            email: '',
            stakeholder_type: true
        };
        stakeHolderStore.inputModalShow = false;
    }
}

function editfunc(key, stake) {
    return (e) => {
        e.preventDefault();
       // change to use stakeholders
        stakeHolderStore.updateStakeholder.name = stake.name;
        stakeHolderStore.updateStakeholder.contact_person = stake.contact_person;
        stakeHolderStore.updateStakeholder.email = stake.email;
        stakeHolderStore.updateStakeholder.stakeholder_type = stake.stakeholder_type;
        stakeHolderStore.modalKey = key;
        stakeHolderStore.modalShow = true;
    };
}
function delFunc(stake, key) {
    return (e) => {
        e.preventDefault();
        deleteStakeholder(stake);
        stakeHolderStore.stakeholderList.splice(key,1);

    };
}
function showInputBox() {
    return (e) => {
        e.preventDefault();
        stakeHolderStore.inputModalShow = true;
        // userStore.currUser.label="";
        // userStore.currUser.value="";

    }
}
export default observer(Stakeholders);