import React from 'react';
import logo from './Ionic_Logo.png';
import profile from './profile.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, Switch} from "react-router-dom";
import {observer} from "mobx-react";
import './App.css';
import Stakeholders from "./views/stakeholders";
import Usecases from "./views/Usecases";
import Dashboard from "./views/Dashboard";
import TaskOverview from "./views/TaskOverview";
import Vision from "./views/Vision";
import Music from "./views/Music";
import SecureRoute from "./SecureRoute";
import {authenticationStore} from "./stores/AuthenticationStore";
import {Redirect} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import {taskStore} from "./stores/TaskStore";
import {Button, Modal} from "react-bootstrap";
import Select from "react-select";
import frontImage from "./Best-Project-Management-Software-1024x512.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    return (
        <div className="App ">
            <div className="topbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src={logo} alt="Company logo" />

                    <div className="collapse navbar-collapse dropdown-menu-left" id="navbarSupportedContent">
                    </div>
                    {
                        authenticationStore.currentAuthentication.isAuthenticated === true &&
                        (
                            <Dropdown onSelect={function(eventKey) {
                                if (eventKey == 1) {
                                    profileMenu();
                                }
                                if (eventKey == 2) {
                                    logoutMenu();
                                }
                            }
                            }>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <text style={{color: 'white'}}>Profile</text>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={1}>Profile</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item eventKey={2}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )
                    }
                </nav>
            </div>
            {/*</div>*/}

            {
                authenticationStore.currentAuthentication.isAuthenticated === true &&
                (
                    <div className="sidebar" id="sidebar">
                        {/*<div className="sidebar-heading space"></div>*/}
                        <div className="list-group list-group-flush">
                            <Link to="/Dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                            <Link to="/Stakeholders" className="list-group-item list-group-item-action bg-light">Stakeholders</Link>
                            <Link to="/Usecases" className="list-group-item list-group-item-action bg-light">Use cases</Link>
                            <Link to="/Vision" className="list-group-item list-group-item-action bg-light">Vision</Link>
                            {/*<Link to="/Profile" className="list-group-item list-group-item-action bg-light">Profile</Link>*/}
                            <Link to="/TaskOverview" className="list-group-item list-group-item-action bg-light">TaskOverview</Link>
                            <Link to="/Music" className="list-group-item list-group-item-action bg-light">Music</Link>
                        </div>
                    </div>
                )
            }
            <div className="main">
                <Switch>
                    <SecureRoute exact path="/Dashboard" component={Dashboard}/>
                    <SecureRoute exact path="/Stakeholders" component={Stakeholders}/>
                    <SecureRoute exact path="/Usecases" component={Usecases}/>
                    <SecureRoute exact path="/Vision" component={Vision}/>
                    {/*<Route exact path="/Profile" component={Profile}/>*/}
                    <SecureRoute exact path="/TaskOverview" component={TaskOverview}/>
                    <SecureRoute exact path="/Music" component={Music}/>
                    {/*<Route exact path="/TaskOverview" component={KanbanTest}/>*/}
                </Switch>
                {authenticationStore.currentAuthentication.isAuthenticated ?
                    <Redirect to="/Dashboard"/>
                    :
                    <div className="">
                            <form className="loginForm" onSubmit={getOnSubmit()}>
                                <label>
                                    Username
                                    <br/>
                                    <input name="email" type="email" placeholder="Email" className="col-12 form-control"
                                           value={authenticationStore.inputLogin.username}
                                           onChange={(e) => authenticationStore.inputLogin.username = e.target.value} required/>
                                </label>
                                <br/>
                                <label>
                                    Password
                                    <br/>
                                    <input
                                        name="password" type="password" placeholder="Password" className="col-12 form-control"
                                        value={authenticationStore.inputLogin.password}
                                        onChange={(e) => {authenticationStore.inputLogin.password = e.target.value}} required/>
                                </label>
                                <br/>
                                <input type="submit" className="btn btn-success col-11 justify-content-center d-flex" value="Log in"/>
                                <br/>
                                <p className="justify-content-center d-flex">OR</p>
                                <hr/>
                                <br/>
                                <Button className="btn btn-primary col-11 d-flex justify-content-center"> Sign up</Button>
                            </form>


                        <Col className="frontimage">

                            <Row>
                            <img  className="col-9" src={frontImage}/>
                        </Row>
                        </Col>
                    </div>
                }
                <Modal show={false} size={"lg"}>
                    <Modal.Header>
                        <Modal.Title> Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            Hej
                        </div>
                    </Modal.Body>

                    <Modal.Footer>

                    </Modal.Footer>

                </Modal>
            </div>
            {/*<header className="App-header">*/}
            {/*</header>*/}

        </div>

    );
}
function getOnSubmit() {
    return (e) => {
        e.preventDefault();
        authenticationStore.login();
        authenticationStore.inputLogin = {
            username: "",
            password: ""
        };
    };
}
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        style={{textDecorationColor: 'white'}}
        href=""
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}>
        <img src={profile} height="42" width="42"/>
        {children}
    </a>
));

function profileMenu() {

}
function logoutMenu() {
    authenticationStore.logout();
    return <Redirect to="/"/>
}
export default observer(App);

