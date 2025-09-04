// test-client.mjs
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const SERVER_URL = "http://localhost:3000/api/sse"; // use http:// not https:// if running locally

async function testMcpClient() {
  console.log(`Attempting to connect to: ${SERVER_URL}`);

  const transport = new SSEClientTransport(new URL(SERVER_URL));
  const client = new Client(
    { name: "test-client", version: "1.0.0" },
    { capabilities: {} }
  );

  try {
    console.log("Connecting...");
    await client.connect(transport);

    console.log("✅ Connected!");
    console.log("🔧 Server capabilities:", client.getServerCapabilities());

    // List tools
    const toolsResult = await client.listTools();
    const toolNames = toolsResult.tools?.map((tool) => tool.name) || [];
    console.log("📖 Available tools:", toolNames);

    // List resources
    const resourcesResult = await client.listResources();
    const resourceNames =
      resourcesResult.resources?.map((resource) => resource.name) || [];
    console.log("📚 Available resources:", resourceNames);

    // --- Test generate_genz_example tool ---
    console.log("\n🧪 Testing generate_genz_example...");
    try {
      const toolResult = await client.callTool({
        name: "generate_genz_example",
        arguments: {
          feature: "alertz",
          complexity: "simple",
        },
      });
      console.log(
        "✅ Example tool result:",
        toolResult.content[0].text.substring(0, 200) + "..."
      );
    } catch (err) {
      console.error("❌ generate_genz_example failed:", err.message);
    }

    // --- Test validate_genz_code tool ---
    console.log("\n🧪 Testing validate_genz_code...");
    try {
      const validateResult = await client.callTool({
        name: "validate_genz_code",
        arguments: {
          html: '<div z-if="true">Hello GenZ</div>',
        },
      });
      console.log(
        "✅ Validation result:",
        validateResult.content.map((c) => c.text).join("\n")
      );
    } catch (err) {
      console.error("❌ validate_genz_code failed:", err.message);
    }

    // --- Test docs-list resource ---
    console.log("\n🧪 Testing docs-list resource...");
    try {
      const docsResult = await client.readResource({
        uri: "genz-docs://docs/list",
      });

      console.log(
        "✅ Docs list result:",
        docsResult.content[0].text.substring(0, 200) + "..."
      );
    } catch (err) {
      console.error("❌ docs-list resource failed:", err.message);
    }

    console.log("\n🎉 All tests completed!");
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
    console.error(err);
  } finally {
    await client.close();
  }
}

testMcpClient().catch(console.error);
