import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Cria o MCP server
const server = new McpServer({
  name: "dio-mcp-server",
  version: "1.0.0"
});

// Adiciona uma ferramenta de soma
server.registerTool(
  "add",
  {
    title: "Addition Tool",
    description: "Add two numbers",
    inputSchema: { a: z.number(), b: z.number() }
  },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

// Adiciona um recurso dinâmico de saudação
server.registerResource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
  {
    title: "Greeting Resource",
    description: "Dynamic greeting generator"
  },
  async (uri, { name }) => ({
    contents: [{
      uri: uri.href,
      text: `Olá, ${name}!`
    }]
  })
);

// Inicia recebimento de mensagens via stdio
const transport = new StdioServerTransport();
await server.connect(transport);
