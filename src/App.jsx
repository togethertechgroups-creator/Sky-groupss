import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';
import PageLoader from './components/ui/PageLoader';

// Top-level Pages (Lazy Loaded)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service Pages (Lazy Loaded)
const Property = lazy(() => import('./pages/services/Property'));
const CivilConstruction = lazy(() => import('./pages/services/CivilConstruction'));
const Vehicles = lazy(() => import('./pages/services/Vehicles'));
const TshirtsUniforms = lazy(() => import('./pages/services/TshirtsUniforms'));
const EventManagement = lazy(() => import('./pages/services/EventManagement'));
const WebDesign = lazy(() => import('./pages/services/WebDesign'));
const ManpowerCleaning = lazy(() => import('./pages/services/ManpowerCleaning'));

// Blog Pages (Lazy Loaded)
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-body text-charcoal bg-off-white">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/services/manpower-cleaning" element={<ManpowerCleaning />} />
              
              {/* Blog */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
