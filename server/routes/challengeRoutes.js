// routes/challengeRoutes.js
const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');

router.post('/create', async (req, res) => {
    try {
        const challenge = new Challenge(req.body);
        await challenge.save();
        res.status(201).send({ message: 'Desafio criado com sucesso!', challenge });
    } catch (err) {
        res.status(400).send({ error: 'Erro ao criar desafio', details: err });
    }
});

module.exports = router;
