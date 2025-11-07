"use client";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

const AppNavbar = () => {
  return (
    <Navbar className="theme-color" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} href="/">
          CoffeeBloom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/about">
              Tentang
            </Nav.Link>
            <Nav.Link as={Link} href="/services">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} href="/testimonials">
              Testimoni
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Hubungi Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppNavbar;
