import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import GiraffeStore from "./stores/GiraffeStore";
import {observer} from "mobx-react";

const giraffeStore = new GiraffeStore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="d-flex justify-content-between">
        <InputGroup className="mb-3">
          <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
          />
        </InputGroup>
        <Button className="mb-3" variant="primary">Primary</Button>
        </div>
        <p>Windows 120Hz</p>
        <Switch>
          <Route path={"/about/:text"} component={About}/>
          <Route exact path ={"/"} render={ () => <h1>Startside Stress</h1> } />
          <Route render={()=><h1>404</h1>} />
        </Switch>

          <p>
              Nedenstående er giraffer! wgwg
          </p>
        <ul>
          {giraffeStore.giraffes.map((giraffeName, key) =>
          <li key={key}>{giraffeName}</li>)}
        </ul>
        <Button variant="primary" onClick={()=>giraffeStore.giraffes.push("Rasmus")}>Tilføj giraf</Button>
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

