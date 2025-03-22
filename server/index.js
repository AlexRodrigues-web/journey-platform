require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Log para verificar se a variável está sendo lida
console.log('MONGODB_URI:', MONGODB_URI);

app.use(express.json());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB com sucesso!'))
    .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
