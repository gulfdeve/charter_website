export async function createTabbySession(booking, locale = 'en', merchantUrls = null) {
  const { first_name, last_name, amount, order_no, booking_date, email, mobile, customer_id } = booking;
  
  const phone = mobile?.startsWith('+') ? mobile : `+${mobile}`;
  
  // Convert booking_date to UTC ISO 8601 format
  const utcBookingDate = new Date(booking_date).toISOString();
  console.log("utcBookingDate: " + utcBookingDate);
  console.log("phone: " + phone);
  
  const payload = {
    payment: {
      amount: amount.toString(),
      currency: 'AED',
      description: `Booking ${order_no}`,
      buyer: {
        phone,
        email,
        name: `${first_name} ${last_name}`,
      },
      order: {
        tax_amount: '0.00',
        shipping_amount: '0.00',
        discount_amount: '0.00',
        updated_at: utcBookingDate,
        reference_id: order_no,
        items: [
          {
            title: `Booking ${order_no}`,
            description: `Yacht booking on ${utcBookingDate}`,
            quantity: 1,
            unit_price: amount.toString(),
            discount_amount: '0.00',
            reference_id: order_no,
            category: 'yacht_booking',
          },
        ],
      },
      meta: {
        order_id: order_no,
        customer: customer_id ? customer_id.toString() : '0'
      }
    },
    lang: locale,
    merchant_code: process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE,
    merchant_urls: {
      success: `${process.env.NEXT_PUBLIC_BASE_URL}/payments/tabby/${order_no}/success`,
      cancel: `${process.env.NEXT_PUBLIC_BASE_URL}/payments/tabby/${order_no}/cancel`,
      failure: `${process.env.NEXT_PUBLIC_BASE_URL}/payments/tabby/${order_no}/failure`,
      webhook: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/tabby`
    }
  };

  // Add merchant URLs if provided (this will override the defaults)
  if (merchantUrls) {
    payload.merchant_urls = merchantUrls;
  }

  const tabbyRes = await fetch('https://api.tabby.ai/api/v2/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.TABBY_SECRET_KEY}`
    },
    body: JSON.stringify(payload),
    cache: 'no-store'
  });

  if (!tabbyRes.ok) {
    const responseText = await tabbyRes.text();
    throw new Error(`Tabby API error (${tabbyRes.status}): ${responseText}`);
  }

  const response = await tabbyRes.json();

  // Check for warnings
  if (response.warnings && response.warnings.length > 0) {
    console.warn('Tabby API warnings:', response.warnings);
  }

  return response;
} 