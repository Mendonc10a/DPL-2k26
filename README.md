# 💻 Desenvolvimento de Aplicativos — ETE FMC
> Notas de Aula, Conceitos Teóricos e Práticas de Desenvolvimento Web.

Este repositório reúne todo o histórico de aprendizado, conceitos absorvidos e laboratórios práticos desenvolvidos ao longo da disciplina de Desenvolvimento Web, ministrada pelo **Prof. Msc. Daniel Mosca**[cite: 1].

---

## 🗺️ Conteúdo das Aulas (O que foi aprendido)

### 🎨 Módulo 1: Front-end — Interfaces e Elementos Gráficos

#### Aula 01: Fundamentos da Web & Arquitetura Básica
* **O que foi abordado:** 
  * Compreensão do que é um Web App (softwares projetados para rodar diretamente no navegador) e como funciona o modelo **Cliente-Servidor**[cite: 2, 3].
  * Divisão clara dos papéis no desenvolvimento: **Front-end** (interface visível), **Back-end** (processamento de dados e regras de negócio) e **Full-Stack** (acumulação de ambas as funções)[cite: 2].
  * Debate sobre as vantagens do ecossistema web (portabilidade e atualizações rápidas) e suas desvantagens (dependência de internet e maior exposição a vulnerabilidades)[cite: 4, 5].

#### Aula 02: Estruturação Semântica com HTML5
* **O que foi abordado:**
  * Estudo do HTML como uma linguagem de marcação baseada em tags (e não uma linguagem de programação), utilizada exclusivamente para construir o esqueleto lógico e visual das páginas.
  * Uso prático das ferramentas de desenvolvedor dos navegadores (`F12 / Inspecionar`) para ler a árvore de elementos de sites reais.
  * **Desenvolvimento Prático:** Criação de um projeto estruturado do zero utilizando a estrutura padrão (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`) e tags essenciais como cabeçalhos (`<h1>` a `<h6>`), parágrafos (`<p>`), divisões (`<div>`), listas (`<ul>`/`<li>`), quebras de linha (`<br>`), inserção de imagens (`<img>`) e hiperlinks (`<a>`).

#### Aula 03: Renderização Gráfica com HTML5 Canvas (Parte 1)
* **O que foi abordado:**
  * Introdução ao elemento `<canvas>` do HTML5, uma ferramenta fundamental para desenhar gráficos, criar widgets e desenvolver jogos nativos no navegador.
  * Aprendizado sobre manipulação do DOM no JavaScript utilizando `document.querySelector('canvas')`.
  * Resolução de problemas com dimensionamento responsivo através das propriedades `window.innerWidth` e `window.innerHeight`.
  * **Desenvolvimento Prático:** Criação do objeto de contexto bidimensional (`getContext('2d')`) atuando como um "pincel" digital. Manipulação de funções nativas para desenhar retângulos (`fillRect`), linhas (`beginPath`, `moveTo`, `lineTo`, `stroke`) e arcos/círculos complexos (`arc`) com cores e opacidades personalizadas.

#### Aula 04: Animações Interativas e Loops no Canvas (Parte 2)
* **O que foi abordado:**
  * Conceito de animação digital baseado na criação de um loop infinito de renderização utilizando o método nativo `requestAnimationFrame()`.
  * Lógica de movimento e velocidade baseada na alteração contínua da posição geométrica (`x`, `y`) a cada quadro renderizado.
  * Técnicas de tratamento de buffers para evitar sobreposição e acúmulo de imagens na tela utilizando `clearRect()`.
  * Captura de eventos assíncronos do usuário através de *Event Listeners* mapeando ações do teclado (`keydown`, `keyup`) e deslocamentos do mouse (`mousemove`).
  * **Desenvolvimento Prático:** Implementação de lógica de colisão simples (inversão vetorial de velocidade ao tocar nas bordas da tela) e controle suave de elementos gráficos perseguindo o cursor do mouse.

---

### ⚙️ Módulo 2: Back-end — Lógica e Servidores com Node.js

#### Aula 05: Ambientes Back-end e Primeiro Servidor com Node.js
* **O que foi abordado:**
  * Compreensão profunda do papel do Back-end no gerenciamento de banco de dados, segurança do ecossistema e centralização das regras que o usuário não pode visualizar.
  * Introdução ao **Node.js** como um ambiente de execução para rodar JavaScript diretamente no lado do servidor.
  * Entendimento do ecossistema de dependências através do gerenciador de pacotes **npm**.
  * **Desenvolvimento Prático:** Utilização do módulo nativo `http` para codificar um servidor básico (`createServer`), definindo portas de comunicação (ex: porta `3000`) e configurando cabeçalhos de resposta para exibir mensagens em texto simples na rota inicial (`localhost:3000`).

#### Aula 06: Arquitetura de Roteamento e Códigos de Status HTTP
* **O que foi abordado:**
  * Estudo sobre o ciclo de Requisição (enviada pelo cliente) e Resposta (devolvida pelo servidor)[cite: 2, 3].
  * Mapeamento minucioso dos **Códigos de Status HTTP** para identificação de respostas do sistema:
    * `1xx`: Informativo.
    * `2xx`: Sucesso (Ex: `200 OK`).
    * `3xx`: Redirecionamentos.
    * `4xx`: Erro no Cliente (Ex: `404 Not Found`, `401 Unauthorized`, `403 Forbidden`).
    * `5xx`: Erro no Servidor (Ex: `500 Internal Server Error`).
  * Conceito de Endpoints e estruturação de rotas de navegação identificadas pelo caractere `/`.
  * **Desenvolvimento Prático:** Criação de um roteador condicional inspecionando a propriedade `req.url` para servir diferentes mensagens ou arquivos HTML físicos através do módulo de leitura de arquivos `fs` do Node.js, com tratamento personalizado para rotas inexistentes (devolvendo código 404).

#### Aula 07: Tratamento Avançado de Requisições e Query URLs
* **O que foi abordado:**
  * Estudo sobre o tráfego de dados do cliente para o servidor através de requisições estruturadas.
  * Anatomia completa de uma **Query URL**: separação por parâmetros de chave-valor (`?`, `&`, `=`) para envio de informações dinâmicas diretamente na barra de endereço.
  * Uso da classe nativa `URL` no Node.js para desestruturar caminhos (`pathname`) e capturar chaves de busca.
  * **Desenvolvimento Prático:** Construção de rotas dinâmicas que processam dados enviados pelo usuário. Implementação de lógicas condicionais baseadas nos parâmetros recebidos (como validação estrita de e-mails de administradores e desenvolvimento do endpoint `/guess` para jogos de adivinhação com geração de números aleatórios pelo servidor).

---

## 🎮 Projeto de Destaque: Jogo Web Original com Física
* **Contexto:** Trabalho Prático Avaliativo do 2º Trimestre.

Colocando os conceitos de Front-end em prática, foi desenvolvido em equipe um jogo digital totalmente autoral rodando na API Canvas do HTML5.
* **Destaques Técnicos:**
  * Implementação matemática e lógica de um sistema próprio de **gravidade** e colisão.
  * Suporte para modos **1 Player** ou **2 Players** local rodando de forma assíncrona.
  * Código limpo criado sem o uso deliberado de ferramentas de geração automática por IA.

---
🛠️ *Repositório mantido para fins de documentação estudantil na Rede Jesuíta de Educação (ETE FMC).*
