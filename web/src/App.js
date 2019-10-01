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
      <header className="App-header">

      </header>
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

