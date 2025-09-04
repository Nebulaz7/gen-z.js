export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const params = await context.params;

  return Response.json({
    message: "Working dynamic route",
    slug: params.slug,
    route: "/api/dynamic-test/[slug]",
  });
}
