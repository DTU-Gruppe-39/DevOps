import React from 'react';
import logo from './Ionic_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, HashRouter} from "react-router-dom";
import {observer} from "mobx-react";
import './App.css';
import Stakeholders from "./views/stakeholders";
import Usecases from "./views/Usecases"
import Dashboard from "./views/Dashboard";
import TaskOverview from "./views/TaskOverview";
import KanbanTest from "./containers/test/dragdropTest";
import Vision from "./views/Vision";

function App() {
  return (
      <HashRouter>
      <div className="App">
          <div className="topbar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                  <img src={logo} alt="Company logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

              </nav>
          </div>
        {/*</div>*/}


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
        <div className="main">

            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/Stakeholders" component={Stakeholders}/>
            <Route exact path="/Usecases" component={Usecases}/>
            <Route exact path="/Vision" component={Vision}/>
            {/*<Route exact path="/Profile" component={Profile}/>*/}
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

