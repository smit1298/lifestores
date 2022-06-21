import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavHead = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LifeStores</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id=" responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Drugs" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Malaria</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Headache
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cough </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Catarrh </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHead;
