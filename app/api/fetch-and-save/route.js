import fs from "fs";
import path from "path";

export async function GET(req) {
  try {
    // Force a fresh fetch by disabling caching
    const response = await fetch(
      "https://www.centauruscharter.com/api/api_new/basic", 
      { cache: "no-store" }
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch data" }),
        { status: 500 }
      );
    }

    const data = await response.json();
    const filePath = path.join(process.cwd(), "public", "data.json");

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return new Response(
      JSON.stringify({ message: "File saved successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
