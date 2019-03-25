import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import logo from '../../media/images/Mt-Logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
  render() {
    return (
      <Navbar className='nav fixed-top' fixed='top' bg="dark"  varient='dark' expand="lg">
        <Navbar.Brand className="navbar-brand logo-container"><img src={logo} alt="Company Logo" /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navbar-brand" href="/">Home</Nav.Link>
            <Nav.Link className="navbar-brand" href="/shop">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
