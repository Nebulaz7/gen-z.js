export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Test API route is working!",
      timestamp: new Date().toISOString(),
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
