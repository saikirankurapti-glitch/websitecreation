import Link from 'next/link';
import { ArrowRight, Zap, ChevronDown } from 'lucide-react';

const industryTags = [
  'Life Sciences',
  'Clinical Research',
  'Healthcare AI',
  'AgriTech',
  'Enterprise DeepTech',
  'Regulatory Intelligence',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">

      {/* ---- Background layers ---- */}
      {/* Radial gradient center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="w-[900px] h-[600px] bg-cyan-500/8 rounded-full blur-[160px] animate-pulse" />
        <div className="w-[600px] h-[400px] bg-violet-500/6 rounded-full blur-[120px] absolute top-1/3" />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030712] to-transparent pointer-events-none" />

      {/* Floating orb decorations */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400/40 animate-float delay-100 hidden md:block" />
      <div className="absolute top-1/3 right-16 w-1.5 h-1.5 rounded-full bg-violet-400/40 animate-float delay-300 hidden md:block" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-cyan-300/30 animate-float delay-500 hidden md:block" />
      <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-amber-400/20 animate-float delay-200 hidden md:block" />

      {/* ---- Content ---- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Industry tags ticker */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {industryTags.map((tag, i) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Badge */}
        <div className="badge mb-6 mx-auto w-fit animate-fade-in-up">
          <Zap className="w-3 h-3 fill-cyan-400" />
          AI Operating System for Scientific Organizations
        </div>

        {/* Main heading */}
        <h1 className="heading-xl text-white mb-6 animate-fade-in-up delay-100">
          Where{' '}
          <span className="gradient-text animate-gradient bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400">
            Deep AI
          </span>{' '}
          Meets{' '}
          <span className="relative inline-block">
            <span className="text-white">Life Sciences</span>
            {/* Underline accent */}
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
          </span>
        </h1>

        {/* Sub-heading */}
        <p className="body-lg max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200 text-slate-400">
          GenQuantaa is an advanced technology and digital engineering firm — blending{' '}
          <span className="text-slate-200 font-medium">Agentic AI</span>,{' '}
          <span className="text-slate-200 font-medium">FDA regulatory expertise</span>, and{' '}
          <span className="text-slate-200 font-medium">enterprise-grade engineering</span> to build
          the AI operating layer for science-led organizations.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up delay-300">
          <Link href="/contact" className="btn-primary text-base px-8 py-4 group glow-cyan">
            Book a Technical Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/case-studies" className="btn-outline text-base px-8 py-4">
            View Case Studies
          </Link>
        </div>

        {/* Social proof strip */}
        <div className="glass rounded-2xl px-6 py-4 inline-flex flex-wrap items-center justify-center gap-6 animate-fade-in-up delay-400">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="w-7 h-7 rounded-full border-2 border-[#030712] bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + n)}
                </div>
              ))}
            </div>
            <span className="text-slate-400 text-xs">
              <span className="text-white font-semibold">50+</span> enterprise organizations trust us
            </span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">★★★★★</span>{' '}
            <span className="text-white font-semibold">4.9/5</span> client satisfaction
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="text-xs text-slate-400">
            <span className="text-white font-semibold">BLR · DXB · SGP</span> global delivery
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center mt-14 gap-2 animate-fade-in-up delay-500">
          <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-slate-600 animate-bounce" />
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}
