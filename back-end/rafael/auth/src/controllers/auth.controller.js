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

async function login(req, res) {
    const {email, senha} = req.body;

    if (!email || !senha) {
        return res.status(400).json({erro: 'Campos obrigatórios: email, senha.'});
    };

    try {
        const result = await service.login({email, senha})
        return res.json(result)
    } catch(err) {
        if (err.message === 'Credenciais invalidas') {
            return res.status(401).json({erro: err.message})
        } else {
            throw err
        }
    };

};

module.exports = { registrar };