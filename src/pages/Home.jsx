import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import homeHeroImg from '../assets/hero_home.png';
import legacyImg from '../assets/rishi-sreekar-aqEhniwDOIU-unsplash.jpg';
import AnimatedImage from '../components/ui/AnimatedImage';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const pillarsRef = useRef(null);
  const statsRef = useRef(null);
  const servicesGridRef = useRef(null);
  const blogGridRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* GSAP ScrollTrigger Stacked Card Peel Sequences */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Stat Counters Peel Sequence
      if (statsRef.current) {
        gsap.fromTo(statsRef.current.children,
          { opacity: 0, y: 50, scale: 0.88, rotate: -3 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // 2. Services Showcase Grid Stacked Peel Timeline
      if (servicesGridRef.current) {
        const cards = servicesGridRef.current.children;
        gsap.fromTo(cards,
          { opacity: 0, y: 70, rotate: (i) => (i % 2 === 0 ? -4 : 4), scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesGridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // 3. Why Us Pillars Stacked Peel Timeline
      if (pillarsRef.current) {
        const pillarCards = pillarsRef.current.querySelectorAll('.pillar-card-peel');
        gsap.fromTo(pillarCards, 
          { y: 80, opacity: 0, rotate: (i) => (i % 2 === 0 ? -5 : 5), scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // 4. Blog Preview Cards Stacked Peel Timeline
      if (blogGridRef.current) {
        const blogCards = blogGridRef.current.children;
        gsap.fromTo(blogCards,
          { opacity: 0, y: 60, rotate: -3, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            stagger: 0.14,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: blogGridRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      mm.revert();
    };
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
        enableCategoryRotator={true}
        trustBadges={[
          { title: "15+ Years Exp" },
          { title: "500+ Clients" },
          { title: "200+ Projects" }
        ]}
      />

      {/* About Strip */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-white)', position: 'relative' }} data-section-theme="light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', maxWidth: '28rem', margin: '0 auto' }}
            >
              <div 
                style={{
                  position: 'relative',
                  border: 'var(--border-brutal-width) solid var(--color-charcoal)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-brutal-hover)',
                  overflow: 'hidden',
                  aspectRatio: '4/3'
                }}
              >
                <AnimatedImage
                  src={legacyImg}
                  alt="SKY Groups Legacy — SKY Groups"
                  direction="scale"
                  containerClassName="w-full h-full"
                  className="object-cover w-full h-full"
                  kenBurns={true}
                  shimmer={true}
                  width="600"
                  height="450"
                />
              </div>
              
              {/* Brutal Story Pill Badge */}
              <div 
                style={{
                  marginTop: '1rem',
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'var(--color-gold-light)',
                  border: 'var(--border-brutal-width) solid var(--color-gold-primary)',
                  boxShadow: 'var(--shadow-brutal-gold)',
                  borderRadius: 'var(--radius-card)',
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem'
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', lineHeight: 1 }}>15+</span>
                <span style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>Years of Trust</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ minWidth: 0 }}
            >
              <h2 className="text-section-title" style={{ marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
                A Legacy of Excellence in Tamil Nadu
              </h2>
              <div style={{ height: '4px', width: '4rem', backgroundColor: 'var(--color-gold-primary)', marginBottom: '1.5rem', boxShadow: '2px 2px 0px var(--color-charcoal)' }}></div>
              
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '1.08rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                Founded by S.S. Ponnarasan, SKY Groups has grown into a versatile powerhouse supporting individuals and businesses across Tamil Nadu. We don't just provide services; we build long-term relationships through unwavering integrity.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '1.08rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                Whether you're investing in property, constructing a home, buying a vehicle, or scaling your digital presence, we deliver premium solutions tailored to your success.
              </p>

              {/* Stat Counters with GSAP Peel Trigger */}
              <div 
                ref={statsRef}
                className="grid grid-cols-3 gap-4"
                style={{
                  borderTop: '2px solid var(--color-border)',
                  paddingTop: '1.5rem'
                }}
              >
                <AnimatedCounter target="15" suffix="+" label="Years Exp" />
                <AnimatedCounter target="500" suffix="+" label="Clients" />
                <AnimatedCounter target="200" suffix="+" label="Projects" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-off-white)' }} data-section-theme="cream">
        <div className="container">
          <SectionHeading
            title="Our Premium Services"
            subtitle="Explore our diverse, high-quality offerings designed to meet all your personal and corporate needs."
            prefix="EXCLUSIVE OFFERINGS"
            centered={true}
          />

          <div
            ref={servicesGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ marginTop: '2rem' }}
          >
            {services.map((service, index) => (
              <div key={service.id}>
                <ServiceCard
                  icon={service.icon}
                  name={service.name}
                  shortDesc={service.shortDesc}
                  slug={service.slug}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Pillars (GSAP ScrollTrigger Stacked Card Peel) */}
      <section 
        style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-charcoal)', color: 'var(--color-white)', position: 'relative', overflow: 'hidden' }} 
        data-section-theme="dark"
      >
        <div className="container">
          <SectionHeading
            title="Why Choose SKY Groups"
            centered={true}
            light={true}
          />

          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: '2rem' }}>
            {[
              { icon: Shield, title: 'Unwavering Trust', desc: 'Every transaction is backed by complete transparency, legal clarity, and ethical business practices.' },
              { icon: Star, title: 'Premium Quality', desc: 'From construction materials to web code, we never compromise on delivering the highest grade of excellence.' },
              { icon: Heart, title: 'Client First', desc: 'We prioritize your vision. S.S. Ponnarasan ensures personal attention is given to every major project.' }
            ].map((pillar, i) => (
              <div
                key={i}
                className="pillar-card-peel card-brutal-gold"
                style={{
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <div 
                  style={{
                    width: '3.75rem',
                    height: '3.75rem',
                    backgroundColor: 'var(--color-gold-primary)',
                    borderRadius: 'var(--radius-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: 'var(--color-charcoal)',
                    boxShadow: '3px 3px 0px var(--color-white)'
                  }}
                >
                  <pillar.icon style={{ width: '2rem', height: '2rem' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-gold-light)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>{pillar.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6, fontSize: '0.98rem' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-white)' }} data-section-theme="light">
        <div className="container">
          <SectionHeading
            title="Client Success Stories"
            centered={true}
          />

          <div 
            className="card-brutal"
            style={{
              maxWidth: '52rem',
              margin: '2rem auto 0 auto',
              padding: '2rem 2rem',
              position: 'relative'
            }}
          >
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}
            >
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-charcoal)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-charcoal)' }}>{testimonials[currentTestimonial].name}</span>
                <span className="pill-badge" style={{ marginTop: '0.35rem', fontSize: '0.68rem' }}>{testimonials[currentTestimonial].service}</span>
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{testimonials[currentTestimonial].location}</span>
              </div>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.75rem' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  style={{
                    width: idx === currentTestimonial ? '1.75rem' : '0.65rem',
                    height: '0.65rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: idx === currentTestimonial ? 'var(--color-gold-primary)' : 'var(--color-border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-white)' }} data-section-theme="light">
        <div className="container-narrow">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common queries about our services, process, and commitment to you."
            centered={true}
          />
          <div style={{ marginTop: '2rem' }}>
            <FAQAccordion faqs={faqs.general} />
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-off-white)', borderTop: '2px solid var(--color-border)' }} data-section-theme="cream">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <SectionHeading
              title="Latest Insights"
              subtitle="Expert advice on property, business, and events."
              prefix="EXPERT INSIGHTS"
            />
            <Link 
              to="/blog" 
              className="pill-badge hidden md:inline-flex"
            >
              View All Articles →
            </Link>
          </div>

          <div ref={blogGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, i) => (
              <div
                key={i}
                className="card-brutal"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <span className="pill-badge" style={{ width: 'fit-content', marginBottom: '1rem', fontSize: '0.65rem' }}>
                  {post.category}
                </span>
                
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {post.title}
                </h3>
                
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', marginBottom: '1.25rem', flexGrow: 1, lineHeight: 1.55, fontSize: '0.95rem' }}>
                  {post.excerpt}
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '0.85rem', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-grey-text)', fontSize: '0.75rem', fontFamily: 'var(--font-label)', fontWeight: 700 }}>
                    <Calendar style={{ width: '0.85rem', height: '0.85rem', color: 'var(--color-gold-primary)' }} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-label)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)' }}>
                    <span>Read More</span>
                    <ChevronRight style={{ width: '1rem', height: '1rem' }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }} className="md:hidden">
            <Link to="/blog" className="pill-badge" style={{ padding: '0.65rem 1.5rem' }}>
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
