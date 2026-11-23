import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact GenQuantaa — Book a Demo or Technical Discovery Call',
  description:
    'Reach out to GenQuantaa to discuss your AI project, book a technical demo, or explore partnership opportunities.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="badge mb-6 mx-auto w-fit">
            <MessageSquare className="w-3 h-3" />
            Let&apos;s Talk
          </div>
          <h1 className="heading-xl text-white mb-4">
            Start Your <span className="gradient-text">AI Journey</span>
          </h1>
          <p className="body-lg max-w-xl mx-auto">
            Tell us about your challenge. We&apos;ll design a proof-of-concept within 2 weeks — no commitment required.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-10 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
