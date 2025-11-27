// app/api/generate-token/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET() {
  try {
    // Get the private key
    const rawKey = process.env.ANKOR_PRIVATE_KEY;
    const keyId = process.env.ANKOR_KEY_ID || 'hxF8VcUaRO5CiwTLJ79bVIGHycQqlVQX_WL-yTKo8z4';

    if (!rawKey) {
      return NextResponse.json(
        {
          error: 'ANKOR_PRIVATE_KEY environment variable is missing',
        },
        { status: 500 }
      );
    }

    // Clean the private key
    const privateKey = rawKey.replace(/\\n/g, '\n');

    // Create the JWT
    const now = Math.floor(Date.now() / 1000);
    const token = jwt.sign(
      {
        scopes: ['website:read:*'],
        iss: 'c::19468221194',
        aud: 'ankor.io',
        sub: 'c::19468221194',
        iat: now,
        exp: now + 3600,
      },
      privateKey,
      {
        algorithm: 'RS256',
        header: {
          alg: 'RS256',
          typ: 'JWT',
          kid: keyId,
        },
      }
    );

    // Return the token
    return NextResponse.json({ token });
  } catch (error) {
    console.error('Error generating token:', error);
    return NextResponse.json(
      {
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}
