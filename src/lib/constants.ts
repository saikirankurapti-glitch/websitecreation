// ============================================================
// GENQUANTAA — Site-wide constants
// ============================================================

export const SITE_NAME = 'GenQuantaa';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://genquantaa.com';
export const SITE_DESCRIPTION =
  'GenQuantaa — The AI Operating System for Scientific and Enterprise Organizations. Agentic AI, Life Sciences AI, and Enterprise Intelligence Platforms.';
export const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Life Sciences AI', href: '/services/life-sciences' },
      { label: 'Agentic AI Systems', href: '/services/agentic-ai' },
      { label: 'Enterprise AI Engineering', href: '/services/enterprise-ai' },
      { label: 'GenQuantaa Academy', href: '/services/academy' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/genquantaa',
  twitter: 'https://twitter.com/genquantaa',
  youtube: 'https://youtube.com/@genquantaa',
  github: 'https://github.com/genquantaa',
} as const;

export const CONTACT_EMAIL = 'contact@genquantaa.com';
export const COMPANY_LOCATION = 'Bangalore, India | Dubai, UAE | Singapore';

export const STATS = [
  { value: '50+', label: 'Enterprise Clients', description: 'Across Life Sciences and Deep Tech' },
  { value: '12+', label: 'AI Products', description: 'Proprietary platforms and tools' },
  { value: '8', label: 'Global Hubs', description: 'BLR · DXB · SGP and beyond' },
  { value: '95%', label: 'Client Retention', description: 'Year-over-year satisfaction' },
] as const;

export const INDUSTRIES = [
  'Life Sciences & Pharma',
  'Clinical Research',
  'Healthcare AI',
  'AgriTech & Robotics',
  'Enterprise DeepTech',
  'Regulatory Intelligence',
] as const;
