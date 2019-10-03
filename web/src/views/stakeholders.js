import React from "react";
import {observer} from "mobx-react";
import StakeholdersStore from "../stores/StakeholdersStore";
import "./Stakeholders.css";

class Stakeholders extends React.Component {
    stakeholderStore = new StakeholdersStore();
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contactperson: '',
            email: '',
            direct: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        const name = this.state.name;
        const contactperson = this.state.contactperson;
        const email = this.state.email;
        const direct = this.state.direct;
        this.stakeholderStore.stakeholderList.push({name, contactperson, email, direct});

        this.setState({
            name: '',
            contactperson: '',
            email: '',
            direct: true
        });
    }

    render() {
        return (
            <div className="stakeholder float-left justify-content-center">
                <div className="stakeholder-form">
                    <form className="stakeinput" onSubmit={this.handleSubmit}>
                        <label>
                            <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} required />
                        </label>
                        <label>
                            <input name="contactperson" type="text" placeholder="Contact person" value={this.state.contactperson} onChange={this.handleInputChange} required />
                        </label>
                        <label>
                            <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required />
                        </label>
                        <label>
                            Direct stakeholder:
                            <input
                                name="direct"
                                type="checkbox"
                                checked={this.state.direct}
                                onChange={this.handleInputChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="stakeholderList d-flex justify-content-center" >
                    <ul>
                        <h3 className="d-flex justify-content-center">Stakeholders</h3>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Contact Person</th>
                                <th>Email</th>
                                <th>Direct Stakeholder </th>
                            </tr>
                            {this.stakeholderStore.stakeholderList.map((stakeholder, key) =>(
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
}
export default observer(Stakeholders);