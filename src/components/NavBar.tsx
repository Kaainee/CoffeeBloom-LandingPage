import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar className="navbar-theme" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          CoffeeBloom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">
              Tentang
            </Nav.Link>
            <Nav.Link as={Link} to="/Menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/Testimoni">
              Testimoni
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Hubungi Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppNavbar;
