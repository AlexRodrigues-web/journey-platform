// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'Usuário criado com sucesso!', user });
    } catch (err) {
        res.status(400).send({ error: 'Erro ao criar usuário', details: err });
    }
});

module.exports = router;
