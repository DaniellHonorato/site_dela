# Diretrizes de Código e Estilo

## Padrões de Frontend

### HTML
- Usar HTML5 semântico (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Garantir acessibilidade básica com atributos `aria-label`, `role` e descrições apropriadas para leitores de tela.
- Manter scripts no final do body ou com deferimento apropriado quando não forem guards imediatos.

### CSS
- Manter variáveis CSS (CSS Custom Properties) organizadas em `:root` para cores, fontes, espaçamentos e transições.
- Priorizar design responsivo (Mobile First / fluído) testando para larguras de 320px até 1920px.
- Otimizar animações usando `transform` e `opacity` para garantir 60fps sem engasgos no mobile.

### JavaScript
- Usar `'use strict'`.
- Evitar poluição do escopo global; encapsular lógica em IIFEs ou funções modulares.
- Lidar de forma defensiva com seletores do DOM (`document.querySelector`) verificando existência antes de adicionar event listeners.
- Manter performance de animações no `<canvas>` usando `requestAnimationFrame` e cancelamento apropriado.
