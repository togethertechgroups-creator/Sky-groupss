import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/social';
import { trackLead } from '../../utils/analytics';

export default function WhatsAppButton() {
  const WA_URL = `${SOCIAL_LINKS.whatsapp}?text=Hello%20SKY%20A%20Groups%2C%20I%20am%20interested%20in%20your%20services.`;

  const handleClick = () => {
    trackLead('WhatsApp Floating', 'whatsapp');
  };

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
      onClick={handleClick}
    >
      {/* Pulse ring animation wrapper */}
      <div className="absolute inset-0 bg-green-500 rounded-full pulse-ring -z-10"></div>
      
      {/* Luxurious Glass Hover Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-glass border border-gold/25 shadow-xl px-4 py-2.5 rounded-full font-label font-bold uppercase tracking-widest text-[10px] text-charcoal backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-4 group-hover:translate-x-0 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
        Chat with S.S. Ponnarasan
      </div>

      {/* Button itself */}
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-green-600 transition-all duration-300 group-hover:scale-105 group-hover:rotate-[360deg]">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>
    </a>
  );
}
