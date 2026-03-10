const express = require('express');
const path = require('path');
const app = express();
const PORT = 3040;

const numeros = [];

app.use(express.json());

app.get('/api/inicio', (req, res) => {
    res.json({
        mensagem: 'ola bem vindo ao inicio'
    });

    numeros.push(2);
    
});

app.get('/api/final', (req, res) => {
    res.json({
        mensagem: 'meudeus ta no final',
        numeros: numeros
    });
});

app.listen(PORT, () => {
    console.log('server iniciado: https://localhost:3030');
});