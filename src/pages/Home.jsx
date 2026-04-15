import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import HeroSection from '../components/ui/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CTABanner from '../components/ui/CTABanner';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { services } from '../data/services';
import { SOCIAL_LINKS } from '../data/social';
import { testimonials } from '../data/testimonials';
import postsData from '../data/blog-posts.json';
import { Shield, Star, Heart } from 'lucide-react';
import homeHeroImg from '../assets/Business ecosystem with modern elements.png';
import legacyImg from '../assets/rishi-sreekar-aqEhniwDOIU-unsplash.jpg';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const recentPosts = postsData.slice(0, 3);

  return (
    <>
      <SEOHead
        title="SKY A Groups | Multi-Service Business Tamil Nadu"
        description="SKY A Groups offers property, construction, car sales, uniforms, events & web design across Tamil Nadu. Call S.S. Ponnarasan: 9941888840."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "name": "SKY A Groups",
              "url": "https://www.skygroupss.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.skygroupss.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "Organization",
              "name": "SKY A Groups",
              "url": "https://www.skygroupss.in",
              "logo": "https://www.skygroupss.in/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9941888840",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/skyagroups",
                "https://www.instagram.com/skyagroups"
              ]
            },
            {
              "@type": "LocalBusiness",
              "name": "SKY A Groups",
              "telephone": "+91-9941888840",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
            }
          ]
        }}
      />

      <HeroSection
        heading="Your Trusted Partner for Property, Construction & Business"
        subheading="Sky Groups delivers exceptional quality across real estate, civil works, vehicles, branding, events, and digital — all under one trusted name."
        bgImage={homeHeroImg}
        mainCtaText="Explore Services"
        mainCtaLink="/services"
        secondaryCtaText="WhatsApp Us"
        secondaryCtaLink={SOCIAL_LINKS.whatsapp}
        fullHeight={true}
      />

      {/* About Strip */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden rounded-sm">
                <img 
                  src={legacyImg} 
                  alt="Sky Groups Excellence" 
                  className="object-cover w-full h-full" 
                  loading="lazy"
                  width="600"
                  height="600"
                />
                <div className="absolute inset-0 bg-gold/10"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-charcoal text-gold flex flex-col justify-center items-center rounded-sm shadow-2xl p-6 hidden md:flex border-t-4 border-gold">
                <span className="font-display font-bold text-5xl mb-2">15+</span>
                <span className="font-label text-xs uppercase tracking-widest text-center">Years of Trust</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-bold text-4xl mb-6 text-charcoal">A Legacy of Excellence in Tamil Nadu</h2>
              <div className="h-0.5 w-16 bg-gold mb-8"></div>
              <p className="font-body text-grey-text text-lg leading-relaxed mb-6">
                Founded by S.S. Ponnarasan, Sky Groups has grown into a versatile powerhouse supporting individuals and businesses across Tamil Nadu. We don't just provide services; we build long-term relationships through unwavering integrity.
              </p>
              <p className="font-body text-grey-text text-lg leading-relaxed mb-12">
                Whether you're investing in property, constructing a home, buying a vehicle, or scaling your digital presence, we deliver premium solutions tailored to your success.
              </p>

              <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
                <AnimatedCounter target="15" suffix="+" label="Years Exp" />
                <AnimatedCounter target="500" suffix="+" label="Clients" />
                <AnimatedCounter target="200" suffix="+" label="Projects" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Premium Services"
            subtitle="Explore our diverse, high-quality offerings designed to meet all your personal and corporate needs."
            centered={true}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  name={service.name}
                  shortDesc={service.shortDesc}
                  slug={service.slug}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Pillars */}
      <section className="py-24 bg-charcoal text-white relative diagonal-cut-top diagonal-cut-bottom my-12">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#D4A017 1px, transparent 1px), linear-gradient(90deg, #D4A017 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Why Choose Sky Groups"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { icon: Shield, title: 'Unwavering Trust', desc: 'Every transaction is backed by complete transparency, legal clarity, and ethical business practices.' },
              { icon: Star, title: 'Premium Quality', desc: 'From construction materials to web code, we never compromise on delivering the highest grade of excellence.' },
              { icon: Heart, title: 'Client First', desc: 'We prioritize your vision. S.S. Ponnarasan ensures personal attention is given to every major project.' }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center p-8 border border-white/10 rounded-sm hover:border-gold/50 transition-colors bg-white/5 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="font-body text-white/70 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Client Success Stories"
            centered={true}
          />

          <div className="relative max-w-4xl mx-auto mt-12 bg-off-white p-12 rounded-sm shadow-lg border-t-4 border-gold">
            <div className="absolute top-8 left-8 text-gold opacity-20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" /></svg>
            </div>

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 text-center px-4"
            >
              <p className="font-body text-xl md:text-2xl text-grey-text italic leading-relaxed mb-8">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex flex-col items-center">
                <span className="font-heading font-bold text-xl text-charcoal">{testimonials[currentTestimonial].name}</span>
                <span className="font-label uppercase text-gold text-xs tracking-widest mt-1">{testimonials[currentTestimonial].service}</span>
                <span className="font-body text-grey-text/70 text-sm mt-1">{testimonials[currentTestimonial].location}</span>
              </div>
            </motion.div>

            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentTestimonial ? 'bg-gold w-8' : 'bg-border'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-off-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading
              title="Latest Insights"
              subtitle="Expert advice on property, business, and events."
            />
            <Link to="/blog" className="hidden md:block font-label text-gold hover:text-orange uppercase tracking-widest text-sm font-semibold mb-12">
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border p-8 rounded-sm hover:border-gold transition-colors group flex flex-col h-full shadow-sm hover:shadow-md"
              >
                <span className="bg-gold/10 text-gold font-label text-xs uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
                  {post.category}
                </span>
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="font-body text-grey-text mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center border-t border-border pt-4 mt-auto">
                  <span className="font-body text-grey-text/70 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <Link to={`/blog/${post.slug}`} className="font-label text-gold text-sm tracking-wider uppercase font-semibold group-hover:text-orange transition-colors">
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link to="/blog" className="inline-block font-label text-gold uppercase tracking-widest text-sm font-semibold border border-gold px-8 py-3 rounded-sm">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Work With Us?"
        subtext="Contact Sky Groups today to discuss your next big project. Serving with pride across Tamil Nadu."
        ctaText="Get a Free Quote"
        ctaLink="/contact"
      />
    </>
  );
}
