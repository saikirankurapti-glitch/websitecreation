import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise AI Engineering — Custom AI Platforms | GenQuantaa',
  description: 'Custom AI model development, enterprise platform modernization, and production ML systems built for your specific business requirements.',
};

export default function EnterpriseAIPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="badge mb-6">
            <Building2 className="w-3 h-3" />
            Enterprise AI Engineering
          </div>
          <h1 className="heading-xl text-white mb-5">
            The AI Your Organization{' '}
            <span className="gradient-text">Actually Needs</span>
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            Custom AI models, enterprise platform design, legacy modernization, and secure private AI
            deployment. Built to your specific business logic — not an off-the-shelf demo.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary">Start a Project <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/case-studies" className="btn-outline">Enterprise Case Studies</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
