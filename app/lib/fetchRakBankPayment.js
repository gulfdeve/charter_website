export const fetchRakBankPayment = async (paymentId) => {
	// console.log("Fetching RakBank payment details for ID:", paymentId);
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

	const urlencoded = new URLSearchParams();
	urlencoded.append("apiOperation", "RETRIEVE_ORDER");
	urlencoded.append("apiPassword", process.env.RAKBANK_MPGS_API_PASSWORD);
	urlencoded.append("apiUsername", `merchant.${process.env.RAKBANK_MPGS_MERCHANT}`);
	urlencoded.append("merchant", process.env.RAKBANK_MPGS_MERCHANT);
	urlencoded.append("order.id", paymentId);

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: urlencoded,
		redirect: "follow",
	};

	try {
		const response = await fetch(
			"https://rakbankpay-nam.gateway.mastercard.com/api/nvp/version/73",
			requestOptions
		);
		const result = await response.text();
		// console.log("result from rakbank: ", result);

		const parsedResult = {};
		result.split("&").forEach((pair) => {
			const [key, value] = pair.split("=");
			if (key && value) {
				parsedResult[key] = decodeURIComponent(value);
			}
		});
		return parsedResult;
	} catch (error) {
		console.error("Fetch error:", error);
	}
};
