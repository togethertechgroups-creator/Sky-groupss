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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md border-b-2 border-gold/20 ${isScrolled ? 'py-3' : 'py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group py-1 gap-3">
            <img
              src={logoImg}
              alt="SKY Groups Logo"
              className="h-[50px] md:h-[60px] w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="flex flex-col justify-center">
              <span className="font-display text-2xl md:text-3xl font-bold leading-none text-gold tracking-wider group-hover:text-white transition-colors duration-300">
                SKY Groups
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-label uppercase text-sm tracking-wider hover:text-gold transition-colors ${isActive('/') ? 'text-gold' : 'text-charcoal'
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-label uppercase text-sm tracking-wider hover:text-gold transition-colors ${isActive('/about') ? 'text-gold' : 'text-charcoal'
                }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div className={`flex items-center gap-1 font-label uppercase text-sm tracking-wider hover:text-gold transition-colors py-2 ${isServiceActive ? 'text-gold' : 'text-charcoal'
                }`}>
                <Link to="/services">Services</Link>
                <ChevronDown className="w-4 h-4" />
              </div>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-gold pt-2 pb-2 rounded-b-sm transform transition-all">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={service.slug}
                      className="block px-4 py-3 text-sm text-charcoal hover:bg-off-white hover:text-gold transition-colors font-body"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`font-label uppercase text-sm tracking-wider hover:text-gold transition-colors ${isActive('/blog') ? 'text-gold' : 'text-charcoal'
                }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`font-label uppercase text-sm tracking-wider hover:text-gold transition-colors ${isActive('/contact') ? 'text-gold' : 'text-charcoal'
                }`}
            >
              Contact
            </Link>

            <StarBorder
              as={Link}
              to="/contact"
              className="font-label px-6 py-2 text-sm uppercase tracking-wider"
            >
              Get a Quote
            </StarBorder>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-charcoal hover:text-gold transition-colors`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-charcoal shadow-xl border-t border-gold/20 flex flex-col">
          <Link to="/" className="px-6 py-4 text-white hover:text-gold border-b border-white/10 font-label uppercase text-sm">
            Home
          </Link>
          <Link to="/about" className="px-6 py-4 text-white hover:text-gold border-b border-white/10 font-label uppercase text-sm">
            About
          </Link>

          <div className="px-6 py-4 border-b border-white/10">
            <div className="flex justify-between items-center text-white hover:text-gold font-label uppercase text-sm cursor-pointer" onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>
              <Link to="/services">Services</Link>
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            {isServicesDropdownOpen && (
              <div className="mt-4 flex flex-col pl-4 border-l border-gold/30">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.slug}
                    className="py-2 text-white/80 hover:text-gold text-sm font-body"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="px-6 py-4 text-white hover:text-gold border-b border-white/10 font-label uppercase text-sm">
            Blog
          </Link>
          <Link to="/contact" className="px-6 py-4 text-white hover:text-gold border-b border-white/10 font-label uppercase text-sm">
            Contact
          </Link>
          <div className="p-6">
            <StarBorder
              as={Link}
              to="/contact"
              containerClassName="w-full block"
              className="font-label py-3 text-sm uppercase tracking-wider transition-colors"
            >
              Get a Quote
            </StarBorder>
          </div>
        </div>
      )}
    </nav>
  );
}
