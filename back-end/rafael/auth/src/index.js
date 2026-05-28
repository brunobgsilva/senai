require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth.routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado. URL: http://localhost:${PORT}`);
});