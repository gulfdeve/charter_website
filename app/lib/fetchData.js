// app/lib/fetchData.js
export async function fetchData() {
	try {
	  // Get the host from the environment or infer it from the request
	  let baseUrl = "";
	  
	  if (typeof window === "undefined") {
		// We're on the server side
		const hostname = process.env.HOST_URL || 
						process.env.NEXT_PUBLIC_API_URL || 
						process.env.VERCEL_URL ||
						"centauruscharter.net";
		
		// Determine protocol
		const protocol = hostname.includes("localhost") ? "http" : "https";
		
		// Add protocol if not present
		baseUrl = hostname.startsWith("http") ? hostname : `${protocol}://${hostname}`;
	  }
	  
	  console.log("using baseUrl: ", `${baseUrl}/api/get-data`);
	  const response = await fetch(`${baseUrl}/api/get-data`, {
		cache: "no-store",
	  });
  
	  if (!response.ok) {
		throw new Error("Failed to fetch data");
	  }
  
	  return response.json();
	} catch (error) {
	  console.error("Error fetching data:", error);
	  return null;
	}
  }