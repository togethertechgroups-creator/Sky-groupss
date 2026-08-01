import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2 } from 'lucide-react';
import StarBorder from './StarBorder';
import { trackLead } from '../../utils/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/placeholder';

const schema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: 'Must be a valid 10-digit Indian number' }),
  email: z.string().email({ message: 'Invalid email address' }).optional().or(z.literal('')),
  service: z.string().optional(),
  message: z.string().optional(),
});

export default function LeadForm({ serviceOptions = [], formTitle = "Request a Free Quote" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setIsSuccess(true);
      trackLead(data.service || 'General', 'form');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="form-card" style={{ textAlign: 'center' }}>
        <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: 'rgba(34, 197, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
          <CheckCircle2 style={{ width: '2rem', height: '2rem', color: 'rgb(22, 163, 74)' }} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>Request Received!</h3>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-grey-text)', marginBottom: '2rem' }}>
          Thank you for reaching out to SKY Groups. Our team will contact you shortly.
        </p>
        <a
          href="https://wa.me/919941888840"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#22c55e',
            color: '#ffffff',
            fontFamily: 'var(--font-label)',
            fontWeight: 700,
            padding: '1rem 2rem',
            borderRadius: 'var(--radius-pill)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.75rem',
            width: '100%',
            boxShadow: 'var(--shadow-brutal)'
          }}
        >
          WhatsApp Us Directly
        </a>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--color-charcoal)', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '2px solid var(--color-gold-primary)' }}>{formTitle}</h3>
 
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label htmlFor="fullName" className="form-label-text">
            Full Name <span style={{ color: 'var(--color-accent-orange)' }}>*</span>
          </label>
          <input
            id="fullName"
            {...register('fullName')}
            type="text"
            className="form-input"
            style={{ borderColor: errors.fullName ? 'var(--color-accent-orange)' : 'var(--color-border)' }}
            placeholder="e.g. Rahul Sharma"
          />
          {errors.fullName && <p style={{ color: 'var(--color-accent-orange)', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: 600 }}>{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="form-label-text">
            Phone Number <span style={{ color: 'var(--color-accent-orange)' }}>*</span>
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '1rem', top: '0.85rem', color: 'var(--color-grey-text)', fontSize: '0.9rem', fontWeight: 600 }}>+91</span>
            <input
              id="phone"
              {...register('phone')}
              type="tel"
              className="form-input"
              style={{ paddingLeft: '3.25rem', borderColor: errors.phone ? 'var(--color-accent-orange)' : 'var(--color-border)' }}
              placeholder="9876543210"
            />
          </div>
          {errors.phone && <p style={{ color: 'var(--color-accent-orange)', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: 600 }}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="form-label-text">
            Email Address <span style={{ color: 'var(--color-grey-text)', textTransform: 'none', fontWeight: 400 }}>(Optional)</span>
          </label>
          <input
            id="email"
            {...register('email')}
            type="email"
            className="form-input"
            style={{ borderColor: errors.email ? 'var(--color-accent-orange)' : 'var(--color-border)' }}
            placeholder="rahul@example.com"
          />
          {errors.email && <p style={{ color: 'var(--color-accent-orange)', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: 600 }}>{errors.email.message}</p>}
        </div>

        {serviceOptions && serviceOptions.length > 0 && (
          <div>
            <label htmlFor="service" className="form-label-text">
              Service Interested In
            </label>
            <select
              id="service"
              {...register('service')}
              className="form-input"
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="form-label-text">
            Additional Requirements
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows="4"
            className="form-input"
            style={{ resize: 'none' }}
            placeholder="Tell us what you're looking for..."
          ></textarea>
        </div>

        <div style={{ paddingTop: '0.5rem' }}>
          <StarBorder
            as="button"
            type="submit"
            disabled={isSubmitting}
            style={{ width: '100%', padding: '1rem', fontSize: '0.85rem' }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </StarBorder>
        </div>
      </form>
    </div>
  );
}
