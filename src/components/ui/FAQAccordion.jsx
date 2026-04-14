import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={index} 
            className={`border border-border bg-white rounded-sm overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md border-l-4 border-l-gold' : 'hover:border-gold/30'}`}
          >
            <button
              onClick={() => toggleOpen(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className={`font-heading font-bold text-lg md:text-xl pr-8 ${isOpen ? 'text-charcoal' : 'text-charcoal/90'}`}>
                {faq.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-gold text-white' : 'bg-off-white text-gold'}`}>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
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
                  <div className="px-6 pb-6 pt-2 font-body text-grey-text leading-relaxed">
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
