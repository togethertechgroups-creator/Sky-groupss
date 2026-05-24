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
      <section className="py-24 bg-off-white relative overflow-hidden bg-mesh-pattern">
        {/* Glowing aura halo background */}
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Double-offset Luxury Image Frame */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group max-w-md mx-auto w-full"
            >
              {/* Gold secondary offset frame */}
              <div className="absolute inset-4 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 border border-gold/40 rounded-2xl group-hover:translate-x-3 group-hover:translate-y-3 md:group-hover:translate-x-6 md:group-hover:translate-y-6 transition-transform duration-500 ease-out z-0"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 bg-white p-2.5 z-10">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                  alt="Corporate Building SKY Groups"
                  direction="left"
                  containerClassName="w-full aspect-[4/5] rounded-xl overflow-hidden"
                  className="object-cover w-full h-full aspect-[4/5]"
                  kenBurns={true}
                  shimmer={true}
                />
                <div className="absolute inset-0 bg-gold/5 mix-blend-overlay pointer-events-none"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-label text-gold tracking-[0.3em] uppercase text-[10px] font-bold mb-4 block">— OUR ORIGIN —</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal mb-6 leading-tight">A Vision for Integrated Excellence</h2>
              <div className="h-0.5 w-16 bg-gradient-to-r from-gold to-orange mb-8"></div>

              <div className="space-y-6 font-body text-grey-text text-lg leading-relaxed">
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
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Gold blur ambient aura */}
        <div className="absolute bottom-[-10%] left-[-15%] w-[45%] h-[45%] rounded-full bg-gold/5 blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Double-offset spotlight image frame */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 lg:order-1 group max-w-xs mx-auto w-full"
            >
              {/* Floating bob animation wrapper */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Pulsing golden glow ring */}
                <motion.div
                  animate={{ boxShadow: ['0 0 0px 0px rgba(212,160,23,0)', '0 0 24px 6px rgba(212,160,23,0.22)', '0 0 0px 0px rgba(212,160,23,0)'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-2xl z-0 pointer-events-none"
                ></motion.div>

                <div className="absolute inset-4 -translate-x-2 translate-y-2 md:-translate-x-4 md:translate-y-4 border border-gold/40 rounded-2xl group-hover:-translate-x-3 group-hover:translate-y-3 md:group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500 ease-out z-0"></div>

                <div className="relative rounded-2xl border border-gold/25 p-2.5 bg-glass shadow-2xl z-10 overflow-hidden group-hover:border-gold/50 transition-colors duration-500">
                  <img
                    src={proprietorImg}
                    alt="S.S. Ponnarasan"
                    className="w-full h-auto object-cover rounded-xl transition-all duration-700 aspect-[3/4] brightness-95 group-hover:brightness-105 group-hover:scale-105 transform"
                    loading="lazy"
                    width="320"
                    height="427"
                  />
                  {/* Warm golden light sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/8 to-orange/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                  {/* Bottom vignette for depth */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/20 to-transparent rounded-b-xl pointer-events-none"></div>
                </div>

                {/* Founder Tag - High-end Glass Dark Capsule */}
                <div className="absolute -bottom-6 -left-6 bg-glass-dark text-white px-6 py-4 rounded-2xl shadow-2xl border-l-4 border-gold z-20 hidden md:block backdrop-blur-xl">
                  <span className="block font-display text-lg font-bold tracking-wide">- S.S. Ponnarasan</span>
                  <span className="block font-label text-gold text-[10px] tracking-[0.25em] font-bold uppercase mt-1">Founder &amp; Proprietor</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="font-label text-gold tracking-[0.3em] uppercase text-[10px] font-bold mb-4 block">— LEADERSHIP —</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-charcoal mb-6 leading-tight">Meet S.S. Ponnarasan</h2>
              <div className="h-0.5 w-16 bg-gradient-to-r from-gold to-orange mb-8"></div>

              <div className="space-y-6 font-body text-grey-text text-lg leading-relaxed">
                <p>
                  As the founding pillar of SKY Groups, S.S. Ponnarasan has dedicated his career to establishing a benchmark in corporate integrity. Under his leadership, the organization has consistently prioritized client satisfaction above all else.
                </p>
                {/* Elevated Glassmorphic Quote block */}
                <div className="p-8 bg-gradient-to-br from-gold/5 to-orange/5 border border-gold/15 border-l-4 border-l-gold shadow-md my-8 rounded-2xl italic text-xl text-charcoal leading-relaxed relative overflow-hidden">
                  <div className="absolute top-2 right-4 text-gold/10 font-serif text-8xl pointer-events-none select-none">“</div>
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
      <section className="py-24 bg-off-white border-t border-gold/10 bg-mesh-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="font-label text-gold tracking-[0.3em] uppercase text-[10px] font-bold mb-4 block">— STANDARDS —</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-4">Our Core Values</h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-gold to-orange mx-auto mb-6"></div>
            <p className="font-body text-grey-text max-w-2xl mx-auto text-lg mt-2">The principles that guide our everyday operations and decision-making.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-gradient-to-br from-white/95 to-champagne-gold/25 p-8 rounded-2xl text-center border border-gold/15 hover:border-gold/35 shadow-[0_10px_30px_-15px_rgba(160,120,16,0.06)] hover:shadow-[0_20px_50px_rgba(212,160,23,0.18)] transition-all duration-500 relative overflow-hidden group flex flex-col items-center"
              >
                {/* Luxury Metallic Glare Sweep Overlay */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>

                {/* Concentric spin dashed frame */}
                <div className="w-16 h-16 bg-gradient-to-br from-gold/5 to-orange/5 border border-gold/10 group-hover:border-gold/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500 relative overflow-visible z-10">
                  <div className="absolute inset-[-4px] rounded-2xl border border-dashed border-gold/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out"></div>
                  <val.icon className="w-6 h-6 text-gold group-hover:text-orange transition-colors" />
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300 relative z-10">
                  {val.title}
                </h3>
                
                <p className="font-body text-grey-text text-sm leading-relaxed relative z-10 group-hover:text-charcoal transition-colors">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-charcoal shadow-xl border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-charcoal/15">
            <div className="py-4">
              <AnimatedCounter target="15" suffix="+" label="Years of Excellence" />
            </div>
            <div className="py-4">
              <AnimatedCounter target="500" suffix="+" label="Satisfied Clients" />
            </div>
            <div className="py-4">
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
