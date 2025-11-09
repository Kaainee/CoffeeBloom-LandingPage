import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <section id="contact" className="theme-color">
        <Container>
          <h2 className="text-center mb-5">Hubungi Kami</h2>
          <Row>
            <Col md={5} className="mb-4">
              <h3>Informasi Kontak</h3>
              <p>
                Jangan ragu untuk menghubungi kami melalui detail di bawah ini.
              </p>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt
                  size={35}
                  className="me-4"
                  style={{ color: "var(--color-sun-primary)" }}
                />
                <span>
                  Kampus Politeknik Astra Dormitory, Jalan Gaharu Blok F3 No. 1,
                  Cibatu, Karangbahagia, KAB. BEKASI, KARANGBAHAGIA, JAWA BARAT,
                  ID, 17530
                </span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope
                  size={18}
                  className="me-4"
                  style={{ color: "var(--color-sun-primary)" }}
                />
                <span>CoffeeBloom@gmail.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaPhone
                  size={18}
                  className="me-4"
                  style={{ color: "var(--color-sun-primary)" }}
                />
                <span>+62 851-5661-3591</span>
              </div>
            </Col>
            <Col md={7}>
              <h3>Kirim Pesan</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Nama Anda</Form.Label>
                  <Form.Control type="text" placeholder="Masukkan nama" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukkan Nomor Telepon"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                  <Form.Label>Pesan</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tulis pesan Anda di sini"
                  />
                </Form.Group>
                <Button type="submit" className="btn-sunset">
                  Kirim Pesan
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};
export default Contact;
