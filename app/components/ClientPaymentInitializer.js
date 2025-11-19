// components/ClientPaymentInitializer.jsx
'use client';
import { useEffect } from 'react';

export default function ClientPaymentInitializer({
  slug,
  CENTAURUS_API_KEY,
  sessionId,
  sessionVersion,
  successIndicator,
  children,
}) {
  /*useEffect(() => {
		// build the status URL exactly the same way you do on the server:
		const statusUrl = new URL(
			`https://www.centauruscharter.net/api/api_new/payments/rakbank/${slug}`
		);
		statusUrl.searchParams.set("token", CENTAURUS_API_KEY);
		statusUrl.searchParams.set("id", slug);
		statusUrl.searchParams.set("status", "initial");
		statusUrl.searchParams.set("session_id", sessionId);
		statusUrl.searchParams.set("session_version", sessionVersion);
		statusUrl.searchParams.set("success_indicator", "initial");

		console.log(
			"[ClientPaymentInitializer]Sending initial status to:",
			statusUrl.toString()
		);
		// fire-and-forget
		fetch(statusUrl.toString(), { method: "POST" })
			.then((res) =>
				console.log(
					"[ClientPaymentInitializer] initial status response OK?",
					res.ok
				)
			)
			.catch((err) =>
				console.log(
					"[ClientPaymentInitializer] Error sending initial status:",
					err
				)
			);
	}, [slug, CENTAURUS_API_KEY, sessionId, sessionVersion, successIndicator]);*/

  // render children only once the effect has been scheduled
  return <>{children}</>;
}
