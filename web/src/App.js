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
import {userStore} from "./stores/UserStore";
import {postProject, postUser, userPost} from "./stores/Api";
import {projectStore} from "./stores/ProjectStore";


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
                                    {userStore.profileModal = true};
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
                            <Row>
                                <Col style={{padding: '0px', paddingLeft: '10px'}}>
                                    <h4 style={{paddingTop: '6px', paddingLeft: '15px', margin: '0px'}}>Projects</h4>
                                </Col>
                                <Col style={{padding: '0px'}}>
                                    <Button variant="link" onClick={()=> projectStore.modalShow = true} style={{color: "green", marginLeft: '10px', padding: '0px', fontSize: '26px', textDecoration: 'none'}}>+</Button>
                                </Col>
                            </Row>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                <Row>
                                    <Col>
                                        <ListGroup style={{maxHeight: '200px', overflow: 'scroll'}}>
                                            {projectStore.listOfProjects.map((project, key)=> (
                                                <ListGroup.Item style={{padding: '10px', paddingLeft: '20px'}} action onClick={()=>setCurrentProject(project)}>
                                                    {project.name}
                                                </ListGroup.Item>
                                            ))}
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
                    <div className="overflow-hidden">
                        <h4 className="title justify-content-center d-flex ">Projektstyringsværktøj</h4>
                        <p className="titleText justify-content-center d-flex">
                            En applikation der hjælper dig med at få et overblik over dine projekter og opgaver.
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
                            <Button className="btn btn-primary d-flex justify-content-center col-11" onClick={modalShow(true)}> Sign up</Button>


                            <Modal className=""  show={userStore.modal} size={"col-6"}>
                                <center>
                                    <Modal.Header className="col-6 justify-content-center d-flex">
                                        <Modal.Title> <center> Register </center></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="justify-content-center">
                                            <li>
                                                <center><b> Email </b> <br/>
                                                    <input name="email" type="text" placeholder="Email"
                                                           onChange={(e) => userStore.loginDetails.username = e.target.value} required/>
                                                </center>
                                            </li>
                                            <br/>
                                            <li>
                                                <b> Password </b> <br/>
                                                <input name="password" type="password" placeholder="Password"
                                                       onChange={(e) => userStore.loginDetails.password = e.target.value}
                                                       required/>
                                            </li>
                                            <br/>
                                        </div>
                                    </Modal.Body>

                                    <br/>
                                    <Modal.Footer className="col-9 justify-content-center d-flex">
                                        <Button className="" variant={"secondary"} onClick={modalShow(false)}>
                                            Cancel
                                        </Button>
                                        <Button variant={"primary"} onClick={signUp()}>
                                            Sign Up
                                        </Button>
                                    </Modal.Footer>
                                </center>
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

                <Modal className="" show={userStore.profileModal} size={"col-12"}>
                    <center>
                        <Modal.Header className=" justify-content-center d-flex">
                            <Modal.Title> <center> Profile </center></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="justify-content-center">
                                <li>
                                    <center><b> Email </b> <br/>
                                    <h7>{authenticationStore.currentAuthentication.user.email}</h7>
                                    </center>
                                </li>
                            </div>
                        </Modal.Body>

                        <br/>
                        <Modal.Footer className="col-9 justify-content-center d-flex">
                            <Button className="justify-content-center d-flex" variant={"secondary"}  onClick={() => userStore.profileModal = false}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </center>

                </Modal>
                <Modal className="projectModal"  show={projectStore.modalShow} size={"col-6"}>
                    <center>
                        <Modal.Header className="col-6 justify-content-center d-flex">
                            <Modal.Title> <center> Project creation </center></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="justify-content-center">
                                <li>
                                    <center><b> Project name </b> <br/>
                                        <input name="project name" type="text" placeholder="project name"
                                               onChange={(e) => projectStore.inputProject.name = e.target.value} required/>
                                    </center>
                                </li>
                            </div>
                        </Modal.Body>

                        <br/>
                        <Modal.Footer className="col-9 justify-content-center d-flex">
                            <Button className="" variant={"secondary"} onClick={addProject(false)}>
                                Discard
                            </Button>
                            <Button variant={"primary"} onClick={addProject(true)}>
                                Create project
                            </Button>
                        </Modal.Footer>
                    </center>
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

function addProject(save) {
    return (e) => {
        e.preventDefault();
        if (save === true){
            projectStore.inputProject.id = 1;
            projectStore.inputProject.progress = 0;
            projectStore.inputProject.vision = "";
            projectStore.listOfProjects.push(projectStore.inputProject);
            postProject(projectStore.inputProject).then(function (response) {
                if (response.ok){
                    projectStore.getProject();
                }
                else {
                    alert("Status code: " + response.status + "\n " + " Status: "  + response.statusText);
                }
            })
        }
        projectStore.inputProject = {
            id: "",
            name: "",
            progress: 0,
            vision: "",
            isProjectManager: false
        };
        projectStore.modalShow = false;

    }
}

function logoutMenu() {
    authenticationStore.logout();
    return <Redirect to="/"/>
}

function modalShow(mode) {
    return(e) => {
        e.preventDefault();
        if(mode){
            userStore.modal = true;
        } else {
            userStore.modal = false;
        }
    };
}


function signUp() {
    return (e) => {
        e.preventDefault();
        console.log("Test");
        userStore.user.email = userStore.loginDetails.email;
        userStore.user.role = 'Developer';

        console.log(userStore.user);
        console.log(userStore.loginDetails);
        console.log(userStore.createUser);
        userStore.createUser.user = userStore.user;
        userStore.createUser.loginDetails = userStore.loginDetails;
        //userStore.userList.push(userStore.inputUser);
        postUser(userStore.createUser).then(function (response) {
            console.log(response);
            if (response.ok) {
                console.log("Sign up successful");
        //        userStore.getUsers();
            } else {
                console.log("Sign up unsuccessful");
            }
        });
        userStore.loginDetails = {
            username: "",
            password: '',
        };
        userStore.user = {
            email: "",
            role: "",
        };
        userStore.modal = false;
    };
}

function setCurrentProject(project) {
    projectStore.currentProject = project;
    console.log("Setting current project");
}



export default observer(App);

