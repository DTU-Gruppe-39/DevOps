import React from "react";

class Stakeholders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="stakeholder-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Contact person:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Direct" checked={true} />
                            Direct
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Indirect" />
                            Indirect
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Stakeholders;