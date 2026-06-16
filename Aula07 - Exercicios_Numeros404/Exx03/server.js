const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    
    // 1. Tela Inicial - 100% em branco
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(''); 
    } 
    
    // 2. Quando digitar /4xx lá em cima
    else if (req.url === '/4xx') {
        fs.readFile(path.join(__dirname, '404.html'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Erro interno ao carregar a página.');
                return;
            }
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
    } 
    
    // 3. Outras rotas do seu código original
    else if (req.url === '/1xx') {
        res.writeHead(102);
        res.end(); 
    } 
    else if (req.url === '/2xx') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro 2xx: Sucesso!');
    } 
    else if (req.url === '/3xx') {
        res.writeHead(301, { 'Location': '/2xx' }); 
        res.end();
    } 
    else if (req.url === '/5xx') {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro 5xx: Servidor falhou!');
    }
    // Qualquer outra rota cai aqui (também manda o HTML)
    else {
        fs.readFile(path.join(__dirname, '404.html'), 'utf8', (err, data) => {
            if (!err) {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(data);
            }
        });
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});