CREATE TABLE IF NOT EXISTS pratos (
    id           SERIAL PRIMARY KEY,
    nome         VARCHAR(100) NOT NULL,
    descricao    VARCHAR(200),
    preco        NUMERIC(10, 2) NOT NULL,
    categoria    VARCHAR(50)
)

INSERT INTO pratos(nome, descricao, preco, categoria) VALUES
('Frango Grelhado', 'Frango Grelhado com Legumes Salteados', 35.90, 'Prato Principal'),
('Suco de Laranja', 'Suco de Laranja Integral 500ml', 12.50, 'Bebida'),
('Tiramisu', 'Sobremesa Italiana Classica', 22.90, 'Sobremesa');