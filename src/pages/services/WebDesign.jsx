import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import SplashCursor from '../../components/ui/SplashCursor';
import webDesignImg from '../../assets/1687.jpg.jpeg';
import webDesignHero from '../../assets/web-hero.jpg';

export default function WebDesign() {
  return (
    <>
      <SplashCursor />
      <ServicePageLayout
        serviceId="web-design"
        heroImage={webDesignHero}
        introImage={webDesignImg}
        introParagraphs={[
          "In the modern era, your website is your digital storefront. Sky Groups designs and develops premium, lightning-fast, and deeply engaging websites that convert visitors into loyal customers.",
          "We build digital experiences tailored for businesses in Tamil Nadu. Our comprehensive packages include everything from UX design and SEO optimization to cloud hosting and ongoing security maintenance."
        ]}
        processSteps={[
          { title: 'Discovery', desc: 'Understanding your brand narrative, target audience, and digital goals.' },
          { title: 'UI/UX Design', desc: 'Creating wireframes and gorgeous, device-responsive visual designs.' },
          { title: 'Development', desc: 'Writing clean, optimized, and secure code using modern frameworks.' },
          { title: 'Launch & SEO', desc: 'Deploying to cloud servers and optimizing for Google search visibility.' }
        ]}
        benefits={[
          { title: 'Mobile-First', desc: 'Flawless performance across smartphones, tablets, and massive desktop screens.' },
          { title: 'SEO Optimized', desc: 'Engineered from the ground up to rank high on local Google searches.' },
          { title: 'Secure Hosting', desc: 'Enterprise-grade hosting with robust security and automated backups.' }
        ]}
      />
    </>
  );
}
