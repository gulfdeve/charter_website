import { NextResponse } from 'next/server';

export async function POST(req) {
  const bodyText = await req.text();
  const resp = await fetch('https://www.centauruscharter.net/api/api_new/save_enquiry', {
    method: 'POST',
    headers: {
      'Content-Type': req.headers.get('content-type') || 'application/x-www-form-urlencoded',
    },
    body: bodyText,
  });
  const text = await resp.text();
  return new NextResponse(text, {
    status: resp.status,
    headers: {
      'content-type': resp.headers.get('content-type') || 'text/plain',
    },
  });
}
