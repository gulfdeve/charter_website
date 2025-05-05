// app/api/generate-token/route.js
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  try {
    // Get the private key
    const rawKey = process.env.ANKOR_PRIVATE_KEY;
    
    if (!rawKey) {
      return NextResponse.json({ error: 'Private key not found' }, { status: 500 });
    }
    
    // Clean the private key
    const privateKey = rawKey.replace(/\\n/g, "\n");
    
    // Create JWT parts manually
    const now = Math.floor(Date.now() / 1000);
    
    // Header
    const header = {
      alg: "RS256",
      typ: "JWT",
      kid: "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY",
    };
    
    // Payload
    const payload = {
      scopes: ["website:read:*"],
      iss: "c::19468221194",
      aud: "ankor.io",
      sub: "c::19468221194",
      iat: now,
      exp: now + 3600,
    };
    
    // Encode header and payload
    const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    
    // Create the JWT content to sign
    const signingInput = `${encodedHeader}.${encodedPayload}`;
    
    // Sign the JWT using crypto
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(signingInput);
    sign.end();
    
    const signature = sign.sign(privateKey, 'base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    
    // Create the complete JWT
    const token = `${signingInput}.${signature}`;
    
    // Test the token with the API
    const testUrl = 'https://api.ankor.io/website/search?currency=USD&priceMin=1000&priceMax=5000';
    const response = await fetch(testUrl, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
    // Return results
    return NextResponse.json({
      token: token,
      tokenStart: token.substring(0, 30),
      tokenEnd: token.substring(token.length - 30),
      testResult: {
        status: response.status,
        statusText: response.statusText,
        isSuccessful: response.ok
      }
    });
  } catch (error) {
    return NextResponse.json({ 
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}

// app/[locale]/international-yachts/page.js (Modified fetchVessels function)
async function fetchVessels(searchParams) {
  // Try to get a token from our custom endpoint
  let token;
  try {
    // Call our custom token generation endpoint
    // Use relative URL which works in both local and production
    const tokenResponse = await fetch('/api/generate-token');
    const tokenData = await tokenResponse.json();
    
    if (tokenData.testResult?.isSuccessful) {
      // If our custom endpoint succeeds, use its token
      token = tokenData.token;
      console.log("Using custom-generated token that works!");
    } else {
      // Fall back to traditional method
      console.log("Custom token generation failed, using traditional method");
      const rawKey = process.env.ANKOR_PRIVATE_KEY;
      const privateKey = rawKey.replace(/\\n/g, "\n");
      const now = Math.floor(Date.now() / 1000);
      
      token = jwt.sign(
        {
          scopes: ["website:read:*"],
          iss: "c::19468221194",
          aud: "ankor.io",
          sub: "c::19468221194",
          iat: now,
          exp: now + 3600,
        },
        privateKey,
        {
          algorithm: "RS256",
          header: {
            alg: "RS256",
            typ: "JWT",
            kid: "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error with custom token generation:", error);
    // Fall back to traditional method as above
    const rawKey = process.env.ANKOR_PRIVATE_KEY;
    const privateKey = rawKey.replace(/\\n/g, "\n");
    const now = Math.floor(Date.now() / 1000);
    
    token = jwt.sign(
      {
        scopes: ["website:read:*"],
        iss: "c::19468221194",
        aud: "ankor.io",
        sub: "c::19468221194",
        iat: now,
        exp: now + 3600,
      },
      privateKey,
      {
        algorithm: "RS256",
        header: {
          alg: "RS256",
          typ: "JWT",
          kid: "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY",
        },
      }
    );
  }
  
  // 2) Prepare params object
  const params = {
    currency: "USD",      // always include
    priceMin: 1000,       // always include
    priceMax: 5000,       // always include

    // optional
    name: searchParams.name,
    region: searchParams.region,
    yachtType: searchParams.yachtType,
    charterType: searchParams.charterType,
    minLength: searchParams.minLength,
    maxLength: searchParams.maxLength,
    sleeps: searchParams.sleeps,
    rentalPeriod: searchParams.rentalPeriod, // array
  };

  // 3) Build the query string
  const qp = new URLSearchParams();
  // mandatory three
  qp.append("currency", params.currency);
  qp.append("priceMin", params.priceMin);
  qp.append("priceMax", params.priceMax);

  // only append others if they're not null/undefined/empty-string
  for (const [key, value] of Object.entries(params)) {
    if (
      ["currency", "priceMin", "priceMax"].includes(key) ||
      value == null ||
      (typeof value === "string" && value.trim() === "")
    ) {
      continue;
    }

    if (Array.isArray(value)) {
      value.forEach((v) => qp.append(key, v));
    } else {
      qp.append(key, value);
    }
  }

  const url = `https://api.ankor.io/website/search?${qp.toString()}`;
  console.log("🛰️  Fetching:", url);

  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    console.error("API Error:", res.status, errorText);
    throw new Error(`API Error: ${res.statusText}`);
  }
  
  return res.json();
}