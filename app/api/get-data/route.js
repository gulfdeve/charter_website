export async function GET() {
  try {
    const response = await fetch(`${process.env.API_DOMAIN}/api/api_new/basic`);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
        status: 500,
      });
    }
    console.log("loading data from api");
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
