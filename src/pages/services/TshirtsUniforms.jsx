import React from 'react';
import ServicePageLayout from '../../components/layout/ServicePageLayout';
import uniformImg from '../../assets/school-unifor.jpg';
import tshirtHeroImg from '../../assets/tshirt-hero.webp';

export default function TshirtsUniforms() {
  return (
    <ServicePageLayout 
      serviceId="tshirts-uniforms"
      heroImage={tshirtHeroImg}
      introImage={uniformImg}
      introParagraphs={[
        "Brand identity goes beyond a logo. SKY A Groups offers comprehensive corporate apparel and gifting solutions that help your team look professional and feel unified.",
        "From school uniforms to corporate polos and premium branded gifts, we manage large bulk orders with precision. Our manufacturing partners use high-quality fabrics and advanced printing technology to ensure durability and color retention."
      ]}
      processSteps={[
        { title: 'Design & selection', desc: 'Choose fabrics, colors, and styles that align with your corporate identity.' },
        { title: 'Sampling', desc: 'We produce a physical sample for your approval to ensure complete satisfaction.' },
        { title: 'Production', desc: 'Bulk manufacturing using state-of-the-art embroidery and printing machines.' },
        { title: 'Delivery', desc: 'Quality checked, perfectly packed, and delivered on time across Tamil Nadu.' }
      ]}
      benefits={[
        { title: 'Premium Fabrics', desc: 'Breathable, durable, and comfortable materials suited for daily wear.' },
        { title: 'Scalable Orders', desc: 'Whether you need 50 pieces or 50,000, we deliver with the same quality.' },
        { title: 'Custom Branding', desc: 'High-definition embroidery, DTF, and screen printing that lasts.' }
      ]}
    />
  );
}
