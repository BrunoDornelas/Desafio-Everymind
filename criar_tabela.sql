-- Cria o banco de dados nunes_sports se ele não existir
CREATE DATABASE IF NOT EXISTS nunes_sports;

-- Usa o banco de dados nunes_sports
USE nunes_sports;

-- Cria a tabela produtos se ela não existir
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    codigo_produto VARCHAR(20) UNIQUE NOT NULL,
    descricao_produto VARCHAR(200),
    preco_produto DECIMAL(10, 2) NOT NULL,
    -- Adiciona um índice para a coluna codigo_produto
    INDEX (codigo_produto)
);

-- Insere dados de exemplo se a tabela estiver vazia
INSERT INTO produtos (nome_produto, codigo_produto, descricao_produto, preco_produto)
SELECT 'Camiseta Esportiva', 'CAM001', 'Camiseta de algodão para prática de esportes', 29.99
WHERE NOT EXISTS (SELECT 1 FROM produtos WHERE codigo_produto = 'CAM001');

INSERT INTO produtos (nome_produto, codigo_produto, descricao_produto, preco_produto)
SELECT 'Bola de Futebol', 'BOL002', 'Bola oficial de futebol', 49.99
WHERE NOT EXISTS (SELECT 1 FROM produtos WHERE codigo_produto = 'BOL002');

INSERT INTO produtos (nome_produto, codigo_produto, descricao_produto, preco_produto)
SELECT 'Tênis de Corrida', 'TEN003', 'Tênis leve e confortável para corrida', 99.99
WHERE NOT EXISTS (SELECT 1 FROM produtos WHERE codigo_produto = 'TEN003');

-- Busca todos os produtos
SELECT id, nome_produto, codigo_produto, descricao_produto, preco_produto FROM produtos;

-- Busca um produto pelo ID
SELECT id, nome_produto, codigo_produto, descricao_produto, preco_produto FROM produtos WHERE id = ?;

-- Insere um novo produto
INSERT INTO produtos (nome_produto, codigo_produto, descricao_produto, preco_produto) VALUES (?, ?, ?, ?);

-- Atualiza um produto existente
UPDATE produtos SET nome_produto = ?, codigo_produto = ?, descricao_produto = ?, preco_produto = ? WHERE id = ?;

-- Deleta um produto
DELETE FROM produtos WHERE id = ?;