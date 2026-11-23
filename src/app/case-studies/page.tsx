import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies — AI Results for Life Sciences & Enterprise | GenQuantaa',
  description:
    'Real results from GenQuantaa\'s AI deployments: drug discovery, clinical trial management, enterprise AI transformation.',
};

const cases = [
  {
    id: 'drug-discovery-ai',
    tag: 'Life Sciences AI',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    client: 'Global Oncology Biotech (Confidential)',
    industry: 'Oncology · Phase II Pipeline',
    title: 'Reducing Drug Discovery Lead Time by 60% with Generative AI',
    summary:
      'A mid-size oncology-focused biotech needed to accelerate hit-to-lead optimization for a kinase target in treatment-resistant NSCLC. Traditional methods would take 18 months. Using ChemVista™, GenQuantaa delivered 3 development-ready lead candidates in 6 weeks.',
    challenge: 'The client had a validated kinase target but limited medicinal chemistry capacity. Manual compound enumeration and sequential wet-lab testing was creating a critical bottleneck in a time-sensitive competitive landscape.',
    solution: 'Deployed ChemVista™ for conditioned molecular generation (240,000 candidates), multi-parameter ADMET scoring, and synthesis route planning. 3 compounds selected for synthesis and confirmed high-affinity binding.',
    metrics: [
      { label: 'Lead time reduction', value: '60%' },
      { label: 'Compounds screened in-silico', value: '240K' },
      { label: 'Cost vs. traditional wet-lab', value: '-78%' },
      { label: 'Lead candidates delivered', value: '3' },
    ],
    duration: '6 weeks',
  },
  {
    id: 'clinical-site-management',
    tag: 'Clinical AI',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    client: 'CRO Partner (Confidential)',
    industry: 'Clinical Research · Phase III Global Trial',
    title: 'Autonomous Clinical Site Management for 24-Country Phase III Trial',
    summary:
      'A global CRO managing a complex Phase III trial across 24 countries engaged GenQuantaa to build an agentic workflow system to manage site activation, protocol compliance, and cross-site reporting.',
    challenge: 'Manual coordination across 24 countries, 180 sites, and 3 regulatory jurisdictions was creating protocol deviation risks and extending site activation timelines by 4–8 weeks per site.',
    solution: 'Built a multi-agent system: a Site Readiness Agent, Protocol Compliance Monitor, and Regulatory Tracking Agent. Each agent monitored its domain in real-time and escalated to human CRAs only when confidence thresholds were breached.',
    metrics: [
      { label: 'Per-site overhead reduction', value: '40%' },
      { label: 'Countries coordinated', value: '24' },
      { label: 'Protocol breach incidents', value: '0' },
      { label: 'Time to deviation resolution', value: '4 hrs' },
    ],
    duration: '12 weeks (build + deployment)',
  },
  {
    id: 'agri-ai-erp',
    tag: 'Enterprise AI',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    client: 'AgriCore International',
    industry: 'AgriTech · Commodity Trading',
    title: 'AI-Native ERP Transformation for Agri-Commodity Trader',
    summary:
      'AgriCore was running critical procurement and compliance operations on a 15-year-old legacy ERP that couldn\'t integrate with modern data sources or AI tools. GenQuantaa built a replacement platform with an embedded AI operating layer.',
    challenge: 'The legacy system required manual data entry for 70% of transactions, couldn\'t process real-time commodity price feeds, and generated compliance reports that took 3 weeks to produce manually.',
    solution: 'Designed and built an AI-native platform with: predictive procurement engine, automated compliance reporting, real-time price feed integration, and an AI operational assistant for natural-language queries across all business data.',
    metrics: [
      { label: 'Procurement cost savings', value: '23%' },
      { label: 'Report generation time', value: '-90%' },
      { label: 'User adoption rate', value: '94%' },
      { label: 'Manual data entry reduction', value: '85%' },
    ],
    duration: '20 weeks',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="badge mb-6 mx-auto w-fit">
            <TrendingUp className="w-3 h-3" />
            Proof of Impact
          </div>
          <h1 className="heading-xl text-white mb-4">
            Results That <span className="gradient-text">Measure</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Detailed case studies from real GenQuantaa engagements. All metrics verified with client sign-off.
            Identities disclosed only with explicit permission.
          </p>
        </div>
      </section>

      {/* Case Study cards */}
      <section className="py-10 pb-24 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          {cases.map((cs, i) => (
            <div key={cs.id} id={cs.id} className="glass rounded-3xl p-7 md:p-10">

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cs.tagColor}`}>
                      {cs.tag}
                    </span>
                    <span className="text-slate-500 text-xs">{cs.industry}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">{cs.title}</h2>
                  <div className="text-slate-500 text-sm">Client: {cs.client} · Duration: {cs.duration}</div>
                </div>
              </div>

              {/* Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {/* Text */}
                <div className="md:col-span-2 space-y-5">
                  <div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest mb-2">Overview</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{cs.summary}</p>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest mb-2">The Challenge</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest mb-2">Our Solution</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Discuss a similar project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  <div className="text-slate-400 text-xs uppercase tracking-widest mb-3">Impact Metrics</div>
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-white/3 border border-white/8 rounded-xl p-4">
                      <div className="text-3xl font-black gradient-text mb-1">{m.value}</div>
                      <div className="text-slate-400 text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
