# GEMINI.md — Diretrizes de Engenharia e Contexto do Projeto

Este repositório contém o código-fonte de **Site Dela**, uma aplicação web interativa, responsiva e comemorativa criada com carinho para o relacionamento do casal.

---

## 1. Stack Tecnológica e Arquitetura

- **Frontend:** HTML5 Semântico, CSS3 Moderno (Variáveis/Tokens CSS, Flexbox, Grid, Animações e Canvas 2D) e Vanilla JavaScript (ES6+, Strict Mode).
- **Abordagem:** Zero dependências pesadas ou frameworks (sem React, Vue, jQuery ou Tailwind).
- **Autenticação:** Guard client-side em `login.html` com flag em `sessionStorage` (`auth_ok === '1'`).
- **Backend / Persistência:**
  - **Supabase PostgREST API Nativa:** Tabela `messages` e `reactions` (sem SDKs pesados de CDN, usando apenas `fetch` nativo com `AbortController`).
  - **LocalStorage:** Caches locais (`mural_cache_msgs`, `mural_cache_reactions`), progresso diário dos jogos (`cartas_done_YYYY-MM-DD`, `caca_YYYY-MM-DD`) e favoritos (`fav_notes_v1`).
- **Tipografia:** Google Fonts (`Playfair Display`, `Lato`, `Caveat`).

---

## 2. Estrutura de Arquivos

- `index.html`: Página principal protegida pelo guard de sessão. Contém todas as seções (Hero, Contador, Mensagens Diárias, Carrossel, Linha do Tempo, Countdowns, Céu Estrelado, Razões, Doceria, Jogos e Mural).
- `style.css`: Estilização global do tema Dark Elegante (`--bg: #12100e`, detalhes em rosé dourado `--accent: #d4956a` e verde Palmeiras `--green: #5a9e78`).
- `script.js`: Toda a lógica interativa, renderização de canvas, relógios, jogos e integração REST com o Supabase.
- `login.html` & `login.css`: Portal de entrada com validação de senha e animação de pétalas flutuantes.
- `/fotos/`: Diretório contendo as fotos e memórias do casal.
- `.agents/`: Regras e skills complementares do ambiente agêntico.

---

## 3. Regras de Ouro (Invioláveis)

1. **Preservação de Conteúdo Afetivo:**
   - **NUNCA** altere, reduza, reformule ou delete os textos das cartas, as 30 mensagens diárias, os marcos da linha do tempo, a lista de razões ou as frases dos jogos.
   - Mantenha sempre intactas as referências pessoais e piadas internas (como *"Palmeiras"*, *"Formiguinha"*, *"Pobrinha"*, *"Lego"*).
2. **Autenticação e Senha:**
   - A senha definida para acesso é fixa: `'eu te amo formiguinha'`. Não altere a lógica de checagem ou o fluxo de redirecionamento para `login.html`.
3. **Vanilla Primeiro (Zero Bloat):**
   - Não adicione bibliotecas externas ou frameworks via CDN/NPM. Mantenha toda a arquitetura em JS e CSS puros para preservar a velocidade e o carregamento instantâneo.
4. **Mobile First & Responsividade:**
   - Todo ajuste visual deve funcionar perfeitamente em telas móveis pequenas (a partir de 360px de largura).
   - Nunca permita overflow horizontal indesejado na viewport.

---

## 4. Padrões de Código e Convenções

- **Canvas e Performance:**
  - Animações contínuas em Canvas (`petals-canvas`, `star-canvas`) **devem** respeitar a `document.visibilityState` (pausar o `requestAnimationFrame` quando a aba estiver oculta para poupar bateria e CPU).
- **Manipulação de DOM:**
  - Priorize o uso de `DocumentFragment` para renderizações em lote (como no mural de recados e no carrossel) para evitar reflows repetidos.
  - Trate sanitização de strings inseridas por usuários no mural com `escapeHTML()`.
- **Nomenclatura:**
  - Variáveis e funções em `camelCase`.
  - Constantes de configuração no objeto `CONFIG` ou em `UPPER_SNAKE_CASE`.
  - Classes CSS em `kebab-case`.

---

## 5. Fluxo de Trabalho do Agente

1. **Análise de Dependências:** Antes de renomear ou remover IDs/classes no HTML, certifique-se de que não há seletores atrelados no `script.js` ou regras no `style.css`.
2. **Edição Segura:** Ao realizar correções, limite a alteração às linhas estritamente necessárias para o conserto do bug.
3. **Respeito aos Fallbacks:** Mantenha os fallbacks locais (armazenamento em cache no `localStorage` caso o Supabase falhe ou esteja offline).