# Nunes Sports API

Este projeto consiste em uma API RESTful para o gerenciamento de produtos da Nunes Sports. Ele permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) em um banco de dados MySQL, facilitando a manipulação e o acesso aos dados dos produtos.

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript do lado do servidor.
* **Express.js**: Framework web para Node.js, utilizado para criar a API RESTful.
* **MySQL**: Sistema de gerenciamento de banco de dados relacional.
* **Joi**: Biblioteca para validação de dados.
* **CORS**: Middleware para habilitar o compartilhamento de recursos de origem cruzada.
* **ESLint**: Linter para garantir a qualidade do código JavaScript.
* **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
* **Javascript**: Linguagem de programação usada no projeto
* **HTML**: Linguagem de marcação usada no projeto
* **CSS**: Linguagem de estilo usada no projeto
* **Json**: Usado para transferência de dados.

## Funcionalidades

A API oferece os seguintes endpoints para o gerenciamento de produtos:

* `GET /produtos`: Lista todos os produtos.
* `GET /produtos/:id`: Obtém um produto específico pelo ID.
* `POST /produtos`: Cria um novo produto.
* `PUT /produtos/:id`: Atualiza um produto existente pelo ID.
* `DELETE /produtos/:id`: Deleta um produto pelo ID.

## Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/BrunoDornelas/Desafio-Everymind
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd nunes-sports-api
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```
4.  Crie uma pasta dentro de src com o nome database e um arquivo dentro dessa pasta de nome database.js com o código abaixo:

```javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost', // Substitua pelo endereço do seu banco de dados
    user: 'seu_usuario', // Substitua pelo seu nome de usuário
    password: 'sua_senha', // Substitua pela sua senha
    database: 'nunes_sports',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool 
```

5.  Inicie o servidor:

    ```bash
    npm run dev
    ```

    * O servidor estará rodando em `http://localhost:3000`.

6.  Abra o arquivo index.html (usando a extenção Live Server do VScode, por exemplo)
   
## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença ISC.
