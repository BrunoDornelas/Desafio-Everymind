// Importa o módulo Express.js, que é usado para criar o servidor web.
const express = require("express");

// Importa o módulo CORS, que é usado para habilitar o compartilhamento de recursos de origem cruzada.
const cors = require("cors");

// Importa o roteador de produtos, que define as rotas para a API de produtos.
const produtosRoutes = require("./src/routes/produtosRoutes");

// Importa o middleware de tratamento de erros, que lida com erros não tratados nas rotas.
const errorHandler = require("./src/middlewares/errorHandler");

// Cria uma instância do aplicativo Express.
const app = express();

// Usa o middleware CORS para habilitar o compartilhamento de recursos de origem cruzada.
app.use(cors());

// Usa o middleware express.json() para analisar o corpo das requisições como JSON.
app.use(express.json());

// Usa o roteador de produtos para definir as rotas da API de produtos.
app.use("/api/produtos", produtosRoutes);

// Usa o middleware de tratamento de erros para lidar com erros não tratados nas rotas.
app.use(errorHandler);

// Obtém a porta da variável de ambiente $PORT ou usa a porta 3000 como padrão.
// No Heroku, a variável $PORT é definida automaticamente.
// No desenvolvimento local, a variável $PORT geralmente não está definida, então a porta 3000 é usada como padrão.
const port = process.env.PORT || 3000;

// Inicia o servidor e o faz escutar na porta definida.
app.listen(port, () => {
  // Exibe uma mensagem no console indicando que o servidor está rodando na porta correta.
  console.log(`Servidor rodando na porta ${port}`);
});
