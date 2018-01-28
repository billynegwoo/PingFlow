import React, { Component } from 'react';
import MenuContainer from './containers/menuContainer';
import {
  Navbar,
  NavbarGroup,
} from "@blueprintjs/core";

import MapContainer from './containers/mapContainer'
import FavoritesContainer from './containers/favoritesContainer'

/*import instance from './api'
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3001');*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 'mp'
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({
      tab: e
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar className="pt-dark">
          <NavbarGroup align="left">
            <MenuContainer handleChange={this.handleChange}/>
          </NavbarGroup>
        </Navbar>
        { this.state.tab === 'mp' ? <MapContainer /> : <FavoritesContainer/> }
      </div>
    );
  }
}

export default App;
