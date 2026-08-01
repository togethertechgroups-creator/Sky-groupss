import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/seo/SEOHead';
import HeroSection from '../components/ui/HeroSection';
import BreadCrumb from '../components/ui/BreadCrumb';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTABanner from '../components/ui/CTABanner';
import { Target, Award, Users, Gem } from 'lucide-react';
import proprietorImg from '../assets/ponnarasan.png';
import aboutCollaborationImg from '../assets/about-collaboration.jpg';
import AnimatedImage from '../components/ui/AnimatedImage';

export default function About() {
  return (
    <>
      <SEOHead
        title="About SKY A Groups | S.S. Ponnarasan Tamil Nadu"
        description="Learn about SKY A Groups founded by S.S. Ponnarasan. Trusted multi-service business group serving Tamil Nadu with expertise across 6 industries."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "name": "About SKY A Groups",
              "url": "https://www.skygroupss.in/about",
              "description": "Learn about SKY A Groups founded by S.S. Ponnarasan"
            },
            {
              "@type": "Person",
              "name": "S.S. Ponnarasan",
              "jobTitle": "Proprietor",
              "worksFor": {
                "@type": "Organization",
                "name": "SKY A Groups"
              },
              "telephone": "+91-9941888840",
              "email": "ponskygroups@gmail.com",
              "url": "https://www.skygroupss.in/about",
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
        heading="About SKY Groups"
        subheading="Built on Excellence, Driven by Integrity."
        bgImage={aboutCollaborationImg}
        fullHeight={false}
      />

      <BreadCrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'About Us', path: '/about' }]} />

      {/* Our Story */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-off-white)' }} data-section-theme="cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', maxWidth: '32rem', margin: '0 auto' }}
            >
              <div 
                style={{
                  border: 'var(--border-brutal-width) solid var(--color-charcoal)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-brutal-hover)',
                  overflow: 'hidden'
                }}
              >
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                  alt="Corporate Building SKY Groups"
                  direction="left"
                  width="600"
                  height="450"
                  style={{ width: '100%', height: 'auto', aspectRatio: '4/3' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="pill-badge" style={{ marginBottom: '0.75rem' }}>— OUR ORIGIN —</span>
              <h2 className="text-section-title" style={{ marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>A Vision for Integrated Excellence</h2>
              <div style={{ height: '4px', width: '4rem', backgroundColor: 'var(--color-gold-primary)', marginBottom: '1.5rem', boxShadow: '2px 2px 0px var(--color-charcoal)' }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '1.05rem', lineHeight: 1.65 }}>
                <p>
                  SKY Groups began with a simple but powerful idea: to offer individuals and businesses in Tamil Nadu a single, reliable hub for their most critical needs. We saw that clients were struggling to find trustworthy partners across different sectors—from constructing a home to marketing a business.
                </p>
                <p>
                  Thus, SKY Groups was born, bringing together experts from real estate, construction, automotive, apparel, event planning, and digital IT into one cohesive unit.
                </p>
                <p>
                  Today, we stand as a beacon of quality in the state. Our relentless pursuit of excellence ensures that every project we deliver carries the hallmark of durability, style, and absolute transparency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proprietor Spotlight */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-white)', position: 'relative' }} data-section-theme="light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', maxWidth: '26rem', margin: '0 auto' }}
            >
              <div 
                style={{
                  border: 'var(--border-brutal-width) solid var(--color-charcoal)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-brutal-gold)',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'var(--color-off-white)'
                }}
              >
                <img
                  src={proprietorImg}
                  alt="S.S. Ponnarasan"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', objectPosition: 'top center' }}
                  loading="lazy"
                  width="400"
                  height="500"
                />
              </div>

              {/* Founder Pill Tag */}
              <div 
                className="pill-badge" 
                style={{ 
                  marginTop: '1rem', 
                  width: '100%', 
                  justifyContent: 'center', 
                  textAlign: 'center', 
                  fontSize: '0.8rem',
                  padding: '0.6rem 1rem'
                }}
              >
                S.S. Ponnarasan (Founder & Proprietor)
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="pill-badge" style={{ marginBottom: '0.75rem' }}>— LEADERSHIP —</span>
              <h2 className="text-section-title" style={{ marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>Meet S.S. Ponnarasan</h2>
              <div style={{ height: '4px', width: '4rem', backgroundColor: 'var(--color-gold-primary)', marginBottom: '1.5rem', boxShadow: '2px 2px 0px var(--color-charcoal)' }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '1.05rem', lineHeight: 1.65 }}>
                <p>
                  As the founding pillar of SKY Groups, S.S. Ponnarasan has dedicated his career to establishing a benchmark in corporate integrity. Under his leadership, the organization has consistently prioritized client satisfaction above all else.
                </p>
                <div className="card-brutal" style={{ padding: '1.5rem', backgroundColor: 'var(--color-off-white)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--color-charcoal)', borderLeft: '6px solid var(--color-gold-primary)', margin: '0.75rem 0' }}>
                  "Our goal is not just to close a deal, but to open a relationship. When you work with SKY Groups, you become part of our extended family."
                </div>
                <p>
                  His hands-on approach ensures that whether it is a massive civil construction project or a bespoke digital campaign, the core values of SKY Groups remain deeply embedded in the execution.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-off-white)' }} data-section-theme="cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="pill-badge">— STANDARDS —</span>
            <h2 className="text-section-title" style={{ marginTop: '0.75rem', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>Our Core Values</h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '1.05rem', marginTop: '0.5rem' }}>The principles that guide our everyday operations and decision-making.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Precision', desc: 'Executing every task with exactness and attention to detail.' },
              { icon: Award, title: 'Quality', desc: 'Using the best materials and talent for exceptional outputs.' },
              { icon: Users, title: 'Collaboration', desc: 'Working closely with clients to bring their vision to life.' },
              { icon: Gem, title: 'Integrity', desc: 'Operating with absolute honesty in every transaction.' }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -2 : 2 }}
                className="card-brutal"
                style={{ padding: '1.75rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: 'var(--radius-card)', backgroundColor: 'var(--color-gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-charcoal)', boxShadow: '3px 3px 0px var(--color-charcoal)' }}>
                  <val.icon style={{ width: '1.6rem', height: '1.6rem' }} />
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  {val.title}
                </h3>
                
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ padding: '3rem 0', backgroundColor: 'var(--color-gold-primary)', color: 'var(--color-charcoal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <AnimatedCounter target="15" suffix="+" label="Years of Excellence" />
            </div>
            <div>
              <AnimatedCounter target="500" suffix="+" label="Satisfied Clients" />
            </div>
            <div>
              <AnimatedCounter target="200" suffix="+" label="Completed Projects" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Experience the Sky Difference"
        subtext="Join the hundreds of clients who trust us with their most valuable assets and projects."
        ctaText="Get Started Today"
        ctaLink="/contact"
      />
    </>
  );
}
