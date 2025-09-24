import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FallServiceBanner from './components/Banners/FallServiceBanner';

const App: React.FC = () => {

  const showFallBanner = false;

  return (
    <Router>
      <Header />
      {showFallBanner && <FallServiceBanner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
