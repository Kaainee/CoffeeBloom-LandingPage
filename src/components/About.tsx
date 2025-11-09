import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRegBuilding, FaBullseye, FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
    <section id="about" className="theme-color">
      <Container>
        <h2 className="text-center title mb-5">Tentang Kami</h2>
        <Row>
          <Col md={4} className="mb-4 d-flex">
            <Card className="content-card text-center p-4">
              <div className="content-icon-wrapper title ">
                <FaRegBuilding />
              </div>
              <Card.Body>
                <Card.Title as="h3" className="content-card-title title mb-3">
                  Latar Belakang
                </Card.Title>
                <Card.Text>
                  Berawal dari mahasiswa yang sering kejar deadline dan kuliah
                  pagi, kami sadar pentingnya sarapan yang nggak cuma ngenyangin
                  tapi juga bikin semangat balik lagi. Dari situlah CoffeeBloom
                  lahir. tempat di mana aroma roti hangat jadi teman setia
                  sebelum, sesudah, atau bahkan di tengah-tengah kelas yang
                  bikin ngantuk.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 d-flex">
            <Card className="content-card text-center p-4">
              <div className="content-icon-wrapper">
                <FaBullseye />
              </div>
              <Card.Body>
                <Card.Title as="h3" className="content-card-title mb-3">
                  Visi Kami
                </Card.Title>
                <Card.Text>
                  Menjadi bakery lokal terbaik yang dikenal karena rasa
                  autentik, kualitas tinggi, dan pelayanan hangat yang membuat
                  setiap pelanggan merasa seperti di rumah sendiri
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 d-flex">
            <Card className="content-card text-start p-4">
              <div className="content-icon-wrapper">
                <FaTasks />
              </div>
              <Card.Body>
                <Card.Title as="h3" className="content-card-title title mb-3">
                  Misi Kami
                </Card.Title>
                <Card.Text>
                  1. Menggunakan bahan-bahan segar dan alami tanpa pengawet
                  buatan.
                  <br></br>
                  <br></br>
                  2. Mengutamakan proses pembuatan roti secara handmade dengan
                  sentuhan cinta
                  <br></br>
                  <br></br>
                  3. Menyediakan produk roti yang beragam untuk memenuhi selera
                  semua pelanggan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </motion.div>
  );
};
export default About;
