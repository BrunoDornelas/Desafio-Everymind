// Importa o pool de conexões com o banco de dados MySQL.
const pool = require("../database/database");

// Função assíncrona para listar todos os produtos.
async function listarProdutos() {
  try {
    // Executa uma consulta SQL para selecionar todos os produtos da tabela "produtos".
    // A função pool.query retorna um array com duas posições, a primeira contendo as linhas resultantes da consulta.
    const [rows] = await pool.query("SELECT * FROM produtos");

    // Retorna as linhas resultantes da consulta.
    return rows;
  } catch (error) {
    // Em caso de erro, lança o erro para ser tratado no middleware de tratamento de erros.
    throw error;
  }
}

// Função assíncrona para obter um produto específico pelo ID.
async function obterProduto(id) {
  try {
    // Executa uma consulta SQL para selecionar um produto específico da tabela "produtos" com base no ID.
    // O ponto de interrogação (?) na consulta é substituído pelo valor do parâmetro "id" para evitar injeção de SQL.
    const [rows] = await pool.query("SELECT * FROM produtos WHERE id = ?", [
      id,
    ]);

    // Retorna a primeira linha resultante da consulta (o produto encontrado).
    // Se nenhum produto for encontrado, rows[0] será undefined.
    return rows[0];
  } catch (error) {
    // Em caso de erro, lança o erro para ser tratado no middleware de tratamento de erros.
    throw error;
  }
}

// Função assíncrona para criar um novo produto.
async function criarProduto(produto) {
  try {
    // Extrai os valores do objeto "produto" para serem usados na consulta SQL.
    const { nome_produto, codigo_produto, descricao_produto, preco_produto } =
      produto;

    // Executa uma consulta SQL para inserir um novo produto na tabela "produtos".
    // Os pontos de interrogação (?) na consulta são substituídos pelos valores dos parâmetros.
    const [result] = await pool.query(
      "INSERT INTO produtos (nome_produto, codigo_produto, descricao_produto, preco_produto) VALUES (?, ?, ?, ?)",
      [nome_produto, codigo_produto, descricao_produto, preco_produto]
    );

    // Obtém o ID do novo produto inserido.
    const novoProdutoId = result.insertId;

    // Retorna o novo produto criado, buscando-o pelo ID.
    return obterProduto(novoProdutoId);
  } catch (error) {
    // Em caso de erro, lança o erro para ser tratado no middleware de tratamento de erros.
    throw error;
  }
}

// Função assíncrona para atualizar um produto existente.
async function atualizarProduto(id, produto) {
  try {
    // Extrai os valores do objeto "produto" para serem usados na consulta SQL.
    const { nome_produto, codigo_produto, descricao_produto, preco_produto } =
      produto;

    // Executa uma consulta SQL para atualizar um produto existente na tabela "produtos" com base no ID.
    // Os pontos de interrogação (?) na consulta são substituídos pelos valores dos parâmetros.
    await pool.query(
      "UPDATE produtos SET nome_produto = ?, codigo_produto = ?, descricao_produto = ?, preco_produto = ? WHERE id = ?",
      [nome_produto, codigo_produto, descricao_produto, preco_produto, id]
    );

    // Retorna o produto atualizado, buscando-o pelo ID.
    return obterProduto(id);
  } catch (error) {
    // Em caso de erro, lança o erro para ser tratado no middleware de tratamento de erros.
    throw error;
  }
}

// Função assíncrona para deletar um produto pelo ID.
async function deletarProduto(id) {
  try {
    // Executa uma consulta SQL para deletar um produto da tabela "produtos" com base no ID.
    // O ponto de interrogação (?) na consulta é substituído pelo valor do parâmetro "id".
    await pool.query("DELETE FROM produtos WHERE id = ?", [id]);
  } catch (error) {
    // Em caso de erro, lança o erro para ser tratado no middleware de tratamento de erros.
    throw error;
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
