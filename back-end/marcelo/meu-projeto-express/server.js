const express = require ('express');
const path = require('path');
const app = express();
const PORT = 3030;

//permite receber json no backend
app.use(express.json());

//serve os arquivos estaticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/mensagem', (req, res) => {
    res.json({
        titulo: 'ola'
    });
});

app.listen(PORT, () => {
    console.log('servidor rodando');
});