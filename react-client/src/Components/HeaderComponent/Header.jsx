import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  NavBar from './NavBar';
class Header extends Component {
  render() {
    return (
      <div class='header'>
        <NavBar/>
      </div>
    )
  }
}
export default Header;
