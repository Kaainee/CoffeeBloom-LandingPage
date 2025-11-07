import { Container, Row, Col, Card } from "react-bootstrap";

const Menu = () => {
  return (
    <section id="Menu" className="theme-color">
      <Container>
        <h2 className="text-center mb-5">Best Seller</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-5 d-flex">
            <Card className="content-card text-center">
              <div className=" mt-2">
                <img src="/ori.jpg" alt="ori" className="menu-image img-fluid" />
              </div>
              <Card.Body className="pt-4">
                <Card.Title as="h3" className="content-card-title mb-3">
                  Original Coffee Bun
                </Card.Title>
                <Card.Text>
                  Roti Lembut dengan Cream Kopi isian Margarine klasik gurih
                  yang menggoda selera
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-5 d-flex">
            <Card className="content-card text-center">
              <div className=" mt-2">
                <img src="/keju.jpg" alt="keju" className="menu-image img-fluid" />
              </div>
              <Card.Body className="pt-4">
                <Card.Title as="h3" className="content-card-title mb-3">
                  Cheese Coffee bun
                </Card.Title>
                <Card.Text>
                  Roti Lembut dengan Cream Kopi isian Keju melt yang creamy
                  gurih dan bikin kecanduan
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-5 d-flex">
            <Card className="content-card text-center">
              <div className=" mt-2">
                <img src="/coklat.jpg" alt="coklat" className="menu-image img-fluid" />
              </div>
              <Card.Body className="pt-4">
                <Card.Title as="h3" className="content-card-title mb-3">
                  Chocolate Coffee bun
                </Card.Title>
                <Card.Text>
                  Roti Lembut dengan Cream Kopi isian Chocolate melt manis dan
                  lezat
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Menu;
