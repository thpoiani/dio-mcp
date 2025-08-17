import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "dio-mcp-server",
  version: "1.0.0"
});

server.registerTool(
  "fetch-drink",
  {
    title: "Drink Fetcher",
    description: "Get cocktail data by drink name",
    inputSchema: { drink: z.string() }
  },
  async ({ drink }) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
    const data = await response.text();
    return {
      content: [{ type: "text", text: data }]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
