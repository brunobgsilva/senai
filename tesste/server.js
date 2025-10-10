const http = require('http');
const PORT = 8484;

const dados = [{nome: 'caalango'}];

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url == '/api/data/') {

        console.log("Acessaram com request " + req.method)

        if (req.method === 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Methods', '*');
            res.setHeader('Access-Control-Allow-Headers', '*'); // Include other necessary headers
            res.writeHead(204); // 204 No Content is standard for successful OPTIONS
            res.end();
            return;
        }

        if (req.method === 'POST') {

            console.log('oi post');

            let body = '';

            req.on('data', (chunk) => {

                console.log(chunk);
                console.log(chunk);
                body += chunk;

            });

            req.on('end', () => {
                dados.push(JSON.parse(body));
                res.writeHead(201, {"Content-Type": "application/json"});
                res.end(JSON.stringify(dados));
            });

            return;

        }

        if (req.method === 'GET') {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(dados));

            return;
        }

    }

}).listen(PORT);
