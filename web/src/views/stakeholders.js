import React from "react";
import {observer} from "mobx-react";
import StakeholdersStore from "../stores/StakeholdersStore";

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
            <div className="stakeholder">
                <div className="stakeholder-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} required />
                        </label>
                        <label>
                            Contact person:
                            <input name="contactperson" type="text" value={this.state.contactperson} onChange={this.handleInputChange} required />
                        </label>
                        <label>
                            Email:
                            <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} required />
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
                <div className="stakeholderList">
                    <ul>
                        {this.stakeholderStore.stakeholderList.map((stakeholder, key) =>
                            <li key={key}>{("Name: " + stakeholder.name + ", " +
                            "Contact person: " + stakeholder.contactperson + ", " +
                            "Email: " + stakeholder.email + ", " +
                                (stakeholder.direct ? "Direct stakeholder" : "Indirect stakeholder"))}</li>
                        )}
                    </ul>
                </div>
            </div>

        );
    }
}
export default observer(Stakeholders);