import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'GenQuantaa Academy — AI Education for Leaders & Engineers',
  description: 'AI-native business education for founders, executives and engineers. Forward-Deployed Engineering cohorts, AI for Pharma programs, and CXO masterclasses.',
};

export default function AcademyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="badge mb-6">
            <GraduationCap className="w-3 h-3" />
            GenQuantaa Academy
          </div>
          <h1 className="heading-xl text-white mb-5">
            Learn AI by{' '}
            <span className="gradient-text">Building Real Systems</span>
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            Cohort-based AI education for the next generation of leaders. Taught by practitioners who
            build production systems, not academics. Online + in-person hubs in BLR · DXB · SGP.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary">Join a Cohort <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/about" className="btn-outline">About the Academy</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
