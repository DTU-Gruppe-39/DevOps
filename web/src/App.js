import React from 'react';
import logo from './Ionic_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, HashRouter} from "react-router-dom";
import {observer} from "mobx-react";
import './App.css';
import Stakeholders from "./views/stakeholders";
import Usecases from "./views/Usecases"
import Events from "./views/Events";
import Profile from "./views/Profile";
import Dashboard from "./views/Dashboard";
import TaskOverview from "./views/TaskOverview";
import KanbanTest from "./containers/test/dragdropTest";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <div className="topbar">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <img src={logo} alt="Company logo" />
                        {/*<a className="navbar border-0 nav-item" type="button" data-toggle="collapse"*/}
                        {/*   data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"*/}
                        {/*   aria-label="Toggle navigation">*/}
                        {/*    <span className="navbar-toggler-icon"></span>*/}
                        {/*</a>*/}

                        <div className="collapse navbar-collapse dropdown-menu-left" id="navbarSupportedContent">
                        </div>

                            <Navbar.Toggle aria-controls="basic-navbar-nav " />
                              <span className="navbar-toggler-icon">
                              <NavDropdown  alignRight id="dropdown-menu-align-right">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                              </NavDropdown>
                                  </span>
                        </nav>
                </div>
                {/*</div>*/}


                <div className="d-flex float-left" id="sidebar">
                    <div className="bg-light border-right">
                        <div className="sidebar-heading space"></div>
                        <div className="list-group list-group-flush">
                            <Link to="/Dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                            <Link to="/Stakeholders" className="list-group-item list-group-item-action bg-light">Stakeholders</Link>
                            <Link to="/Usecases" className="list-group-item list-group-item-action bg-light">Use cases</Link>
                            <Link to="/Events" className="list-group-item list-group-item-action bg-light">Events</Link>
                            <Link to="/Profile" className="list-group-item list-group-item-action bg-light">Profile</Link>
                            <Link to="/TaskOverview" className="list-group-item list-group-item-action bg-light">TaskOverview</Link>
                        </div>
                    </div>
                </div>
                <div className="main">

                    <Route exact path="/Dashboard" component={Dashboard}/>
                    <Route exact path="/Stakeholders" component={Stakeholders}/>
                    <Route exact path="/Usecases" component={Usecases}/>
                    <Route exact path="/Events" component={Events}/>
                    <Route exact path="/Profile" component={Profile}/>
                    <Route exact path="/TaskOverview" component={TaskOverview}/>
                    {/*<Route exact path="/TaskOverview" component={KanbanTest}/>*/}



                </div>
                {/*<header className="App-header">*/}
                {/*</header>*/}
            </div>
        </HashRouter>
    );
}
export default observer(App);

