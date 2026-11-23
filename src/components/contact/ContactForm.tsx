'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  role: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  consent: z.boolean().refine((val) => val === true, 'You must agree to the privacy policy'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  'Life Sciences AI — Drug Discovery Platform',
  'Agentic AI Systems — Enterprise Deployment',
  'Enterprise AI Engineering — Custom Project',
  'GenQuantaa Academy — Training Programs',
  'Partnership / Collaboration',
  'General Inquiry',
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@genquantaa.com',
    href: 'mailto:contact@genquantaa.com',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Bangalore, India',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Regional Offices',
    value: 'Dubai, UAE · Singapore',
    href: null,
  },
  {
    icon: Calendar,
    label: 'Response Time',
    value: 'Within 24 business hours',
    href: null,
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? 'Failed to send message');
      }
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

      {/* Left — Contact Info */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h2 className="text-white font-bold text-xl mb-2">Get in Touch</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Whether you&apos;re exploring a pilot project, requesting a demo, or simply want to understand
            what AI can do for your organization — we&apos;re here.
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                {href ? (
                  <a href={href} className="text-slate-200 text-sm hover:text-cyan-400 transition-colors">
                    {value}
                  </a>
                ) : (
                  <div className="text-slate-200 text-sm">{value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Calendly embed CTA */}
        <div className="glass rounded-xl p-5">
          <div className="text-white font-semibold text-sm mb-2">Prefer to book directly?</div>
          <p className="text-slate-400 text-xs mb-4">
            Schedule a 30-minute technical discovery call with our solutions team.
          </p>
          <a
            href="https://calendly.com/genquantaa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 w-full justify-center"
          >
            <Calendar className="w-4 h-4" />
            Book a Call
          </a>
        </div>
      </div>

      {/* Right — Form */}
      <div className="lg:col-span-3">
        {status === 'success' ? (
          <div className="glass rounded-2xl p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
            <p className="text-slate-400 text-sm mb-6">
              Thank you for reaching out. Our team will get back to you within 24 business hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-outline text-sm py-2 px-5"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-2xl p-6 md:p-8 space-y-5"
            noValidate
          >
            {/* Error banner */}
            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-red-400 text-sm font-semibold">Failed to send</div>
                  <div className="text-red-400/80 text-xs mt-0.5">{errorMessage}</div>
                </div>
              </div>
            )}

            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Dr. Jane Smith"
                  {...register('name')}
                  className={cn('form-input', errors.name && 'error')}
                />
                {errors.name && <p className="form-error">{errors.name.message}</p>}
              </div>
              <div>
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  {...register('email')}
                  className={cn('form-input', errors.email && 'error')}
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>
            </div>

            {/* Company + Role row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label" htmlFor="company">Company *</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Pharma Ltd"
                  {...register('company')}
                  className={cn('form-input', errors.company && 'error')}
                />
                {errors.company && <p className="form-error">{errors.company.message}</p>}
              </div>
              <div>
                <label className="form-label" htmlFor="role">Your Role</label>
                <input
                  id="role"
                  type="text"
                  placeholder="VP Research, CTO, etc."
                  {...register('role')}
                  className="form-input"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="form-label" htmlFor="subject">What can we help with? *</label>
              <select
                id="subject"
                {...register('subject')}
                className={cn('form-input', errors.subject && 'error')}
              >
                <option value="">Select a topic...</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.subject && <p className="form-error">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="form-label" htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project, challenge, or question..."
                {...register('message')}
                className={cn('form-input resize-none', errors.message && 'error')}
              />
              {errors.message && <p className="form-error">{errors.message.message}</p>}
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                {...register('consent')}
                className="mt-0.5 w-4 h-4 accent-cyan-500"
              />
              <label htmlFor="consent" className="text-slate-400 text-xs leading-relaxed cursor-pointer">
                I agree to the{' '}
                <a href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a>{' '}
                and consent to GenQuantaa processing my data for the purpose of responding to this inquiry.
              </label>
            </div>
            {errors.consent && <p className="form-error">{errors.consent.message}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center py-3"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
