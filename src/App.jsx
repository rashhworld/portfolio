import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import './App.css';

import Navbar from './components/includes/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/includes/Footer';
import NotFound from './components/NotFound';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [useLocation()]);

  return null;
};

function App() {
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToDiv = (section) => {
    const ref = eval(`${section}Ref`);
    if (ref && ref.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar scrollToDiv={scrollToDiv} />
      <Routes>
        <Route path='/' element={<Homepage aboutRef={aboutRef} serviceRef={serviceRef} projectRef={projectRef} contactRef={contactRef} scrollToDiv={scrollToDiv} />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// rfce