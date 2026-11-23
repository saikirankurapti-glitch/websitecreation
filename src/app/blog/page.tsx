import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, BookOpen, Rss } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — AI Research & Insights | GenQuantaa',
  description:
    'Insights, research, and technical deep-dives from the GenQuantaa engineering team on AI for life sciences, agentic systems, and enterprise AI.',
};

const posts = [
  {
    slug: 'agentic-ai-pharma-2025',
    tag: 'Agentic AI',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'Why Agentic AI Is the Next Frontier for Pharmaceutical R&D',
    excerpt:
      'Multi-agent systems are moving from demos to deployment in biopharma. Here\'s how leading life sciences organizations are operationalizing autonomous AI for real scientific work — and what\'s holding others back.',
    date: 'November 15, 2026',
    readTime: '8 min read',
    author: 'GenQuantaa Research Team',
    featured: true,
  },
  {
    slug: 'generative-chemistry-lead-discovery',
    tag: 'Drug Discovery',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    title: 'Generative Chemistry: From Hypothesis to Lead Candidate in Weeks',
    excerpt:
      'Combining transformer-based molecular generation with multi-parameter optimization, our ChemVista platform demonstrates how AI can compress the hit-to-lead phase from months to weeks.',
    date: 'October 28, 2026',
    readTime: '12 min read',
    author: 'Dr. Anika Patel',
    featured: false,
  },
  {
    slug: 'enterprise-ai-operating-system',
    tag: 'Enterprise AI',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    title: 'Building an AI Operating System: What Enterprise Leaders Need to Know',
    excerpt:
      'An AI operating system is not a chatbot. It\'s a layered architecture of models, agents, data pipelines, and governance that makes an organization genuinely autonomous.',
    date: 'October 10, 2026',
    readTime: '10 min read',
    author: 'GenQuantaa CTO Office',
    featured: false,
  },
  {
    slug: 'clinical-trial-ai-site-activation',
    tag: 'Clinical AI',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    title: 'Cutting Clinical Site Activation Time by 38% with AI Agents',
    excerpt:
      'Site initiation is one of the most time-consuming phases of a clinical trial. We walk through how autonomous AI agents coordinated IRB tracking, protocol training, and site readiness across 24 countries.',
    date: 'September 20, 2026',
    readTime: '9 min read',
    author: 'Clinical AI Team',
    featured: false,
  },
  {
    slug: 'regulatory-intelligence-ai',
    tag: 'Regulatory AI',
    tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    title: 'Regulatory Intelligence in the Age of LLMs: A Practical Guide',
    excerpt:
      'FDA, EMA, PMDA — global regulatory environments are complex. We explore how large language models, combined with structured regulatory knowledge graphs, can automate compliance monitoring and submission assistance.',
    date: 'September 5, 2026',
    readTime: '14 min read',
    author: 'Dr. Priya Nair',
    featured: false,
  },
  {
    slug: 'forward-deployed-engineering',
    tag: 'Engineering',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    title: 'Forward-Deployed Engineering: The Most Powerful AI Deployment Model Nobody Talks About',
    excerpt:
      'FDE means embedding engineers directly inside client operations rather than handing over software. It\'s how Palantir built early wins — and how GenQuantaa accelerates real AI adoption.',
    date: 'August 18, 2026',
    readTime: '7 min read',
    author: 'Rakshith Kumar',
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="badge mb-6 mx-auto w-fit">
            <Rss className="w-3 h-3" />
            Research & Insights
          </div>
          <h1 className="heading-xl text-white mb-4">
            From the <span className="gradient-text">Lab</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Technical deep-dives, industry analysis, and practical AI guidance from our research team and practitioners.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href={`/blog/${featured.slug}`} className="glass glass-hover rounded-3xl p-8 md:p-10 block group">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${featured.tagColor}`}>
                      {featured.tag}
                    </span>
                    <span className="badge text-xs">Featured</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                      <span className="mx-2">·</span>
                      {featured.date}
                    </div>
                    <div className="flex items-center gap-1 text-cyan-400 text-sm font-semibold group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog grid */}
      <section className="py-10 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass glass-hover rounded-2xl p-6 flex flex-col group"
              >
                {/* Tag + read time */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug flex-1 group-hover:text-cyan-300 transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 mt-auto">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
