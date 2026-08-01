import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ width: '100%', maxWidth: '48rem', margin: '0 auto' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={index} 
            className="faq-item"
            style={{
              borderColor: isOpen ? 'var(--color-gold-primary)' : 'var(--color-charcoal)',
              transform: isOpen ? 'translateY(-2px)' : 'none'
            }}
          >
            <button
              onClick={() => toggleOpen(index)}
              className="faq-trigger"
              aria-expanded={isOpen}
            >
              <span style={{ paddingRight: '1.5rem', color: isOpen ? 'var(--color-gold-primary)' : 'var(--color-charcoal)' }}>
                {faq.question}
              </span>
              <div 
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  backgroundColor: isOpen ? 'var(--color-gold-primary)' : 'var(--color-charcoal)',
                  color: 'var(--color-white)',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronDown 
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
