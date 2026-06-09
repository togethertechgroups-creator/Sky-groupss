import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import HeroSection from '../components/ui/HeroSection';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CTABanner from '../components/ui/CTABanner';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import FAQAccordion from '../components/ui/FAQAccordion';
import { services } from '../data/services';
import { faqs } from '../data/faqs';
import { SOCIAL_LINKS } from '../data/social';
import { testimonials } from '../data/testimonials';
import postsData from '../data/blog-posts.json';
import { Shield, Star, Heart, Calendar, ChevronRight } from 'lucide-react';
import homeHeroImg from '../assets/Business ecosystem with modern elements.png';
import legacyImg from '../assets/rishi-sreekar-aqEhniwDOIU-unsplash.jpg';
import AnimatedImage from '../components/ui/AnimatedImage';

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
        title="Sky Groups Pvt Ltd -Tamilnadu"
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
        subheading="SKY Groups delivers exceptional quality across real estate, civil works, vehicles, branding, events, and digital — all under one trusted name."
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
                <AnimatedImage
                  src={legacyImg}
                  alt="SKY Groups Legacy — SKY Groups"
                  direction="scale"
                  containerClassName="w-full h-full"
                  className="object-cover w-full h-full"
                  kenBurns={true}
                  shimmer={true}
                  width="600"
                  height="600"
                />
                <div className="absolute inset-0 bg-gold/10 pointer-events-none"></div>
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
                Founded by S.S. Ponnarasan, SKY Groups has grown into a versatile powerhouse supporting individuals and businesses across Tamil Nadu. We don't just provide services; we build long-term relationships through unwavering integrity.
              </p>
              <p className="font-body text-grey-text text-lg leading-relaxed mb-12">
                Whether you're investing in property, constructing a home, buying a vehicle, or scaling your digital presence, we deliver premium solutions tailored to your success.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-border pt-8">
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
            prefix="EXCLUSIVE OFFERINGS"
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
            {services.map((service, index) => (
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
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Pillars */}
      <section className="py-24 bg-charcoal text-white relative diagonal-cut-top diagonal-cut-bottom my-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#D4A017 1px, transparent 1px), linear-gradient(90deg, #D4A017 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Floating ambient orbs */}
        <div className="absolute top-10 left-10 w-6 h-6 rounded-full bg-gold/20 blur-md animate-float-up" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-24 right-20 w-4 h-4 rounded-full bg-orange/20 blur-md animate-float-up" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-16 left-1/3 w-3 h-3 rounded-full bg-gold/30 animate-float-up" style={{ animationDelay: '0.8s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Why Choose SKY Groups"
            centered={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { icon: Shield, title: 'Unwavering Trust', desc: 'Every transaction is backed by complete transparency, legal clarity, and ethical business practices.' },
              { icon: Star, title: 'Premium Quality', desc: 'From construction materials to web code, we never compromise on delivering the highest grade of excellence.' },
              { icon: Heart, title: 'Client First', desc: 'We prioritize your vision. S.S. Ponnarasan ensures personal attention is given to every major project.' }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex flex-col items-center text-center p-8 border border-white/10 rounded-2xl hover:border-gold/40 transition-all duration-500 bg-white/5 backdrop-blur-sm hover:bg-white/8 hover:shadow-[0_20px_60px_rgba(212,160,23,0.12)] group"
              >
                {/* Icon with spinning rings */}
                <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                  {/* Outer spinning ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-gold/20 animate-spin-slow"></div>
                  {/* Inner counter-spin ring */}
                  <div className="absolute inset-2 rounded-full border border-dashed border-gold/10 animate-spin-reverse"></div>
                  {/* Icon circle */}
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-orange-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,160,23,0.3)] group-hover:shadow-[0_0_35px_rgba(212,160,23,0.5)] transition-shadow duration-500 animate-glow-pulse">
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300">{pillar.title}</h3>
                <p className="font-body text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{pillar.desc}</p>
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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common queries about our services, process, and commitment to you."
            centered={true}
          />
          <div className="mt-12">
            <FAQAccordion faqs={faqs.general} />
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
              prefix="EXPERT INSIGHTS"
            />
            <Link to="/blog" className="hidden md:inline-flex items-center gap-1.5 font-label text-gold hover:text-orange uppercase tracking-widest text-xs font-bold pb-1.5 border-b border-gold/20 hover:border-orange transition-all mb-12 duration-300">
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-white/95 to-champagne-gold/25 p-8 rounded-2xl transition-all duration-500 relative group overflow-hidden flex flex-col h-full border border-gold/15 hover:border-gold/35 shadow-[0_10px_30px_-15px_rgba(160,120,16,0.06)] hover:shadow-[0_20px_50px_rgba(212,160,23,0.18)] cursor-pointer"
              >
                {/* Luxury Metallic Glare Sweep Overlay */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>

                {/* Dynamic Gold Gradient Border Accent */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-gold via-gold-light to-gold-dark transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-top z-10"></div>

                <span className="bg-gold/10 text-gold border border-gold/25 font-label text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit mb-5 relative z-10 transition-colors duration-300 group-hover:bg-gold/20">
                  {post.category}
                </span>
                
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors duration-300 relative z-10 leading-snug">
                  {post.title}
                </h3>
                
                <p className="font-body text-grey-text mb-6 flex-grow group-hover:text-charcoal transition-colors duration-300 relative z-10 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center border-t border-gold/10 group-hover:border-gold/20 pt-4 mt-auto transition-colors duration-500 relative z-10">
                  <div className="flex items-center gap-1.5 text-grey-text/75 text-xs font-bold font-label uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center font-label text-xs uppercase tracking-widest text-gold group-hover:text-orange transition-colors font-bold">
                    <span>Read More</span>
                    <div className="ml-2 w-5 h-5 rounded-full bg-gold/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 group-hover:text-orange transition-all" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/blog" className="inline-block font-label text-gold uppercase tracking-widest text-sm font-semibold border border-gold/30 px-8 py-3 rounded-full hover:bg-gold/5 transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Work With Us?"
        subtext="Contact SKY Groups today to discuss your next big project. Serving with pride across Tamil Nadu."
        ctaText="Get a Free Quote"
        ctaLink="/contact"
      />
    </>
  );
}
