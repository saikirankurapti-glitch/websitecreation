import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 422 });
  }

  const { email } = parsed.data;

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX ?? 'us21';

  if (!apiKey || apiKey.startsWith('xxx') || !audienceId) {
    console.warn('[Newsletter API] Mailchimp not configured');
    // Return success anyway so users aren't blocked during setup
    return NextResponse.json({ success: true, message: 'Subscribed successfully.' });
  }

  try {
    const res = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`any:${apiKey}`).toString('base64')}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          tags: ['website-footer'],
        }),
      }
    );

    const json = await res.json();

    if (!res.ok) {
      if (json.title === 'Member Exists') {
        return NextResponse.json(
          { success: false, error: 'You are already subscribed!' },
          { status: 409 }
        );
      }
      throw new Error(json.detail ?? 'Mailchimp error');
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully.' });
  } catch (err) {
    console.error('[Newsletter API]', err);
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 });
  }
}
