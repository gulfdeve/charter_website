export async function POST(req) {
	try {
	  const { email } = await req.json();
	  if (!email.trim()) {
		return Response.json({ status: "error", message: "Email is required" }, { status: 400 });
	  }
  
	  const queryParams = new URLSearchParams({ email }).toString();
	  const url = `https://www.centauruscharter.com/api/api_new/save_subscriber?${queryParams}`;
  
	  const response = await fetch(url, { method: "POST" });
	  const data = await response.json();
  
	  if (response.ok && data.status === "success") {
		return Response.json({ status: "success", message: "Subscription successful" });
	  } else {
		return Response.json({ status: "error", message: "Subscription failed" }, { status: 500 });
	  }
	} catch (error) {
	  return Response.json({ status: "error", message: "Server error" }, { status: 500 });
	}
  }
  