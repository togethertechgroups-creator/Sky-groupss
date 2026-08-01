import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout & Global Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';
import PageLoader from './components/ui/PageLoader';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
  /* GSAP ScrollTrigger Lightweight Theme Shift Controller */
  useEffect(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const timer = setTimeout(() => {
        const sections = document.querySelectorAll('[data-section-theme]');
        
        sections.forEach((section) => {
          const theme = section.getAttribute('data-section-theme');
          ScrollTrigger.create({
            trigger: section,
            start: 'top 55%',
            end: 'bottom 45%',
            onEnter: () => {
              if (document.documentElement.getAttribute('data-section-theme') !== theme) {
                document.documentElement.setAttribute('data-section-theme', theme);
              }
            },
            onEnterBack: () => {
              if (document.documentElement.getAttribute('data-section-theme') !== theme) {
                document.documentElement.setAttribute('data-section-theme', theme);
              }
            }
          });
        });
      }, 150);

      return () => clearTimeout(timer);
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <main style={{ flexGrow: 1 }}>
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
