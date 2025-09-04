import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
  McpError,
  ErrorCode,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// MCP Server setup
const server = new Server(
  {
    name: "genz-js-docs",
    version: "1.0.0",
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// Helper functions
function getAllMarkdownFiles(dir: string, prefix = ""): string[] {
  const files: string[] = [];
  try {
    console.log("Searching for markdown files in:", dir);
    const items = fs.readdirSync(dir);
    console.log("Found items:", items);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = prefix ? `${prefix}/${item}` : item;

      if (fs.statSync(fullPath).isDirectory()) {
        files.push(...getAllMarkdownFiles(fullPath, relativePath));
      } else if (item.endsWith(".md")) {
        files.push(relativePath.replace(".md", ""));
      }
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }

  return files;
}

// Resources handlers
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  const docsPath = path.resolve(process.cwd(), "../docs/docs");
  const files = getAllMarkdownFiles(docsPath);

  return {
    resources: files.map((file) => ({
      uri: `genz-docs://docs/${file}`,
      name: `GenZ.js - ${file.replace(/\//g, " > ")}`,
      mimeType: "text/markdown",
      description: `GenZ.js documentation for ${file}`,
    })),
  };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;
  const docPath = uri.replace("genz-docs://docs/", "");
  const filePath = path.resolve(process.cwd(), "../docs/docs", `${docPath}.md`);

  try {
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: markdown } = matter(content);

    return {
      contents: [
        {
          uri,
          mimeType: "text/markdown",
          text: `---\ntitle: ${data.title || docPath}\n---\n\n${markdown}`,
        },
      ],
    };
  } catch {
    throw new McpError(
      ErrorCode.InternalError,
      `Documentation file not found: ${docPath}`
    );
  }
});

// Tools handlers
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "generate_genz_example",
        description: "Generate GenZ.js framework code examples",
        inputSchema: {
          type: "object",
          properties: {
            feature: {
              type: "string",
              description:
                'The GenZ.js feature to demonstrate (e.g., "alertz", "letz", "getz", "setz", "togglez")',
            },
            scenario: {
              type: "string",
              description: "The use case scenario",
            },
            complexity: {
              type: "string",
              enum: ["simple", "intermediate", "advanced"],
              description: "Example complexity level",
            },
          },
          required: ["feature"],
        },
      },
      {
        name: "validate_genz_code",
        description: "Validate GenZ.js HTML code for correct attribute usage",
        inputSchema: {
          type: "object",
          properties: {
            html: {
              type: "string",
              description: "HTML code with GenZ.js attributes to validate",
            },
          },
          required: ["html"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "generate_genz_example":
      const {
        feature,
        scenario,
        complexity = "simple",
      } = args as {
        feature: string;
        scenario?: string;
        complexity?: string;
      };
      const example = generateGenZExample(feature, scenario, complexity);

      return {
        content: [
          {
            type: "text",
            text: example,
          },
        ],
      };

    case "validate_genz_code":
      const { html } = args as { html: string };
      const validation = validateGenZCode(html);

      return {
        content: [
          {
            type: "text",
            text: validation,
          },
        ],
      };

    default:
      throw new McpError(ErrorCode.MethodNotFound, `Tool ${name} not found`);
  }
});

function generateGenZExample(
  feature: string,
  scenario?: string,
  complexity: string = "simple"
): string {
  const examples: Record<string, Record<string, string>> = {
    alertz: {
      simple: `<button alertz="Hello from GenZ.js!">Click me</button>`,
      intermediate: `<input type="text" letz="message" placeholder="Enter message" />
<button alertz-text="#message">Show Message</button>`,
      advanced: `<form id="contactForm">
  <input type="text" letz="name" placeholder="Your name" required />
  <input type="email" letz="email" placeholder="Your email" required />
  <button type="button" alertz-text=".form-data">Preview Form Data</button>
</form>
<div class="form-data" style="display: none;">
  Name: <span getz="name"></span><br>
  Email: <span getz="email"></span>
</div>`,
    },
    letz: {
      simple: `<input type="text" letz="username" placeholder="Enter username" />
<p>Hello, <span getz="username"></span>!</p>`,
      intermediate: `<input type="number" letz="count:Number" value="0" />
<button setz="count:count + 1">Increment</button>
<button setz="count:count - 1">Decrement</button>
<p>Count: <span getz="count"></span></p>`,
      advanced: `<div class="calculator">
  <input type="number" letz="num1:Number" value="0" />
  <input type="number" letz="num2:Number" value="0" />
  <button setz="result:num1 + num2">Add</button>
  <button setz="result:num1 - num2">Subtract</button>
  <button setz="result:num1 * num2">Multiply</button>
  <p>Result: <span getz="result"></span></p>
</div>`,
    },
    togglez: {
      simple: `<button togglez="#panel">Toggle Panel</button>
<div id="panel" style="display: none;">This content can be toggled</div>`,
      intermediate: `<button togglez="#panel1, #panel2">Toggle Both</button>
<div id="panel1" style="display: none;">Panel 1 content</div>
<div id="panel2" style="display: none;">Panel 2 content</div>`,
      advanced: `<div class="accordion">
  <h3 togglez="#section1">Section 1 ▼</h3>
  <div id="section1" style="display: none;">
    <p>Section 1 content with <span letz="data1">dynamic data</span></p>
  </div>
  <h3 togglez="#section2">Section 2 ▼</h3>
  <div id="section2" style="display: none;">
    <p>Section 2 content</p>
  </div>
</div>`,
    },
  };

  const featureExamples = examples[feature];
  if (!featureExamples) {
    return `<!-- GenZ.js ${feature} example not found -->
<!-- Available features: alertz, letz, getz, setz, togglez, hidez, showz, hoverz, clickz -->`;
  }

  const baseExample = featureExamples[complexity] || featureExamples.simple;
  const fullExample = `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script>
  <title>GenZ.js ${feature} Example</title>
</head>
<body>
  ${baseExample}
</body>
</html>`;

  if (scenario) {
    return `${fullExample}\n\n<!-- Scenario: ${scenario} -->`;
  }

  return fullExample;
}

