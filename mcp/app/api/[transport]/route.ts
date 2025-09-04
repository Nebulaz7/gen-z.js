// mcp/app/api/[transport]/route.ts
import { createMcpHandler } from "mcp-handler";
import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Helper function to get all markdown files
function getAllMarkdownFiles(dir: string, prefix = ""): string[] {
  const files: string[] = [];
  try {
    if (!fs.existsSync(dir)) {
      return files;
    }

    const items = fs.readdirSync(dir);

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

// Helper function to find docs directory - looks in web/docs
function findDocsDirectory(): string {
  const possiblePaths = [
    path.resolve(process.cwd(), "../web/docs/docs"),
    path.resolve(process.cwd(), "../../web/docs/docs"),
  ];

  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      return possiblePath;
    }
  }

  return "";
}

const handler = createMcpHandler(
  (server) => {
    // Add resource for listing all documentation files
    server.resource(
      "docs-list",
      "genz-docs://docs/list",
      {
        title: "GenZ.js Documentation List",
        description: "List of all GenZ.js documentation files",
      },
      async () => {
        const docsPath = findDocsDirectory();
        if (!docsPath) {
          return {
            contents: [
              {
                uri: "genz-docs://docs/list",
                mimeType: "application/json",
                text: JSON.stringify({
                  files: [],
                  message: "Documentation not found in deployment",
                }),
              },
            ],
          };
        }

        const files = getAllMarkdownFiles(docsPath);
        return {
          contents: [
            {
              uri: "genz-docs://docs/list",
              mimeType: "application/json",
              text: JSON.stringify({
                files: files.map((file) => ({
                  uri: `genz-docs://docs/${file}`,
                  name: `GenZ.js - ${file.replace(/\//g, " > ")}`,
                  description: `GenZ.js documentation for ${file}`,
                })),
              }),
            },
          ],
        };
      }
    );

    // Add resource template for individual documentation files
    server.resource(
      "docs-file",
      new ResourceTemplate("genz-docs://docs/{docPath}", { list: undefined }),
      {
        title: "GenZ.js Documentation File",
        description: "Individual GenZ.js documentation files",
      },
      async (uri, { docPath }) => {
        const docsPath = findDocsDirectory();

        if (!docsPath) {
          throw new Error(`Documentation directory not found`);
        }

        const filePath = path.join(docsPath, `${docPath}.md`);

        if (!fs.existsSync(filePath)) {
          throw new Error(`Documentation file not found: ${docPath}`);
        }

        const content = fs.readFileSync(filePath, "utf8");
        const { data, content: markdown } = matter(content);

        return {
          contents: [
            {
              uri: uri.toString(),
              mimeType: "text/markdown",
              text: `---\ntitle: ${data.title || docPath}\n---\n\n${markdown}`,
            },
          ],
        };
      }
    );

    // Add tool: Generate GenZ.js examples
    server.tool(
      "generate_genz_example",
      "Generate GenZ.js framework code examples",
      {
        feature: z
          .string()
          .describe(
            'The GenZ.js feature to demonstrate (e.g., "alertz", "letz", "getz", "setz", "togglez")'
          ),
        scenario: z.string().optional().describe("The use case scenario"),
        complexity: z
          .enum(["simple", "intermediate", "advanced"])
          .default("simple")
          .describe("Example complexity level"),
      },
      async ({ feature, scenario, complexity }) => {
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
          return {
            content: [
              {
                type: "text",
                text: `GenZ.js ${feature} example not found. Available features: alertz, letz, getz, setz, togglez, hidez, showz, hoverz, clickz`,
              },
            ],
          };
        }

        const baseExample =
          featureExamples[complexity] || featureExamples.simple;
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

        const finalExample = scenario
          ? `${fullExample}\n\n<!-- Scenario: ${scenario} -->`
          : fullExample;

        return {
          content: [
            {
              type: "text",
              text: finalExample,
            },
          ],
        };
      }
    );

    // Add tool: Validate GenZ.js code
    server.tool(
      "validate_genz_code",
      "Validate GenZ.js HTML code for correct attribute usage",
      {
        html: z
          .string()
          .describe("HTML code with GenZ.js attributes to validate"),
      },
      async ({ html }) => {
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

        const validation = `# GenZ.js Code Validation Results

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

        return {
          content: [
            {
              type: "text",
              text: validation,
            },
          ],
        };
      }
    );
  },
  {
    capabilities: {
      resources: {
        "docs-list": {
          description: "List of all GenZ.js documentation files",
        },
        "docs-file": {
          description: "Individual GenZ.js documentation files",
        },
      },
      tools: {
        generate_genz_example: {
          description: "Generate GenZ.js framework code examples",
        },
        validate_genz_code: {
          description: "Validate GenZ.js HTML code for correct attribute usage",
        },
      },
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    maxDuration: 300, // Increased from 60 to 300 seconds for production
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST, handler as OPTIONS };
