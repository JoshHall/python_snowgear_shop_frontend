import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import logo from '../../media/images/Mt-Logo.png';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="navbar-brand logo-container">
          <img src={logo} alt="Company Logo" />
        </div>
        <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLink className="navbar-brand" to='/'>Home <span class="sr-only">(current)</span></NavLink>
          <NavLink className="navbar-brand" to='/shop'>Shop</NavLink>
        </div>
      </nav>
    );
  }
}

export default Header;
