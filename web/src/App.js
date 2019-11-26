import React from 'react';
import logo from './Ionic_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, Switch} from "react-router-dom";
import {observer} from "mobx-react";
import './App.css';
import Stakeholders from "./views/stakeholders";
import Usecases from "./views/Usecases";
import Dashboard from "./views/Dashboard";
import TaskOverview from "./views/TaskOverview";
import Vision from "./views/Vision";
import SecureRoute from "./SecureRoute";
import Login from "./views/Login";
import {authenticationStore} from "./stores/AuthenticationStore";

function App() {
  return (
      <div className="App">
          <div className="topbar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                  <img src={logo} alt="Company logo" />
                  <ul className="navbar-nav ml-auto nav-flex-icons">
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-user"></i> Profile </a>
                          <div className="dropdown-menu dropdown-menu-right dropdown-info"
                               aria-labelledby="navbarDropdownMenuLink-4">
                              <a className="dropdown-item" href="#">My account</a>
                              <a className="dropdown-item" href="#">Log out</a>
                          </div>
                      </li>
                  </ul>
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
                {/*<Route exact path="/TaskOverview" component={KanbanTest}/>*/}
                <Route exact path="/Login" component={Login}/>
            </Switch>
        </div>
        {/*<header className="App-header">*/}
        {/*</header>*/}
      </div>
  );
}
export default observer(App);

