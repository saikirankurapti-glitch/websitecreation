import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/life-sciences',
    '/services/agentic-ai',
    '/services/enterprise-ai',
    '/services/academy',
    '/case-studies',
    '/blog',
    '/careers',
    '/contact',
  ];

  const blogSlugs = [
    'agentic-ai-pharma-2025',
    'generative-chemistry-lead-discovery',
    'enterprise-ai-operating-system',
    'clinical-trial-ai-site-activation',
    'regulatory-intelligence-ai',
    'forward-deployed-engineering',
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
