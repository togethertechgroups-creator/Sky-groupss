import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/seo/SEOHead';
import HeroSection from '../components/ui/HeroSection';
import BreadCrumb from '../components/ui/BreadCrumb';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import CTABanner from '../components/ui/CTABanner';
import { Target, Award, Users, Gem } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEOHead
        title="About Sky Groups & S.S. Ponnarasan | Tamil Nadu"
        description="Learn about the journey of Sky Groups, founded by S.S. Ponnarasan. We are a trusted name in property, civil works, event management, and business solutions in Tamil Nadu."
      />

      <HeroSection
        heading="About Sky Groups"
        subheading="Built on Excellence, Driven by Integrity."
        bgImage="https://picsum.photos/1920/1080?random=11"
        fullHeight={false}
      />

      <BreadCrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'About Us', path: '/about' }]} />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-sm overflow-hidden shadow-2xl"
            >
              <img src="https://picsum.photos/800/1000?random=12" alt="Corporate Building Sky Groups" className="w-full h-auto object-cover aspect-[4/5]" />
              <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none mix-blend-overlay"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-label text-gold tracking-widest uppercase text-sm font-bold mb-4 block">Our Origin</span>
              <h2 className="font-display font-bold text-4xl text-charcoal mb-6">A Vision for Integrated Excellence</h2>
              <div className="w-16 h-0.5 bg-gold mb-8"></div>

              <div className="space-y-6 font-body text-grey-text text-lg leading-relaxed">
                <p>
                  Sky Groups began with a simple but powerful idea: to offer individuals and businesses in Tamil Nadu a single, reliable hub for their most critical needs. We saw that clients were struggling to find trustworthy partners across different sectors—from constructing a home to marketing a business.
                </p>
                <p>
                  Thus, Sky Groups was born, bringing together experts from real estate, construction, automotive, apparel, event planning, and digital IT into one cohesive unit.
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
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:order-2"
            >
              <div className="border-4 border-gold p-2 md:p-4 rounded-sm bg-white">
                <img src="https://picsum.photos/600/800?random=13" alt="S.S. Ponnarasan" className="w-full h-auto object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-charcoal text-white px-8 py-6 rounded-sm shadow-xl border-l-4 border-gold hidden md:block">
                <span className="block font-display text-xl">- S.S. Ponnarasan</span>
                <span className="block font-label text-gold text-xs tracking-widest mt-1">Founder & Proprietor</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <span className="font-label text-gold tracking-widest uppercase text-sm font-bold mb-4 block">Leadership</span>
              <h2 className="font-display font-bold text-4xl text-charcoal mb-6">Meet S.S. Ponnarasan</h2>
              <div className="w-16 h-0.5 bg-gold mb-8"></div>

              <div className="space-y-6 font-body text-grey-text text-lg leading-relaxed">
                <p>
                  As the founding pillar of Sky Groups, S.S. Ponnarasan has dedicated his career to establishing a benchmark in corporate integrity. Under his leadership, the organization has consistently prioritized client satisfaction above all else.
                </p>
                <div className="p-8 bg-white border border-border italic text-xl border-l-4 border-l-gold shadow-sm my-8">
                  "Our goal is not just to close a deal, but to open a relationship. When you work with Sky Groups, you become part of our extended family."
                </div>
                <p>
                  His hands-on approach ensures that whether it is a massive civil construction project or a bespoke digital campaign, the core values of Sky Groups remain deeply embedded in the execution.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-charcoal mb-4">Our Core Values</h2>
            <div className="h-0.5 w-16 bg-gold mx-auto mb-6"></div>
            <p className="font-body text-grey-text max-w-2xl mx-auto">The principles that guide our everyday operations and decision-making.</p>
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
                className="bg-off-white p-8 rounded-sm text-center border-t-2 border-transparent hover:border-gold transition-colors group shadow-sm"
              >
                <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <val.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">{val.title}</h3>
                <p className="font-body text-grey-text text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-gold text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-charcoal/20">
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
        heading="Experience the SKY A Difference"
        subtext="Join the hundreds of clients who trust us with their most valuable assets and projects."
        ctaText="Get Started Today"
        ctaLink="/contact"
      />
    </>
  );
}
