import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Footer from "./components/footer";
import { ServicesData } from "./data/servicesData";

import About from "./pages/about";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
              x: 1000,
            },
            pageAnimate: {
              opacity: 1,
              x: 0,
            },
            pageExit: {
              opacity: 0,
              x: -1000,
              transition: { duration: 0.5 },
            },
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/services"
              element={<Services data={ServicesData} />}
            />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
