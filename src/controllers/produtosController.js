// Importa o modelo de dados produtosModel, que contém as funções de acesso ao banco de dados.
const produtosModel = require("../models/produtosModel");

// Importa a função validateProduto, que é usada para validar os dados do produto.
const { validateProduto } = require("../utils/validation");

// Função assíncrona para listar todos os produtos.
async function listarProdutos(req, res, next) {
  try {
    // Chama a função listarProdutos do modelo para buscar os produtos do banco de dados.
    const produtos = await produtosModel.listarProdutos();

    // Envia os produtos como resposta JSON.
    res.json(produtos);
  } catch (error) {
    // Passa o erro para o próximo middleware de tratamento de erros.
    next(error);
  }
}

// Função assíncrona para obter um produto específico pelo ID.
async function obterProduto(req, res, next) {
  try {
    // Chama a função obterProduto do modelo para buscar o produto pelo ID.
    const produto = await produtosModel.obterProduto(req.params.id);

    // Verifica se o produto foi encontrado.
    if (!produto) {
      // Se o produto não foi encontrado, retorna um erro 404 (Não encontrado).
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    // Se o produto foi encontrado, envia o produto como resposta JSON.
    res.json(produto);
  } catch (error) {
    // Passa o erro para o próximo middleware de tratamento de erros.
    next(error);
  }
}

// Função assíncrona para criar um novo produto.
async function criarProduto(req, res, next) {
  try {
    // Valida os dados do produto usando a função validateProduto.
    const { error } = validateProduto(req.body);

    // Se houver um erro de validação, retorna um erro 400 (Requisição inválida).
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Chama a função criarProduto do modelo para criar o novo produto no banco de dados.
    const novoProduto = await produtosModel.criarProduto(req.body);

    // Envia o novo produto como resposta JSON com status 201 (Criado).
    res.status(201).json(novoProduto);
  } catch (error) {
    // Passa o erro para o próximo middleware de tratamento de erros.
    next(error);
  }
}

// Função assíncrona para atualizar um produto existente.
async function atualizarProduto(req, res, next) {
  try {
    // Valida os dados do produto usando a função validateProduto.
    const { error } = validateProduto(req.body);

    // Se houver um erro de validação, retorna um erro 400 (Requisição inválida).
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Chama a função atualizarProduto do modelo para atualizar o produto no banco de dados.
    const produtoAtualizado = await produtosModel.atualizarProduto(
      req.params.id,
      req.body
    );

    // Envia o produto atualizado como resposta JSON.
    res.json(produtoAtualizado);
  } catch (error) {
    // Passa o erro para o próximo middleware de tratamento de erros.
    next(error);
  }
}

// Função assíncrona para deletar um produto pelo ID.
async function deletarProduto(req, res, next) {
  try {
    // Chama a função deletarProduto do modelo para deletar o produto do banco de dados.
    await produtosModel.deletarProduto(req.params.id);

    // Envia uma resposta com status 204 (Sem conteúdo) para indicar que o produto foi deletado.
    res.status(204).send();
  } catch (error) {
    // Passa o erro para o próximo middleware de tratamento de erros.
    next(error);
  }
}

// Exporta as funções para serem usadas em outros módulos.
module.exports = {
  listarProdutos,
  obterProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};
