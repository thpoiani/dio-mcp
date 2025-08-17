# dio-mcp
Repositório inicial para o projeto dio-mcp

## Instalação de MCP Server

A configuração padrão funciona na maioria das ferramentas:

```json
{
  "mcpServers": {
    "drink": {
      "command": "node",
      "args": [
        "${PATH_TO_DIST}/index.js"
      ],
      "type": "stdio"
    }
  }
}
```
