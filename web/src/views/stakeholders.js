import React from "react";
import {observer} from "mobx-react";
import "./Stakeholders.css";
import {stakeHolderStore} from "../stores/StakeholdersStore";

    function Stakeholders() {
        return (
            <div className="stakeholder float-left justify-content-center">
                <div className="stakeholder-form">
                    <form className="stakeinput" onSubmit={getOnSubmit()}>
                        <label>
                            <input name="name" type="text" placeholder="Name"
                                   value={stakeHolderStore.inputStakeholder.name}
                                   onChange={(e) => stakeHolderStore.inputStakeholder.name = e.target.value} required/>
                        </label>
                        <label>
                            <input name="contactperson" type="text" placeholder="Contact person"
                                   value={stakeHolderStore.inputStakeholder.contactperson}
                                   onChange={(e) => stakeHolderStore.inputStakeholder.contactperson = e.target.value}
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
                                checked={stakeHolderStore.inputStakeholder.direct}
                                onChange={(e) => {stakeHolderStore.inputStakeholder.direct ^= true}}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="stakeholderList d-flex justify-content-center">
                    <ul>
                        <h3 className="d-flex justify-content-center">Stakeholders</h3>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Contact Person</th>
                                <th>Email</th>
                                <th>Direct Stakeholder</th>
                            </tr>
                            {stakeHolderStore.stakeholderList.map((stakeholder, key) => (
                                <tr>
                                    <td key={key}>{stakeholder.name}</td>
                                    <td key={key}>{stakeholder.contactperson}</td>
                                    <td key={key}>{stakeholder.email}</td>
                                    <td key={key}>{(stakeholder.direct ? "Direct stakeholder" : "Indirect stakeholder")}</td>
                                </tr>),
                            )}
                        </table>
                    </ul>
                </div>
            </div>

        );
    }

    function getOnSubmit() {
        return (e) => {
            e.preventDefault();
            stakeHolderStore.stakeholderList.push(stakeHolderStore.inputStakeholder);
            stakeHolderStore.inputStakeholder = {
                name: '',
                contactperson: '',
                email: '',
                direct: true
            };
        };
    }
export default observer(Stakeholders);