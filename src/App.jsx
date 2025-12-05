import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AuthModal from "./components/AuthModal/AuthModal";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import TherapistList from "./components/TherapistList/TherapistList";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Booking from "./pages/Booking/Booking";

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <Router>
      {/* Navbar with auth modal trigger */}
      <Navbar openAuth={() => setAuthOpen(true)} />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />

      <Routes>
        {/* Landing page sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Testimonials />
              <TherapistList />
              <Gallery />
              <Contact />
            </>
          }
        />

        {/* Booking page */}
        <Route path="/booking" element={<Booking />} />
        {/* Optional: Add booking success page later */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
