import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Topbar = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Link to="/" className="navbar-brand">
              BotReminder
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 py-lg-2 pe-3 gap-lg-4 gap-3">
                  <Link to="/" className="nav-link text-dark fs-5">
                    Home
                  </Link>
                  <Link to="/" className="nav-link text-dark fs-5">
                    Features
                  </Link>
                  <Link to="/" className="nav-link text-dark fs-5">
                    Support
                  </Link>
                  <Link to="" className="btn btn-primary fs-5">
                    Login
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Topbar;
