import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import constructionImg from '../../assets/construction.avif';

export default function CivilConstruction() {
  return (
    <ServicePageLayout
      serviceId="civil-construction"
      heroImage="https://picsum.photos/1920/1080?random=41"
      introImage={constructionImg}
      introParagraphs={[
        "Building a home or a commercial complex is a massive undertaking. At Sky Groups, our Civil Construction division turns blueprints into reality with uncompromising quality and precise engineering.",
        "We are equipped with modern machinery, highly skilled labor, and experienced architects to handle residential, commercial, and industrial projects anywhere in Tamil Nadu. We adhere strictly to National Building Codes and local climatic requirements."
      ]}
      processSteps={[
        { title: 'Design & Approvals', desc: '3D elevations, floor plans, and acquiring the necessary government permits.' },
        { title: 'Foundation', desc: 'Soil testing followed by deep, structurally sound foundation laying.' },
        { title: 'Superstructure', desc: 'Erecting the pillars, beams, and brickwork using premium grade materials.' },
        { title: 'Finishing & Handover', desc: 'Plumbing, electricals, painting, and a grand 100% complete handover.' }
      ]}
      benefits={[
        { title: 'ISO Grade Materials', desc: 'We use branded TMT bars, Grade-A cement, and weather-proof paints.' },
        { title: 'On-Time Delivery', desc: 'Strict project management ensures no delays in handing over the keys.' },
        { title: 'Transparent Pricing', desc: 'Detailed BoQ (Bill of Quantities) provided so there are no hidden costs.' }
      ]}
    />
  );
}
