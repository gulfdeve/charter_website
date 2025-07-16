import React from "react";
import { fetchRakBankPayment } from "@/app/lib/fetchRakBankPayment";
import { fetchBooking } from "@/app/lib/fetchBooking";
import { redirect } from "next/navigation";

const PaymentCompleteRakBank = async ({ searchParams, params }) => {
	const { slug } = await params;
	const { resultIndicator, sessionVersion, checkoutVersion } =
		await searchParams;

	// console.log(resultIndicator, sessionVersion, checkoutVersion, slug);

	const booking = await fetchBooking(slug);
	const data = await fetchRakBankPayment(booking.order_no);
	// console.log(data);

	try {
		const saveRes = await fetch(
			`https://www.centauruscharter.net/api/api_new/payments/rakbank/${booking.id}?token=${process.env.CENTAURUS_API_KEY}` +
				`&id=${booking.id}` +
				`&status=${data.status}` +
				`&session_id=` +
				`&received_amount=${data.totalCapturedAmount}` +
				`&session_version=${sessionVersion}` +
				`&success_indicator=${resultIndicator}`,
			{
				method: "POST",
			}
		);
		const saveText = await saveRes.text();
		// console.log("Rakbank save payment response:", saveText);
		// redirect to payment success page

	} catch (saveErr) {
		console.error("Error saving Rakbank payment:", saveErr);
	}

	// console.log("Booking data:", booking);
	redirect(`/payments/success/?slug=${slug}`);

	// return <div>PaymentCompleteRakBank</div>;
};

export default PaymentCompleteRakBank;
