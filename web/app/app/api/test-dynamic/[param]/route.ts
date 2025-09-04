export async function GET(
  request: Request,
  { params }: { params: Promise<{ param: string }> }
) {
  const { param } = await params;
  
  return new Response(
    JSON.stringify({
      message: "Dynamic route test is working!",
      param: param,
      timestamp: new Date().toISOString(),
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
