const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erro ao ler o arquivo');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

const port = 8000; // nao podemos utilizar qualquer porta pois algumas portas são reservadas para outros serviços, como a porta 80 para HTTP e a porta 443 para HTTPS
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});