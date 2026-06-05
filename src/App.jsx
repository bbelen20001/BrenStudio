import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import PortfolioPage from '@/pages/PortfolioPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BlockPage from '@/pages/BlockPage';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/portafolio" element={<PortfolioPage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        <Route path="/block/:id" element={<BlockPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;