function validateGenZCode(html: string): string {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // Check for GenZ.js script inclusion
  if (!html.includes("gen-z")) {
    issues.push(
      '⚠️ GenZ.js script not found. Add: <script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script>'
    );
  }

  // Check for proper attribute usage
  const genZAttributes = [
    "alertz",
    "letz",
    "getz",
    "setz",
    "togglez",
    "hidez",
    "showz",
    "hoverz",
    "clickz",
  ];
  genZAttributes.forEach((attr) => {
    const regex = new RegExp(`${attr}="([^"]*)"`, "g");
    const matches = html.match(regex);
    if (matches) {
      suggestions.push(`✅ Found ${matches.length} usage(s) of ${attr}`);
    }
  });

  // Check for common issues
  if (html.includes("getz") && !html.includes("letz")) {
    issues.push(
      "⚠️ Found getz without letz. Make sure to create variables with letz first."
    );
  }

  return `# GenZ.js Code Validation Results

## Issues Found
${issues.length > 0 ? issues.join("\n") : "✅ No issues found!"}

## Detected GenZ.js Usage
${
  suggestions.length > 0
    ? suggestions.join("\n")
    : "❌ No GenZ.js attributes detected"
}

## Recommendations
- Always include the GenZ.js script before using attributes
- Use letz to create variables before displaying them with getz
- Test your code in different browsers
- Keep attribute values simple and readable`;
}

// API route handlers
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

    let response;

    // Handle different request types directly
    switch (body.method) {
      case "resources/list":
        response = await handleListResources();
        break;
      case "resources/read":
        response = await handleReadResource(body);
        break;
      case "tools/list":
        response = await handleListTools();
        break;
      case "tools/call":
        response = await handleCallTool(body);
        break;
      default:
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Method ${body.method} not supported`
        );
    }

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("MCP Error:", error);
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

// Extract your handler logic into separate functions
async function handleListResources() {
  const docsPath = path.resolve(process.cwd(), "../docs/docs");
  const files = getAllMarkdownFiles(docsPath);

  return {
    resources: files.map((file) => ({
      uri: `genz-docs://docs/${file}`,
      name: `GenZ.js - ${file.replace(/\//g, " > ")}`,
      mimeType: "text/markdown",
      description: `GenZ.js documentation for ${file}`,
    })),
  };
}

async function handleReadResource(body: { params: { uri: string } }) {
  const uri = body.params.uri;
  const docPath = uri.replace("genz-docs://docs/", "");
  const filePath = path.resolve(process.cwd(), "../docs/docs", `${docPath}.md`);

  try {
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: markdown } = matter(content);

    return {
      contents: [
        {
          uri,
          mimeType: "text/markdown",
          text: `---\ntitle: ${data.title || docPath}\n---\n\n${markdown}`,
        },
      ],
    };
  } catch {
    throw new McpError(
      ErrorCode.InternalError,
      `Documentation file not found: ${docPath}`
    );
  }
}

async function handleListTools() {
  return {
    tools: [
      {
        name: "generate_genz_example",
        description: "Generate GenZ.js framework code examples",
        inputSchema: {
          type: "object",
          properties: {
            feature: {
              type: "string",
              description:
                'The GenZ.js feature to demonstrate (e.g., "alertz", "letz", "getz", "setz", "togglez")',
            },
            scenario: {
              type: "string",
              description: "The use case scenario",
            },
            complexity: {
              type: "string",
              enum: ["simple", "intermediate", "advanced"],
              description: "Example complexity level",
            },
          },
          required: ["feature"],
        },
      },
      {
        name: "validate_genz_code",
        description: "Validate GenZ.js HTML code for correct attribute usage",
        inputSchema: {
          type: "object",
          properties: {
            html: {
              type: "string",
              description: "HTML code with GenZ.js attributes to validate",
            },
          },
          required: ["html"],
        },
      },
    ],
  };
}

async function handleCallTool(body: {
  params: { name: string; arguments: Record<string, unknown> };
}) {
  const { name, arguments: args } = body.params;

  switch (name) {
    case "generate_genz_example":
      const {
        feature,
        scenario,
        complexity = "simple",
      } = args as {
        feature: string;
        scenario?: string;
        complexity?: string;
      };
      const example = generateGenZExample(feature, scenario, complexity);

      return {
        content: [
          {
            type: "text",
            text: example,
          },
        ],
      };

    case "validate_genz_code":
      const { html } = args as { html: string };
      const validation = validateGenZCode(html);

      return {
        content: [
          {
            type: "text",
            text: validation,
          },
        ],
      };

    default:
      throw new McpError(ErrorCode.MethodNotFound, `Tool ${name} not found`);
  }
}
