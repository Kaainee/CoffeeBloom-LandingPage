import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="theme-color navbar-dark py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>CoffeeBloom</h5>
            <p>Making good bread since 2025.</p>
          </Col>
          <Col md={3}>
            <h5>Contact Info</h5>
            <p>Email: CoffeeBloom@gmail.com</p>
            <p>Phone: +62 851-5661-3591</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-3">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Kelompok 2. All rights reserved
              for tugas.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
