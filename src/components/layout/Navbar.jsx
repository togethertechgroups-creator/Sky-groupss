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
      {/* Floating Logo Bubble (Left) - Now wraps in glass container when scrolled */}
      <div className={`fixed ${isScrolled ? 'top-3 bg-glass border border-gold/25 shadow-lg px-4 py-1.5 rounded-full backdrop-blur-xl' : 'top-5 bg-transparent border-transparent'} left-4 md:left-8 z-50 transition-all duration-300 flex items-center`}>
        <Link to="/" className="flex items-center gap-3 bg-transparent hover:scale-105 transition-transform duration-300 group">
          <img
            src={logoImg}
            alt="SKY Groups Logo"
            className={`${isScrolled ? 'h-[40px] md:h-[52px]' : 'h-[52px] md:h-[64px]'} w-auto transition-all duration-300 group-hover:scale-110`}
          />
          <div className="flex flex-col justify-center">
            <span className={`font-display font-bold leading-none text-gold tracking-widest transition-all duration-300 ${isScrolled ? 'text-lg md:text-2xl' : 'text-xl md:text-2xl'}`}>
              SKY Groups
            </span>
          </div>
        </Link>
      </div>

      {/* Floating Navigation Pill (Center) - High-end Glass capsule */}
      <div className={`hidden md:flex fixed ${isScrolled ? 'top-3 bg-glass shadow-xl border-gold/25' : 'top-5 bg-glass/85 border-gold/15 shadow-md'} left-1/2 -translate-x-1/2 z-50 transition-all duration-300 items-center backdrop-blur-xl border px-6 py-2.5 rounded-full gap-6 hover:border-gold/45`}>
        <Link
          to="/"
          className={`font-label uppercase text-xs lg:text-sm tracking-widest hover:text-gold transition-colors duration-300 font-bold ${isActive('/') ? 'text-gold' : 'text-charcoal'
            }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`font-label uppercase text-xs lg:text-sm tracking-widest hover:text-gold transition-colors duration-300 font-bold ${isActive('/about') ? 'text-gold' : 'text-charcoal'
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
          <div className={`flex items-center gap-1 font-label uppercase text-xs lg:text-sm tracking-widest hover:text-gold transition-colors duration-300 font-bold py-2 ${isServiceActive ? 'text-gold' : 'text-charcoal'
            }`}>
            <Link to="/services">Services</Link>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 text-gold/80" />
          </div>

          {/* Dropdown Menu - Glass list */}
          {isServicesDropdownOpen && (
            <div className="absolute top-[120%] right-0 w-64 bg-glass backdrop-blur-xl shadow-2xl border border-gold/20 p-2.5 rounded-2xl animate-dropdown z-50">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={service.slug}
                  className="block px-4 py-2.5 text-xs text-charcoal hover:bg-gold/10 hover:text-gold rounded-xl transition-all duration-300 font-bold uppercase tracking-wider"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          to="/blog"
          className={`font-label uppercase text-xs lg:text-sm tracking-widest hover:text-gold transition-colors duration-300 font-bold ${isActive('/blog') ? 'text-gold' : 'text-charcoal'
            }`}
        >
          Blog
        </Link>

        <Link
          to="/contact"
          className={`font-label uppercase text-xs lg:text-sm tracking-widest hover:text-gold transition-colors duration-300 font-bold ${isActive('/contact') ? 'text-gold' : 'text-charcoal'
            }`}
        >
          Contact
        </Link>

        <StarBorder
          as={Link}
          to="/contact"
          containerClassName="!rounded-full shadow-md"
          className="!rounded-full px-5 py-1.5 text-xs uppercase tracking-widest font-bold"
        >
          Get a Quote
        </StarBorder>
      </div>

      {/* Mobile Menu Toggle Bubble (Right) */}
      <div className={`md:hidden fixed ${isScrolled ? 'top-3' : 'top-5'} right-4 z-50 transition-all duration-300`}>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-glass border border-gold/25 p-3 rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-gold transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Drawer Card - Custom Glass layout */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 right-4 left-4 z-40 bg-glass/95 backdrop-blur-xl border border-gold/25 p-6 rounded-2xl shadow-2xl flex flex-col gap-4 animate-drawer max-h-[calc(100vh-7rem)] overflow-y-auto">
          <Link
            to="/"
            className={`px-4 py-3 rounded-xl hover:bg-gold/10 hover:text-gold font-label uppercase text-xs tracking-widest font-bold transition-colors ${isActive('/') ? 'text-gold bg-gold/5' : 'text-charcoal'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-4 py-3 rounded-xl hover:bg-gold/10 hover:text-gold font-label uppercase text-xs tracking-widest font-bold transition-colors ${isActive('/about') ? 'text-gold bg-gold/5' : 'text-charcoal'}`}
          >
            About
          </Link>

          <div className="px-4 py-3 rounded-xl bg-gold/5 border border-gold/10">
            <div
              className="flex justify-between items-center text-charcoal hover:text-gold font-label uppercase text-xs tracking-widest font-bold cursor-pointer"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            >
              <span className={isServiceActive ? 'text-gold' : ''}>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            {isServicesDropdownOpen && (
              <div className="mt-3 flex flex-col gap-2 pl-4 border-l-2 border-gold/20">
                <Link
                  to="/services"
                  className="py-2 text-charcoal hover:text-gold text-xs font-label uppercase tracking-widest font-bold"
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.slug}
                    className="py-2 text-grey-text hover:text-gold text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className={`px-4 py-3 rounded-xl hover:bg-gold/10 hover:text-gold font-label uppercase text-xs tracking-widest font-bold transition-colors ${isActive('/blog') ? 'text-gold bg-gold/5' : 'text-charcoal'}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-3 rounded-xl hover:bg-gold/10 hover:text-gold font-label uppercase text-xs tracking-widest font-bold transition-colors ${isActive('/contact') ? 'text-gold bg-gold/5' : 'text-charcoal'}`}
          >
            Contact
          </Link>

          <div className="pt-2">
            <StarBorder
              as={Link}
              to="/contact"
              containerClassName="w-full !rounded-full shadow-lg"
              className="font-label py-3 text-xs uppercase tracking-widest font-bold !rounded-full transition-colors"
            >
              Get a Quote
            </StarBorder>
          </div>
        </div>
      )}
    </>
  );
}
