import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import HeroSection from '../components/ui/HeroSection';
import BreadCrumb from '../components/ui/BreadCrumb';
import LeadForm from '../components/ui/LeadForm';
import { SOCIAL_LINKS } from '../data/social';
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact SKY A Groups | Call 9941888840"
        description="Contact SKY A Groups by S.S. Ponnarasan. Call or WhatsApp 9941888840 or email ponskygroups@gmail.com for all service enquiries."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "ContactPage", "url": "https://www.skygroupss.in/contact" },
            {
              "@type": "LocalBusiness",
              "name": "SKY A Groups",
              "telephone": "+91-9941888840",
              "email": "ponskygroups@gmail.com",
              "url": "https://www.skygroupss.in",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Su 09:00-20:30",
              "priceRange": "₹₹"
            }
          ]
        }}
      />

      <HeroSection
        heading="Get In Touch With SKY Groups"
        subheading="We are here to help you build, grow, and manage your business. Reach out to us for any inquiries."
        bgImage="https://picsum.photos/1920/1080?random=30"
        fullHeight={false}
      />

      <BreadCrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]} />

      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-off-white)' }} data-section-theme="cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Lead Form */}
            <div>
              <LeadForm formTitle="Send Us a Message" />
            </div>

            {/* Right: Contact Info & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Card: Phone */}
                <a href={SOCIAL_LINKS.phone} className="card-brutal" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-card)', backgroundColor: 'var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
                    <Phone style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>Phone</h3>
                  <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '0.95rem', fontWeight: 600 }}>+91 99418 88840</span>
                </a>

                {/* Contact Card: WhatsApp */}
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="card-brutal" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-card)', backgroundColor: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#ffffff' }}>
                    <MessageCircle style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>WhatsApp</h3>
                  <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '0.95rem', fontWeight: 600 }}>Chat with us</span>
                </a>

                {/* Contact Card: Email */}
                <a href={SOCIAL_LINKS.email} className="card-brutal" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-card)', backgroundColor: 'var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
                    <Mail style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>Email</h3>
                  <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '0.9rem', fontWeight: 600, wordBreak: 'break-all' }}>ponskygroups@gmail.com</span>
                </a>

                {/* Contact Card: Working Hours */}
                <div className="card-brutal" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-card)', backgroundColor: 'var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
                    <Clock style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>Working Hours</h3>
                  <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.5 }}>Mon–Sun:<br />9:00 AM – 8:30 PM</span>
                </div>
              </div>

              {/* Location Map Box */}
              <div className="card-brutal" style={{ padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: 'var(--radius-card)', backgroundColor: 'var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--color-charcoal)' }}>
                  <MapPin style={{ width: '1.75rem', height: '1.75rem' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>Location Map Coming Soon</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-grey-text)', marginTop: '0.35rem' }}>Madurai, Tamil Nadu</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
