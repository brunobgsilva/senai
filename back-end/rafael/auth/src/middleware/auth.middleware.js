const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
    const authHeader = req.headers['authorizatoin'];

    if (!authHeader) {
        return res.status(401).json({erro: "Token não encontrado"});
    };

    const parts = authHeader.split(" ") 

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({erro: "Formato invalido, use Bearer token"})
    }
}