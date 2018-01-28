import React, { Component }from 'react'
import { Tabs2, Tab2 } from  '@blueprintjs/core'


class MenuContainer extends Component {

  render() {
    return (
      <Tabs2 onChange={this.props.handleChange}>
        <Tab2 id="mp" title="Map" />
        <Tab2 id="fv" title="Favorites" />
      </Tabs2>
    );
  }
}

export default MenuContainer;