import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

const App: React.FC = () => {

  const [showBanner, setShowBanner] = useState(false);

  return (
    <Router>
      <Header />
      {showBanner && <Banner bannerMessage='This is a test Banner Banner Message'/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
