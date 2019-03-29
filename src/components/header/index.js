import React, { Component } from 'react';
import './index.css';
// import { NavLink } from 'react-router-dom';
import logo from '../../media/images/Mt-Logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
  render() {
    return (
      <Navbar className='nav fixed-top' fixed='top' expand="lg">
        <Navbar.Brand className="navbar-brand logo-container"><img src={logo} alt="Company Logo" /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navbar-brand" href="/">Home</Nav.Link>
            <Nav.Link className="navbar-brand" href="/shop">Shop</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="navbar-brand" href="/cart"><i class="fa fa-shopping-cart"></i></Nav.Link>
            <Nav.Link className="nav-link disabled" href="#">Total: <span className="total">${this.props.total}</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
