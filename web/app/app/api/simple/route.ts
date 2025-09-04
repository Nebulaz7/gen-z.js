export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Simple API route without dynamic segments",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "unknown",
      vercelEnv: process.env.VERCEL_ENV || "unknown"
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
