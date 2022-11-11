import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Topbar.css";

const Topbar = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 py-3 navbar-background"
        >
          <Container>
            <Link to="/" className="navbar-brand text-light">
              BotReminder
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-light"
            >
              <Offcanvas.Header
                closeButton
                className="navbar-background"
              ></Offcanvas.Header>
              <Offcanvas.Body className="navbar-background">
                <Nav className="justify-content-end flex-grow-1 py-lg-2 pe-3 gap-lg-4 gap-3">
                  <Link to="/" className="nav-link text-light">
                    Home
                  </Link>
                  <Link to="/" className="nav-link text-light">
                    Features
                  </Link>
                  <Link to="/" className="nav-link text-light">
                    Support
                  </Link>
                  <Link to="/login" className="btn btn-primary">
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
