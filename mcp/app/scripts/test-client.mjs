import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const SERVER_URL = "https://genz-js-mcp.vercel.app/api/sse";

async function testMcpClient() {
  console.log(`Attempting to connect to: ${SERVER_URL}`);

  const transport = new SSEClientTransport(new URL(SERVER_URL));
  const client = new Client(
    {
      name: "test-client",
      version: "1.0.0",
    },
    {
      capabilities: {},
    }
  );

  try {
    console.log("Connecting...");
    await client.connect(transport);

    console.log(
      "✅ Connected! Server capabilities:",
      client.getServerCapabilities()
    );

    // List available tools
    const toolsResult = await client.listTools();
    const toolNames = toolsResult.tools?.map((tool) => tool.name) || [];
    console.log("📖 Available tools:", toolNames);

    // List available resources
    const resourcesResult = await client.listResources();
    const resourceNames =
      resourcesResult.resources?.map((resource) => resource.name) || [];
    console.log("📚 Available resources:", resourceNames);

    // Test generate_genz_example tool with proper parameters
    console.log("\n🧪 Testing generate_genz_example tool...");
    try {
      const toolResult = await client.callTool({
        name: "generate_genz_example",
        arguments: {
          feature: "alertz",
          complexity: "simple",
        },
      });
      console.log(
        "✅ Tool result preview:",
        toolResult.content[0].text.substring(0, 200) + "..."
      );
    } catch (error) {
      console.error("❌ Tool test failed:", error.message);
    }

    // Test validate_genz_code tool
    console.log("\n🧪 Testing validate_genz_code tool...");
    try {
      const validateResult = await client.callTool({
        name: "validate_genz_code",
        arguments: {
          html: '<script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script><button alertz="Hello">Click me</button>',
        },
      });
      console.log(
        "✅ Validation result preview:",
        validateResult.content[0].text.substring(0, 300) + "..."
      );
    } catch (error) {
      console.error("❌ Validation test failed:", error.message);
    }

    // Test docs-list resource
    console.log("\n🧪 Testing docs-list resource...");
    try {
      const docsResult = await client.readResource({
        uri: "genz-docs://docs/list",
      });
      console.log(
        "✅ Docs list result preview:",
        docsResult.contents[0].text.substring(0, 200) + "..."
      );
    } catch (error) {
      console.error("❌ Docs list test failed:", error.message);
    }

    console.log("\n🎉 All tests completed successfully!");
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
    console.error("Full error:", error);
  } finally {
    await client.close();
  }
}

testMcpClient().catch(console.error);
