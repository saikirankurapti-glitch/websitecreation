import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, ArrowRight, User } from 'lucide-react';

// In production, these would be loaded from MDX files via gray-matter + next-mdx-remote
// Here we include full article content for the 3 seeded posts
const posts: Record<string, {
  slug: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
}> = {
  'agentic-ai-pharma-2025': {
    slug: 'agentic-ai-pharma-2025',
    tag: 'Agentic AI',
    tagColor: 'text-cyan-400',
    title: 'Why Agentic AI Is the Next Frontier for Pharmaceutical R&D',
    excerpt: 'Multi-agent systems are moving from demos to deployment in biopharma.',
    date: 'November 15, 2026',
    readTime: '8 min read',
    author: 'GenQuantaa Research Team',
    content: `
## The Shift from Tools to Agents

For the past decade, pharmaceutical companies have adopted AI as a collection of specialized tools — a machine learning model for toxicity prediction here, a natural language processor for literature mining there. Each tool is powerful but isolated, requiring constant human coordination between outputs.

Agentic AI changes this. Rather than tools that answer single questions, agents **reason, plan, decompose problems, use other tools, and iterate** until a goal is achieved. Applied to pharmaceutical R&D, this means an agent can receive a target protein, autonomously search the literature, screen virtual compound libraries, predict ADMET properties, generate synthesis routes, and produce a ranked candidate list — all without step-by-step human instruction.

## What "Agentic" Actually Means

The term is overused, so precision matters. A true agentic AI system has four properties:

1. **Goal-directedness**: The agent pursues a defined objective across multiple steps, not just a single response
2. **Tool use**: The agent can call APIs, run calculations, search databases, and invoke other models
3. **Memory**: The agent maintains context across a session (and optionally across sessions)
4. **Self-correction**: When a step fails, the agent recognizes the failure and adapts its approach

Most "AI assistants" in pharma today fail criteria 3 and 4. They are stateless and brittle — one failed API call or unexpected data format breaks the whole pipeline.

## Three High-Impact Deployment Patterns in Pharma

### 1. Autonomous Lead Discovery Agent

**Problem**: Manual triage of compound screening hits requires medicinal chemists to review thousands of candidates against dozens of criteria.

**Solution**: A multi-agent system where:
- A **search agent** pulls relevant hit data from HTS databases
- A **scoring agent** applies ADMET and selectivity filters
- A **synthesis agent** generates and ranks synthetic routes
- A **reporting agent** assembles a ranked brief with rationale

**GenQuantaa result**: Lead candidate identification time reduced by 60% across two client deployments.

### 2. Clinical Protocol Deviation Monitor

**Problem**: Protocol deviations in multi-site trials are detected too late — often weeks after the event, by auditors.

**Solution**: An agent continuously monitors site activity logs, compares against the protocol specification (embedded in a knowledge graph), and raises flagged deviations in real time, assigning severity scores and routing to the appropriate CRA.

**GenQuantaa result**: Zero protocol breach incidents across a 24-country Phase III trial. Time to deviation resolution: 4 hours vs. historical 6 days.

### 3. Regulatory Document Intelligence

**Problem**: FDA guidance documents, ICH guidelines, and country-specific regulations change frequently. Tracking changes and assessing impact on active submissions is a full-time job.

**Solution**: A monitoring agent subscribed to regulatory feeds, with a knowledge graph of company submissions. When a guidance update is detected, the agent assesses its impact on each active submission and generates a change impact summary.

## What's Holding Adoption Back

Three real barriers we see at enterprise clients:

**Validation anxiety**: In GxP environments, every computational system requires validation. Agentic systems — which are inherently non-deterministic — present a documentation challenge for QA teams used to validating static algorithms. Solution: human-in-the-loop checkpoints at defined decision nodes, full audit logging, and deterministic output formatting even with non-deterministic reasoning.

**Data silo integration**: Agents need data to act. Most pharma organizations have scientific data locked in legacy ELNs, proprietary databases, and unstructured document stores. We spend 40% of deployment time on data connector engineering.

**Trust deficit**: Scientists want to understand why an agent made a recommendation. We address this with structured reasoning traces — agents that explain their logic step by step, cite their sources, and flag confidence levels.

## The Road Forward

By 2028, we believe the leading pharmaceutical organizations will operate with what we call an **AI Scientific Operating System** — a coordinated fleet of specialized agents, each owning a domain (target biology, medicinal chemistry, clinical operations, regulatory affairs), coordinated by a meta-agent that manages workflow and resource allocation.

GenQuantaa is building exactly this. If you're a pharma or biotech organization that wants to explore your first agentic AI deployment, [contact our team](/contact) for a no-commitment technical assessment.
    `,
  },
  'generative-chemistry-lead-discovery': {
    slug: 'generative-chemistry-lead-discovery',
    tag: 'Drug Discovery',
    tagColor: 'text-violet-400',
    title: 'Generative Chemistry: From Hypothesis to Lead Candidate in Weeks',
    excerpt: 'Combining transformer-based molecular generation with multi-parameter optimization.',
    date: 'October 28, 2026',
    readTime: '12 min read',
    author: 'Dr. Anika Patel',
    content: `
## The Drug Discovery Speed Problem

Traditional drug discovery operates in geological time. The journey from a validated target to a development candidate — the hit-to-lead and lead optimization phases — typically takes 2 to 5 years and costs hundreds of millions of dollars. Much of that time is spent in a generate-synthesize-test loop that is fundamentally rate-limited by the speed of wet-lab chemistry.

Generative AI doesn't eliminate this loop. But it compresses the **generate** phase from months to days, and shifts the resource bottleneck to only the most promising candidates.

## How ChemVista™ Works

Our ChemVista™ platform combines three architectural layers:

### Layer 1: Transformer-Based Molecular Generation

We use a modified transformer architecture trained on 2.4 billion known drug-like compounds from public and licensed databases (ChEMBL, ZINC, PubChem, proprietary partner data). The model generates SMILES strings conditioned on:

- **Target protein structure** (via pocket descriptor embeddings)
- **Desired property ranges** (solubility, logP, molecular weight, Fsp3)
- **Scaffold constraints** (when medicinal chemists want to explore around a known core)
- **Toxicophore avoidance** (exclusion embeddings trained on DILI, hERG, and mutagenicity data)

The generation process produces 50,000 to 500,000 candidate molecules per run, depending on the constraint tightness.

### Layer 2: Multi-Parameter Optimization Scoring

Each generated candidate is passed through a scoring ensemble:

| Property | Model Type | Training Data |
|---|---|---|
| Binding affinity (pIC50) | Graph neural network | 2.1M activity datapoints |
| ADMET profile | Multi-task neural net | 850K compounds, 40 endpoints |
| Synthetic accessibility | Retrosynthesis model | USPTO reaction database |
| Selectivity score | Comparative docking | Kinome-wide structure data |

Candidates that pass all thresholds enter the ranked output list.

### Layer 3: Synthesis Route Generation

For top candidates, ChemVista generates synthesis routes using our retrosynthesis model, scoring each route for:
- Number of synthetic steps
- Commercial reagent availability
- Estimated synthesis cost
- Expected yield based on reaction type

This directly connects in-silico generation to experimental planning.

## A Real Case: 6 Weeks to Three Lead Candidates

For one of our biopharma clients (a mid-size oncology-focused biotech), we ran a ChemVista engagement targeting a kinase implicated in treatment-resistant NSCLC.

**Week 1**: Target preparation. We ingested the protein crystal structure, defined the binding pocket, and encoded the client's selectivity requirements (avoid 23 off-target kinases).

**Week 2**: Generation run. 240,000 molecules generated. 18,400 passed initial property filters.

**Week 3**: Scoring and ranking. 847 candidates reached the top tier. Synthesis routes generated for top 50.

**Week 4–5**: Medicinal chemist review. Client team selected 8 candidates for synthesis, adding their structural intuition to the AI ranking.

**Week 6**: Synthesis of 8 compounds. 3 showed high binding affinity and acceptable ADMET profiles in initial assays.

**Traditional timeline equivalent**: 14–18 months for the same process using manual enumeration and sequential testing.

## Limitations and Honest Caveats

Generative chemistry is powerful but not magic. Important limitations:

**Models hallucinate unreachable chemistry**: Even with synthetic accessibility scoring, some generated molecules are practically impossible to synthesize. Medicinal chemist review remains essential.

**Binding prediction is approximate**: Our pIC50 models have MAE of ~0.4 log units. Good enough for ranking, not good enough for predicting exact potency. Wet-lab confirmation is mandatory.

**Novelty vs. IP freedom**: Generating novel molecules is easy. Generating molecules that are both novel and free of existing patents requires explicit freedom-to-operate analysis — something we build into every engagement.

**Data quality is everything**: Our models are only as good as the data they're trained on. For targets with sparse SAR data (<500 activity data points), performance degrades.

## Where This Is Heading

The next frontier is closed-loop generative chemistry: AI-proposed compounds, automated synthesis (via liquid-handling robots and AI-driven synthesis planning), automated biological assay, and feedback of experimental results to retrain the generation model — all running in parallel.

We are co-developing this closed-loop system with two robotic laboratory partners. Expected production deployment: Q2 2027.

If this is relevant to your drug discovery pipeline, [reach out to discuss](/contact) how ChemVista can accelerate your program.
    `,
  },
  'enterprise-ai-operating-system': {
    slug: 'enterprise-ai-operating-system',
    tag: 'Enterprise AI',
    tagColor: 'text-amber-400',
    title: 'Building an AI Operating System: What Enterprise Leaders Need to Know',
    excerpt: 'An AI operating system is not a chatbot. It\'s a layered architecture of models, agents, data pipelines, and governance.',
    date: 'October 10, 2026',
    readTime: '10 min read',
    author: 'GenQuantaa CTO Office',
    content: `
## The Language Gap Is Costing You

When enterprise leaders say "we want to implement AI," and engineers hear that request, they're often talking about completely different things. Leaders picture systems that handle complex operational decisions autonomously. Engineers think about deploying a GPT-4 wrapper.

This gap in mental models is why most enterprise AI projects produce impressive demos and disappointing production results.

An AI Operating System (AI OS) closes this gap. It provides a coherent architectural framework for deploying AI that actually runs the enterprise — not AI that assists users, but AI that executes workflows.

## What an AI OS Is Not

Before defining what an AI OS is, it's worth being precise about what it isn't:

**Not a chatbot**: A chatbot is a text interface. An AI OS uses language models as a reasoning layer, but the system's output is actions in the world — API calls, database writes, task completions — not text responses.

**Not a single model**: No single model, however capable, can handle the full breadth of enterprise workflows. An AI OS is an orchestrated collection of specialized models.

**Not a software product you buy**: There is no off-the-shelf AI OS. This is a system you architect and build, with vendor components (foundation models, vector databases, orchestration frameworks) assembled around your specific business logic.

## The Four Layers of an Enterprise AI OS

### Layer 1: Data Infrastructure

Every AI OS starts with data. Before any model is trained or agent deployed, you need:

- **A unified data mesh**: Data from ERP, CRM, LIMS, ELN, SCM, and other systems, normalized and accessible via APIs
- **A vector store**: For semantic search across unstructured documents (SOPs, contracts, research papers, emails)
- **An event stream**: Real-time operational events that agents can subscribe to and react to
- **A knowledge graph**: Structured relationships between entities (customers, products, processes, regulations)

Without this layer, your AI agents are operating blind.

### Layer 2: Model Tier

A portfolio of specialized models, each optimized for a specific task type:

| Task Type | Model Class | Example |
|---|---|---|
| Language reasoning | Fine-tuned LLM | Contract review, report generation |
| Prediction | Tabular ML | Demand forecasting, risk scoring |
| Classification | Smaller transformer | Document routing, intent detection |
| Vision | CNN / ViT | Quality inspection, document parsing |
| Optimization | Reinforcement learning | Resource scheduling, pricing |

The key principle: **right model for the right task**. Using a 70B parameter LLM for binary classification is wasteful. Using a linear regression model for open-ended reasoning is insufficient.

### Layer 3: Agent Orchestration

Agents are the operational layer of the AI OS. Each agent:

1. **Has a defined scope**: It owns a specific business process or decision domain
2. **Has access to tools**: APIs, databases, models, communication channels
3. **Has memory**: Session memory (current task context) and long-term memory (historical patterns)
4. **Has governance rails**: Defined confidence thresholds below which it escalates to humans

A meta-orchestrator manages agent routing: when a user request or business event arrives, the orchestrator determines which agent(s) should handle it, in what sequence, and how to aggregate results.

### Layer 4: Governance and Observability

This is the layer most organizations underinvest in — and the one that determines whether the AI OS can be trusted for real operations.

**Audit logging**: Every agent action, every model inference, every decision should be logged with inputs, outputs, reasoning, and timestamp.

**Confidence monitoring**: Models degrade over time as the world changes. Statistical process control on model outputs detects drift before it causes business impact.

**Human-in-the-loop escalation**: Define the decision types and confidence thresholds that require human approval. Build the escalation workflows before you go live.

**Role-based AI access control**: Not every user should have access to every agent capability. Apply the principle of least privilege to AI just as you would to IT systems.

## The Build Path: 90 Days to Your First Production AI OS Component

We recommend starting with one high-value, bounded workflow rather than attempting to AI-ify the entire enterprise at once.

**Week 1–2: Discovery**  
Map 5 candidate workflows. Score each on: business value, data availability, process clarity, and change management difficulty. Select one.

**Week 3–6: Data and Integration**  
Build the data connectors, normalize the data, deploy the vector store. This takes longer than expected. Budget for it.

**Week 7–10: Agent Development**  
Build the agent. Test it against historical cases. Measure accuracy. Tune.

**Week 11–12: Governance Layer**  
Deploy logging, monitoring, and escalation workflows. Conduct a tabletop exercise: "what happens if the agent makes a wrong decision?"

**Week 13+: Production and Iteration**  
Deploy to production with human-in-the-loop on all decisions. Progressively remove human review as confidence builds and accuracy is verified.

## A Final Note on Culture

The hardest part of building an AI OS is not technical. It's organizational. Employees who currently own a process may feel threatened by an agent taking it over. Managers may resist losing visibility into decisions.

The organizations that succeed with AI OS treat it as an **augmentation** story, not an automation story, in the early stages. The agent handles the routine; humans handle the judgment calls and exceptions. Over time, as trust builds, the boundary shifts.

GenQuantaa has deployed AI OS components across industries including pharmaceutical, agri-commodity trading, and healthcare. [Contact us](/contact) to discuss your organization's specific starting point.
    `,
  },
};

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderMarkdown(content: string): string {
  // Basic markdown-to-HTML transformation
  return content
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-white mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-cyan-300 mt-7 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-slate-300">$1</em>')
    .replace(/`(.+?)`/g, '<code class="text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">$1</a>')
    .replace(/^\|(.+)\|$/gm, (line) => {
      const cells = line.split('|').filter(Boolean).map((c) => c.trim());
      if (cells.every((c) => /^[-:]+$/.test(c))) return '';
      const isHeader = line.includes('---');
      const tag = isHeader ? 'th' : 'td';
      return `<tr class="border-b border-white/5">${cells.map((c) => `<${tag} class="px-4 py-2 text-sm text-slate-300 text-left">${c}</${tag}>`).join('')}</tr>`;
    })
    .replace(/((?:<tr[^>]*>[\s\S]*?<\/tr>\n?)+)/g, '<div class="overflow-x-auto my-6"><table class="w-full border-collapse"><tbody class="divide-y divide-white/5">$1</tbody></table></div>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="text-slate-300 leading-relaxed ml-4 list-decimal">$2</li>')
    .replace(/^- (.+)$/gm, '<li class="text-slate-300 leading-relaxed ml-4 list-disc">$1</li>')
    .replace(/(<li[^>]*>[\s\S]*?<\/li>(?:\n<li[^>]*>[\s\S]*?<\/li>)*)/g, '<ul class="space-y-2 my-4 pl-4">$1</ul>')
    .replace(/^(?!<[h|u|t|l|d]).+$/gm, (line) => line.trim() ? `<p class="text-slate-300 leading-relaxed my-4">${line}</p>` : '');
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const contentHtml = renderMarkdown(post.content);

  return (
    <>
      {/* Back button */}
      <div className="pt-28 pb-6 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <header className="mb-10">
            <span className={`text-xs font-semibold uppercase tracking-wide ${post.tagColor} mb-4 block`}>
              {post.tag}
            </span>
            <h1 className="heading-lg text-white mb-5 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                  G
                </div>
                <span className="text-slate-300">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </div>
            </div>
          </header>

          {/* Divider */}
          <div className="divider mb-10" />

          {/* Body */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Divider */}
          <div className="divider my-10" />

          {/* CTA */}
          <div className="glass rounded-2xl p-7 text-center">
            <h3 className="text-white font-bold text-lg mb-2">Found this useful?</h3>
            <p className="text-slate-400 text-sm mb-5">
              Talk to our team about how we can apply these approaches to your organization.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
                Book a Demo
              </Link>
              <Link href="/blog" className="btn-outline text-sm py-2.5 px-6">
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
