import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import TestimoniPage from "./pages/TestimoniPage";
import ContactPage from "./pages/ContactPage";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <AnimatePresence mode="wait">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
    </AnimatePresence>
  );
}
