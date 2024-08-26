// import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Your News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">General</Nav.Link>
            <Nav.Link href="#">Business</Nav.Link>
            <Nav.Link href="#">Sports</Nav.Link>
            <Nav.Link href="#">Science</Nav.Link>
            <Nav.Link href="#">Health</Nav.Link>
            <Nav.Link href="#">Entertainment</Nav.Link>
            <Nav.Link href="#">Technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;