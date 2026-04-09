const express = require('express');
const pratosRoutes = require('./routes/pratos.routes');

const app = express();
app.use(express.json());

app.use('/pratos', pratosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});