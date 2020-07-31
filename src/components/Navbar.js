import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted color="blue">
        <Menu.Item>
            <h2>Food Recipe</h2>
        </Menu.Item>
        <Menu.Item
          position="right"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Link to='/'>Home</Link>  
        </Menu.Item>
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
        <Link to='/about'>About</Link>
        </Menu.Item>
      </Menu>
    )
  }
}