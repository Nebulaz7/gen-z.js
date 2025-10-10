---
title: MCP
sidebar_position: 1.2
---

## Mcp

The GenZ.js MCP server makes it easy to generate templates and examples for the GenZ.js library, a lightweight JavaScript library for enhanced DOM interactions through HTML attributes.

## What is MCP?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is an open standard that enables AI assistants to securely connect to external data sources and tools.

## Configuration

### 1. Claude Desktop

Add the following configuration to your Claude Desktop config file:

**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`  
**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "gen-z-mcp": {
      "url": "https://genz-js-mcp.vercel.app/api/sse",
      "type": "sse"
    }
  }
}
```

### 2. Cursor

Open Cursor settings by pressing Cmd + Shift + P (macOS) or Ctrl + Shift + P, (Windows), then search for “Open MCP Settings”

Select “New MCP Server”, then add the GenZ.js MCP server configuration:

```json
{
  "servers": {
    "gen-z-mcp": {
      "url": "https://genz-js-mcp.vercel.app/api/sse",
      "type": "sse"
    }
  },
  "inputs": []
}
```

## Available Capabilities

Once connected, the MCP server provides:

### Resources

- **`hello`** - A simple hello world resource that returns a greeting message

### Tools

- **`generate_html`** - Generate complete HTML pages with GenZ.js integration

## Usage Examples

After configuring the MCP server, you can interact with it through your AI assistant:

### Basic Resource Access

Ask your AI assistant to:

- "Show me the hello resource"
- "What's in the genz://hello resource?"

### HTML Generation

Use the `generate_html` tool by asking:

- "Generate an HTML page with title 'My App' and content 'Welcome to my application'"
- "Create a simple webpage about GenZ.js features"
- "Make an HTML page that demonstrates the alertz attribute"

### Tool Parameters

The `generate_html` tool accepts:

- **`title`** (string) - The page title for the HTML document
- **`content`** (string) - The main content to display on the page

The generated HTML will automatically include:

- Proper HTML5 document structure
- GenZ.js library loaded from CDN
- A demo button with the `alertz` attribute
- Your custom title and content

## Example Generated Output

When you ask to generate HTML with title "Demo Page" and content "Testing GenZ.js", you'll get:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Demo Page</title>
    <script src="https://cdn.jsdelivr.net/gh/Nebulaz7/gen-z.js@1.1.0/dist/gen-z.min.js"></script>
  </head>
  <body>
    <h1>Demo Page</h1>
    <p>Testing GenZ.js</p>
    <button alertz="Hello from GenZ.js!">Click me</button>
  </body>
</html>
```

## Troubleshooting

If the MCP server isn't working:

1. **Check the URL** - Ensure `https://genz-js-mcp.vercel.app/api/sse` is accessible
2. **Restart your AI assistant** - Some clients require restart after config changes
3. **Verify JSON syntax** - Ensure your config file has valid JSON formatting
4. **Check connection status** - Look for MCP indicators in your AI assistant's interface

The server supports both Server-Sent Events (SSE) and HTTP transports for maximum compatibility.
