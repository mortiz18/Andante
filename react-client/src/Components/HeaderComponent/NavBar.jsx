import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <div>
        <ul class="routeButtons">
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="recipes">Recipes</Link></li>
          <li className="navButton"><Link to="blog">Blog</Link></li>
          <li className="navButton"><Link to="about">About</Link></li>
        </ul>
      </div>
    )
  }
}
export default NavBar;
