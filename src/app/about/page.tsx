import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Users, Zap, Globe, Award } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About GenQuantaa — Our Mission, Team & Story',
  description:
    'Learn about GenQuantaa — the team, mission and technology behind the AI operating system for life sciences and enterprise organizations.',
};

const values = [
  {
    icon: Zap,
    color: 'from-cyan-500 to-teal-400',
    title: 'Scientific Rigor',
    description:
      'Every AI system we build is grounded in peer-reviewed methodology. We build to validate, not to impress.',
  },
  {
    icon: Shield,
    color: 'from-violet-500 to-purple-400',
    title: 'Ethical AI',
    description:
      'Explainability, auditability, and human-in-the-loop design are non-negotiables for us — especially in regulated industries.',
  },
  {
    icon: Globe,
    color: 'from-amber-500 to-orange-400',
    title: 'Global Impact',
    description:
      'We build technology that matters — accelerating drug discovery, improving healthcare access, and enabling smarter agricultural systems.',
  },
  {
    icon: Heart,
    color: 'from-rose-500 to-pink-400',
    title: 'Client Partnership',
    description:
      'We embed with your team. We succeed when you do. No black-box deliveries — real co-creation.',
  },
];

const timeline = [
  { year: '2021', title: 'Founded in Bangalore', description: 'GenQuantaa established with a mission to bring AI-native engineering to life sciences and enterprise.' },
  { year: '2022', title: 'First Pharma Platform', description: 'Launched GENQUANTAA Intelligence™ — our scientific AI knowledge mesh — with 3 biopharma clients.' },
  { year: '2023', title: 'ChemVista™ Release', description: 'Released ChemVista™ for generative molecular design. First AI-designed lead candidate enters pre-clinical.' },
  { year: '2024', title: 'Global Expansion', description: 'Opened hubs in Dubai and Singapore. Crossed 50 enterprise clients across 4 continents.' },
  { year: '2025', title: 'GenQuantaa Academy', description: 'Launched AI-native business education programs for executives, founders and forward-deployed engineers.' },
  { year: '2026', title: 'Agentic AI Platform', description: 'Released enterprise agentic AI platform — autonomous multi-agent systems for complex operational workflows.' },
];

const leadership = [
  {
    name: 'Rakshith Kumar',
    role: 'Founder & CEO',
    bio: 'Serial entrepreneur with 15 years in AI and life sciences technology. Former FDA regulatory consultant.',
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Chief Science Officer',
    bio: 'PhD Computational Chemistry. Led drug discovery AI at a Top-5 global pharmaceutical company for 8 years.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Arjun Sharma',
    role: 'CTO',
    bio: 'Full-stack AI architect. Built large-scale ML systems at hyperscale cloud companies before joining GenQuantaa.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'VP – Enterprise AI',
    bio: 'Enterprise transformation leader. 12 years deploying AI across GCC, Africa and Southeast Asian markets.',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

// Temporarily inline Shield until we refactor imports
function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="badge mb-6 mx-auto w-fit">
            <Users className="w-3 h-3" />
            Who We Are
          </div>
          <h1 className="heading-xl text-white mb-6">
            Building the{' '}
            <span className="gradient-text">Intelligence Layer</span>{' '}
            for Science
          </h1>
          <p className="body-lg max-w-3xl mx-auto">
            GenQuantaa is a deep-tech AI engineering firm that sits at the intersection of artificial
            intelligence, pharmaceutical science, and enterprise engineering. We exist to make
            science-led organizations radically more intelligent.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              color: 'text-cyan-400',
              bg: 'bg-cyan-500/10',
              text: 'To accelerate the velocity of scientific discovery and enterprise transformation through agentic AI systems — built with rigor, deployed with care.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              color: 'text-violet-400',
              bg: 'bg-violet-500/10',
              text: 'A world where every pharmaceutical researcher, clinical team, and enterprise leader has an autonomous AI partner that handles complexity — so humans can focus on what matters.',
            },
            {
              icon: Award,
              title: 'Our Differentiator',
              color: 'text-amber-400',
              bg: 'bg-amber-500/10',
              text: 'We uniquely combine former FDA regulatory expertise, computational science depth, and enterprise-scale engineering. This trinity is impossible to replicate from a software shop alone.',
            },
          ].map(({ icon: Icon, title, color, bg, text }) => (
            <div key={title} className="glass glass-hover rounded-2xl p-7">
              <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-5`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-[#0a1628]/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="badge mb-5 mx-auto w-fit">Our Journey</div>
            <h2 className="heading-md text-white">From Startup to AI Operating System</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6 relative">
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center z-10">
                    <span className="text-cyan-400 font-bold text-xs">{item.year.slice(2)}</span>
                  </div>
                  <div className="glass rounded-xl p-5 flex-1">
                    <div className="text-cyan-400 text-xs font-semibold mb-1">{item.year}</div>
                    <div className="text-white font-semibold mb-2">{item.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="badge mb-5 mx-auto w-fit">What Drives Us</div>
            <h2 className="heading-md text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, color, title, description }) => (
              <div key={title} className="glass glass-hover rounded-2xl p-6 flex gap-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-[#0a1628]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="badge mb-5 mx-auto w-fit">
              <Users className="w-3 h-3" />
              The Team
            </div>
            <h2 className="heading-md text-white">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="glass glass-hover rounded-2xl p-6 text-center">
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white font-black text-xl mx-auto mb-4`}>
                  {person.name.charAt(0)}
                </div>
                <div className="text-white font-bold mb-1">{person.name}</div>
                <div className="text-cyan-400 text-xs font-semibold mb-3">{person.role}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
