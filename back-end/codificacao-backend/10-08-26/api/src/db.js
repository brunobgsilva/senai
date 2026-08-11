import 'dotenv/config'
import pg from 'pg';
import { Pool } from pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    user: process.env.DB_USER
});

pool.on('error', (err, client) => {
    console.error('Erro no client', err);
    process.exit(-1);
});
