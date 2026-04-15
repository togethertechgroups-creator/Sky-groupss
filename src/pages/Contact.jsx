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
              "openingHours": "Mo-Su 10:00-22:00",
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

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Lead Form */}
            <div>
              <LeadForm formTitle="Send Us a Message" />
            </div>

            {/* Right: Contact Info & Map */}
            <div className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href={SOCIAL_LINKS.phone} className="p-6 bg-white border border-border rounded-sm hover:border-gold transition-colors group flex flex-col items-start cursor-pointer">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold group-hover:text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Phone</h3>
                  <span className="font-body text-grey-text group-hover:text-gold transition-colors">+91 99418 88840</span>
                </a>

                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="p-6 bg-white border border-border rounded-sm hover:border-gold transition-colors group flex flex-col items-start cursor-pointer">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2">WhatsApp</h3>
                  <span className="font-body text-grey-text group-hover:text-green-600 transition-colors">Chat with us</span>
                </a>

                <a href={SOCIAL_LINKS.email} className="p-6 bg-white border border-border rounded-sm hover:border-gold transition-colors group flex flex-col items-start cursor-pointer">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <Mail className="w-5 h-5 text-gold group-hover:text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Email</h3>
                  <span className="font-body text-grey-text group-hover:text-gold transition-colors break-all">ponskygroups@gmail.com</span>
                </a>

                <div className="p-6 bg-white border border-border rounded-sm hover:border-gold transition-colors group flex flex-col items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <Clock className="w-5 h-5 text-gold group-hover:text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Working Hours</h3>
                  <span className="font-body text-grey-text">Mon–Sun:<br />10:00 AM – 10:00 PM</span>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-sm border border-border flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                <MapPin className="w-10 h-10 text-grey-text mb-3" />
                <span className="font-label text-sm uppercase tracking-widest text-grey-text">Location Map Coming Soon</span>
                <span className="font-body text-xs text-grey-text/70 mt-2">Madurai, Tamil Nadu</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
