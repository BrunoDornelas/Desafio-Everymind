// Importa o módulo Express.js, que é usado para criar rotas.
const express = require("express");

// Importa o controlador de produtos, que contém as funções para lidar com as requisições da API de produtos.
const produtosController = require("../controllers/produtosController");

// Cria uma instância do roteador do Express.js.
const router = express.Router();

// Define a rota para listar todos os produtos.
// Quando uma requisição GET é feita para "/", a função listarProdutos do controlador é chamada.
router.get("/", produtosController.listarProdutos);

// Define a rota para obter um produto específico pelo ID.
// Quando uma requisição GET é feita para "/:id", a função obterProduto do controlador é chamada.
// ":id" é um parâmetro dinâmico que representa o ID do produto.
router.get("/:id", produtosController.obterProduto);

// Define a rota para criar um novo produto.
// Quando uma requisição POST é feita para "/", a função criarProduto do controlador é chamada.
router.post("/", produtosController.criarProduto);

// Define a rota para atualizar um produto existente pelo ID.
// Quando uma requisição PUT é feita para "/:id", a função atualizarProduto do controlador é chamada.
// ":id" é um parâmetro dinâmico que representa o ID do produto.
router.put("/:id", produtosController.atualizarProduto);

// Define a rota para deletar um produto pelo ID.
// Quando uma requisição DELETE é feita para "/:id", a função deletarProduto do controlador é chamada.
// ":id" é um parâmetro dinâmico que representa o ID do produto.
router.delete("/:id", produtosController.deletarProduto);

// Exporta o roteador para ser usado em outros módulos.
module.exports = router;
