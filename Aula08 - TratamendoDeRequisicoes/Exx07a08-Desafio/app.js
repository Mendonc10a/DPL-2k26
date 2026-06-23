const http = require('http');
const fs = require('fs');
const path = require('path');

let numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 5;
let jogoAtivo = true;

console.log(`Numero secreto: ${numeroSecreto}`);

const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, 'http://localhost:3000');
    const endpoint = urlParams.pathname;

    if (endpoint === '/' || endpoint === '/index.html') {
        if (!jogoAtivo) {
            numeroSecreto = Math.floor(Math.random() * 101);
            tentativas = 5;
            jogoAtivo = true;
            console.log(`Novo numero secreto: ${numeroSecreto}`);
        }
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
        });
    } 
    else if (endpoint === '/guess') {
        if (!jogoAtivo) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>O jogo acabou. <a href="/">Jogar de novo</a></h1>');
            return;
        }

        const palpite = parseInt(urlParams.searchParams.get('numero'), 10);
        tentativas--;

        if (palpite === numeroSecreto) {
            jogoAtivo = false;
            fs.readFile(path.join(__dirname, 'win.html'), (err, content) => {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
            });
        } else if (tentativas <= 0) {
            jogoAtivo = false;
            fs.readFile(path.join(__dirname, 'lose.html'), (err, content) => {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
            });
        } else {
            const dica = palpite > numeroSecreto ? 'MENOR' : 'MAIOR';
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`<h2>Errou!</h2><p>O numero eh ${dica} do que ${palpite}.</p><p>Restam ${tentativas} tentativas.</p><a href="/">Palpitar de novo</a>`);
        }
    }
});

server.listen(3000, () => console.log('http://localhost:3000'));