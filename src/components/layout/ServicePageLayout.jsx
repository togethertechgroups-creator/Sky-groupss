import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../ui/HeroSection';
import BreadCrumb from '../ui/BreadCrumb';
import SectionHeading from '../ui/SectionHeading';
import FAQAccordion from '../ui/FAQAccordion';
import LeadForm from '../ui/LeadForm';
import CTABanner from '../ui/CTABanner';
import AnimatedImage from '../ui/AnimatedImage';
import { Shield, Star, Award } from 'lucide-react';
import { services } from '../../data/services';
import { faqs } from '../../data/faqs';

export default function ServicePageLayout({
  serviceId,
  introParagraphs,
  introImage,
  heroImage,
  processSteps,
  benefits,
  schema = null
}) {
  const service = services.find(s => s.id === serviceId);
  const serviceFaqs = faqs[serviceId] || [];

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDesc}
        schema={schema}
      />

      <HeroSection
        heading={service.heroHeading}
        subheading={service.shortDesc}
        bgImage={heroImage || introImage}
        fullHeight={true}
        badgeText={service.name.toUpperCase()}
        mainCtaText="Get a Free Quote"
        mainCtaLink="/contact"
        trustBadges={benefits && benefits.length >= 2 ? [{ title: benefits[0].title }, { title: benefits[1].title }] : []}
      />

      <BreadCrumb
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.name, path: service.slug }
        ]}
      />

      {/* What We Offer */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-white)', position: 'relative' }} data-section-theme="light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading title="What We Offer" prefix="EXCLUSIVE SERVICES" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                {introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Premium Double-Offset Image Frame with Brutal Shadow */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div 
                style={{
                  position: 'relative',
                  border: 'var(--border-brutal-width) solid var(--color-charcoal)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-brutal-hover)',
                  overflow: 'hidden'
                }}
              >
                <AnimatedImage
                  src={introImage}
                  alt={service.name}
                  direction="right"
                  width="800"
                  height="450"
                  style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
                />
              </div>

              {/* Story Pill Badge #1 */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  left: '-1rem',
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'var(--color-gold-primary)',
                  border: 'var(--border-brutal-width) solid var(--color-gold-primary)',
                  boxShadow: 'var(--shadow-brutal-gold)',
                  borderRadius: 'var(--radius-card)',
                  padding: '0.75rem 1.25rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  zIndex: 20
                }}
              >
                <span>#1 PREFERRED CHOICE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-off-white)', position: 'relative' }} data-section-theme="cream">
        <div className="container">
          <SectionHeading title="Our Process" prefix="STEP-BY-STEP WORKFLOW" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginTop: '3rem' }}>
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-brutal"
                style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                {/* Bold Brutal Step Number Badge */}
                <div 
                  style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: 'var(--color-charcoal)',
                    color: 'var(--color-gold-light)',
                    border: 'var(--border-brutal-width) solid var(--color-gold-primary)',
                    boxShadow: '3px 3px 0px var(--color-gold-primary)',
                    borderRadius: 'var(--radius-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '2rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <span>{i + 1}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SKY Groups (Benefits) */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-charcoal)', color: 'var(--color-white)', position: 'relative' }} data-section-theme="dark">
        <div className="container">
          <SectionHeading title="Why Choose Us" prefix="UNMATCHED BENEFITS" centered={true} light={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: '2rem' }}>
            {[
              { icon: Shield, ...benefits[0] },
              { icon: Star, ...benefits[1] },
              { icon: Award, ...benefits[2] }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                className="card-brutal-gold"
                style={{ padding: '1.75rem' }}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? 2 : -2 }}
              >
                <div 
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    backgroundColor: 'var(--color-gold-primary)',
                    borderRadius: 'var(--radius-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: 'var(--color-charcoal)'
                  }}
                >
                  <benefit.icon style={{ width: '1.75rem', height: '1.75rem' }} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-gold-light)', marginBottom: '0.75rem' }}>{benefit.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Form */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'var(--color-white)' }} data-section-theme="light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Frequently Asked Questions" />
              <FAQAccordion faqs={serviceFaqs} />
            </div>
            <div>
              <LeadForm
                serviceOptions={[service.name, 'Other']}
                formTitle={`Inquire about ${service.name}`}
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have Immediate Questions?"
        subtext="Our experts are available around the clock to assist you."
        ctaText="Chat on WhatsApp"
        ctaLink="https://wa.me/919941888840"
      />
    </>
  );
}
