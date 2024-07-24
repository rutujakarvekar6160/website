import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/image.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'; // Import the CSS file

function Header() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/gold">Gold</Nav.Link>
            <Nav.Link as={Link} to="/silver">Silver</Nav.Link>
            <Nav.Link as={Link} to="/diamond">Diamond</Nav.Link>
            <Nav.Link as={Link} to="/platinum">Platinum</Nav.Link>
            <Nav.Link as={Link} to="/loginpage">LoginPage</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
