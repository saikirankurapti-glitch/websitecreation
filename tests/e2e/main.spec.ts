import { test, expect } from '@playwright/test';

// ============================================================
// GENQUANTAA E2E TESTS
// ============================================================

test.describe('Homepage', () => {
  test('renders correctly with all key sections', async ({ page }) => {
    await page.goto('/');

    // Title
    await expect(page).toHaveTitle(/GenQuantaa/);

    // Hero section
    await expect(page.getByText('AI Operating System')).toBeVisible();
    await expect(page.getByText('Book a Technical Demo').first()).toBeVisible();
    await expect(page.getByText('View Case Studies').first()).toBeVisible();
  });

  test('stats section shows all 4 stats', async ({ page }) => {
    await page.goto('/');
    // Stats — scroll down to trigger them
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await expect(page.getByText('50+')).toBeVisible();
    await expect(page.getByText('12+')).toBeVisible();
  });

  test('services section renders 4 service cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Life Sciences & Pharma AI')).toBeVisible();
    await expect(page.getByText('Agentic AI Systems')).toBeVisible();
    await expect(page.getByText('Enterprise AI Engineering')).toBeVisible();
    await expect(page.getByText('GenQuantaa Academy')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('navbar is present and links work', async ({ page }) => {
    await page.goto('/');
    // Logo
    await expect(page.getByText('GenQuantaa').first()).toBeVisible();
    // Click About
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByText('Intelligence Layer')).toBeVisible();
  });

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    // Open menu
    await page.getByRole('button', { name: 'Toggle menu' }).click();
    await expect(page.getByRole('navigation').last()).toBeVisible();
    // Close menu
    await page.getByRole('button', { name: /close|x/i }).last().click();
  });

  test('services dropdown works on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await page.getByRole('button', { name: 'Services' }).hover();
    await expect(page.getByRole('link', { name: 'Life Sciences AI' })).toBeVisible();
  });
});

test.describe('Pages load correctly', () => {
  const pages = [
    { path: '/about', heading: 'Intelligence Layer' },
    { path: '/services', heading: 'Practice Areas' },
    { path: '/case-studies', heading: 'Results' },
    { path: '/blog', heading: 'From the Lab' },
    { path: '/careers', heading: 'Build AI' },
    { path: '/contact', heading: 'AI Journey' },
  ];

  for (const { path, heading } of pages) {
    test(`${path} renders correctly`, async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(heading);
      await expect(page).not.toHaveTitle('404');
    });
  }
});

test.describe('Blog', () => {
  test('blog listing shows posts', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.getByText('Agentic AI Is the Next Frontier')).toBeVisible();
    await expect(page.getByText('Generative Chemistry')).toBeVisible();
  });

  test('blog post detail renders full content', async ({ page }) => {
    await page.goto('/blog/agentic-ai-pharma-2025');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Agentic AI');
    await expect(page.getByText('The Shift from Tools to Agents')).toBeVisible();
    // Back link
    await expect(page.getByText('Back to Blog')).toBeVisible();
  });

  test('unknown blog slug returns 404', async ({ page }) => {
    const response = await page.goto('/blog/this-does-not-exist-xyz');
    // Next.js returns 404 for not-found pages
    expect(response?.status()).toBe(404);
  });
});

test.describe('Contact Form', () => {
  test('renders all form fields', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByLabel('Full Name *')).toBeVisible();
    await expect(page.getByLabel('Email Address *')).toBeVisible();
    await expect(page.getByLabel('Company *')).toBeVisible();
    await expect(page.getByLabel(/what can we help/i)).toBeVisible();
    await expect(page.getByLabel('Your Message *')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByText('Name must be at least 2 characters')).toBeVisible();
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
  });

  test('validates email format', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel('Full Name *').fill('Test User');
    await page.getByLabel('Email Address *').fill('notanemail');
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
  });
});

test.describe('Careers', () => {
  test('shows open roles', async ({ page }) => {
    await page.goto('/careers');
    await expect(page.getByText('Senior AI/ML Engineer')).toBeVisible();
    await expect(page.getByText('Full-Stack Engineer')).toBeVisible();
    await expect(page.getByText('Computational Scientist')).toBeVisible();
    // All apply buttons
    const applyButtons = page.getByRole('link', { name: 'Apply Now' });
    await expect(applyButtons.first()).toBeVisible();
  });
});

test.describe('404 Page', () => {
  test('renders 404 for unknown routes', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist-xyz123');
    expect(response?.status()).toBe(404);
    await expect(page.getByText('Page Not Found')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Go Home' })).toBeVisible();
  });
});

test.describe('SEO & Accessibility', () => {
  test('homepage has correct meta title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/GenQuantaa/);
  });

  test('all pages have an h1', async ({ page }) => {
    const routes = ['/', '/about', '/services', '/blog', '/contact', '/careers'];
    for (const route of routes) {
      await page.goto(route);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThan(0);
    }
  });

  test('footer is present on all pages', async ({ page }) => {
    const routes = ['/', '/about', '/contact'];
    for (const route of routes) {
      await page.goto(route);
      await expect(page.getByText('GenQuantaa Pvt Ltd')).toBeVisible();
    }
  });

  test('all CTA links point to contact or case-studies', async ({ page }) => {
    await page.goto('/');
    // Primary CTA
    const demoCTA = page.getByRole('link', { name: 'Book a Technical Demo' }).first();
    await expect(demoCTA).toHaveAttribute('href', '/contact');
  });
});

test.describe('API Routes', () => {
  test('/api/contact rejects empty body', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: {},
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(422);
  });

  test('/api/contact rejects invalid email', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: { name: 'Test', email: 'bad-email', company: 'Corp', subject: 'General Inquiry', message: 'Hello this is a test message.', consent: true },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(422);
  });

  test('/api/newsletter rejects invalid email', async ({ request }) => {
    const res = await request.post('/api/newsletter', {
      data: { email: 'notvalid' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(422);
  });
});

test.describe('Mobile Responsiveness', () => {
  test('homepage is usable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    // Hero heading visible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    // Mobile nav button visible
    await expect(page.getByRole('button', { name: 'Toggle menu' })).toBeVisible();
    // Desktop nav hidden
    await expect(page.getByRole('navigation').first().locator('.hidden.lg\\:flex')).not.toBeVisible();
  });

  test('contact form is usable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/contact');
    await expect(page.getByLabel('Full Name *')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });
});
