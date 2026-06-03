const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const repository = require('../repositories/user.repository');
const { formatarUser } = require('../models/user.models');

const SALT_ROUNDS = 10;

async function registrar({nome, email, senha}) {
    const emailExistente = await repository.findByEmail(email);

    if (emailExistente) {
        throw new Error('Email já cadastrado');
    };

    const senha_hash = await bcrypt.hash(senha, SALT_ROUNDS);

    const row = await repository.insert({nome, email, senha_hash});
    return formatarUser(row);
};

async function login({email, senha}) {
    const user = await repository.findByEmail(email);

    if (!user) {
        throw new Error("Senha ou e-mail inválidos.");
    };

    const senhaHashExiste = await bcrypt.compare(senha, user.senha_hash)

    if (!senhaHashExiste) {
        throw new Error("Senha ou e-mail inválidos");
    };

    const payload = {id: user.id, nome: user.nome, email: user.email};

    const token = jwt.sign(payloa, process.env.JWT_SECRET, {expiresIn: '8h'});

    return {token, user: formatarUser(user)};

};

module.exports = { registrar, login };
