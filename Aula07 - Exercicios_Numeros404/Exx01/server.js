const http = require('http');

/* RESPOSTA DA QUESTÃO:
  O endpoint 3xx (/3xx) "não carrega" uma página própria porque os códigos 3xx servem para REDIRECIONAMENTO. 
  Quando o navegador acessa essa rota, o servidor envia o status 301 junto com o cabeçalho 'Location': '/2xx'.
  O navegador lê isso e, de forma automática e instantânea, muda de página para o novo endereço (/2xx).
  Já o endpoint 1xx (/1xx) fica carregando infinito porque a família 1xx é INFORMATIVA (avisa que o processo iniciou).
  O navegador recebe o status 102 e fica esperando o servidor mandar uma resposta final (como um 200 ou 500),
  mas como o código apenas encerra a conexão, o navegador trava aguardando o restante do processo.
*/

const server = http.createServer((req, res) => {
    
    // Rota Inicial - Menu simples para guiar o usuário
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Acesse as rotas para testar: /1xx, /2xx, /3xx, /4xx, /5xx');
    } 
    
    // 1xx: Informativo (102 Processing - Servidor avisa que recebeu e está processando)
    else if (req.url === '/1xx') {
        res.writeHead(102);
        res.end(); 
    } 
    
    // 2xx: Sucesso (200 OK - A requisição deu certo e o servidor devolveu o esperado)
    else if (req.url === '/2xx') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro 2xx: Sucesso! Tudo funcionou perfeitamente.');
    } 
    
    // 3xx: Redirecionamento (301 Moved Permanently - O recurso mudou de endereço e joga o usuário para outra rota)
    else if (req.url === '/3xx') {
        res.writeHead(301, { 'Location': '/2xx' }); 
        res.end();
    } 
    
    // 4xx: Erro do Cliente (404 Not Found - O usuário tentou acessar algo que não existe ou errou a URL)
    else if (req.url === '/4xx') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro 4xx: O cliente errou! Link ou pagina nao encontrada.');
    } 
    
    // 5xx: Erro do Servidor (500 Internal Server Error - O cliente fez tudo certo, mas o código do servidor falhou)
    else if (req.url === '/5xx') {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro 5xx: O servidor falhou! Aconteceu um erro interno no sistema.');
    } 
    
    // Rota padrão caso digitem qualquer outra coisa errada
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota nao encontrada');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});