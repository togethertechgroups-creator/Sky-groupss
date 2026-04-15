import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import bikesImg from '../../assets/bikes.jpg';
import carsHeroImg from '../../assets/cars.jpg';

export default function Vehicles() {
  return (
    <ServicePageLayout
      serviceId="vehicles"
      heroImage={carsHeroImg}
      introImage={bikesImg}
      schema={{
        "@context": "https://schema.org",
        "@type": "AutoDealer",
        "name": "SKY A Groups — Car & Bike Sales",
        "telephone": "+91-9941888840",
        "address": { "@type": "PostalAddress", "addressRegion": "Tamil Nadu", "addressCountry": "IN" }
      }}
      introParagraphs={[
        "Navigating the pre-owned vehicle market can be stressful. Sky Groups ensures that buying or selling used cars and bikes in Tamil Nadu is a transparent, secure, and rewarding experience.",
        "Every vehicle in our showroom undergoes a rigorous multi-point inspection. We handle the tricky paperwork, offer fair market valuations, and provide financing options so you can drive away with peace of mind."
      ]}
      processSteps={[
        { title: 'Vehicle Inspection', desc: 'Thorough 120-point mechanical, structural, and history checks.' },
        { title: 'Valuation & Pricing', desc: 'Fair, data-driven pricing for both buyers and sellers based on market trends.' },
        { title: 'Financing', desc: 'Instant loan approvals through our partnered banking institutions.' },
        { title: 'Documentation', desc: 'We handle the RTO paperwork, insurance, and RC transfer seamlessly.' }
      ]}
      benefits={[
        { title: 'Certified Inventory', desc: 'Guaranteed non-accidental vehicles with clear service histories.' },
        { title: 'Instant Valuations', desc: 'Bring your vehicle in for a quick, obligation-free quote in 30 minutes.' },
        { title: 'Warranty Options', desc: 'Drive away with confidence thanks to our extended warranty plans.' }
      ]}
    />
  );
}
