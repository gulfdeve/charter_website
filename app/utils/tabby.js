export async function createTabbySession(
	booking,
	locale = "en",
	merchantUrls = null
) {
	const {
		first_name,
		last_name,
		amount,
		order_no,
		booking_date,
		email,
		mobile,
		customer_id,
		title,
		past_booking = [],
	} = booking;

	//   const phone = mobile?.startsWith('+') ? mobile : `+${mobile}`;
	const phone = mobile;

	// Convert booking_date to UTC ISO 8601 format
	const utcBookingDate = new Date(booking_date).toISOString();
	// console.log("utcBookingDate: " + utcBookingDate);
	// console.log("phone: " + phone);

	// --- Buyer History ---
	let allBookings = Array.isArray(past_booking) ? [...past_booking] : [];
	// Include the current booking as well for registered_since
	allBookings.push({
		created_at: booking.created_at || booking.booking_date,
	});
	// Sort by created_at ascending (earliest first)
	allBookings = allBookings
		.filter((b) => b.created_at)
		.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
	const firstOrderDate =
		allBookings.length > 0
			? new Date(allBookings[0].created_at).toISOString()
			: utcBookingDate;

	// Calculate loyalty_level and wishlist_count
	// If payment_status is available, use only paid bookings; otherwise, use all
	let paidBookings = Array.isArray(past_booking)
		? past_booking.filter((b) =>
				b.payment_status ? b.payment_status === "Completed" : true
		  )
		: [];
	const loyalty_level = paidBookings.length;
	const wishlist_count = paidBookings.reduce((sum, b) => {
		const amt =
			typeof b.amount === "number" ? b.amount : parseFloat(b.amount);
		return sum + (isNaN(amt) ? 0 : amt);
	}, 0);

	const buyer_history = {
		registered_since: new Date(firstOrderDate).toISOString(),
		loyalty_level,
		wishlist_count,
		is_social_networks_connected: false,
		is_phone_number_verified: true,
		is_email_verified: true,
	};

	// console.log("buyer_history: ", buyer_history);

	// --- Order History ---
	const order_history = (Array.isArray(past_booking) ? past_booking : []).map(
		(pb) => {
			const origStatus = pb.status || pb.payment_status || "unknown";
			const bookingDate = pb.booking_date
				? new Date(pb.booking_date)
				: null;
			const now = new Date();
			let status = origStatus;
			if (origStatus.toLowerCase() === "pending" && bookingDate) {
				if (bookingDate < now) {
					status = "canceled";
				} else {
					status = "new";
				}
			} else if (origStatus.toLowerCase() === "completed") {
				status = "complete";
			}
			return {
				purchased_at: pb.created_at
					? new Date(pb.created_at).toISOString()
					: new Date(pb.booking_date).toISOString(),
				amount: pb.amount ? pb.amount.toString() : "0.00",
				// payment_method: pb.payment_method || 'card',
				payment_method: "card",
				status,
				buyer: {
					phone: pb.mobile || "",
					email: pb.email || "",
					name: `${pb.first_name || ""} ${pb.last_name || ""}`.trim(),
				},
				items: [
					{
						title: pb.title ? pb.title : `Booking ${pb.order_no}`,
						description: `Yacht booking on ${
							pb.booking_date
								? new Date(pb.booking_date).toISOString()
								: ""
						}`,
						quantity: pb.hours || 1,
						unit_price: pb.amount ? pb.amount.toString() : "0.00",
						discount_amount: "0.00",
						reference_id: pb.order_no || "",
						category: "yacht_booking",
					},
				],
			};
		}
	);

	const payload = {
		payment: {
			amount: amount.toString(),
			currency: "AED",
			description: `Booking ${order_no}`,
			buyer: {
				phone,
				email,
				name: `${first_name} ${last_name}`,
			},
			order: {
				tax_amount: "0.00",
				shipping_amount: "0.00",
				discount_amount: "0.00",
				updated_at: utcBookingDate,
				reference_id: order_no,
				items: [
					{
						// title: `Booking ${order_no}`,
						title: title,
						description: `Yacht booking on ${utcBookingDate}`,
						quantity: 1,
						unit_price: amount.toString(),
						discount_amount: "0.00",
						reference_id: order_no,
						category: "yacht_booking",
					},
				],
			},
			meta: {
				order_id: order_no,
				customer: customer_id ? customer_id.toString() : "0",
			},
			buyer_history,
			order_history,
		},
		lang: locale,
		merchant_code: process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE,
		merchant_urls: {
			success: `${process.env.NEXT_PUBLIC_BASE_URL}/payments/tabby/${order_no}/success`,
			cancel: `${process.env.NEXT_PUBLIC_BASE_URL}/payments/tabby/${order_no}/cancel`,
			failure: `${process.env.NEXT_PUBLIC_BASE_URL}/payments/tabby/${order_no}/failure`,
			webhook: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/tabby`,
		},
	};
	// console.log("loyalty_level: ", loyalty_level);
	// console.log("wishlist_count: ", wishlist_count);
	// console.log("Tabby payload: ", payload);
	// console.log("Tabby payload: ENDED");

	// Add merchant URLs if provided (this will override the defaults)
	if (merchantUrls) {
		payload.merchant_urls = merchantUrls;
	}

	const tabbyRes = await fetch("https://api.tabby.ai/api/v2/checkout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.TABBY_SECRET_KEY}`,
		},
		body: JSON.stringify(payload),
		cache: "no-store",
	});

	if (!tabbyRes.ok) {
		const responseText = await tabbyRes.text();
		throw new Error(
			`Tabby API error (${tabbyRes.status}): ${responseText}`
		);
	}

	const response = await tabbyRes.json();

	// Check for warnings
	if (response.warnings && response.warnings.length > 0) {
		console.warn("Tabby API warnings:", response.warnings);
	}

	return response;
}
