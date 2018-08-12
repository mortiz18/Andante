import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  NavBar from './NavBar';
class Header extends Component {
  render() {
    return (
      <div class='header'>
        <NavBar/>
        <div className="loginBtns">
          <button className="button" id="logIn">Log In </button>
          <button className="button" id="signUp">Join Us</button>
        </div>
      </div>
    )
  }
}
export default Header;
