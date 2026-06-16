const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let fileName = '';
    let statusCode = 200;

    // Roteamento: Define qual arquivo abrir baseado na URL
    if (req.url === '/') {
        fileName = 'index.html';
    } else if (req.url === '/post1') {
        fileName = 'post1.html';
    } else if (req.url === '/post2') {
        fileName = 'post2.html';
    } else {
        fileName = '404.html';
        statusCode = 404; // Define status de página não encontrada
    }

    // Cria o caminho absoluto para o arquivo HTML correspondente
    const filePath = path.join(__dirname, fileName);

    // Leitura do arquivo HTML correspondente
    fs.readFile(filePath, 'utf-8', (err, conteudoHtml) => {
        // Trata erro de leitura com o código 500 solicitado
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Erro Interno do Servidor (500) ao tentar ler o arquivo HTML.');
            return;
        }

        // Envia o HTML correto com o status correto (200 ou 404)
        res.writeHead(statusCode, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(conteudoHtml);
    });
});

// Mantida a porta 3001 para evitar problemas de porta já em uso
const port = 3001;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});