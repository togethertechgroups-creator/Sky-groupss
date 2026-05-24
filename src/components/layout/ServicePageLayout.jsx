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
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Glow halo */}
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-gold/5 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading title="What We Offer" prefix="EXCLUSIVE SERVICES" />
              <div className="space-y-6 font-body text-grey-text text-lg leading-relaxed">
                {introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Premium Double-Offset Image Frame */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Secondary gold outline frame */}
              <div className="absolute inset-4 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 border border-gold/40 rounded-2xl group-hover:translate-x-3 group-hover:translate-y-3 md:group-hover:translate-x-6 md:group-hover:translate-y-6 transition-transform duration-500 z-0"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/10 bg-white p-2.5 z-10">
                <AnimatedImage
                  src={introImage}
                  alt={service.name}
                  direction="right"
                  containerClassName="w-full aspect-video rounded-xl overflow-hidden"
                  className="object-cover w-full h-full aspect-video"
                  kenBurns={true}
                  shimmer={true}
                  width="800"
                  height="450"
                />
              </div>

              {/* Glassmorphic Badge #1 */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-glass-dark rounded-2xl flex items-center justify-center border border-gold/25 shadow-2xl z-20 font-display font-bold text-2xl sm:text-3xl text-gold">
                <span>#1</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-off-white bg-mesh-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Our Process" prefix="STEP-BY-STEP WORKFLOW" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold/5 via-gold/30 to-gold/5 -z-0 w-[80%]"></div>

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group cursor-default"
              >
                {/* Dynamic concentric rotating step badge */}
                <div className="w-20 h-20 bg-gradient-to-br from-white/95 to-champagne-gold/25 rounded-2xl flex items-center justify-center border border-gold/15 shadow-md group hover:border-gold/40 group-hover:scale-105 transition-all duration-300 relative overflow-visible mb-6">
                  <div className="absolute inset-[-4px] rounded-2xl border border-dashed border-gold/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out pointer-events-none"></div>
                  <span className="font-display font-bold text-3xl text-charcoal group-hover:text-gold transition-colors">{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">{step.title}</h3>
                <p className="font-body text-grey-text text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SKY Groups (Benefits) */}
      <section className="py-24 bg-charcoal text-white relative">
        <div className="absolute inset-0 opacity-5 bg-mesh-pattern"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Why Choose Us" prefix="UNMATCHED BENEFITS" centered={true} light={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Shield, ...benefits[0] },
              { icon: Star, ...benefits[1] },
              { icon: Award, ...benefits[2] }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 border border-white/10 hover:border-gold/30 hover:shadow-[0_20px_45px_rgba(212,160,23,0.15)] p-8 rounded-2xl transition-all duration-500 relative group overflow-hidden flex flex-col backdrop-blur-sm"
              >
                {/* Glare/Shimmer overlay */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>

                {/* Rotating Dashed Concentric Rings Icon frame */}
                <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:border-gold/35 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500 relative overflow-visible z-10">
                  <div className="absolute inset-[-4px] rounded-2xl border border-dashed border-gold/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-out pointer-events-none"></div>
                  <benefit.icon className="w-6 h-6 text-gold group-hover:text-orange transition-colors" />
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors duration-300 relative z-10">{benefit.title}</h3>
                <p className="font-body text-white/70 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Form */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
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
