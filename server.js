// Importa o módulo Express.js, que é usado para criar o servidor web.
const express = require("express");

// Importa o módulo CORS, que é usado para habilitar o compartilhamento de recursos de origem cruzada (CORS).
const cors = require("cors");

// Importa o módulo produtosRoutes, que contém as rotas para a API de produtos.
const produtosRoutes = require("./src/routes/produtosRoutes");

// Importa o middleware errorHandler, que é usado para lidar com erros na aplicação.
const errorHandler = require("./src/middlewares/errorHandler");

// Cria uma instância do aplicativo Express.
const app = express();

// Define a porta em que o servidor irá rodar.
const port = 3000;

// Habilita o CORS para permitir que o servidor seja acessado por diferentes origens.
app.use(cors());

// Habilita o middleware express.json para analisar corpos de requisição JSON.
app.use(express.json());

// Define as rotas para a API de produtos, usando o módulo produtosRoutes.
// Todas as requisições que começam com "/produtos" serão direcionadas para essas rotas.
app.use("/produtos", produtosRoutes);

// Usa o middleware errorHandler para lidar com erros que ocorrem durante o processamento das requisições.
// Este middleware deve ser definido após as rotas para capturar erros de todas as rotas.
app.use(errorHandler);

// Inicia o servidor e o faz escutar na porta especificada.
// Quando o servidor inicia, exibe uma mensagem no console informando a URL em que ele está rodando.
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
