// app/api/ankor-proxy/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request) {
  console.log('Starting Ankor proxy request...');
  
  try {
    // Get search parameters from the request URL
    const { searchParams } = new URL(request.url);
    console.log('Search params:', Object.fromEntries(searchParams.entries()));
    
    // Generate token
    const rawKey = process.env.ANKOR_PRIVATE_KEY;
    const keyId = process.env.ANKOR_KEY_ID || "jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY";
    
    if (!rawKey) {
      console.error('ANKOR_PRIVATE_KEY is missing');
      return NextResponse.json({ 
        error: 'ANKOR_PRIVATE_KEY environment variable is missing'
      }, { status: 500 });
    }
    
    // Clean the private key
    const privateKey = rawKey.replace(/\\n/g, "\n");
    
    // Create the JWT
    const now = Math.floor(Date.now() / 1000);
    const token = jwt.sign(
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
          kid: keyId,
        },
      }
    );
    
    // Ensure required parameters are present
    const qp = new URLSearchParams();
    
    // Add currency, priceMin, priceMax
    qp.append('currency', searchParams.get('currency') || 'USD');
    qp.append('priceMin', searchParams.get('priceMin') || '1000');
    qp.append('priceMax', searchParams.get('priceMax') || '5000');
    
    // Add all other parameters
    for (const [key, value] of searchParams.entries()) {
      if (!['currency', 'priceMin', 'priceMax'].includes(key) && value) {
        qp.append(key, value);
      }
    }
    
    // Build the Ankor API URL
    const ankorUrl = `https://api.ankor.io/website/search?${qp.toString()}`;
    console.log('Making request to Ankor API:', ankorUrl);
    
    // Create AbortController with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout
    
    try {
      // Make the request to Ankor API
      const response = await fetch(ankorUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // If the response is not ok, return the error
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Ankor API error:', response.status, errorText);
        return NextResponse.json({ 
          error: `Ankor API Error: ${response.status} ${response.statusText}`,
          details: errorText
        }, { status: response.status });
      }
      
      // Get the response JSON
      const data = await response.json();
      console.log('Successfully received data from Ankor API');
      
      // Return the response
      return NextResponse.json(data);
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        console.error('Request timed out');
        return NextResponse.json({ 
          error: 'Request timed out after 25 seconds'
        }, { status: 504 });
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Ankor proxy error:', error);
    return NextResponse.json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}