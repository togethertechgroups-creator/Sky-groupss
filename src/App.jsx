import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';

// Top-level Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Service Pages
import Property from './pages/services/Property';
import CivilConstruction from './pages/services/CivilConstruction';
import Vehicles from './pages/services/Vehicles';
import TshirtsUniforms from './pages/services/TshirtsUniforms';
import EventManagement from './pages/services/EventManagement';
import WebDesign from './pages/services/WebDesign';

// Blog Pages
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-body text-charcoal bg-off-white">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/property" element={<Property />} />
            <Route path="/services/civil-construction" element={<CivilConstruction />} />
            <Route path="/services/vehicles" element={<Vehicles />} />
            <Route path="/services/tshirts-uniforms" element={<TshirtsUniforms />} />
            <Route path="/services/event-management" element={<EventManagement />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            
            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
