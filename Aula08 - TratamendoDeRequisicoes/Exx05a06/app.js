const http = require('http');
const fs = require('fs');
const path = require('path');

const numeroAleatorio = Math.floor(Math.random() * 101);
console.log(`Número secreto: ${numeroAleatorio}`);

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, 'http://localhost:3000');
    const endpoint = urlParams.pathname;

    if (endpoint === '/' || endpoint === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
        });
    } 
    else if (endpoint === '/guess') {
        const palpite = parseInt(urlParams.searchParams.get('numero'), 10); 
        
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });    

        if (palpite === numeroAleatorio) {
            res.end(`Você acertou! O número era ${numeroAleatorio}.`);
        } else if (palpite > numeroAleatorio) {
            res.end(`O número recebido (${palpite}) é MAIOR do que o número aleatório gerado.`);
        } else {
            res.end(`O número recebido (${palpite}) é MENOR do que o número aleatório gerado.`);
        }
    }
});

server.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));