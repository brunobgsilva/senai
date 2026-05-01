const express = require('express');
const pratosRoutes = require('./routes/pratos.routes');
const { logger } = require('./middleware/logger.middleware');
const { errorHandler, notFound } = require('./middleware/error.middleware');

const app = express();
app.use(express.json());
app.use(logger) // -> middleware logger

app.use('/pratos', pratosRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});