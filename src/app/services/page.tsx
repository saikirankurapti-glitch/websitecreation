import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FlaskConical, Brain, Building2, GraduationCap,
  ArrowRight, CheckCircle2, Zap
} from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Services — Life Sciences AI, Agentic AI, Enterprise AI | GenQuantaa',
  description:
    'GenQuantaa\'s four practice areas: Life Sciences & Pharma AI, Agentic AI Systems, Enterprise AI Engineering, and GenQuantaa Academy.',
};

const services = [
  {
    id: 'life-sciences',
    icon: FlaskConical,
    color: 'from-cyan-500 to-teal-400',
    glow: 'rgba(6,182,212,0.2)',
    title: 'Life Sciences & Pharma AI',
    tagline: 'From molecule to market — faster.',
    description:
      'We build AI platforms that compress the drug discovery and clinical development timeline. Our proprietary engines — ChemVista™, Kinetica™, and GENQUANTAA Intelligence™ — integrate generative chemistry, multi-omic data processing, and regulatory intelligence into one coherent AI system.',
    capabilities: [
      'Generative molecular design and compound screening',
      'Target identification and validation',
      'Multi-omic biomarker discovery',
      'Clinical trial protocol optimization',
      'Regulatory intelligence and filing assistance',
      'Pharmacokinetics and ADMET prediction',
      'Real-world evidence analysis',
      'GxP-compliant data infrastructure',
    ],
    outcomes: ['60% reduction in lead identification time', '78% cost reduction vs. traditional wet-lab screening', '24/7 autonomous regulatory monitoring'],
    href: '/services/life-sciences',
  },
  {
    id: 'agentic-ai',
    icon: Brain,
    color: 'from-violet-500 to-purple-400',
    glow: 'rgba(139,92,246,0.2)',
    title: 'Agentic AI Systems',
    tagline: 'Beyond chatbots — autonomous AI that works.',
    description:
      'We design and deploy multi-agent AI architectures that reason, plan, and execute complex multi-step workflows across your enterprise. This isn\'t prompt engineering — it\'s autonomous system design with real production reliability.',
    capabilities: [
      'Multi-agent workflow orchestration',
      'Tool-using autonomous AI agents',
      'Long-horizon reasoning and planning',
      'Real-time environmental adaptation',
      'Human-in-the-loop governance',
      'AI agent monitoring and observability',
      'Enterprise integration with existing systems',
      'Role-based AI access control',
    ],
    outcomes: ['80% automation of routine knowledge work', '40% reduction in operational overhead', 'Zero-defect agent governance for regulated industries'],
    href: '/services/agentic-ai',
  },
  {
    id: 'enterprise-ai',
    icon: Building2,
    color: 'from-amber-500 to-orange-400',
    glow: 'rgba(245,158,11,0.2)',
    title: 'Enterprise AI Engineering',
    tagline: 'The AI your organization actually needs.',
    description:
      'Custom AI model development, enterprise platform modernization, and production ML systems — built to your specific business logic, data architecture, and security requirements. No generic SaaS. No out-of-the-box demos.',
    capabilities: [
      'Custom large language model fine-tuning',
      'Enterprise AI platform design',
      'Legacy system AI augmentation',
      'Secure private AI deployment (on-prem / VPC)',
      'AI governance and compliance frameworks',
      'MLOps and model lifecycle management',
      'AI-native product development',
      'Team training and capability building',
    ],
    outcomes: ['23% average procurement cost savings', '90% reduction in report generation time', '94% user adoption on delivered platforms'],
    href: '/services/enterprise-ai',
  },
  {
    id: 'academy',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-400',
    glow: 'rgba(16,185,129,0.2)',
    title: 'GenQuantaa Academy',
    tagline: 'Learn AI by building real systems.',
    description:
      'AI-native education for the next generation of business and scientific leaders. Our programs combine deep technical AI content with real-world application — taught by practitioners who build production AI systems, not academics.',
    capabilities: [
      'CXO AI Strategy Masterclasses (online + in-person)',
      'Forward-Deployed Engineering Cohorts',
      'AI for Pharmaceutical Development (12-week)',
      'Agentic Systems Design Bootcamp',
      'Executive AI Advisory forums',
      'AI for clinical operations training',
      'Team upskilling programs',
      'Customized enterprise workshops',
    ],
    outcomes: ['500+ executives trained', 'Hubs in BLR · DXB · SGP', 'Industry partnerships with 20+ pharma organizations'],
    href: '/services/academy',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="badge mb-6 mx-auto w-fit">
            <Zap className="w-3 h-3" />
            What We Build
          </div>
          <h1 className="heading-xl text-white mb-6">
            Four <span className="gradient-text">Practice Areas</span>,<br />
            One Unified Mission
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Specialized capabilities that work independently or together as an integrated AI operating
            system for your organization.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 px-4 ${!isEven ? 'bg-[#0a1628]/30' : ''}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="glass rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                  {/* Left: Text */}
                  <div>
                    {/* Icon + title */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}
                        style={{ boxShadow: `0 0 30px ${service.glow}` }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                        <p className="text-slate-400 text-sm mt-0.5 italic">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8">{service.description}</p>

                    {/* Outcomes */}
                    <div className="glass rounded-xl p-5 mb-7 space-y-2">
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">
                        Proven Outcomes
                      </p>
                      {service.outcomes.map((o) => (
                        <div key={o} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{o}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                        Discuss Your Project
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href={service.href} className="btn-outline text-sm py-2.5 px-5">
                        Learn More
                      </Link>
                    </div>
                  </div>

                  {/* Right: Capabilities list */}
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-5">
                      Capabilities
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-start gap-2.5 p-3 bg-white/3 border border-white/8 rounded-xl"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} mt-1.5 flex-shrink-0`} />
                          <span className="text-slate-300 text-sm">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
