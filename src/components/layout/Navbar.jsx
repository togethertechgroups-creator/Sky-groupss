import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useScrollNavbar } from '../../hooks/useScrollNavbar';
import { services } from '../../data/services';
import logoImg from '../../assets/WhatsApp_Image_2026-04-14_at_2.09.37_PM-removebg-preview.png';
import StarBorder from '../ui/StarBorder';

export default function Navbar() {
  const isScrolled = useScrollNavbar(50);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith('/services');

  return (
    <>
      {/* Floating Logo Bubble (Left) */}
      <div className={`navbar-logo-container ${isScrolled ? 'navbar-logo-scrolled' : 'navbar-logo-unscrolled'}`}>
        <Link to="/" className="navbar-logo-link">
          <img
            src={logoImg}
            alt="SKY Groups Logo"
            className="navbar-logo-img"
            style={{ height: isScrolled ? '34px' : '44px' }}
          />
          <div className="flex flex-col justify-center">
            <span className="navbar-logo-text" style={{ fontSize: isScrolled ? '1.15rem' : '1.35rem' }}>
              SKY Groups
            </span>
          </div>
        </Link>
      </div>

      {/* Floating Navigation Pill (Center) */}
      <div className={`navbar-pill ${isScrolled ? 'navbar-pill-scrolled' : 'navbar-pill-unscrolled'}`}>
        <Link
          to="/"
          className={`navbar-link ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
        >
          About
        </Link>

        {/* Services Dropdown */}
        <div
          className="navbar-dropdown-container"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <div className={`navbar-link navbar-dropdown-trigger ${isServiceActive ? 'active' : ''}`}>
            <Link to="/services">Services</Link>
            <ChevronDown style={{ width: '16px', height: '16px', color: 'var(--color-gold-primary)' }} />
          </div>

          {/* Dropdown Menu */}
          {isServicesDropdownOpen && (
            <div className="navbar-dropdown-menu">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={service.slug}
                  className="navbar-dropdown-item"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          to="/blog"
          className={`navbar-link ${isActive('/blog') ? 'active' : ''}`}
        >
          Blog
        </Link>

        <Link
          to="/contact"
          className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
        >
          Contact
        </Link>

        <StarBorder
          as={Link}
          to="/contact"
          className="navbar-link"
          style={{ padding: '0.4rem 1.25rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem' }}
        >
          Get a Quote
        </StarBorder>
      </div>

      {/* Mobile Menu Toggle Button (Right) */}
      <div className="md:hidden" style={{ position: 'fixed', top: isScrolled ? '0.75rem' : '1.25rem', right: '1rem', zIndex: 50 }}>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-toggle-btn"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X style={{ width: '20px', height: '20px', color: 'var(--color-gold-primary)' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>

          <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-off-white)' }}>
            <div
              className="flex justify-between items-center cursor-pointer"
              style={{ fontFamily: 'var(--font-label)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              <span className={isServiceActive ? 'text-gold' : ''}>Services</span>
              <ChevronDown style={{ width: '16px', height: '16px', transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </div>
            {isServicesDropdownOpen && (
              <div className="flex flex-col gap-2" style={{ marginTop: '0.75rem', paddingLeft: '1rem', borderLeft: '2px solid var(--color-gold-primary)' }}>
                <Link to="/services" className="mobile-nav-link">All Services</Link>
                {services.map((service) => (
                  <Link key={service.id} to={service.slug} className="mobile-nav-link" style={{ fontSize: '0.75rem' }}>
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className={`mobile-nav-link ${isActive('/blog') ? 'active' : ''}`}>
            Blog
          </Link>
          <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Contact
          </Link>

          <div style={{ paddingTop: '0.5rem' }}>
            <StarBorder
              as={Link}
              to="/contact"
              style={{ width: '100%', textAlign: 'center', padding: '0.75rem', borderRadius: 'var(--radius-pill)' }}
            >
              Get a Quote
            </StarBorder>
          </div>
        </div>
      )}
    </>
  );
}
