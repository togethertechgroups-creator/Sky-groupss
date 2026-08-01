import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/seo/SEOHead';
import HeroSection from '../components/ui/HeroSection';
import BreadCrumb from '../components/ui/BreadCrumb';
import ServiceCard from '../components/ui/ServiceCard';
import CTABanner from '../components/ui/CTABanner';
import { services } from '../data/services';
import servicesHeroImg from '../assets/hero_web_design.png';

export default function Services() {
  return (
    <>
      <SEOHead
        title="Our Services | SKY A Groups Tamil Nadu"
        description="SKY A Groups offers property, construction, car sales, uniforms, events & web design across Tamil Nadu. Call 9941888840."
      />

      <HeroSection
        heading="What We Offer"
        subheading="A comprehensive suite of premium services designed to elevate your business and lifestyle."
        bgImage={servicesHeroImg}
        fullHeight={false}
      />

      <BreadCrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }]} />

      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-off-white)' }} data-section-theme="cream">
        <div className="container">

          <div style={{ maxWidth: '48rem', marginBottom: '2.5rem' }}>
            <span className="pill-badge" style={{ marginBottom: '0.75rem' }}>— DIVERSIFIED SOLUTIONS —</span>
            <h2 className="text-section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>One Group, Many Solutions</h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '1.08rem', lineHeight: 1.65 }}>
              SKY Groups was founded with a singular vision: to be the most reliable, diversified service provider in Tamil Nadu. We have meticulously curated our offerings to ensure that whether you are building a home, scaling a business, or hosting a monumental event, you have a trusted partner by your side.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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

      <CTABanner
        heading="Custom Requirements?"
        subtext="If you have specialized needs that span across our service domains, our team is ready to curate a bespoke solution for you."
        ctaText="Talk to our experts"
        ctaLink="/contact"
      />
    </>
  );
}
