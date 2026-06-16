const http = require('http');

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Use as rotas: /login, /dashboard ou /admin');
    } 
    
    // 200 OK — Sucesso
    else if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Login realizado com sucesso!');
    } 
    
    // 401 Unauthorized — Falta de Autenticação
    else if (req.url === '/dashboard') {
        res.writeHead(401, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Acesso negado. Faça login primeiro.');
    } 
    
    // 403 Forbidden — Falta de Autorização
    else if (req.url === '/admin') {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Você não tem permissão para acessar esta área.');
    } 
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página não encontrada.');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});


/** Resposta Da Pergunta: */

/** O 401 significa que o servidor não sabe quem você é,
exigindo que você faça login para se identificar.
O 403 significa que o servidor já te reconheceu, 
mas você não tem o nível de permissão necessário 
para acessar aquela área. */