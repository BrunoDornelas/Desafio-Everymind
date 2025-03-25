// Seleciona a tabela de produtos e o corpo da tabela (tbody).
const tabelaProdutos = document
  .getElementById("tabela-produtos")
  .getElementsByTagName("tbody")[0];

// Seleciona o formulário de produtos.
const formProduto = document.getElementById("form-produto");

// Seleciona o botão de cancelar do formulário.
const cancelarButton = document.getElementById("cancelar-button");

// Inicializa um array para armazenar os produtos.
let produtos = [];

// Inicializa uma variável para armazenar o produto que está sendo editado.
let produtoEditando = null;

// Função para renderizar os produtos na tabela.
function renderizarProdutos() {
  // Limpa o conteúdo da tabela.
  tabelaProdutos.innerHTML = "";

  // Itera sobre o array de produtos e cria uma linha na tabela para cada produto.
  produtos.forEach((produto) => {
    const row = tabelaProdutos.insertRow();
    row.innerHTML = `
                <td>${produto.nome_produto}</td>
                <td>${produto.codigo_produto}</td>
                <td>${produto.descricao_produto}</td>
                <td>${produto.preco_produto}</td>
                <td>
                    <button id="editar-button" onclick="editarProduto(${produto.id})">Editar</button>
                    <button id="deletar-button" onclick="deletarProduto(${produto.id})">Deletar</button>
                </td>
            `;
  });
}

// Função para carregar os produtos da API.
function carregarProdutos() {
  // Faz uma requisição GET para a API de produtos.
  fetch("http://localhost:3000/produtos")
    .then((response) => response.json()) // Converte a resposta para JSON.
    .then((data) => {
      // Atualiza o array de produtos com os dados da API.
      produtos = data;

      // Renderiza os produtos na tabela.
      renderizarProdutos();
    });
}

// Função para salvar um produto (criar ou atualizar).
function salvarProduto(event) {
  // Impede o envio padrão do formulário.
  event.preventDefault();

  // Cria um objeto produto com os valores do formulário.
  const produto = {
    nome_produto: document.getElementById("nome_produto").value,
    codigo_produto: document.getElementById("codigo_produto").value,
    descricao_produto: document.getElementById("descricao_produto").value,
    preco_produto: parseFloat(document.getElementById("preco_produto").value),
  };

  // Verifica se um produto está sendo editado.
  if (produtoEditando) {
    // Faz uma requisição PUT para atualizar o produto na API.
    fetch(`http://localhost:3000/produtos/${produtoEditando.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((response) => response.json()) // Converte a resposta para JSON.
      .then(() => {
        // Recarrega os produtos da API.
        carregarProdutos();

        // Reseta o formulário.
        resetarFormulario();
      });
  } else {
    // Faz uma requisição POST para criar um novo produto na API.
    fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((response) => response.json()) // Converte a resposta para JSON.
      .then(() => {
        // Recarrega os produtos da API.
        carregarProdutos();

        // Reseta o formulário.
        resetarFormulario();
      });
  }
}

// Função para editar um produto.
function editarProduto(id) {
  // Encontra o produto no array de produtos.
  produtoEditando = produtos.find((produto) => produto.id === id);

  // Preenche o formulário com os dados do produto.
  document.getElementById("id").value = produtoEditando.id;
  document.getElementById("nome_produto").value = produtoEditando.nome_produto;
  document.getElementById("codigo_produto").value =
    produtoEditando.codigo_produto;
  document.getElementById("descricao_produto").value =
    produtoEditando.descricao_produto;
  document.getElementById("preco_produto").value =
    produtoEditando.preco_produto;
}

// Função para deletar um produto.
function deletarProduto(id) {
  // Faz uma requisição DELETE para deletar o produto da API.
  fetch(`http://localhost:3000/produtos/${id}`, {
    method: "DELETE",
  }).then(() => {
    // Recarrega os produtos da API.
    carregarProdutos();
  });
}

// Função para resetar o formulário.
function resetarFormulario() {
  // Limpa o produto que está sendo editado.
  produtoEditando = null;

  // Reseta o formulário para os valores padrão.
  formProduto.reset();
}

// Adiciona um listener de evento para o envio do formulário.
formProduto.addEventListener("submit", salvarProduto);

// Adiciona um listener de evento para o clique do botão de cancelar.
cancelarButton.addEventListener("click", resetarFormulario);

// Carrega os produtos da API ao carregar a página.
carregarProdutos();
