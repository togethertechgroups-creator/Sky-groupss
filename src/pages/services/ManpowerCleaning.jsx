import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';

export default function ManpowerCleaning() {
  return (
    <ServicePageLayout
      serviceId="manpower-cleaning"
      heroImage="https://picsum.photos/1920/1080?random=50"
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Sky Groups — Manpower & Cleaning Services",
        "url": "https://www.skygroupss.in/services/manpower-cleaning",
        "telephone": "+91-9941888840",
        "provider": { "@type": "LocalBusiness", "name": "Sky Groups", "address": "Tamil Nadu" }
      }}
      introParagraphs={[
        "Sky Groups provides highly trained and vetted personnel for both corporate and residential environments. Our comprehensive staffing solutions ensure that your facility operates smoothly, safely, and cleanly at all times.",
        "Whether you need regular housekeeping, specialized deep cleaning, vigilant security guards, or compassionate nursing assistants, our manpower division delivers reliable excellence across Tamil Nadu."
      ]}
      processSteps={[
        { title: 'Needs Assessment', desc: 'We evaluate your specific facility, corporate, or residential staffing requirements.' },
        { title: 'Resource Allocation', desc: 'Deploying trained professionals tailored to the exact demands of your environment.' },
        { title: 'Execution & Management', desc: 'Consistent service delivery with regular supervisors auditing performance.' },
        { title: 'Ongoing Support', desc: 'Flexible scaling of manpower and on-demand specialized cleaning when needed.' }
      ]}
      benefits={[
        { title: 'Staff & Services', desc: 'Housekeeping, Security Guards, Nursing & Home Care Assistants, Receptionists, and Office Executives.' },
        { title: 'Cleaning Services', desc: 'Comprehensive Deep Cleaning, Home Cleaning, Office Cleaning, Industry Cleaning, and Showroom Cleaning.' },
        { title: 'Manpower Services', desc: 'Dedicated Gardening Services and diverse manual operations support.' }
      ]}
    />
  );
}
