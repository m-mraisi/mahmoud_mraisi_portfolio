import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import resume from "../assets/Mahmoud_Mraisi_Resume.pdf";

function CollapsibleExample() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      onToggle={() => setExpanded(!expanded)}
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          onClick={() => setExpanded(expanded && !expanded)}
        >
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          onClick={() => setExpanded(expanded && !expanded)}
        >
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to="/work">
              Work
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to={resume} target="_blank">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
