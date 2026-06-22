/*  Exercício 1: http://localhost:3000/exercicio1?nome=SeuNome

Exercício 2: http://localhost:3000/exercicio2?nome=Joao&idade=19

Exercício 3: http://localhost:3000/exercicio3?email=admin@etefmc.com.br */


const http = require('http');

const server = http.createServer((req, res) => {
    // Definindo a URL base para extrair os parâmetros corretamente
    const urlParams = new URL(req.url, 'http://localhost:3000');
    const endpoint = urlParams.pathname;

    // Configurando o cabeçalho padrão para texto puro com codificação UTF-8
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    // 1) Exercício 1: Retorna apenas o nome enviado
    if (endpoint === '/exercicio1') {
        const nome = urlParams.searchParams.get('nome') || 'visitante';
        res.end(`Nome recebido: ${nome}`);
    } 
    
    // 2) Exercício 2: Verifica a maioridade
    else if (endpoint === '/exercicio2') {
        const nome = urlParams.searchParams.get('nome') || 'Visitante';
        const idade = parseInt(urlParams.searchParams.get('idade'), 10);

        if (!idade) {
            res.end('Por favor, informe uma idade válida.');
        } else {
            const statusIdade = idade >= 18 ? 'maior' : 'menor';
            res.end(`Olá ${nome}, você é ${statusIdade} de idade.`);
        }
    } 
    
    // 3) Exercício 3: Validação de e-mail admin
    else if (endpoint === '/exercicio3') {
        const email = urlParams.searchParams.get('email');

        if (email === 'admin@etefmc.com.br') {
            res.end('Acesso concedido! Sucesso no login.');
        } else {
            res.end('Acesso negado. E-mail inválido.');
        }
    } 
    
    // Rota padrão caso não encontre o endpoint
    else {
        res.end('Endpoint não encontrado.');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});