import { Shield, Award, FileCheck, Globe } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'HIPAA Compliant Architecture' },
  { icon: FileCheck, label: '21 CFR Part 11 Ready' },
  { icon: Award, label: 'GxP Validated Platforms' },
  { icon: Globe, label: 'SOC 2 Type II (In Progress)' },
];

// Partner/client logos as text placeholders (replace with actual SVG logos)
const clientLogos = [
  'BioNexus Therapeutics',
  'Meridian Healthcare',
  'PharmaTech Africa',
  'AgriCore International',
  'Helix Genomics',
  'VeriClin CRO',
];

export default function TrustBandSection() {
  return (
    <section className="relative py-12 px-4 border-y border-white/5 bg-[#0a1628]/30">
      <div className="max-w-7xl mx-auto">

        {/* Compliance badges row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Client logos */}
        <div>
          <p className="text-center text-slate-600 text-xs uppercase tracking-widest mb-6">
            Trusted by science-led organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="text-slate-500 font-semibold text-sm tracking-wide hover:text-slate-300 transition-colors cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
