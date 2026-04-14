import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/WhatsApp_Image_2026-04-14_at_2.09.37_PM-removebg-preview.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white relative pt-16 border-t-2 border-gold overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none diagonal-cut-top bg-gold mt-10 h-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group gap-3">
              <img 
                src={logoImg} 
                alt="SKY A Groups Logo" 
                className="h-[50px] md:h-[60px] w-auto transition-transform duration-300 group-hover:scale-[1.02]" 
              />
              <div className="flex flex-col justify-center">
                <span className="font-display text-2xl md:text-3xl font-bold leading-none text-gold tracking-wider group-hover:text-white transition-colors duration-300">
                  SKY GROUPS
                </span>
              </div>
            </Link>
            <p className="text-white/70 font-body text-sm leading-relaxed">
              Multiple Solutions, One Trusted Group. Delivering exceptional quality across real estate, civil works, vehicles, branding, events, and digital.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={service.slug} 
                    className="text-white/70 hover:text-gold transition-colors font-body text-sm flex items-center group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-gold transition-colors font-body text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-gold transition-colors font-body text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-gold transition-colors font-body text-sm">Blog & Insights</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-gold transition-colors font-body text-sm">Contact Us</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-gold transition-colors font-body text-sm">All Services</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white border-b border-white/10 pb-2 inline-block">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919941888840" className="flex items-start text-white/70 hover:text-gold transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 text-gold shrink-0" />
                  <span className="font-body text-sm">+91 99418 88840</span>
                </a>
              </li>
              <li>
                <a href="mailto:ponskygroups@gmail.com" className="flex items-start text-white/70 hover:text-gold transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 text-gold shrink-0" />
                  <span className="font-body text-sm break-all">ponskygroups@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919941888840" target="_blank" rel="noopener noreferrer" className="flex items-start text-white/70 hover:text-gold transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5 mr-3 mt-0.5 text-gold shrink-0" />
                  <span className="font-body text-sm">Chat on WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start text-white/70">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-gold shrink-0" />
                <span className="font-body text-sm"> Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/50 font-body text-xs">
            &copy; {currentYear} SKY A Groups. All rights reserved. Managed by S.S. Ponnarasan.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="text-white/50 hover:text-gold text-xs font-body cursor-pointer">Privacy Policy</span>
            <span className="text-white/50 hover:text-gold text-xs font-body cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
