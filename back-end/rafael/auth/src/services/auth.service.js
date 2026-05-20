const bcrypt = require('bcrypt');
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

module.exports = { registrar };
