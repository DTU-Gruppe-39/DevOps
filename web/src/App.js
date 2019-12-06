import React from 'react';
import logo from './Ionic_Logo.png';
import profile from './profile.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, Switch} from "react-router-dom";
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
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import frontImage from "./Best-Project-Management-Software-1024x512.png";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Select from "react-select";

function App() {
    return (
        <div className="App">
            <div className="topbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src={logo} alt="Company logo" />

                  <div className="collapse navbar-collapse dropdown-menu-left" id="navbarSupportedContent">
                  </div>
                  {
                      authenticationStore.currentAuthentication.isAuthenticated === true &&
                      (
                          <Dropdown onSelect={function(eventKey) {
                              if (Number(eventKey) === 1) {
                                  profileMenu();
                              }
                              if (Number(eventKey) === 2) {
                                  logoutMenu();
                              }
                            }
                          }>
                              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                  <p style={{color: 'white', 'fontSize': '16px', 'marginTop': '10px'}}>Profile</p>
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
                        <div className="projects-list" style={{marginTop: '80px'}}>
                            <h4 style={{paddingLeft: '10px'}}>Projects</h4>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                <Row>
                                    <Col>
                                        <ListGroup style={{maxHeight: '200px', overflow: 'scroll'}}>
                                            {/*{projectStore.projects.map((project, key)=> (*/}
                                            {/*    <ListGroup.Item action onClick={()=>alert("test")}>*/}
                                            {/*        Link 1*/}
                                            {/*    </ListGroup.Item>*/}
                                            {/*))}*/}
                                            <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>alert("test")}>
                                                Link 1
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>alert("test")}>
                                                Link 2
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>alert("test")}>
                                                Link 1
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>alert("test")}>
                                                Link 2
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>alert("test")}>
                                                Link 1
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>alert("test")}>
                                                Link 2
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>alert("test")}>
                                                Link 1
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>alert("test")}>
                                                Link 2
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Tab.Container>
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
                        <h4 className="title justify-content-center d-flex ">Projektstyringsværktøj</h4>
                        <p className="titleText justify-content-center d-flex">
                            En applikation der hjælper dig med at få et overblik over dine projekter og opgaver
                        </p>

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
                            <Button className="btn btn-primary d-flex justify-content-center col-11"> Sign up</Button>

                            <Modal show={false} size={"lg"}>
                                <Modal.Header>
                                    <Modal.Title> Editing task </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        <li>
                                            <b> Name </b>
                                            <input name="name" type="text" placeholder="Name"
                                                   onChange={(e) => e.target.value} required/>
                                        </li>
                                        <li>
                                            <b> Description </b>
                                            <input name="description" type="text" placeholder="Description"
                                                   onChange={(e) => e.target.value}
                                                   required/>
                                        </li>

                                        <li>
                                            <b> Responsible </b>
                                            <input name="responsible" type="text" placeholder="Task Responsible name"
                                                // value={taskStore.inputTask.responsible.name}
                                                   onChange={(e) =>  e.target.value}
                                                // onChange={(e) => taskStore.inputTask.responsible.name = e.target.value}
                                                   required/>
                                        </li>
                                        <li>
                                            <b> Status </b>
                                            <Select options
                                                    onChange={(e) =>  e} required>
                                            </Select>
                                        </li>

                                    </div>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant={"secondary"}>
                                        Discard changes
                                    </Button>
                                    <Button variant={"primary"}>
                                        Save changes
                                    </Button>
                                </Modal.Footer>

                            </Modal>

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
    <Button variant="link"
        style={{textDecorationColor: 'white'}}
        href=""
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}>
        <Row>
        <Col style={{padding: '0px'}}>
            <img src={profile} alt="Profile" height="42" width="42"/>
        </Col>
        <Col style={{padding: '0px'}}>
            {children}
        </Col>
        </Row>
    </Button>
));

function profileMenu() {

}
function logoutMenu() {
    authenticationStore.logout();
    return <Redirect to="/"/>
}
export default observer(App);

