import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FlaskConical, Brain, Building2, GraduationCap } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Life Sciences AI — Drug Discovery, Clinical Trial Intelligence | GenQuantaa',
  description:
    'GenQuantaa\'s Life Sciences AI platform accelerates drug discovery, clinical trial management, and regulatory compliance for pharmaceutical and biotech organizations.',
};

export default function LifeSciencesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="badge mb-6">
            <FlaskConical className="w-3 h-3" />
            Life Sciences & Pharma AI
          </div>
          <h1 className="heading-xl text-white mb-5">
            From Target to <span className="gradient-text">Candidate</span> —<br />
            in Weeks, Not Months
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            Our ChemVista™, Kinetica™ and GENQUANTAA Intelligence™ platforms form an end-to-end AI
            system for pharmaceutical R&D — from target discovery through regulatory submission.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary">Book a Technical Demo <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/case-studies" className="btn-outline">View Case Studies</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
