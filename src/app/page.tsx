import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import CTASection from '@/components/sections/CTASection';
import TrustBandSection from '@/components/sections/TrustBandSection';

export const metadata: Metadata = {
  title: 'GenQuantaa — AI Operating System for Life Sciences & Enterprise',
  description:
    'GenQuantaa builds agentic AI systems, life sciences intelligence platforms, and enterprise AI for pharmaceutical, healthcare, and deep-tech organizations.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBandSection />
      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
