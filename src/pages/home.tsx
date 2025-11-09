import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
    <header id="home" className="hero-image-background">
      <Container className="hero-content text-center">
        <h1 className="text-gold-highlight display-3 fw-bold">CoffeeBloom</h1>
        
        <h3 className="text-white mb-4 fs-4">By Dhonnan</h3>
        <p className="text-white lead fs-4">
          "Setiap roti kami dibuat dengan cinta, kehangatan, dan bahan terbaik.
          Dari adonan pertama hingga panggangan terakhir, kami percaya bahwa
          rasa bahagia dimulai dari gigitan pertama."
        </p>
      </Container>
    </header>
    </motion.div>
  );
}
