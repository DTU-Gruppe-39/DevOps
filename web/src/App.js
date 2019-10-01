import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {BrowserRouter as Router, Route, Link, withRouter, Switch} from "react-router-dom";
import {observer} from "mobx-react";


function App() {
  return (
      <div className="App">

        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>


        <div className="d-flex" id="wrapper">
        <div className="sidebar">
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading"></div>
            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item list-group-item-action bg-light">Use cases</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Stakeholders</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
              <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
            </div>
          </div>
        </div>
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

