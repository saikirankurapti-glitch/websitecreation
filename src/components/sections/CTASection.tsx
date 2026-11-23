import Link from 'next/link';
import { ArrowRight, CalendarDays } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="w-[400px] h-[300px] bg-violet-500/5 rounded-full blur-[100px] absolute" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Border gradient card */}
        <div className="border-gradient p-12 md:p-16 rounded-3xl glass">
          <div className="badge mb-6 mx-auto w-fit">
            <CalendarDays className="w-3 h-3" />
            Available for Enterprise Engagements
          </div>

          <h2 className="heading-lg text-white mb-4">
            Ready to Build the{' '}
            <span className="gradient-text">Intelligence Layer</span>{' '}
            for Your Organization?
          </h2>

          <p className="body-lg mb-8 max-w-2xl mx-auto">
            Talk to our engineering team about your specific challenge. We&apos;ll design a focused
            proof of concept within 2 weeks — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 group">
              Book a Technical Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies" className="btn-outline text-base px-7 py-3.5">
              Read Case Studies
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-slate-500 text-xs">
            {[
              '✓ No vendor lock-in',
              '✓ IP stays with you',
              '✓ HIPAA & GxP compliant',
              '✓ POC in 2 weeks',
              '✓ Fixed-fee projects available',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
