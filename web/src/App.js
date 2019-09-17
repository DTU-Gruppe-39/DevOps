import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
        <Route path={"/about"} component={About}/>

          <p>
              Magnus er en luder!
          </p>
      </header>
    </div>
  );
}
export default App;
const About = () => {
  return <div>
  <h1>
    About luder Magnus
  </h1>
</div>};
