
// app/api/payment/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { orderId = "TEST-" + Date.now(), amount = "100", currency = "AED" } = data;
    
    // Create payload for RAKBANK payment gateway
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("apiOperation", "INITIATE_CHECKOUT");
    urlencoded.append("apiPassword", process.env.RAKBANK_MPGS_API_PASSWORD);
    urlencoded.append("apiUsername", `merchant.${process.env.RAKBANK_MPGS_MERCHANT}`);
    urlencoded.append("merchant", process.env.RAKBANK_MPGS_MERCHANT);
    urlencoded.append("interaction.operation", "PURCHASE");
    urlencoded.append("order.id", orderId);
    urlencoded.append("order.amount", amount);
    urlencoded.append("order.currency", currency);
    urlencoded.append("interaction.merchant.name", "Centaurus Charter");
    urlencoded.append("order.description", "booking");
    urlencoded.append("interaction.returnUrl", "https://www.centauruscharter.com/payment_complete");
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };
    
    // Make request to RAKBANK gateway
    const response = await fetch(process.env.RAKBANK_GATEWAY_URL, requestOptions);
    const result = await response.text();
    
    // Parse the NVP response for easier handling
    const parsedResult = {};
    result.split('&').forEach(pair => {
      const [key, value] = pair.split('=');
      if (key && value) {
        parsedResult[key] = decodeURIComponent(value);
      }
    });
    
    return NextResponse.json({
      success: true,
      rawResponse: result,
      parsedResponse: parsedResult
    });
  } catch (error) {
    console.error("Payment API error:", error);
    return NextResponse.json(
      { success: false, error: error.message }, 
      { status: 500 }
    );
  }
}