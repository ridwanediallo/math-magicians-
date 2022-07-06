import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigate() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Math Magicians</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <Link to="/" className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#calculator">
              <Link to="/calculator" className="link">
                Calculator
              </Link>
            </Nav.Link>
            <Nav.Link href="#quote">
              <Link to="/quote" className="link">
                Quote
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;
