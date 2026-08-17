import express from 'express'
import * as calcController from './controllers/calculadoraController.js';
const app = express();

app.use(express.json());

// Rota de Soma
app.post('/api/calculo/soma', (req, res) => {
    calcController.soma(req, res);
});

// Rota de Subtração
app.post('/api/calculo/subtrai', (req, res) => {
    calcController.subtrai(req, res);
});

// Rota de Multiplicação
app.post('/api/calculo/multiplica', (req, res) => {
    calcController.multiplica(req, res);
});

// Rota de Divisão
app.post('/api/calculo/divide', (req, res) => {
    calcController.divide(req, res);
});

app.post('/api/calculo/eleva', (req, res) => {
    calcController.eleva(req, res);
});

app.listen(3000, () => {
    console.log('API REST rodando em http://localhost:3000');
});