import React from 'react';
import logo from './Ionic_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {BrowserRouter as Router, Route, Link, withRouter, Switch, HashRouter} from "react-router-dom";
import {observer} from "mobx-react";
import './App.css';
import Stakeholders from "./views/stakeholders";
import Usecases from "./views/Usecases"
import Events from "./views/Events";
import Status from "./views/Status";
import Profile from "./views/Profile";
import Dashboard from "./views/Dashboard";

function App() {
  return (
      <HashRouter>
      <div className="App">
          <div className="topbar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                  <img src={logo} />
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                </div>
              </nav>
          </div>
        {/*</div>*/}


        <div className="d-flex float-left" id="sidebar">
          <div className="bg-light border-right">
            <div className="sidebar-heading space"></div>
            <div className="list-group list-group-flush">
              <a><Link to="/Dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link></a>
              <a><Link to="/Stakeholders" className="list-group-item list-group-item-action bg-light">Stakeholders</Link></a>
              <a><Link to="/Usecases" className="list-group-item list-group-item-action bg-light">Use cases</Link></a>
              <a><Link to="/Events" className="list-group-item list-group-item-action bg-light">Events</Link></a>
              <a><Link to="/Profile" className="list-group-item list-group-item-action bg-light">Profile</Link></a>
              <a><Link to="/Status" className="list-group-item list-group-item-action bg-light">Status</Link></a>
            </div>
        </div>
        </div>
        <div className="main">

            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/Stakeholders" component={Stakeholders}/>
            <Route exact path="/Usecases" component={Usecases}/>
            <Route exact path="/Events" component={Events}/>
            <Route exact path="/Profile" component={Profile}/>
            <Route exact path="/Status" component={Status}/>


        </div>
        {/*<header className="App-header">*/}
        {/*</header>*/}
      </div>
      </HashRouter>
  );
}
export default observer(App);
const About = withRouter(({history,match})=>{
  console.log(history);
  console.log(match);
  return <div><h1>About {match.params.text}</h1>
    <Button onClick={()=>history.push("/")}>Go to front</Button>
  </div>
});

