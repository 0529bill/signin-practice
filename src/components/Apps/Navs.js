import React from 'react';

import {
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Nav,
} from 'react-bootstrap';

const Navs = () => {
  return (
    <>
      <Navbar className="shadow" collapseOnSelect expand="lg">
        <Navbar.Brand
          href="#home"
          className="m-1"
          style={{ fontSize: '4vh', fontFamily: 'Quicksand,sans-serif' }}
        >
          Flourish
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="mr-auto"></Nav> */}
          <Nav className="ml-auto">
            <Nav.Link href="#Main">Main</Nav.Link>
            <Nav.Link href="#Location">Location</Nav.Link>
            <Nav.Link href="#Contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navs;
