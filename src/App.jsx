import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CompanyOverview from './components/CompanyOverview';
import ProductsSection from './components/ProductsSection';
import VideoSection from './components/VideoSection';
import KeyFeatures from './components/KeyFeatures';
import CommonApplications from './components/CommonApplications';
import MarketsWeServe from './components/MarketsWeServe';
import SupplyCapabilities from './components/SupplyCapabilities';
import Footer from './components/Footer';
import About from './components/About/About';
import ProductNitrile from './components/Products/ProductNitrile';
import ProductLATEX from './components/Products/ProductLATEX';
import CertificationsPage from './components/Supply/CertificationsPage';
import ContactPage from './components/Contact/ContactPage';
import Global from './components/Global/Global';
import ScrollToTop from './components/ScrollToTop';

const Home = () => (
  <main>
    <div id="home">
      <HeroSection />
    </div>
    <div id="about">
      <CompanyOverview />
    </div>
    <div id="products">
      <ProductsSection />
    </div>
    <VideoSection />
    <KeyFeatures />
    <CommonApplications />
    <MarketsWeServe />
    <div id="supply">
      <SupplyCapabilities />
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/nitrile" element={<ProductNitrile />} />
          <Route path="/product/latex" element={<ProductLATEX />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/global" element={<Global />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
