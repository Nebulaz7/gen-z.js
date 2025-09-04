// Simplified MCP server without external dependencies

export async function GET(
  request: Request,
  { params }: { params: Promise<{ transport: string }> }
) {
  const { transport } = await params;

  return new Response(
    JSON.stringify({
      name: "genz-js-docs",
      version: "1.0.0",
      transport: transport,
      status: "running",
      capabilities: ["resources", "tools"],
      note: "Simplified version without MCP SDK dependencies"
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ transport: string }> }
) {
  const { transport } = await params;

  if (transport !== "http") {
    return new Response("Only HTTP transport supported", { status: 400 });
  }

  try {
    const body = await request.json();

    // Simple mock responses for testing
    if (body.method === "resources/list") {
      return new Response(JSON.stringify({
        resources: [
          {
            uri: "genz-docs://docs/index",
            name: "GenZ.js - Introduction",
            mimeType: "text/markdown",
            description: "GenZ.js framework introduction"
          }
        ]
      }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (body.method === "tools/list") {
      return new Response(JSON.stringify({
        tools: [
          {
            name: "generate_genz_example",
            description: "Generate GenZ.js framework code examples",
            inputSchema: {
              type: "object",
              properties: {
                feature: { type: "string" }
              },
              required: ["feature"]
            }
          }
        ]
      }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({
      error: "Method not implemented",
      method: body.method
    }), {
      status: 501,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
