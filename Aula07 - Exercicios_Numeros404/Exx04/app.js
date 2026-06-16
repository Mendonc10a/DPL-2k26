const http = require('http');

const server = http.createServer((req, res) => {
    
    // Rota Inicial - Menu simples para guiar o usuário
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Acesse as rotas para testar: /seg, /ter, /qua, /qui, /sex');
    } 
    
    // 1xx: Informativo (102 Processing - Servidor avisa que recebeu e está processando)
    else if (req.url === '/seg') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Cardapio do dia: seg: Arroz, feijão, filé de frango grelhado e salada de alface com tomate'); 
    } 
    
    // 2xx: Sucesso (200 OK - A requisição deu certo e o servidor devolveu o esperado)
    else if (req.url === '/ter') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Cardapio do dia: ter: Lasanha de carne, arroz branco, brócolis refogado e salada de cenoura ralada');
    } 
    
    // 3xx: Redirecionamento (301 Moved Permanently - O recurso mudou de endereço e joga o usuário para outra rota)
    else if (req.url === '/qua') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); 
        res.end('Cardapio do dia: qua: Peixe assado, purê de batata, couve-flor gratinada e salada de rúcula com manga');
    } 
    
    // 4xx: Erro do Cliente (404 Not Found - O usuário tentou acessar algo que não existe ou errou a URL)
    else if (req.url === '/qui') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Cardapio do dia: qui: Salada de frutas, iogurte natural e pão de centeio');
    } 
    
    // 5xx: Erro do Servidor (500 Internal Server Error - O cliente fez tudo certo, mas o código do servidor falhou)
    else if (req.url === '/sex') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Cardapio do dia: sex: Strogonoff de frango, arroz branco, batata frita e salada de alface com tomate');
    } 
    
    // Rota padrão caso digitem qualquer outra coisa errada
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Dia nao encontrado. Acesse: /seg, /ter, /qua, /qui ou /sex');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});