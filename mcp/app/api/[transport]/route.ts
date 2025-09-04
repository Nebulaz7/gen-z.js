// app/api/[transport]/route.ts
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const handler = createMcpHandler(
  (server) => {
    // Simple resource that returns static data
    server.resource(
      "hello",
      "genz://hello",
      {
        title: "Hello World",
        description: "A simple hello world resource",
      },
      async () => {
        return {
          contents: [
            {
              uri: "genz://hello",
              mimeType: "text/plain",
              text: "Hello from GenZ.js MCP Server!",
            },
          ],
        };
      }
    );

    // Simple tool that generates basic HTML
    server.tool(
      "generate_html",
      "Generate simple HTML with GenZ.js",
      {
        title: z.string().describe("Page title"),
        content: z.string().describe("Page content"),
      },
      async ({ title, content }) => {
        const html = `<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script>
</head>
<body>
  <h1>${title}</h1>
  <p>${content}</p>
  <button alertz="Hello from GenZ.js!">Click me</button>
</body>
</html>`;

        return {
          content: [
            {
              type: "text",
              text: html,
            },
          ],
        };
      }
    );
  },
  {
    capabilities: {
      resources: {
        hello: { description: "Simple hello world resource" },
      },
      tools: {
        generate_html: { description: "Generate simple HTML with GenZ.js" },
      },
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    basePath: "/api",
    maxDuration: 60,
    verboseLogs: true,
  }
);

export const GET = handler;
export const POST = handler;
