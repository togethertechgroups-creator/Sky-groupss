import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/seo/SEOHead';
import HeroSection from '../components/ui/HeroSection';
import BreadCrumb from '../components/ui/BreadCrumb';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CTABanner from '../components/ui/CTABanner';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <SEOHead
        title="Our Services — Property, Construction, Vehicles | Sky Groups"
        description="Explore the multi-service excellence of Sky Groups in Tamil Nadu. We offer property development, civil works, vehicle sales, uniforms, events, and web design."
      />

      <HeroSection
        heading="What We Offer"
        subheading="A comprehensive suite of premium services designed to elevate your business and lifestyle."
        bgImage="https://picsum.photos/1920/1080?random=20"
        fullHeight={false}
      />

      <BreadCrumb crumbs={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }]} />

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl font-bold text-charcoal mb-6">One Group, Many Solutions</h2>
            <p className="font-body text-grey-text text-lg leading-relaxed">
              Sky Groups was founded with a singular vision: to be the most reliable, diversified service provider in Tamil Nadu. We have meticulously curated our offerings to ensure that whether you are building a home, scaling a business, or hosting a monumental event, you have a trusted partner by your side.
            </p>
          </div>

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

      <CTABanner
        heading="Custom Requirements?"
        subtext="If you have specialized needs that span across our service domains, our team is ready to curate a bespoke solution for you."
        ctaText="Talk to our experts"
        ctaLink="/contact"
      />
    </>
  );
}
