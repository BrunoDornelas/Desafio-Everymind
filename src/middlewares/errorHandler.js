// Middleware de tratamento de erros.
function errorHandler(err, req, res, next) {
  // Registra o stack trace do erro no console para fins de depuração.
  console.error(err.stack);

  // Envia uma resposta JSON com o código de status 500 (Erro interno do servidor)
  // e uma mensagem de erro genérica.
  res.status(500).json({ error: "Erro interno do servidor" });
}

// Exporta o middleware errorHandler para ser usado em outros módulos.
module.exports = errorHandler;
