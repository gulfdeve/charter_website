import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

async function captureTabbyPayment(paymentId) {
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
      throw new Error(`Failed to capture payment: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error capturing Tabby payment:', error);
    throw error;
  }
}

export async function POST(request) {
  try {
    // Verify the request is coming from Tabby
    const headersList = headers();
    const signature = headersList.get('x-tabby-signature');
    
    if (!signature) {
      return NextResponse.json(
        { error: 'Missing Tabby signature' },
        { status: 401 }
      );
    }

    // Get the raw body for signature verification
    const rawBody = await request.text();
    
    // TODO: Implement signature verification
    // This would involve verifying the HMAC signature using your Tabby secret key
    
    // Parse the webhook payload
    const payload = JSON.parse(rawBody);
    
    // Handle different event types
    switch (payload.event) {
      case 'payment.authorized':
        // Capture the payment
        try {
          const captureResult = await captureTabbyPayment(payload.payment.id);
          console.log('Payment captured successfully:', captureResult);
          
          // TODO: Update your database/booking status
          
          return NextResponse.json({ 
            status: 'success',
            message: 'Payment captured successfully'
          });
        } catch (error) {
          console.error('Failed to capture payment:', error);
          return NextResponse.json(
            { error: 'Failed to capture payment' },
            { status: 500 }
          );
        }
        
      case 'payment.rejected':
        // Handle rejected payment
        console.log('Payment rejected:', payload);
        // TODO: Update your database/booking status
        return NextResponse.json({ status: 'success' });
        
      case 'payment.expired':
        // Handle expired payment
        console.log('Payment expired:', payload);
        // TODO: Update your database/booking status
        return NextResponse.json({ status: 'success' });
        
      default:
        console.log('Unhandled event type:', payload.event);
        return NextResponse.json({ status: 'success' });
    }
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 