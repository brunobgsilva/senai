function errorHandler(err, req, res, next) {
    console.error('Erro:', err.message);

    if(err.type == 'entity.parse.failed') {
        return res.status(400).json({
            erro: 'JSON invalido',
            detalhe: 'O corpo da requisicao nao e um JSON valido'
        })  
    }

    if(err.code === 'ECONNREFUSED'){
        return res.status(500).json({
            erro: " Banco de dados indisponiveis",
            detalhe: 'Nao foi possivel conectar ao PostgresSQL'
        })
    }

    
    
    //Erro generico
    const status = err.status || 500;
    const mensagem = err.message || 'Erro interno do servidor. Tente mais tarde'
     
    res.status(status).json({erro: mensagem})
}

function notFound(req, res) {
    res.status(404).json({
        erro: "Rota nao encontrada",
        rota: req.originalUrl,
        metodo: req.method
    });
}

module.exports = {errorHandler, notFound}