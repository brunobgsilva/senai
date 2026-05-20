const express = require('express');
const authRoutes = require('./routes/auth.routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('auth/', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado. URL: http://localhost:${PORT}`);
});