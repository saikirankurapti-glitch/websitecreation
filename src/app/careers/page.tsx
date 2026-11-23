import type { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, Zap, ArrowRight, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers — Join the GenQuantaa Team',
  description:
    'Build AI systems that transform life sciences and enterprise. Join our team of engineers, scientists, and product builders at GenQuantaa.',
};

const openRoles = [
  {
    id: 'senior-ai-engineer',
    title: 'Senior AI/ML Engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Bangalore, India (Hybrid)',
    tags: ['Python', 'PyTorch', 'LLMs', 'MLOps'],
    description:
      'Design, train, and deploy production ML models and agentic AI systems for life sciences and enterprise clients. You\'ll own end-to-end model development — from data processing to production deployment.',
  },
  {
    id: 'fullstack-engineer',
    title: 'Full-Stack Engineer (Next.js / TypeScript)',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Bangalore, India (Hybrid)',
    tags: ['Next.js', 'TypeScript', 'React', 'Node.js'],
    description:
      'Build enterprise-grade AI-powered web platforms for our clients. You\'ll work across the stack — from Next.js frontends to Node/Python backends, database design, and API integrations.',
  },
  {
    id: 'computational-scientist',
    title: 'Computational Scientist — Drug Discovery',
    team: 'Life Sciences',
    type: 'Full-time',
    location: 'Bangalore, India / Remote',
    tags: ['Computational Chemistry', 'RDKit', 'Protein Structures', 'ML'],
    description:
      'Apply computational chemistry and AI to accelerate drug discovery programs for our pharma clients. Work with ChemVista™ to optimize molecular generation, docking, and ADMET prediction pipelines.',
  },
  {
    id: 'ai-product-manager',
    title: 'AI Product Manager',
    team: 'Product',
    type: 'Full-time',
    location: 'Bangalore, India (Hybrid)',
    tags: ['Product Strategy', 'AI/ML', 'Enterprise SaaS', 'Life Sciences'],
    description:
      'Own the roadmap for one of our core AI platforms. You\'ll work at the intersection of science, engineering, and enterprise sales — translating client needs into product requirements and delivery.',
  },
  {
    id: 'enterprise-sales-dubai',
    title: 'Enterprise Account Executive — GCC',
    team: 'Sales',
    type: 'Full-time',
    location: 'Dubai, UAE',
    tags: ['Enterprise Sales', 'AI Solutions', 'GCC Market', 'Life Sciences'],
    description:
      'Drive enterprise sales across the GCC for our AI platforms. You\'ll work with C-suite stakeholders at pharma, healthcare, and enterprise organizations to close complex, multi-year AI transformation deals.',
  },
  {
    id: 'fde-academy',
    title: 'Forward-Deployed Engineer (FDE) — Academy',
    team: 'Academy',
    type: 'Full-time',
    location: 'Multiple Locations (BLR, DXB, SGP)',
    tags: ['AI Training', 'Technical Teaching', 'Curriculum Design', 'Pharma AI'],
    description:
      'Design and deliver AI training programs for executives, founders, and technical teams. You\'ll combine deep technical expertise with the ability to explain complex AI concepts to non-technical audiences.',
  },
];

const perks = [
  { icon: '🧠', label: 'Frontier AI Work', desc: 'Work on production AI systems, not demos' },
  { icon: '🌍', label: 'Global Impact', desc: 'Technology that changes how science is done' },
  { icon: '📚', label: 'Learning Budget', desc: '₹1L/year learning & conference allowance' },
  { icon: '🏥', label: 'Health Coverage', desc: 'Comprehensive medical for you and family' },
  { icon: '🏠', label: 'Flexible Work', desc: 'Hybrid-first culture, outcome-driven' },
  { icon: '📈', label: 'Equity Program', desc: 'ESOP program for all full-time employees' },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="badge mb-6 mx-auto w-fit">
            <Zap className="w-3 h-3" />
            We&apos;re Hiring
          </div>
          <h1 className="heading-xl text-white mb-5">
            Build AI That Matters
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            We&apos;re a team of engineers, scientists, and product builders who believe the most
            impactful AI work happens at the intersection of deep technology and real scientific
            problems.
          </p>
        </div>
      </section>

      {/* Culture section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="badge mb-5">
                <Heart className="w-3 h-3" />
                Our Culture
              </div>
              <h2 className="heading-md text-white mb-4">
                High standards.<br />
                <span className="gradient-text">Real autonomy.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                We hire people who are exceptionally good at their craft, give them real problems to
                solve, and get out of their way. No bureaucracy, no death-by-committee.
              </p>
              <p className="text-slate-400 leading-relaxed">
                If you want to build AI that actually ships to production in biopharma, healthcare, and
                enterprise — and have your work matter to real people — this is the place.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {perks.map((perk) => (
                <div key={perk.label} className="bg-white/3 border border-white/8 rounded-xl p-4">
                  <div className="text-2xl mb-2">{perk.icon}</div>
                  <div className="text-white text-sm font-semibold mb-1">{perk.label}</div>
                  <div className="text-slate-500 text-xs">{perk.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <div className="badge mb-4">
              <Briefcase className="w-3 h-3" />
              Open Positions
            </div>
            <h2 className="heading-md text-white">
              {openRoles.length} Open Roles
            </h2>
          </div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <div key={role.id} className="glass glass-hover rounded-2xl p-6 group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                  <div className="flex-1">
                    {/* Title + team */}
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                        {role.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {role.team}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-slate-500 text-xs mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {role.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{role.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply button */}
                  <div className="flex-shrink-0">
                    <Link
                      href={`/contact?subject=Application: ${encodeURIComponent(role.title)}`}
                      className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No role fit */}
          <div className="mt-10 glass rounded-2xl p-7 text-center">
            <div className="text-2xl mb-3">🔭</div>
            <h3 className="text-white font-bold mb-2">Don&apos;t see your role?</h3>
            <p className="text-slate-400 text-sm mb-5">
              We&apos;re always interested in exceptional people. Send us your profile and tell us what problem you want to solve.
            </p>
            <Link href="/contact" className="btn-outline text-sm py-2.5 px-6">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
