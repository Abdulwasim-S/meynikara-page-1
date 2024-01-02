import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBarComp() {
  return (
    <Navbar expand="lg" className="bg-dark text-light px-5 py-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={logo} alt="logo" height={"40px"} width={"150px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <i className="text-light fa-solid fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse
          className="fs-5 fw-small text-center justify-content-evenly"
          id="navbarScroll"
        >
          <Nav.Link
            className="link border border-5 border-dark mx-5 my-3 opacity-0"
            href="#"
          >
            Contact Us
          </Nav.Link>
          <Nav.Link className="link mx-3 my-3" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="link mx-3 my-3" href="#">
            About Us
          </Nav.Link>
          <Nav.Link className="link mx-3 my-3" href="#">
            Our Services
          </Nav.Link>
          <Nav.Link className="link mx-3 my-3" href="#">
            Downloads
          </Nav.Link>
          <Nav.Link className="link my-3" href="#">
            Contact Us
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
