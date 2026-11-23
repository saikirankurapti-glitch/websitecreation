import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

// Sample blog post data — will be replaced by actual MDX reading in /blog page
const latestPosts = [
  {
    slug: 'agentic-ai-pharma-2025',
    tag: 'Agentic AI',
    tagColor: 'text-cyan-400',
    title: 'Why Agentic AI Is the Next Frontier for Pharmaceutical R&D',
    excerpt:
      'Multi-agent systems are moving from demos to deployment in biopharma. Here\'s how leading life sciences organizations are operationalizing autonomous AI for real scientific work.',
    date: 'November 15, 2026',
    readTime: '8 min read',
    author: 'GenQuantaa Research Team',
  },
  {
    slug: 'generative-chemistry-lead-discovery',
    tag: 'Drug Discovery',
    tagColor: 'text-violet-400',
    title: 'Generative Chemistry: From Hypothesis to Lead Candidate in Weeks',
    excerpt:
      'Combining transformer-based molecular generation with multi-parameter optimization, our ChemVista platform demonstrates how AI can compress the hit-to-lead phase dramatically.',
    date: 'October 28, 2026',
    readTime: '12 min read',
    author: 'Dr. Anika Patel',
  },
  {
    slug: 'enterprise-ai-operating-system',
    tag: 'Enterprise AI',
    tagColor: 'text-amber-400',
    title: 'Building an AI Operating System: What Enterprise Leaders Need to Know',
    excerpt:
      'An AI operating system is not a chatbot. It\'s a layered architecture of models, agents, data pipelines, and governance that makes an organization genuinely autonomous.',
    date: 'October 10, 2026',
    readTime: '10 min read',
    author: 'GenQuantaa CTO Office',
  },
];

export default function BlogPreviewSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="badge mb-4">
              <BookOpen className="w-3 h-3" />
              Insights & Research
            </div>
            <h2 className="heading-lg text-white">
              From the <span className="gradient-text">Lab</span>
            </h2>
          </div>
          <Link href="/blog" className="btn-outline text-sm flex-shrink-0 self-start md:self-end">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Post cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass glass-hover rounded-2xl p-6 flex flex-col group"
            >
              {/* Tag + read time */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold uppercase tracking-wide ${post.tagColor}`}>
                  {post.tag}
                </span>
                <span className="flex items-center gap-1 text-slate-500 text-xs">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-3 leading-snug flex-1 group-hover:text-cyan-300 transition-colors line-clamp-3">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-slate-500 mt-auto">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
