# Contexto do Projeto: Site Dela

Este projeto é um site comemorativo e romântico, feito exclusivamente com Vanilla HTML, CSS e JavaScript.

## Estrutura dos Arquivos Principais

- `login.html` & `login.css`: Página de entrada protegida por frase-senha com animação de pétalas caindo em `<canvas>` e feedback visual.
- `index.html` & `style.css`: Página principal rica em animações, seções de fotos, linha do tempo, contador de tempo de relacionamento, mensagens especiais e lightbox.
- `script.js`: Toda a lógica de interatividade da página principal (animação de pétalas, contadores, player/áudio, lightbox de fotos, toasts e efeitos visuais).
- `fotos/`: Diretório com as imagens utilizadas no site.

## Diretrizes de Preservação
- **Sentimento & Estética**: Manter sempre a identidade visual delicada, paleta elegante, tipografia suave (Playfair Display, Lato, Caveat) e microinterações fluidas.
- **Não quebrar o fluxo de autenticação**: Manter o guard em `index.html` que verifica `sessionStorage.getItem('auth_ok') === '1'`.
- **Vanilla Puro**: Manter o projeto leve, sem dependência de frameworks externos pesados ou bundlers complexos, a menos que solicitado expressamente.
