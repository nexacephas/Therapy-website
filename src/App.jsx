import React, { useState } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import AuthModal from "./components/AuthModal/AuthModal";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import TherapistList from "./components/TherapistList/TherapistList";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <Navbar openAuth={() => setAuthOpen(true)} />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <Hero />
      <About />
      <Testimonials />
      <TherapistList />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
