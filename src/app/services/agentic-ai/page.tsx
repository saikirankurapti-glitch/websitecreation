import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Brain } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Agentic AI Systems — Autonomous Enterprise AI | GenQuantaa',
  description: 'GenQuantaa designs and deploys multi-agent AI systems for enterprise — autonomous workflows that reason, plan and execute complex tasks.',
};

export default function AgenticAIPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="badge mb-6">
            <Brain className="w-3 h-3" />
            Agentic AI Systems
          </div>
          <h1 className="heading-xl text-white mb-5">
            Beyond Chatbots —{' '}
            <span className="gradient-text">AI That Works</span>
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            We build production-grade multi-agent systems that reason, plan, use tools, and execute
            complex workflows autonomously. These are enterprise AI operating systems, not demos.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary">Request a Deployment Assessment <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/case-studies" className="btn-outline">See Results</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
