import 'dotenv/config'
import { Pool } from 'pg';

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    };

    const pool = new Pool({
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        port: process.env.DB_PORT
    });

    const client = await pool.connect();
    if (client) {
        console.log("Criou o pool de conexao")
    };
    pool.on('error', (err, client) => {
        console.error('Erro no client', err);
        process.exit(-1);
    });

    const res = await client.query("SELECT now()");
    console.log(`Tempo do banco: ${JSON.stringify(res.rows[0])}`);
    client.release();

    global.connection = pool;
    return pool.connect()
};

export async function selectClientes() {
    const client = await connect();
    const res = await client.query("SELECT * FROM cliente");
    return res.rows;
}

export async function selectClienteByID(id) {
    const client = await connect();
    const res = await client.query(
        `SELECT * FROM cliente WHERE id_cli = $1;`,
        [id]
    );
    return res.rows;
}

connect();