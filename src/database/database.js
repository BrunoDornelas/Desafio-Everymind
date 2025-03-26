// Importa o módulo mysql2/promise, que é usado para conectar ao banco de dados MySQL usando promises.
const mysql = require("mysql2/promise");

// Cria um pool de conexões com o banco de dados MySQL.
const pool = mysql.createPool({
  // Define o host do banco de dados.
  host: "localhost",

  // Define o nome de usuário para conectar ao banco de dados.
  user: "root",

  // Define a senha para conectar ao banco de dados.
  password: "#Dornelas22",

  // Define o nome do banco de dados a ser usado.
  database: "nunes_sports",

  // Define se o pool deve esperar por conexões disponíveis se todas as conexões estiverem em uso.
  waitForConnections: true,

  // Define o número máximo de conexões que o pool pode manter.
  connectionLimit: 10,

  // Define o número máximo de requisições que podem ser enfileiradas se todas as conexões estiverem em uso.
  // 0 significa que não há limite.
  queueLimit: 0,
});

// Exporta o pool de conexões para ser usado em outros módulos.
module.exports = pool;
