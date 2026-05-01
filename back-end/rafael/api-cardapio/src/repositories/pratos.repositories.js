const pool = require('../db')

function listarPratos() {
    const result = pool.query('SELECT * FROM pratos ORDER BY id')
    return result.rows;
}

function buscarPratoPorId(id) {
    const result = pool.query('SELECT * FROM pratos WHERE id = $1', [id])
    return result.rows[0] || null;
}

function novoPratoAdicionado(novoPrato) {
    const {nome, descricao, preco, categoria} = novoPrato;
    const result = pool.query(`
        INSERT INTO pratos(nome, descricao, preco, categoria) VALUES ($1, $2, $3, $4)
        RETURNING *`, [nome, descricao, preco, categoria]);
    return result.rows[0];
};


function atualizarPrato(id, pratoAtualizado) {
    const {nome, descricao, preco, categoria} = pratoAtualizado;
    const result = pool.query(`
        UPDATE pratos
            SET nome = COALESCE($1, nome)
                descricao = COALESCE($2, descricao)
                preco = COALESCE($3, preco)
                categoria = COALESCE($4, categoria)
            WHERE ID = $5
            RETURNING *`, 
        [nome, descricao, preco, categoria, id]
    );
    
    return result.rows[0] || null;
};


function deletarPrato(id) {
    const result = pool.query(`
        DELETE FROM pratos WHERE id = $1 RETURNING id`, [id]);
    return result.rowCount > 0;
};


module.exports = {
    listarPratos, 
    buscarPratoPorId, 
    novoPratoAdicionado, 
    atualizarPrato, 
    deletarPrato
}