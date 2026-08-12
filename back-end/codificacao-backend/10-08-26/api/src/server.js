import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import * as db from "./db.js";

const port = process.env.API_PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json(res.status)
});

app.get('/clientes', async (req, res) => {
    const clientes = await db.selectClientes();
    return res.status(200).json(clientes);
});

app.get('/clientes/:id', async (req, res) => {
    const id = req.params.id
    const cliente = await db.selectClienteByID(id);
    return res.status(200).json(cliente);
})

app.listen(port, () => {
    console.log(`API Rodando em: http://localhost:${port}`);
});