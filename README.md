# dio-mcp

Este projeto é um **servidor MCP (Model Context Protocol)** de exemplo, que integra com a API [TheCocktailDB](https://www.thecocktaildb.com/).  
Ele demonstra como um MCP server pode consumir APIs externas de forma simples e ser utilizado em ferramentas compatíveis com MCP.  

👉 Este projeto faz parte dos conteúdos da [DIO (Digital Innovation One)](https://web.dio.me/).  
📺 Veja também o vídeo no YouTube: [Por que Todos Estão Falando sobre MCP? Veja como integrar com APIs e Bancos de Dados na prática](https://www.youtube.com/watch?v=S4JijEq8Q_M).  


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
