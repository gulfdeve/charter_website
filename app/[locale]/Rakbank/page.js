'use client';

import { useState } from 'react';

export default function CheckoutPage() {
  const [orderId, setOrderId] = useState('12345');
  const [amount, setAmount] = useState('100');
  const [currency, setCurrency] = useState('AED');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const url = 'https://rakbankpay-nam.gateway.mastercard.com/api/nvp/version/73';
    const params = new URLSearchParams({
      apiOperation: 'INITIATE_CHECKOUT',
      apiUsername: 'merchant.CENTAURUSPAS',
      apiPassword: '24173100284abc8f25061e6327e8fcc5',
      merchant: 'CENTAURUSPAS',
      'interaction.operation': 'PURCHASE',
      'order.id': orderId,
      'order.amount': amount,
      'order.currency': currency,
      'interaction.merchant.name': 'Centaurus Charter',
      'order.description': 'booking',
      'interaction.returnUrl': `${process.env.NEXT_PUBLIC_BASE_URL}/payment_complete`,
    });

    // Debug logs
    console.log('Request URL:', url);
    console.log('Request Payload:', params.toString());

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      const text = await res.text();
      console.log('Raw response text:', text);
      setMessage(text);
    } catch (err) {
      console.error('Fetch error:', err);
      setMessage('Error: ' + err.message);
    } finally {
      setLoading(false);
      console.log('Loading state:', loading);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Initiate Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Order ID</label>
            <input type="text" value={orderId} onChange={e => setOrderId(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Currency</label>
            <input type="text" value={currency} onChange={e => setCurrency(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <button type="submit" disabled={loading} className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50">
            {loading ? 'Processing...' : 'Start Checkout'}
          </button>
        </form>
        {message && (
          <div className="mt-4 p-2 bg-gray-100 rounded-md text-sm whitespace-pre-wrap">
            <strong>Response:</strong>
            <pre>{message}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
