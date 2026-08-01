import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { SOCIAL_LINKS } from '../../data/social';
import { Phone, Mail, MessageCircle, MapPin, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import logoImg from '../../assets/WhatsApp_Image_2026-04-14_at_2.09.37_PM-removebg-preview.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper" data-section-theme="dark">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" style={{ marginBottom: '3rem' }}>

          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src={logoImg}
                alt="SKY Groups Logo"
                style={{ height: '52px', width: 'auto' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-gold-primary)', letterSpacing: '0.05em' }}>
                  SKY Groups
                </span>
              </div>
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Multiple Solutions, One Trusted Group. Delivering exceptional quality across real estate, civil works, vehicles, branding, events, and digital.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-white)', borderBottom: '2px solid var(--color-gold-primary)', paddingBottom: '0.35rem', display: 'inline-block' }}>Our Services</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.slug}
                    style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-white)', borderBottom: '2px solid var(--color-gold-primary)', paddingBottom: '0.35rem', display: 'inline-block' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>About Us</Link></li>
              <li><Link to="/blog" style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Blog & Insights</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Contact Us</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>All Services</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-white)', borderBottom: '2px solid var(--color-gold-primary)', paddingBottom: '0.35rem', display: 'inline-block' }}>Get In Touch</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <a href={SOCIAL_LINKS.phone} style={{ display: 'flex', alignItems: 'flex-start', color: 'rgba(255, 255, 255, 0.75)' }}>
                  <Phone style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', marginTop: '0.15rem', color: 'var(--color-gold-primary)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>+91 99418 88840</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.email} style={{ display: 'flex', alignItems: 'flex-start', color: 'rgba(255, 255, 255, 0.75)' }}>
                  <Mail style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', marginTop: '0.15rem', color: 'var(--color-gold-primary)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', wordBreak: 'break-all' }}>ponskygroups@gmail.com</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', color: 'rgba(255, 255, 255, 0.75)' }}>
                  <MessageCircle style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', marginTop: '0.15rem', color: 'var(--color-gold-primary)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Chat on WhatsApp</span>
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', color: 'rgba(255, 255, 255, 0.75)' }}>
                <MapPin style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', marginTop: '0.15rem', color: 'var(--color-gold-primary)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}> Tamil Nadu, India</span>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" style={{ width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-white)' }} aria-label="Facebook">
                <Facebook style={{ width: '1rem', height: '1rem' }} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" style={{ width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-white)' }} aria-label="Instagram">
                <Instagram style={{ width: '1rem', height: '1rem' }} />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" style={{ width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-white)' }} aria-label="YouTube">
                <Youtube style={{ width: '1rem', height: '1rem' }} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={{ width: '2rem', height: '2rem', borderRadius: '50%', border: '1px solid var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-white)' }} aria-label="LinkedIn">
                <Linkedin style={{ width: '1rem', height: '1rem' }} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem 0', textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>
            &copy; {currentYear} SKY Groups. All rights reserved. Managed by S.S. Ponnarasan.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>Privacy Policy</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
