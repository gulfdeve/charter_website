// pages/api/ankorSearch.js

import jwt from 'jsonwebtoken';
import fs from 'fs';

export default async function handler(req, res) {
  try {
    // Read your private key from a secure location
    //   const privateKey = fs.readFileSync("private_key.pem", "utf8");
    const privateKey = process.env.ANKOR_PRIVATE_KEY;

    // Token settings - replace these values with your actual data
    const kid = 'jSZNvbnPK03KXEEo0-bJw4XPF1z68eW_OpHFW_9XvLY';
    const companyUri = 'c::19468221194';
    const issuedAt = Math.floor(Date.now() / 1000);
    const expiryTime = issuedAt + 3600; // valid for 1 hour

    // JWT payload
    const payload = {
      scopes: ['website:read:*'],
      iss: companyUri,
      aud: 'ankor.io',
      sub: companyUri,
      iat: issuedAt,
      exp: expiryTime,
    };

    // JWT header
    const header = {
      alg: 'RS256',
      typ: 'JWT',
      kid,
    };

    // Generate the JWT token
    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256', header });

    // Build your search parameters
    // Adjust searchParams as required by the Ankor Web Search API documentation.
    const searchParams = {
      query: req.query.query || 'default search term',
      // Add more parameters as needed...
    };

    // Make a POST request to the Ankor Web Search endpoint using fetch
    const searchResponse = await fetch('https://api.ankor.io/web/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(searchParams),
    });

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();
      throw new Error(`Search API error: ${searchResponse.status} - ${errorText}`);
    }

    const data = await searchResponse.json();

    // Return the search results to the client
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Ankor search API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
