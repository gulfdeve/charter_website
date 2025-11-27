// app/api/debug-jwt/route.js
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

// API route to debug JWT generation on Vercel
export async function GET() {
  const debugInfo = {
    environment: process.env.VERCEL ? 'Vercel' : 'Local',
    privateKeyInfo: {},
    tokenGeneration: {},
    errors: [],
  };

  try {
    // Get the private key
    const rawKey = process.env.ANKOR_PRIVATE_KEY;

    if (!rawKey) {
      throw new Error('ANKOR_PRIVATE_KEY environment variable is missing');
    }

    // Record private key details (safely)
    debugInfo.privateKeyInfo = {
      length: rawKey.length,
      firstChars: rawKey.substring(0, 30),
      lastChars: rawKey.substring(rawKey.length - 30),
      containsBeginMarker: rawKey.includes('-----BEGIN PRIVATE KEY-----'),
      containsEndMarker: rawKey.includes('-----END PRIVATE KEY-----'),
      containsLineBreaks: rawKey.includes('\n'),
      containsEscapedLineBreaks: rawKey.includes('\\n'),
    };

    // Try different private key formats for Vercel
    const privateKeyVariations = [
      // Original
      rawKey,
      // Replace escaped newlines
      rawKey.replace(/\\n/g, '\n'),
      // Remove all whitespace and add line breaks
      rawKey
        .replace(/\s/g, '')
        .replace(/-----BEGINPRIVATEKEY-----/, '-----BEGIN PRIVATE KEY-----\n')
        .replace(/-----ENDPRIVATEKEY-----/, '\n-----END PRIVATE KEY-----'),
      // Fix emoji or corrupted characters by extracting just the base64 content
      extractAndReformatKey(rawKey),
    ];

    // Try each variation
    const results = [];
    for (let i = 0; i < privateKeyVariations.length; i++) {
      const keyVariation = privateKeyVariations[i];

      try {
        // Basic validation
        if (!keyVariation.includes('-----BEGIN PRIVATE KEY-----') || !keyVariation.includes('-----END PRIVATE KEY-----')) {
          results.push({
            variation: i,
            success: false,
            error: 'Key is missing BEGIN/END markers',
          });
          continue;
        }

        // Try to sign a token
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
          keyVariation,
          {
            algorithm: 'RS256',
            header: {
              alg: 'RS256',
              typ: 'JWT',
              kid: 'jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY',
            },
          }
        );

        results.push({
          variation: i,
          success: true,
          tokenStart: token.substring(0, 30),
          tokenEnd: token.substring(token.length - 30),
        });
      } catch (error) {
        results.push({
          variation: i,
          success: false,
          error: error.message,
        });
      }
    }

    debugInfo.tokenGeneration.results = results;

    // Create a diagnostic JWT token bypass for testing
    try {
      // Try to make a direct fetch with a bypass key
      const testUrl = 'https://api.ankor.io/website/search?currency=USD&priceMin=1000&priceMax=5000';
      const keyId = process.env.ANKOR_KEY_ID || 'jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY';

      // Option 1: Use Key ID directly as bearer token
      const res1 = await fetch(testUrl, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${keyId}`,
        },
      });

      // Option 2: Use Key ID as x-api-key
      const res2 = await fetch(testUrl, {
        headers: {
          Accept: 'application/json',
          'x-api-key': keyId,
        },
      });

      // Record results
      debugInfo.altAuthMethods = {
        bearerWithKeyId: {
          status: res1.status,
          statusText: res1.statusText,
        },
        xApiKeyHeader: {
          status: res2.status,
          statusText: res2.statusText,
        },
      };
    } catch (error) {
      debugInfo.errors.push({
        context: 'Alternative Auth Test',
        error: error.message,
      });
    }

    return NextResponse.json(debugInfo);
  } catch (error) {
    debugInfo.errors.push({
      context: 'Global',
      error: error.message,
      stack: error.stack,
    });

    return NextResponse.json(debugInfo, { status: 500 });
  }
}

// Helper function to extract and reformat a private key
function extractAndReformatKey(rawKey) {
  try {
    // Try to extract just the base64 content between BEGIN and END markers
    const regex = /-----BEGIN PRIVATE KEY-----([\s\S]*?)-----END PRIVATE KEY-----/;
    const match = rawKey.match(regex);

    if (!match || !match[1]) {
      return rawKey; // Return original if no match
    }

    // Clean the content (remove all non-base64 characters)
    const cleanedContent = match[1].replace(/[^A-Za-z0-9+/=]/g, '');

    // Format with proper line breaks (every 64 characters)
    let formattedContent = '';
    for (let i = 0; i < cleanedContent.length; i += 64) {
      formattedContent += cleanedContent.substring(i, i + 64) + '\n';
    }

    // Rebuild the key with proper format
    return `-----BEGIN PRIVATE KEY-----\n${formattedContent}-----END PRIVATE KEY-----`;
  } catch (error) {
    return rawKey; // Return original if any error occurs
  }
}
