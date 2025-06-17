import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

async function captureTabbyPayment(paymentId) {
  console.log(`[Tabby Webhook] Attempting to capture payment: ${paymentId}`);
  try {
    // First get payment details to use in capture
    const paymentDetailsRes = await fetch(
      `https://api.tabby.ai/api/v2/payments/${paymentId}`,
      {
        headers: { Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}` },
        cache: 'no-store',
      }
    );
    if (!paymentDetailsRes.ok) {
      throw new Error(`Failed to get payment details: ${paymentDetailsRes.status}`);
    }
    const paymentDetails = await paymentDetailsRes.json();
    console.log('[Tabby Webhook] Payment details:', paymentDetails);

    // Prepare capture payload
    const capturePayload = {
      amount: paymentDetails.amount,
      reference_id: `capture_${paymentDetails.id}_${Date.now()}`,
      tax_amount: paymentDetails.order?.tax_amount || "0",
      shipping_amount: paymentDetails.order?.shipping_amount || "0",
      discount_amount: paymentDetails.order?.discount_amount || "0",
      items: paymentDetails.order?.items || []
    };
    console.log('[Tabby Webhook] Capture payload:', capturePayload);

    const response = await fetch(`https://api.tabby.ai/api/v2/payments/${paymentId}/captures`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TABBY_SECRET_KEY}`
      },
      body: JSON.stringify(capturePayload),
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Tabby Webhook] Payment capture failed for ${paymentId}:`, errorText);
      throw new Error(`Failed to capture payment: ${errorText}`);
    }

    const result = await response.json();
    console.log(`[Tabby Webhook] Payment ${paymentId} captured successfully:`, result);
    return result;
  } catch (error) {
    console.error(`[Tabby Webhook] Error capturing payment ${paymentId}:`, error);
    throw error;
  }
}

export async function POST(request) {
  const requestId = Math.random().toString(36).substring(7);
  console.log(`[Tabby Webhook] New webhook request received (ID: ${requestId})`);
  
  try {
    // Log headers
    const headersList = headers();
    
    // Check for headers in different formats
    const possibleTitleHeaders = [
      'title',
      'Title',
      'TITLE',
      'x-title',
      'X-Title',
      'X-TITLE',
      'tabby-title',
      'Tabby-Title',
      'TABBY-TITLE'
    ];
    
    const possibleValueHeaders = [
      'value',
      'Value',
      'VALUE',
      'x-value',
      'X-Value',
      'X-VALUE',
      'tabby-value',
      'Tabby-Value',
      'TABBY-VALUE'
    ];
    
    // Find the actual header names being used
    let titleHeader = null;
    let valueHeader = null;
    
    for (const headerName of possibleTitleHeaders) {
      const value = headersList.get(headerName);
      if (value) {
        titleHeader = value;
        console.log(`[Tabby Webhook] Found title header as: ${headerName}`);
        break;
      }
    }
    
    for (const headerName of possibleValueHeaders) {
      const value = headersList.get(headerName);
      if (value) {
        valueHeader = value;
        console.log(`[Tabby Webhook] Found value header as: ${headerName}`);
        break;
      }
    }
    
    // Log all headers for debugging
    const allHeaders = {};
    headersList.forEach((value, key) => {
      allHeaders[key] = value;
    });
    console.log(`[Tabby Webhook] All request headers:`, allHeaders);
    
    console.log(`[Tabby Webhook] Request headers:`, {
      requestId,
      titleHeader: titleHeader ? 'present' : 'missing',
      valueHeader: valueHeader ? 'present' : 'missing',
      contentType: headersList.get('content-type'),
      userAgent: headersList.get('user-agent')
    });
    
    // For now, let's accept the webhook without header verification
    // TODO: Once we confirm the correct header names, we'll add back the verification
    console.log(`[Tabby Webhook] Temporarily accepting webhook without header verification (ID: ${requestId})`);
    
    // Get the raw body
    const rawBody = await request.text();
    console.log(`[Tabby Webhook] Raw request body (ID: ${requestId}):`, rawBody);
    
    // Parse the webhook payload
    const payload = JSON.parse(rawBody);
    console.log(`[Tabby Webhook] Parsed payload (ID: ${requestId}):`, {
      id: payload.id,
      status: payload.status,
      amount: payload.amount,
      currency: payload.currency,
      orderId: payload.order?.reference_id,
      timestamp: new Date().toISOString()
    });
    
    // Determine event type based on payment status
    let eventType;
    switch (payload.status) {
      case 'authorized':
        eventType = 'payment.authorized';
        break;
      case 'rejected':
        eventType = 'payment.rejected';
        break;
      case 'expired':
        eventType = 'payment.expired';
        break;
      default:
        eventType = `payment.${payload.status}`;
    }
    
    console.log(`[Tabby Webhook] Determined event type: ${eventType} (ID: ${requestId})`);
    
    // Handle different event types
    switch (eventType) {
      case 'payment.authorized':
        console.log(`[Tabby Webhook] Processing payment.authorized event (ID: ${requestId})`);
        try {
          const captureResult = await captureTabbyPayment(payload.id);
          
          // TODO: Update your database/booking status
          console.log(`[Tabby Webhook] Payment capture completed (ID: ${requestId}):`, captureResult);
          
          return NextResponse.json({ 
            status: 'success',
            message: 'Payment captured successfully'
          });
        } catch (error) {
          console.error(`[Tabby Webhook] Failed to capture payment (ID: ${requestId}):`, error);
          return NextResponse.json(
            { error: 'Failed to capture payment' },
            { status: 500 }
          );
        }
        
      case 'payment.rejected':
        console.log(`[Tabby Webhook] Processing payment.rejected event (ID: ${requestId}):`, payload);
        // TODO: Update your database/booking status
        return NextResponse.json({ status: 'success' });
        
      case 'payment.expired':
        console.log(`[Tabby Webhook] Processing payment.expired event (ID: ${requestId}):`, payload);
        // TODO: Update your database/booking status
        return NextResponse.json({ status: 'success' });
        
      default:
        console.log(`[Tabby Webhook] Unhandled payment status (ID: ${requestId}):`, payload.status);
        return NextResponse.json({ status: 'success' });
    }
  } catch (error) {
    console.error(`[Tabby Webhook] Error processing webhook (ID: ${requestId}):`, error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 