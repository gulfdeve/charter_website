import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

async function captureTabbyPayment(paymentId) {
  console.log(`[Tabby Webhook] Attempting to capture payment: ${paymentId}`);
  try {
    const response = await fetch(`https://api.tabby.ai/api/v2/payments/${paymentId}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TABBY_SECRET_KEY}`
      },
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
    const titleHeader = headersList.get('title');
    const valueHeader = headersList.get('value');
    
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
    
    if (!titleHeader || !valueHeader) {
      console.warn(`[Tabby Webhook] Missing required headers (ID: ${requestId})`, {
        titleHeader: titleHeader || 'missing',
        valueHeader: valueHeader || 'missing'
      });
      return NextResponse.json(
        { error: 'Missing required headers' },
        { status: 401 }
      );
    }

    // Verify the header values
    if (titleHeader !== 'charter' || valueHeader !== 'mCizk9f3eizl') {
      console.warn(`[Tabby Webhook] Invalid header values (ID: ${requestId}):`, {
        titleHeader,
        valueHeader
      });
      return NextResponse.json(
        { error: 'Invalid header values' },
        { status: 401 }
      );
    }

    // Get the raw body
    const rawBody = await request.text();
    console.log(`[Tabby Webhook] Raw request body (ID: ${requestId}):`, rawBody);
    
    // Parse the webhook payload
    const payload = JSON.parse(rawBody);
    console.log(`[Tabby Webhook] Parsed payload (ID: ${requestId}):`, {
      event: payload.event,
      paymentId: payload.payment?.id,
      timestamp: new Date().toISOString()
    });
    
    // Handle different event types
    switch (payload.event) {
      case 'payment.authorized':
        console.log(`[Tabby Webhook] Processing payment.authorized event (ID: ${requestId})`);
        try {
          const captureResult = await captureTabbyPayment(payload.payment.id);
          
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
        console.log(`[Tabby Webhook] Unhandled event type (ID: ${requestId}):`, payload.event);
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