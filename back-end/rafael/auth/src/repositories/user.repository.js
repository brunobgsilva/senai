const pool = require('../db/conexao');

async function findByEmail(email) {
    const {rows} = await pool.query(
        'SELECT * FROM user WHERE email = $1', [email]
    );

    return rows[0] || null;
};

async function insert({nome, email, senha_hash}) {
    const {rows} = await pool.query(
        `INSERT INTO user(nome, email, senha_hash)
        VALUES($1, $2, $3)
        RETURNING *`, [nome, email, senha_hash]
    );

    return rows[0];
};

module.exports = {findByEmail, insert}