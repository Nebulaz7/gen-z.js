// Test both HTTP and SSE endpoints
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const BASE_URL = "https://genz-js-mcp.vercel.app/api";

async function testEndpoint(url, transportType) {
  console.log(`\n🧪 Testing ${transportType} endpoint: ${url}`);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept:
          transportType === "SSE" ? "text/event-stream" : "application/json",
      },
    });

    console.log(`Status: ${response.status} ${response.statusText}`);
    console.log(`Headers:`, Object.fromEntries(response.headers.entries()));

    if (response.ok) {
      console.log(`✅ ${transportType} endpoint is reachable`);
      return true;
    } else {
      console.log(`❌ ${transportType} endpoint returned ${response.status}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${transportType} endpoint error:`, error.message);
    return false;
  }
}

async function testMcpSSE(url) {
  console.log(`\n🔗 Testing MCP SSE connection: ${url}`);

  try {
    const transport = new SSEClientTransport(new URL(url));
    const client = new Client(
      {
        name: "test-client",
        version: "1.0.0",
      },
      {
        capabilities: {},
      }
    );

    await client.connect(transport);
    console.log("✅ MCP SSE connection successful!");

    const capabilities = client.getServerCapabilities();
    console.log("Server capabilities:", capabilities);

    await client.close();
    return true;
  } catch (error) {
    console.log("❌ MCP SSE connection failed:", error.message);
    return false;
  }
}

async function main() {
  console.log("🚀 Testing GenZ.js MCP endpoints...\n");

  // Test different possible endpoints
  const endpoints = [
    { url: `${BASE_URL}/sse`, type: "SSE" },
    { url: `${BASE_URL}/http`, type: "HTTP" },
    { url: `${BASE_URL}/mcp`, type: "HTTP" },
  ];

  console.log("=== Endpoint Reachability Tests ===");
  const reachableEndpoints = [];

  for (const endpoint of endpoints) {
    const isReachable = await testEndpoint(endpoint.url, endpoint.type);
    if (isReachable) {
      reachableEndpoints.push(endpoint);
    }
  }

  console.log("\n=== MCP Connection Tests ===");

  if (reachableEndpoints.length === 0) {
    console.log("❌ No endpoints are reachable. Check deployment.");
    return;
  }

  // Test SSE connection if SSE endpoint is reachable
  const sseEndpoint = reachableEndpoints.find((e) => e.type === "SSE");
  if (sseEndpoint) {
    await testMcpSSE(sseEndpoint.url);
  }

  console.log("\n✅ Endpoint testing complete!");
}

main().catch(console.error);
