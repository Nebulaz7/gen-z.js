import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

// Test locally first
const origin = "http://localhost:3000/api/mcp";

async function main() {
  try {
    console.log(`Attempting to connect to: ${origin}/sse`);

    const transport = new SSEClientTransport(new URL(`${origin}/sse`));

    const client = new Client(
      {
        name: "example-client",
        version: "1.0.0",
      },
      {
        capabilities: {
          prompts: {},
          resources: {},
          tools: {},
        },
      }
    );

    console.log("Connecting...");
    await client.connect(transport);

    console.log(
      "Connected! Server capabilities:",
      client.getServerCapabilities()
    );

    const tools = await client.listTools();
    console.log("Available tools:", tools);

    const resources = await client.listResources();
    console.log("Available resources:", resources);
  } catch (error) {
    console.error("Connection failed:", error);

    // Let's also try a simple HTTP request to see what's happening
    try {
      const response = await fetch(`${origin}/sse`);
      console.log("HTTP status:", response.status);
      console.log(
        "HTTP headers:",
        Object.fromEntries(response.headers.entries())
      );
      const text = await response.text();
      console.log("Response body:", text);
    } catch (fetchError) {
      console.error("HTTP fetch failed:", fetchError);
    }
  }
}

main();
