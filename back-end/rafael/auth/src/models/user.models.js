function formatarUser(row) {
    return {
        id:         row.id,
        nome:       row.nome,
        email:      row.email,
        criado_em:  row.criado_em
    };
};

module.exports = {formatarUser};