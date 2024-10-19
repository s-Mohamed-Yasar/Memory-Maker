import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/App.css";
import downimage from "../assets/images/gallary_icon.svg";

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <div className="header-img">
            <img src={downimage}></img>
          </div>
          <Navbar.Brand>Memory Maker</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/home">
              <h6 style={{ color: "white" }}>Home</h6>
            </Nav.Link>
            <Nav.Link href="/creater">
              <h6 style={{ color: "white" }}>Create Album</h6>
            </Nav.Link>
            <Nav.Link href="/album">
              <h6 style={{ color: "white" }}>Collections</h6>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
