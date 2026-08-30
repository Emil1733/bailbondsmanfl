import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_REQUEST_BYTES = 12_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_COMPLETION_MS = 1_500;
const requestsByIp = new Map<string, number[]>();

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  defendantName?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function getClientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();

  if (requestsByIp.size > 1_000) {
    for (const [storedIp, timestamps] of requestsByIp) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
        requestsByIp.delete(storedIp);
      }
    }

    if (requestsByIp.size > 1_000) {
      requestsByIp.clear();
    }
  }

  const recent = (requestsByIp.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestsByIp.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ message: 'The request is too large.' }, { status: 413 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: 'Too many requests. Please wait a few minutes or call (305) 831-0358.' },
      { status: 429 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  const name = cleanText(payload.name, 100);
  const phone = cleanText(payload.phone, 30);
  const defendantName = cleanText(payload.defendantName, 100);
  const message = cleanText(payload.message, 2000);
  const website = cleanText(payload.website, 200);
  const phoneDigits = phone.replace(/\D/g, '');

  if (website) {
    return NextResponse.json({ message: 'Your request was received.' });
  }

  if (typeof payload.startedAt !== 'number' || Date.now() - payload.startedAt < MIN_FORM_COMPLETION_MS) {
    return NextResponse.json({ message: 'Please review the form and try again.' }, { status: 400 });
  }

  if (name.length < 2 || defendantName.length < 2 || phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json({ message: 'Please provide valid names and a valid phone number.' }, { status: 400 });
  }

  if (payload.consent !== true) {
    return NextResponse.json({ message: 'Please confirm that an agent may contact you.' }, { status: 400 });
  }

  const token = process.env.AIRTABLE_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;

  if (!token || !baseId || !tableId) {
    console.error('Airtable contact form environment variables are not configured.');
    return NextResponse.json(
      { message: 'Online requests are temporarily unavailable. Please call (305) 831-0358.' },
      { status: 503 },
    );
  }

  try {
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Phone: phone,
                'Defendant Name': defendantName,
                Message: message,
                Consent: true,
                Source: 'bondflorida.com/contact',
                'Submitted At': new Date().toISOString(),
              },
            },
          ],
          typecast: true,
        }),
        cache: 'no-store',
      },
    );

    if (!airtableResponse.ok) {
      console.error(`Airtable contact submission failed with status ${airtableResponse.status}.`);
      return NextResponse.json(
        { message: 'We could not save your request. Please call (305) 831-0358.' },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { message: 'Your request was received. An agent will contact you shortly.' },
      { status: 201 },
    );
  } catch {
    console.error('Airtable contact submission failed because the service could not be reached.');
    return NextResponse.json(
      { message: 'We could not save your request. Please call (305) 831-0358.' },
      { status: 502 },
    );
  }
}
