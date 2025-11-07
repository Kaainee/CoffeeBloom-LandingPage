import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../globals.css";

const TestimoniData = [
  {
    id: 1,
    name: "Dhonnan",
    title: "Mahasiswa TRPL, Politeknik Astra",
    comment:
      "Roti di sini selalu Fresh From The Oven!. Garing di luar, lembut di dalam. Jadi favorit buat sarapan di kampus!",
    avatar: "/chef.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sandi",
    title: "Saya Sendiri",
    comment:
      "Dari tampilannya aja udah menggoda banget. Begitu dicoba, perpaduan rasa manis dan gurihnya pas banget. Definitely worth the hype!",
    avatar: "/sandi.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Sapri",
    title: "Saya Pribadi",
    comment:
      "Udah 2 tahun langganan, belum pernah kecewa. Mereka selalu jaga kualitas dan rasa. Setiap gigitan tuh bikin nostalgia ke roti masa kecil.",
    avatar: "/sapri.png",
    rating: 4,
  },
];

const Testimoni = () => {
  return (
    <section id="Testimoni" className="theme-color">
      <h2 className="text-center mb-5 ">Apa Kata Pelanggan Kami</h2>
      <br></br>
      <Container>
        <Row className="justify-content-center">
          {TestimoniData.map((testimonial) => (
            <Col key={testimonial.id} md={4} className="mb-4 d-flex">
              <Card className="testimonial-card">
                <img
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={100}
                  height={100}
                  className="testimonial-avatar"
                />
                <Card.Body>
                  <Card.Title as="h4" className="mt-4">
                    {testimonial.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {testimonial.title}
                  </Card.Subtitle>
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <blockquote className="testimonial-comment">
                    {testimonial.comment}
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Testimoni;
