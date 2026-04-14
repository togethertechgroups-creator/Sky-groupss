import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import propertyImg from '../../assets/property-to-buy-sell.jpg.jpeg';

export default function Property() {
  return (
    <ServicePageLayout 
      serviceId="property"
      heroImage="https://picsum.photos/1920/1080?random=40"
      introImage={propertyImg}
      introParagraphs={[
        "SKY A Groups provides unparalleled property development and real estate services across Tamil Nadu. Whether you are looking for premium residential plots, commercial real estate, or high-yield agricultural lands, we have the inventory and expertise.",
        "Our team handles everything from identifying high-growth corridors in the state, verifying legal titles, to executing clean and transparent registrations. We believe in creating generational wealth for our clients through smart real estate investments."
      ]}
      processSteps={[
        { title: 'Consultation', desc: 'Understanding your investment goals, budget, and preferred locations.' },
        { title: 'Site Visits', desc: 'Curated physical or virtual tours of thoroughly vetted properties.' },
        { title: 'Legal Scrutiny', desc: 'Strict verification of DTCP/CMDA approvals, Patta, and EC records.' },
        { title: 'Registration', desc: 'Smooth, hassle-free name transfer and registration at the local RTO/Registrar.' }
      ]}
      benefits={[
        { title: '100% Clear Titles', desc: 'We only deal in properties that pass our rigorous 50-point legal audit.' },
        { title: 'Prime Locations', desc: 'Access to high-appreciation zones across Chennai, Madurai, and Coimbatore.' },
        { title: 'End-to-End Support', desc: 'From site visit to key handover, our agents stay by your side.' }
      ]}
    />
  );
}
