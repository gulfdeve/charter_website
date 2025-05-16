// app/payment-test/page.js
import { headers } from 'next/headers';

// This is a Server Component for testing the payment API
export default async function PaymentTestPage() {
  const headersList = headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  // Generate an order ID
  const orderId = `TEST-${Date.now()}`;
  
  // Generate test payment data
  const paymentData = {
    orderId,
    amount: "100",
    currency: "AED"
  };
  
  let responseData = {};
  let error = null;
  
  try {
    // Make a request to our own API endpoint
    const response = await fetch(`${baseUrl}/api/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
      // This is crucial for server components to work correctly
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    responseData = await response.json();
  } catch (err) {
    console.error('Error testing payment API:', err);
    error = err.message;
  }
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>RAKBANK Payment API Test</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '10px' }}>Payment Request</h2>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
          {JSON.stringify(paymentData, null, 2)}
        </pre>
      </div>
      
      {error ? (
        <div style={{ color: 'red', marginBottom: '30px' }}>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      ) : (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '10px' }}>API Response</h2>
          <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
            {JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
      
      {responseData?.parsedResponse?.['session.url'] && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '10px' }}>Payment Session</h2>
          <p><strong>Session ID:</strong> {responseData.parsedResponse['session.id']}</p>
          <p><strong>Session URL:</strong> {responseData.parsedResponse['session.url']}</p>
          
          <div style={{ marginTop: '20px' }}>
            <a 
              href={responseData.parsedResponse['session.url']} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 15px',
                background: '#0070f3',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Proceed to Payment Page
            </a>
          </div>
        </div>
      )}
      
      <div style={{ marginTop: '40px', padding: '15px', background: '#f9f9f9', borderRadius: '5px' }}>
        <h3>Environment Settings</h3>
        <p><strong>RAKBANK_MPGS_MERCHANT:</strong> {process.env.RAKBANK_MPGS_MERCHANT ? '✓ Set' : '✗ Missing'}</p>
        <p><strong>RAKBANK_MPGS_API_PASSWORD:</strong> {process.env.RAKBANK_MPGS_API_PASSWORD ? '✓ Set' : '✗ Missing'}</p>
        <p><strong>RAKBANK_GATEWAY_URL:</strong> {process.env.RAKBANK_GATEWAY_URL ? '✓ Set' : '✗ Missing'}</p>
      </div>
    </div>
  );
}