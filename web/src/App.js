import React from 'react';
import logo from './Ionic_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {BrowserRouter as Router, Route, Link, withRouter, Switch} from "react-router-dom";
import {observer} from "mobx-react";
import './App.css';

function App() {
  return (
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
              <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
              <a href="#/stakeholders" className="list-group-item list-group-item-action bg-light">Stakeholders</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Use cases</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
            </div>
        </div>
        </div>
        <div className="main">
            <div className="card"></div>
            <div className="card"></div>
        </div>
        {/*<header className="App-header">*/}
        {/*</header>*/}
      </div>
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

