import React, { Component } from 'react';
import './App.css';
import  instance  from './api'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');

class App extends Component {

  componentDidMount(){
    instance.get('/');
      socket.on('socketToMe', data => console.log(data))
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
