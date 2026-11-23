import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'VP Clinical Research, BioNexus Therapeutics',
    avatar: '/avatars/testimonial-1.svg',
    stars: 5,
    quote:
      'GenQuantaa\'s clinical trial intelligence platform cut our site activation timeline by 38%. The regulatory AI flagged compliance gaps our team missed. This is the future of pharma R&D.',
    metric: '38% faster site activation',
  },
  {
    name: 'Rajesh Menon',
    role: 'Chief AI Officer, Meridian Healthcare',
    avatar: '/avatars/testimonial-2.svg',
    stars: 5,
    quote:
      'The agentic workflows GenQuantaa built for us handle 80% of routine clinical documentation. Our scientists now spend their time doing actual science, not paperwork.',
    metric: '80% documentation automated',
  },
  {
    name: 'Dr. Amara Okonkwo',
    role: 'Director of Drug Discovery, PharmaTech Africa',
    avatar: '/avatars/testimonial-3.svg',
    stars: 5,
    quote:
      'ChemVista\'s generative molecule design identified 3 lead candidates in 6 weeks — work that would have taken our team 18 months using traditional in-silico methods.',
    metric: '3× faster lead discovery',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge mb-5">
            <Star className="w-3 h-3 fill-current" />
            Client Stories
          </div>
          <h2 className="heading-lg text-white mb-4">
            Trusted by <span className="gradient-text">Science-Led</span> Organizations
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            Measurable outcomes from teams pushing the boundaries of AI in life sciences and enterprise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass glass-hover rounded-2xl p-7 flex flex-col relative overflow-hidden group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-6 w-10 h-10 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric pill */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-5 w-fit">
                📈 {t.metric}
              </div>

              {/* Divider */}
              <div className="divider mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
