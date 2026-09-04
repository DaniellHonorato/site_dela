---
name: site-preview
description: >-
  Use esta skill quando precisar rodar um servidor local para testar, visualizar ou validar alterações no site no navegador.
---

# Site Preview Skill

Esta skill fornece o procedimento para inicializar um servidor de desenvolvimento local leve e testar o site sem problemas de CORS ou bloqueios de protocolo de arquivo (`file://`).

## Procedimento

1. **Iniciar servidor HTTP local**:
   Você pode usar Python (se disponível) ou `npx serve` / `npx http-server`:
   ```powershell
   # Opção 1: Usando Python
   python -m http.server 8080

   # Opção 2: Usando Node / npx
   npx --yes serve -p 8080 .
   ```

2. **Acessar o site**:
   - Abrir `http://localhost:8080/login.html` para testar o fluxo completo de login e transição para a página principal.
   - Ou abrir `http://localhost:8080/index.html` (após setar `sessionStorage.setItem('auth_ok', '1')`).

3. **Validação**:
   - Verificar console do navegador em busca de erros 404 de fotos ou assets.
   - Testar o comportamento responsivo (versão mobile e desktop).
   - Checar animações do canvas e lightbox.
