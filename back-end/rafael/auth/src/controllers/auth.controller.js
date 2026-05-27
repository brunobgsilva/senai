const service = require('../services/auth.service');

async function registrar(req, res) {
    const {nome, email, senha} = req.body;
    
    if (!nome || !email || !senha) {
        return res.status(400).json({erro: 'Campos obrigatórios: nome, email, senha.'});
    };

    try {
        const user = await service.registrar({nome, email, senha});
        return res.status(201).json({mensagem: 'Usuário criado com sucesso', user})
    } catch(err) {
        if (err.mensagem === 'Email já cadastrado') {
            return res.status(409).json({erro: err.message});
        };
        throw err;
    };

};

module.exports = { registrar };