export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;

  return Response.json({
    success: true,
    id: params.id,
    path: "/api/simple-dynamic/[id]",
    timestamp: Date.now(),
  });
}
