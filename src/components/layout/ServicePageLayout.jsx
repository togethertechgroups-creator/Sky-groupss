import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../ui/HeroSection';
import BreadCrumb from '../ui/BreadCrumb';
import SectionHeading from '../ui/SectionHeading';
import FAQAccordion from '../ui/FAQAccordion';
import LeadForm from '../ui/LeadForm';
import CTABanner from '../ui/CTABanner';
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
        fullHeight={false}
      />

      <BreadCrumb
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.name, path: service.slug }
        ]}
      />

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="What We Offer" />
              <div className="space-y-6 font-body text-grey-text text-lg leading-relaxed">
                {introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-sm overflow-hidden shadow-2xl border-b-4 border-gold">
                <img
                  src={introImage}
                  alt={service.name}
                  className="w-full h-auto aspect-video object-cover"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-charcoal rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <span className="font-display font-bold text-3xl text-gold">#1</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Process" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
            <div className="hidden lg:block absolute top-[45px] left-1/8 right-1/8 h-0.5 bg-gold/30 -z-0 translate-x-16 w-[70%]"></div>

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-off-white shadow-lg mb-6 group hover:border-gold transition-colors">
                  <span className="font-display font-bold text-3xl text-charcoal group-hover:text-gold transition-colors">{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">{step.title}</h3>
                <p className="font-body text-grey-text text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SKY Groups (Benefits) */}
      <section className="py-24 bg-charcoal text-white relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%, #1A1A1A), repeating-linear-gradient(45deg, #1A1A1A 25%, #D4A017 25%, #D4A017 75%, #1A1A1A 75%, #1A1A1A)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Why Choose Us" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Shield, ...benefits[0] },
              { icon: Star, ...benefits[1] },
              { icon: Award, ...benefits[2] }
            ].map((benefit, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gold transition-colors backdrop-blur-sm">
                <benefit.icon className="w-8 h-8 text-gold mb-6" />
                <h3 className="font-heading font-bold text-xl text-white mb-3">{benefit.title}</h3>
                <p className="font-body text-white/70 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Form */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
