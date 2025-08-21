const http = require('http');
const PORT = 8484;

const data = [];

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    if (req.url == '/oi') {
        res.writeHead(200, { "content-type": "text/plain" })
        console.log('oi');
        res.write(JSON.stringify({nome: 'Sabao', idade: 12}))
        res.end('oie');
    }

    if (req.url == '/api/') {
        res.writeHead(201, { "content-type": "application/json" })
        console.log('postado');
        req.
        res.end('oie');
    }

}).listen(PORT);
