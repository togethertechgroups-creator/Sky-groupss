import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2 } from 'lucide-react';
import StarBorder from './StarBorder';
import { trackLead } from '../../utils/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/placeholder'; // Add Form ID

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
      // Simulate API call for now since Formspree endpoint is a placeholder
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form data:', data);
      // In production:
      // await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: JSON.stringify(data), headers: { 'Accept': 'application/json' } })

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
      <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-gold text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">Request Received!</h3>
        <p className="font-body text-grey-text mb-8">
          Thank you for reaching out to Sky Groups. Our team will contact you shortly.
        </p>
        <a
          href="https://wa.me/919941888840"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-label px-8 py-3 rounded-sm uppercase tracking-wider text-sm transition-colors w-full"
        >
          WhatsApp Us Directly
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border-t-4 border-gold relative">
      <h3 className="font-heading font-bold text-3xl text-charcoal mb-6 border-b border-border pb-4">{formTitle}</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="fullName" className="block font-label text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
            Full Name <span className="text-orange">*</span>
          </label>
          <input
            id="fullName"
            {...register('fullName')}
            type="text"
            className={`w-full px-4 py-3 rounded-sm border bg-off-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.fullName ? 'border-orange focus:border-orange' : 'border-border focus:border-gold'}`}
            placeholder="e.g. Rahul Sharma"
          />
          {errors.fullName && <p className="text-orange text-xs mt-2 font-body font-semibold">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block font-label text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
            Phone Number <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-3 text-grey-text font-body">+91</span>
            <input
              id="phone"
              {...register('phone')}
              type="tel"
              className={`w-full pl-12 pr-4 py-3 rounded-sm border bg-off-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.phone ? 'border-orange focus:border-orange' : 'border-border focus:border-gold'}`}
              placeholder="9876543210"
            />
          </div>
          {errors.phone && <p className="text-orange text-xs mt-2 font-body font-semibold">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block font-label text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
            Email Address <span className="text-grey-text/50 capitalize font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            {...register('email')}
            type="email"
            className={`w-full px-4 py-3 rounded-sm border bg-off-white focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.email ? 'border-orange focus:border-orange' : 'border-border focus:border-gold'}`}
            placeholder="rahul@example.com"
          />
          {errors.email && <p className="text-orange text-xs mt-2 font-body font-semibold">{errors.email.message}</p>}
        </div>

        {serviceOptions && serviceOptions.length > 0 && (
          <div>
            <label htmlFor="service" className="block font-label text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
              Service Interested In
            </label>
            <select
              id="service"
              {...register('service')}
              className="w-full px-4 py-3 rounded-sm border border-border bg-off-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-charcoal"
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block font-label text-sm font-semibold text-charcoal mb-2 uppercase tracking-wide">
            Additional Requirements
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows="4"
            className="w-full px-4 py-3 rounded-sm border border-border bg-off-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-y"
            placeholder="Tell us what you're looking for..."
          ></textarea>
        </div>

        <StarBorder
          as="button"
          type="submit"
          disabled={isSubmitting}
          containerClassName="w-full h-14"
          className="font-label px-8 py-4 uppercase tracking-wider font-bold transition-colors flex justify-center items-center"
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Submit Request'
          )}
        </StarBorder>
      </form>
    </div>
  );
}
