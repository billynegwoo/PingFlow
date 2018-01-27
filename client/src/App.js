import React, { Component } from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button,
  EditableText
} from "@blueprintjs/core";
/*import instance from './api'
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');*/

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarGroup>
            <NavbarHeading>PingFlow</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align="right">
            <input className="pt-input" type="search"/>
          </NavbarGroup>
        </Navbar>
      </div>
    );
  }
}

export default App;
