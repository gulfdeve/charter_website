// app/lib/fetchData.js
export async function fetchData() {
  try {
    // Check if we're on the server or client
    const baseUrl =
      typeof window === "undefined"
        ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
        : "";

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
