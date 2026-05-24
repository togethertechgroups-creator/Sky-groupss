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

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Lead Form */}
            <div>
              <LeadForm formTitle="Send Us a Message" />
            </div>

            {/* Right: Contact Info & Map */}
            <div className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Contact Card: Phone */}
                <a href={SOCIAL_LINKS.phone} className="p-6 bg-gradient-to-br from-white/95 to-champagne-gold/25 border border-gold/15 hover:border-gold/35 rounded-2xl transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(160,120,16,0.06)] hover:shadow-[0_20px_50px_rgba(212,160,23,0.18)] hover:-translate-y-1.5 group flex flex-col items-start cursor-pointer relative overflow-hidden">
                  {/* Glare/Shimmer overlay */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>
                  
                  {/* Left Border */}
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold to-gold-dark transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-top z-10"></div>
                  
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 bg-gradient-to-br from-gold/5 to-orange/5 border border-gold/10 group-hover:border-gold/30">
                    <div className="absolute inset-[-3px] rounded-xl border border-dashed border-gold/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out pointer-events-none"></div>
                    <Phone className="w-5 h-5 text-gold group-hover:text-orange transition-all duration-500 relative z-10" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2 group-hover:text-gold transition-colors duration-300 relative z-10">Phone</h3>
                  <span className="font-body text-grey-text text-sm group-hover:text-gold transition-colors relative z-10 font-semibold">+91 99418 88840</span>
                </a>

                {/* Contact Card: WhatsApp */}
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="p-6 bg-gradient-to-br from-white/95 to-champagne-gold/25 border border-gold/15 hover:border-gold/35 rounded-2xl transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(160,120,16,0.06)] hover:shadow-[0_20px_50px_rgba(212,160,23,0.18)] hover:-translate-y-1.5 group flex flex-col items-start cursor-pointer relative overflow-hidden">
                  {/* Glare/Shimmer overlay */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>
                  
                  {/* Left Border */}
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-top z-10"></div>
                  
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 bg-green-500/5 border border-green-500/10 group-hover:border-green-500/30">
                    <div className="absolute inset-[-3px] rounded-xl border border-dashed border-green-500/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out pointer-events-none"></div>
                    <MessageCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-all duration-500 relative z-10" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2 group-hover:text-green-500 transition-colors duration-300 relative z-10">WhatsApp</h3>
                  <span className="font-body text-grey-text text-sm group-hover:text-green-600 transition-colors relative z-10 font-semibold">Chat with us</span>
                </a>

                {/* Contact Card: Email */}
                <a href={SOCIAL_LINKS.email} className="p-6 bg-gradient-to-br from-white/95 to-champagne-gold/25 border border-gold/15 hover:border-gold/35 rounded-2xl transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(160,120,16,0.06)] hover:shadow-[0_20px_50px_rgba(212,160,23,0.18)] hover:-translate-y-1.5 group flex flex-col items-start cursor-pointer relative overflow-hidden">
                  {/* Glare/Shimmer overlay */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>
                  
                  {/* Left Border */}
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold to-gold-dark transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-top z-10"></div>
                  
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 bg-gradient-to-br from-gold/5 to-orange/5 border border-gold/10 group-hover:border-gold/30">
                    <div className="absolute inset-[-3px] rounded-xl border border-dashed border-gold/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out pointer-events-none"></div>
                    <Mail className="w-5 h-5 text-gold group-hover:text-orange transition-all duration-500 relative z-10" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2 group-hover:text-gold transition-colors duration-300 relative z-10">Email</h3>
                  <span className="font-body text-grey-text text-sm group-hover:text-gold transition-colors relative z-10 font-semibold break-all">ponskygroups@gmail.com</span>
                </a>

                {/* Contact Card: Working Hours */}
                <div className="p-6 bg-gradient-to-br from-white/95 to-champagne-gold/25 border border-gold/15 hover:border-gold/35 rounded-2xl transition-all duration-500 shadow-[0_10px_30px_-15px_rgba(160,120,16,0.06)] hover:shadow-[0_20px_50px_rgba(212,160,23,0.18)] hover:-translate-y-1.5 group flex flex-col items-start relative overflow-hidden">
                  {/* Glare/Shimmer overlay */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>
                  
                  {/* Left Border */}
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold to-gold-dark transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-top z-10"></div>
                  
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 bg-gradient-to-br from-gold/5 to-orange/5 border border-gold/10 group-hover:border-gold/30">
                    <div className="absolute inset-[-3px] rounded-xl border border-dashed border-gold/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out pointer-events-none"></div>
                    <Clock className="w-5 h-5 text-gold group-hover:text-orange transition-all duration-500 relative z-10" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2 group-hover:text-gold transition-colors duration-300 relative z-10">Working Hours</h3>
                  <span className="font-body text-grey-text text-sm relative z-10 font-semibold leading-relaxed">Mon–Sun:<br />9:00 AM – 8:30 PM</span>
                </div>
              </div>

              {/* Luxury Location Map Box */}
              <div className="w-full h-64 bg-gradient-to-br from-white/95 to-champagne-gold/25 rounded-2xl border border-gold/15 shadow-md flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold/5 opacity-50 group-hover:opacity-0 transition-opacity"></div>
                {/* Slow spinning dashed outline for the Map icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gold/5 to-orange/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-500 relative overflow-visible z-10 shadow-sm">
                  <div className="absolute inset-[-4px] rounded-2xl border border-dashed border-gold/20 opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out pointer-events-none"></div>
                  <MapPin className="w-7 h-7 text-gold" />
                </div>
                <span className="font-label text-xs font-bold uppercase tracking-widest text-charcoal relative z-10">Location Map Coming Soon</span>
                <span className="font-body text-xs text-grey-text mt-1.5 relative z-10 font-semibold">Madurai, Tamil Nadu</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
