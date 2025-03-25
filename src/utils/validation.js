// Importa o módulo Joi, que é usado para validação de dados.
const Joi = require("joi");

// Função para validar os dados de um produto.
function validateProduto(produto) {
  // Define o esquema de validação usando o Joi.
  const schema = Joi.object({
    // O campo "nome_produto" deve ser uma string e é obrigatório.
    nome_produto: Joi.string().required(),

    // O campo "codigo_produto" deve ser uma string e é obrigatório.
    codigo_produto: Joi.string().required(),

    // O campo "descricao_produto" deve ser uma string e pode ser vazio (allow("")).
    descricao_produto: Joi.string().allow(""),

    // O campo "preco_produto" deve ser um número e é obrigatório.
    preco_produto: Joi.number().required(),
  });

  // Valida o objeto "produto" com o esquema definido.
  // A função schema.validate() retorna um objeto com duas propriedades: "error" e "value".
  // "error" contém os erros de validação, se houver.
  // "value" contém os dados validados, se a validação for bem-sucedida.
  return schema.validate(produto);
}

// Exporta a função validateProduto para ser usada em outros módulos.
module.exports = {
  validateProduto,
};
