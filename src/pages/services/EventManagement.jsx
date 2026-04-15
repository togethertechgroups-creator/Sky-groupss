import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import eventHeroImg from '../../assets/event-management-hero.jpg';
import eventWhatWeDoImg from '../../assets/event-management-whatwedo.jpg';

export default function EventManagement() {
  return (
    <ServicePageLayout
      serviceId="event-management"
      heroImage={eventHeroImg}
      introImage={eventWhatWeDoImg}
      schema={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SKY A Groups — Event Management",
        "telephone": "+91-9941888840",
        "address": { "@type": "PostalAddress", "addressRegion": "Tamil Nadu", "addressCountry": "IN" }
      }}
      introParagraphs={[
        "Events are milestones that deserve to be celebrated perfectly. SKY Groups is a leading event management company specializing in corporate gatherings, grand weddings, and cultural fests across Tamil Nadu.",
        "We take the burden of planning off your shoulders. Our extensive network of luxury venues, premium caterers, and renowned entertainers guarantees an unforgettable experience for you and your guests."
      ]}
      processSteps={[
        { title: 'Conceptualization', desc: 'Brainstorming themes, budgeting, and establishing the event flow.' },
        { title: 'Sourcing', desc: 'Booking the perfect venue, caterers, decorators, and entertainment.' },
        { title: 'Coordination', desc: 'Managing vendor timelines, technical AV setups, and guest logistics.' },
        { title: 'Execution', desc: 'Flawless on-floor management ensuring everything runs precisely on schedule.' }
      ]}
      benefits={[
        { title: 'End-to-End Service', desc: 'From invitations to the final farewell, we handle every microscopic detail.' },
        { title: 'Vendor Network', desc: 'Access to the best and most reliable vendors in Tamil Nadu.' },
        { title: 'Stress-Free Experience', desc: 'You enjoy the event while our covert team manages the chaos behind the scenes.' }
      ]}
    />
  );
}
