import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    tag: 'Life Sciences',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'Reducing Drug Discovery Lead Time by 60% with Generative AI',
    client: 'Global Biopharma | Phase II Pipeline',
    description:
      'Deployed ChemVista™ for in-silico compound screening across 2.4 million molecular variants. Identified 5 high-affinity lead candidates within 8 weeks, compared to the 12-month traditional timeline.',
    metrics: [
      { label: 'Faster lead identification', value: '60%' },
      { label: 'Compounds screened', value: '2.4M' },
      { label: 'Cost reduction vs. wet lab', value: '78%' },
    ],
    href: '/case-studies/drug-discovery-ai',
    image: '/case-studies/drug-discovery.svg',
  },
  {
    tag: 'Clinical AI',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    title: 'Autonomous Clinical Site Management for Multi-Country Trial',
    client: 'CRO Partner | 24-country Phase III Trial',
    description:
      'Built an agentic workflow system managing patient screening, IRB tracking, protocol deviation alerts, and cross-site reporting — reducing per-site overhead by 40%.',
    metrics: [
      { label: 'Per-site overhead reduction', value: '40%' },
      { label: 'Countries coordinated', value: '24' },
      { label: 'Compliance breach incidents', value: '0' },
    ],
    href: '/case-studies/clinical-site-management',
    image: '/case-studies/clinical-ai.svg',
  },
  {
    tag: 'Enterprise AI',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'AI-Native ERP Transformation for Agri-Commodity Trader',
    client: 'AgriTech Enterprise | 500+ Users',
    description:
      'Replaced legacy ERP with an AI-augmented platform featuring predictive procurement, automated compliance reporting, and a conversational operations assistant.',
    metrics: [
      { label: 'Procurement cost savings', value: '23%' },
      { label: 'Report generation time', value: '-90%' },
      { label: 'User adoption rate', value: '94%' },
    ],
    href: '/case-studies/agri-ai-erp',
    image: '/case-studies/enterprise.svg',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="badge mb-4">
              <ExternalLink className="w-3 h-3" />
              Proof of Impact
            </div>
            <h2 className="heading-lg text-white">
              Real Results, <span className="gradient-text">Measured</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="btn-outline text-sm flex-shrink-0 self-start md:self-end"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.title}
              className="glass glass-hover rounded-2xl p-6 md:p-8 group"
            >
              <div className="flex flex-col lg:flex-row gap-7">

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cs.tagColor}`}
                    >
                      {cs.tag}
                    </span>
                    <span className="text-slate-500 text-xs">{cs.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {cs.description}
                  </p>
                  <Link
                    href={cs.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:w-52 flex-shrink-0">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white/3 border border-white/8 rounded-xl p-3 text-center"
                    >
                      <div className="text-2xl font-black gradient-text mb-1">{m.value}</div>
                      <div className="text-slate-500 text-xs leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
