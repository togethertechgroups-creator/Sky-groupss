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
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50,
        display: 'block'
      }}
      aria-label="Chat with us on WhatsApp"
      onClick={handleClick}
      className="group"
    >
      {/* Button itself */}
      <div 
        style={{
          width: '3.75rem',
          height: '3.75rem',
          backgroundColor: '#22c55e',
          border: 'var(--border-brutal-width) solid var(--color-charcoal)',
          borderRadius: '50%',
          boxShadow: 'var(--shadow-brutal)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          transition: 'all 0.2s ease'
        }}
      >
        <MessageCircle style={{ width: '1.75rem', height: '1.75rem' }} />
      </div>
    </a>
  );
}
