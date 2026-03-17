const express = require('express');
const path = require('path');
const app = express();
const PORT = 5050;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/api/soma', (req, res) => {
    const n1 = req.query.a;
    const n2 = req.query.b;

    const resultado = parseInt(n1) + parseInt(n2);

    res.json({
        resultado
    });
});

app.get('/api/subtracao', (req, res) => {
    const n1 = req.query.a;
    const n2 = req.query.b;

    const resultado = parseInt(n1) - parseInt(n2);

    res.json({
        resultado
    });
});

app.get('/api/multiplicacao', (req, res) => {
    const n1 = req.query.a;
    const n2 = req.query.b;

    const resultado = parseInt(n1) * parseInt(n2);

    res.json({
        resultado
    });
});

app.get('/api/divisao', (req, res) => {
    const n1 = req.query.a;
    const n2 = req.query.b;

    const resultado = parseInt(n1) / parseInt(n2);

    if (n2 === 0) {
        res.json({
            resultado: 'Impossível dividir por zero.'
        });
    } else {
        res.json({
            resultado
        });
    };
    
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`)
}); 