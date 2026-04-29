require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const dragonBallRoutes = require('./routes/dragonBallRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/api', dragonBallRoutes);

app.listen(PORT, console.log('servidor iniciado'));