import Link from 'next/link';
import {
  FlaskConical, Brain, Building2, GraduationCap, ArrowRight,
  Shield, Atom, Database, Cpu
} from 'lucide-react';

const services = [
  {
    icon: FlaskConical,
    color: 'from-cyan-500 to-teal-400',
    glow: 'rgba(6,182,212,0.3)',
    badge: 'Life Sciences',
    title: 'Life Sciences & Pharma AI',
    description:
      'Accelerate drug discovery, clinical trial intelligence, and regulatory compliance with our proprietary AI engines. From target identification to IND filing — faster.',
    features: ['Drug Target Discovery', 'Clinical Trial Optimization', 'Regulatory Intelligence', 'Biomarker Analysis'],
    href: '/services/life-sciences',
    cta: 'Explore Platform',
  },
  {
    icon: Brain,
    color: 'from-violet-500 to-purple-400',
    glow: 'rgba(139,92,246,0.3)',
    badge: 'Autonomous AI',
    title: 'Agentic AI Systems',
    description:
      'Deploy autonomous multi-agent workflows that reason, plan and execute complex tasks across your enterprise. Beyond chatbots — true AI operating systems.',
    features: ['Multi-Agent Orchestration', 'Autonomous Workflows', 'AI Decision Engines', 'Real-time Adaptation'],
    href: '/services/agentic-ai',
    cta: 'See Agents in Action',
  },
  {
    icon: Building2,
    color: 'from-orange-500 to-amber-400',
    glow: 'rgba(249,115,22,0.3)',
    badge: 'Enterprise',
    title: 'Enterprise AI Engineering',
    description:
      'Custom AI model integration, enterprise-grade software and multi-industry platform deployment. We build the AI infrastructure your organization actually needs.',
    features: ['Custom AI Models', 'Enterprise Integration', 'Legacy Modernization', 'Platform Engineering'],
    href: '/services/enterprise-ai',
    cta: 'Start a Project',
  },
  {
    icon: GraduationCap,
    color: 'from-emerald-500 to-green-400',
    glow: 'rgba(16,185,129,0.3)',
    badge: 'Education',
    title: 'GenQuantaa Academy',
    description:
      'AI-native business education for founders, executives and engineers. Learn to build, lead and deploy AI systems through our Forward-Deployed Engineering programs.',
    features: ['Executive AI Cohorts', 'FDE Masterclasses', 'AI for Pharma Programs', 'CXO Advisory Forums'],
    href: '/services/academy',
    cta: 'Join a Cohort',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-5">
            <Cpu className="w-3 h-3" />
            Our Capabilities
          </div>
          <h2 className="heading-lg text-white mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Four specialized practice areas. One unified mission: making complex organizations
            radically more intelligent through AI.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass glass-hover rounded-2xl p-7 group flex flex-col"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                    style={{ boxShadow: `0 0 20px ${service.glow}` }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="badge text-xs">{service.badge}</span>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom trust row */}
        <div className="mt-14 glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span>All platforms built with HIPAA, GxP, and 21 CFR Part 11 compliance readiness</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <Atom className="w-5 h-5 text-violet-400 flex-shrink-0" />
            <span>Peer-reviewed AI methodology across 12+ proprietary platforms</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <Database className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span>Secure, isolated data infrastructure — your data never trains our models</span>
          </div>
        </div>
      </div>
    </section>
  );
}
