function errorHandler(err, req, res, next) {
    console.error('Erro:', err.message);

    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({
            erro: 'JSON invalido',
            detalhe: 'O corpo da requisição não é um JSON válido.'
        });
    };

    if (err.code === 'ECONNREFUSED') {
        return res.status(500).json({   
            erro: 'Banco de dados indisponível',
            detalhe: 'Não foi possível conectar ao banco de dados.'
        });
    };

    //Erro generico
    const status = err.status || 500;
    const mensagem = err.message || 'Erro interno do servido. Tente mais tarde.';

    res.status(status).json({erro: mensagem});

};

module.exports = { errorHandler };