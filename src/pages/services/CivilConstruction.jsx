import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import constructionImg from '../../assets/construction.avif';

export default function CivilConstruction() {
  return (
    <ServicePageLayout
      serviceId="civil-construction"
      heroImage="https://picsum.photos/1920/1080?random=41"
      introImage={constructionImg}
      schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "HomeAndConstructionBusiness",
            "name": "SKY A Groups — Civil Construction",
            "telephone": "+91-9941888840",
            "address": { "@type": "PostalAddress", "addressRegion": "Tamil Nadu", "addressCountry": "IN" }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you provide architectural planning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our in-house architects will draft 2D and 3D elevations based on your requirements before construction begins."
                }
              },
              {
                "@type": "Question",
                "name": "What materials do you use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We strictly use ISO-certified, premium grade materials suited for Tamil Nadu’s coastal and tropical climate."
                }
              },
              {
                "@type": "Question",
                "name": "Do you take up renovation projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, along with from-scratch construction, we handle commercial and residential renovations."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a standard residential build take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard G+1 independent house takes roughly 6 to 8 months from the ground-breaking ceremony to complete handover."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle the CMDA/DTCP approvals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We manage all local body approvals and necessary permits so you don’t have to worry."
                }
              }
            ]
          }
        ]
      }}
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
