---
name: content-updater
description: >-
  Use esta skill ao adicionar novas fotos, memórias, cartas de amor, alterar a data do contador ou atualizar a senha de acesso.
---

# Content Updater Skill

Instruções para adicionar novos momentos, fotos e atualizar conteúdos do site com segurança.

## 1. Atualizar Senha de Acesso
- Arquivo: [login.html](../../../login.html)
- Localizar a constante `PASSWORD`:
  ```javascript
  const PASSWORD = '...';
  ```
- Ajustar também o placeholder ou a dica (`login-hint`) se necessário.

## 2. Adicionar ou Alterar Fotos
- Diretório de imagens: `fotos/`
- Referenciar as fotos em [index.html](../../../index.html) dentro da galeria/timeline:
  - Adicionar o elemento de imagem ou card correspondente.
  - Configurar atributos `alt` e a legenda do lightbox (`data-caption` ou classes apropriadas).
  - Garantir que caminhos sejam relativos (ex: `fotos/nome_da_foto.jpg`).

## 3. Alterar Data Inicial do Contador
- Arquivo: [script.js](../../../script.js)
- Localizar a variável que define o marco inicial do relacionamento (ex: data de namoro/conhecimento).
- Ajustar ano, mês (0-indexado em JS se usar `new Date(ano, mes, dia)`) e dia.

## 4. Checklist de Verificação
- [ ] O caminho das imagens está correto e o arquivo existe em `fotos/`?
- [ ] O lightbox continua abrindo a imagem em alta resolução?
- [ ] O texto está livre de erros de digitação e formatação quebrada?
- [ ] Testou no navegador se o layout mobile permaneceu alinhado?
