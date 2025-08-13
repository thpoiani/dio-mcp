import { McpServer } from '@modelcontextprotocol/sdk';
import { z } from 'zod';

const server = new McpServer({
  port: 3000,
  // Adicione configurações e handlers conforme necessário
});

server.listen().then(() => {
  console.log('MCP Server rodando na porta 3000');
});
