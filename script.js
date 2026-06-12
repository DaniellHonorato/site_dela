/* ================================================================
   SCRIPT.JS — Site para Ela · v3
   ================================================================ */
'use strict';

/* ─── CONFIG ──────────────────────────────────────────────────── */
const CONFIG = {
  startDate: new Date('2025-12-05T00:00:00'),
  password: 'eu te amo formiguinha',

  /* Fotos reais — 8 fotos */
  photos: [
    { src: 'fotos/IMG_20251231_201946_162.jpg', place: 'Nossa Primeira Réveillon', date: '31 Dez 2025' },
    { src: 'fotos/IMG-20251231-WA0187.jpg',      place: 'Virada de Ano',             date: '31 Dez 2025' },
    { src: 'fotos/IMG_20251231_221549_623.webp', place: 'Juntos na Réveillon',       date: '31 Dez 2025' },
    { src: 'fotos/IMG_20260101_001045_298.webp', place: 'Primeiro dia do Ano Novo',  date: '01 Jan 2026' },
    { src: 'fotos/IMG_20260523_220108_681.webp', place: 'Nosso Momento',             date: 'Mai 2026'    },
    { src: 'fotos/20251231_214932.jpg',           place: 'Beijinho de Réveillon',     date: '31 Dez 2025' },
    { src: 'fotos/20251231_215447.jpg',           place: 'Sempre Juntos',             date: '31 Dez 2025' },
    { src: 'fotos/20260606_180545.jpg',           place: 'Juntinhos na Cozinha',      date: '06 Jun 2026' },
  ],

  /* Mensagens diárias (30) */
  messages: [
    { title: 'O Começo de Tudo',           text: 'Naquele dia, o universo inteiro conspirou para que você existisse na minha vida. Ainda bem que eu disse sim — ao acaso, ao destino, a você.' },
    { title: 'Olhos Que Falam',            text: 'Tem horas que só preciso olhar pra você pra saber que tudo vai ficar bem. Os seus olhos são o meu lugar mais seguro no mundo.' },
    { title: 'Sorriso que Para o Tempo',   text: 'Quando você sorri — esse sorriso de verdade, sem querer — o tempo literalmente para. Juro que já vi o relógio hesitar.' },
    { title: 'Pequenos Grandes Momentos',  text: 'Não é sobre as viagens ou os presentes. É sobre você rindo da própria piada antes de terminar de contar. Esses momentos são os meus favoritos.' },
    { title: 'Minha Paz',                  text: 'Antes de você, eu achava que paz era ausência de barulho. Agora eu sei que paz é a sua presença — mesmo que você esteja falando muito.' },
    { title: 'A Cor dos Meus Dias',        text: 'Você coloriu minha vida de uma cor que eu não sabia que existia. Algo entre o verde do Palmeiras e o rosado das suas bochechas quando você ri muito.' },
    { title: 'Nas Pequenas Coisas',        text: 'Você bate palmas de felicidade. Você faz carinha quando discorda. Você abraça de verdade. São essas coisinhas que me fazem louco por você todos os dias.' },
    { title: 'Meu Time Favorito',          text: 'Você é o meu time favorito — e não, o Palmeiras não é o segundo. Você é minha lista, minha torcida, minha taça.' },
    { title: 'Acordar ao Seu Lado',        text: 'Tem coisa melhor do que acordar e saber que você existe? Mesmo bagunçada, mesmo sonolienta, você é a melhor visão de manhã.' },
    { title: 'O Perfil que Salva',         text: 'Tem horas que vejo uma foto sua no celular e respiro mais fundo. É involuntário. Você me acalma só de existir.' },
    { title: 'Formiguinha Brava',          text: 'Quando você fica brava, você é a coisa mais adorável do planeta. Não que eu vá falar isso quando você estiver brava. Mas é verdade.' },
    { title: 'Cada Centímetro',            text: 'Cada centímetro de você foi pensado com cuidado por quem cuida das coisas boas desse mundo. Você é obra-prima, minha formiguinha.' },
    { title: 'O Cheiro Que Acalma',        text: 'Existe um cheiro específico que é só seu. Não sei como descrever. Só sei que quando sinto, me sinto em casa — não importa onde estejamos.' },
    { title: 'Verdade Simples',            text: 'A verdade mais simples e mais certa que conheço: te amar é a coisa mais natural que já fiz.' },
    { title: 'A Pessoa que Escolho',       text: 'Todo dia, quando acordo, mesmo que inconscientemente, eu te escolho de novo. E faria isso por cada um dos dias que ainda vêm.' },
    { title: 'Seu Jeito de Ser',           text: 'Você tem esse jeitinho de entrar em qualquer sala e ser exatamente você — sem esforço, sem máscaras. Nunca mude isso.' },
    { title: 'Risadas que Ficam',          text: 'Já ri muita coisa com você. Daquelas risadas que doem a barriga, que soltam lágrima, que aparecem de novo dois dias depois sem avisar.' },
    { title: 'Mais do que Palavras',       text: 'Podia escrever mil textos sobre o que sinto por você e ainda assim ficaria aquém. Você é maior do que qualquer coisa que eu consiga escrever.' },
    { title: 'Seus Planos',               text: 'Adoro quando você fala dos seus planos, dos seus sonhos. Os seus olhos brilham de um jeito diferente. Quero estar do lado pra ver cada um deles virar real.' },
    { title: 'O Melhor Dia Simples',       text: 'O melhor tipo de dia é aquele comum, sem nada especial, mas com você do lado. Esses são meus dias favoritos — os normais que se tornam extraordinários por você.' },
    { title: 'No Silêncio Também',         text: 'Com você, até o silêncio é bonito. Não precisa de conversa toda hora. Só a sua presença já preenche tudo.' },
    { title: 'Orgulho',                    text: 'Tenho orgulho de quem você é. Das suas escolhas, da sua força, do seu coração gigante. Orgulho de te chamar de minha.' },
    { title: 'A Saudade Que Chega Rápido', text: 'É engraçado — às vezes você vai embora e já começo a sentir sua falta. Acho que meu coração é viciado em você.' },
    { title: 'Sua Mão na Minha',          text: 'Existe algo muito simples e muito poderoso em ter a sua mão na minha. Como se o mundo ficasse mais fácil de carregar.' },
    { title: 'Obrigado por Ser Você',      text: 'Obrigado por ser tão generosa, tão presente, tão você. Você não faz ideia do bem que faz só por existir do jeito que é.' },
    { title: 'Cada Detalhe',              text: 'Conheço o seu jeito de arrumar os cabelos, o som da sua risada de vergonha, a carinha que você faz antes de concordar. São tesouros que só eu tenho.' },
    { title: 'Quero Estar Lá',            text: 'Quero estar em todas as suas fases — nas conquistas, nos choros, nas madrugadas difíceis e nos dias mais bonitos que ainda estão vindo.' },
    { title: 'Você Me Faz Melhor',        text: 'Desde você, quero ser uma versão melhor de mim. Não pra te impressionar — mas porque você merece o melhor e quero ser isso pra você.' },
    { title: 'Só Mais Um Dia',            text: 'Todo dia ao seu lado é um presente. Não exagero — é literalmente a melhor parte de cada dia que passa.' },
    { title: 'Para Sempre e Mais Um Dia', text: 'Não sei o que o futuro guarda. Mas sei que quero descobrir com você do lado. Para sempre parece pouco, mas começa hoje — e hoje é perfeito.' },
  ],

  /* Linha do tempo */
  timeline: [
    { date: '05 Dez 2025', event: 'O Começo de Tudo 🌱', desc: 'O dia que oficialmente virei o namorado mais feliz do mundo.', highlight: true },
    { date: '31 Dez 2025', event: 'Primeira Réveillon Juntos 🎆', desc: 'Virar o ano com você ao lado foi o melhor presente que o universo poderia me dar.', highlight: true },
    { date: '01 Jan 2026', event: 'Primeiro Dia do Ano Novo 🤍', desc: 'Acordar sabendo que o ano inteiro ia ser com você.' },
    { date: '06 Jun 2026', event: 'Mais um Dia Perfeito 💚', desc: 'Cada dia ao seu lado é um dia que vale muito a pena.' },
    { date: 'Em breve...',  event: 'O Próximo Capítulo ✨', desc: 'Ainda não sei o que vai acontecer — mas sei que vai ser com você.', future: true },
  ],

  /* Eventos para countdown */
  countdowns: [
    { name: 'Nosso Aniversário de 1 Ano 🎉', date: '2026-12-05' },
    { name: 'Próximo Réveillon Juntos 🎆',    date: '2026-12-31' },
  ],

  /* Razões pra te amar */
  loveReasons: [
    'Você sorri com os olhos antes de sorrir com a boca.',
    'Seu abraço é o lugar mais seguro que conheço.',
    'Você ri da própria piada antes de terminar de contar.',
    'Você é linda mesmo sem perceber — talvez por isso ainda mais.',
    'Você bate palminhas de felicidade. Não tem coisa mais fofa.',
    'Me faz querer ser melhor só por você existir.',
    'Seu cuidado com as pessoas que ama é algo raro e lindo.',
    'Você tem opiniões fortes e não tem medo de defendê-las.',
    'Você é estranha do jeito certo — do meu jeito favorito.',
    'Seu coração é grande demais para o tamanho que você é.',
    'Você nunca deixa eu duvidar que sou amado.',
    'Você é engraçada sem tentar — e acha graça nas mesmas coisas que eu.',
    'Você me escuta de verdade, não só esperando a vez de falar.',
    'Você tem um jeito especial de fazer o ordinário virar especial.',
    'Você não tem medo de mostrar o que sente.',
    'Seu cabelo na luz do sol é uma obra de arte.',
    'Você tem a melhor carinha de dormindo.',
    'Você me desafia a pensar diferente — e eu amo isso.',
    'Você é minha pessoa favorita para ficar em silêncio junto.',
    'Você. Só você. Tudo que é você.',
  ],

  /* Star */
  starName: 'Formiguinha',
};

/* ─── UTILITÁRIOS ─────────────────────────────────────────────── */
function $(id) { return document.getElementById(id); }

function daysBetween(a, b) {
  const ms = b - a;
  return Math.max(0, Math.floor(ms / 86400000));
}

function pad2(n) { return String(n).padStart(2, '0'); }

function formatDate(d) {
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function showToast(msg, duration = 3500) {
  const container = $('toast-container');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  container.appendChild(el);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => el.classList.add('show'));
  });
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 500);
  }, duration);
}

/* ─── REVEAL AO SCROLL ────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ─── PÉTALAS ─────────────────────────────────────────────────── */
function initPetals(canvasId, isFullPage = true) {
  const canvas = $(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = isFullPage ? window.innerWidth  : canvas.offsetWidth;
    canvas.height = isFullPage ? window.innerHeight : canvas.offsetHeight;
  }
  resize();
  if (isFullPage) window.addEventListener('resize', resize);

  const petals = Array.from({ length: isFullPage ? 28 : 14 }, () => ({
    x: Math.random() * (canvas.width || 400),
    y: Math.random() * (canvas.height || 600) - (canvas.height || 600),
    r: Math.random() * 8 + 4,
    drift: (Math.random() - .5) * .6,
    speed: Math.random() * .6 + .3,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - .5) * .04,
    alpha: Math.random() * .4 + .25,
    color: Math.random() > .5 ? '#f2d7d5' : '#b8e0cc',
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
      p.y     += p.speed;
      p.x     += p.drift + Math.sin(p.y / 60) * .3;
      p.rot   += p.rotSpeed;
      if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 1.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ─── TELA DE SENHA ───────────────────────────────────────────── */
function initPassword() {
  const screen  = $('password-screen');
  const input   = $('password-input');
  const submit  = $('password-submit');
  const toggle  = $('password-toggle');
  const errorEl = $('password-error');
  const attEl   = $('password-attempts');

  if (!screen) return;

  /* Sessão já autenticada */
  if (sessionStorage.getItem('auth_ok') === '1') {
    screen.classList.add('hidden');
    return;
  }

  initPetals('pw-petals', false);

  let attempts = 0;
  const MAX = 5;

  toggle.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
    toggle.textContent = input.type === 'password' ? '👁️' : '🙈';
  });

  function attempt() {
    const val = input.value.trim().toLowerCase();
    if (!val) return;
    if (val === CONFIG.password) {
      sessionStorage.setItem('auth_ok', '1');
      errorEl.textContent = '✓ Bem-vinda, meu amor! 🌸';
      errorEl.style.color = 'var(--forest)';
      submit.disabled = true;
      setTimeout(() => screen.classList.add('hidden'), 900);
    } else {
      attempts++;
      input.classList.add('error');
      setTimeout(() => input.classList.remove('error'), 500);
      const remaining = MAX - attempts;
      if (remaining <= 0) {
        errorEl.textContent = '💔 Pensa com calma... você sabe!';
        attEl.textContent = 'Tente novamente em alguns instantes.';
        submit.disabled = true;
        input.disabled  = true;
        setTimeout(() => {
          submit.disabled = false;
          input.disabled  = false;
          attempts = 0;
          errorEl.textContent = '';
          attEl.textContent   = '';
        }, 10000);
      } else {
        errorEl.textContent = '❌ Não é bem isso... pensa mais!';
        attEl.textContent = `${remaining} tentativa${remaining === 1 ? '' : 's'} restante${remaining === 1 ? '' : 's'}`;
      }
    }
    input.value = '';
  }

  submit.addEventListener('click', attempt);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
}

/* ─── CONTADOR DE DIAS ────────────────────────────────────────── */
function initCounter() {
  const el = $('days-count');
  if (!el) return;
  const target = daysBetween(CONFIG.startDate, new Date());
  let current  = 0;
  const step   = Math.max(1, Math.floor(target / 60));
  const timer  = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString('pt-BR');
    if (current >= target) clearInterval(timer);
  }, 30);
}

/* ─── MENSAGEM DIÁRIA ─────────────────────────────────────────── */
function initDailyMessage() {
  const today  = new Date();
  const total  = CONFIG.messages.length;
  const todayIdx = daysBetween(CONFIG.startDate, today) % total;

  let currentIdx = todayIdx;

  const msgEl      = $('daily-message');
  const titleEl    = $('book-title-text');
  const dateEl     = $('book-date');
  const dayBadge   = $('book-day-badge');
  const prevBtn    = $('book-prev');
  const nextBtn    = $('book-next');
  const counterEl  = $('book-nav-counter');
  const progFill   = $('book-progress-fill');
  const progPct    = $('book-progress-pct');
  const lockMsg    = $('book-lock-msg');

  function msgDateFor(idx) {
    const realIdx   = idx % total;
    const dayOffset = (daysBetween(CONFIG.startDate, today) - todayIdx) + realIdx;
    const d = new Date(CONFIG.startDate);
    d.setDate(d.getDate() + dayOffset);
    return d;
  }

  function render(idx) {
    const msg  = CONFIG.messages[idx % total];
    const date = msgDateFor(idx);

    msgEl.style.opacity = '0';
    msgEl.style.transform = 'translateY(8px)';
    titleEl.style.opacity = '0';

    setTimeout(() => {
      msgEl.textContent   = msg.text;
      titleEl.textContent = msg.title;
      dateEl.textContent  = formatDate(date);

      if (idx === todayIdx) {
        dayBadge.textContent = '📖 Mensagem de Hoje';
        dayBadge.style.background = 'var(--mint-light)';
      } else if (idx < todayIdx) {
        const daysAgo = todayIdx - idx;
        dayBadge.textContent = `⏮ Há ${daysAgo} dia${daysAgo > 1 ? 's' : ''}`;
        dayBadge.style.background = 'var(--blush)';
      }

      counterEl.textContent = `Dia ${idx + 1} de ${total}`;

      const pct = Math.round(((todayIdx + 1) / total) * 100);
      progFill.style.width = pct + '%';
      progPct.textContent  = pct + '%';

      /* Bloquear se estiver na mensagem de hoje */
      if (idx >= todayIdx) {
        nextBtn.disabled = true;
        lockMsg.style.display = 'flex';
      } else {
        nextBtn.disabled = false;
        lockMsg.style.display = 'none';
      }
      prevBtn.disabled = idx <= 0;

      msgEl.style.opacity = '1';
      msgEl.style.transform = 'translateY(0)';
      titleEl.style.opacity = '1';
    }, 180);
  }

  render(currentIdx);

  prevBtn.addEventListener('click', () => {
    if (currentIdx > 0) { currentIdx--; render(currentIdx); }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIdx < todayIdx) { currentIdx++; render(currentIdx); }
    else {
      nextBtn.classList.add('btn-locked-shake');
      setTimeout(() => nextBtn.classList.remove('btn-locked-shake'), 450);
      showToast('🔒 Essa mensagem ainda não chegou. Volte amanhã!');
    }
  });

  msgEl.style.transition  = 'opacity .3s ease, transform .3s ease';
  titleEl.style.transition = 'opacity .3s ease';
}

/* ─── CARROSSEL ───────────────────────────────────────────────── */
function initCarousel() {
  const track     = $('carousel-track');
  const dotsWrap  = $('carousel-dots');
  const captionEl = $('carousel-caption');
  const thumbStrip= $('thumb-strip');
  const prevBtn   = $('carousel-prev');
  const nextBtn   = $('carousel-next');

  if (!track) return;

  const photos = CONFIG.photos;
  let current    = 0;
  let startX     = 0;
  let isDragging = false;

  /* Build slides */
  photos.forEach((p, i) => {
    /* Slide */
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    const img = document.createElement('img');
    img.src = p.src;
    img.alt = `${p.place} — ${p.date}`;
    img.loading = i === 0 ? 'eager' : 'lazy';
    img.draggable = false;
    img.addEventListener('click', () => openLightbox(i));
    slide.appendChild(img);
    track.appendChild(slide);

    /* Dot */
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Foto ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);

    /* Thumb */
    const thumb = document.createElement('div');
    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
    const ti = document.createElement('img');
    ti.src = p.src; ti.alt = p.place; ti.loading = 'lazy'; ti.draggable = false;
    thumb.appendChild(ti);
    thumb.addEventListener('click', () => goTo(i));
    thumbStrip.appendChild(thumb);
  });

  function goTo(idx, shouldScrollThumb = true) {
    current = (idx + photos.length) % photos.length;
    track.style.transform = `translateX(-${current * 100}%)`;

    /* Update dots */
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === current));

    /* Update thumbs */
    thumbStrip.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === current));

    /* Caption */
    const p = photos[current];
    captionEl.textContent = `${p.place}  ·  ${p.date}`;

    /* Arrow state */
    prevBtn.disabled = false;
    nextBtn.disabled = false;

    /* Scroll thumb into view */
    if (shouldScrollThumb) {
      thumbStrip.querySelectorAll('.thumb')[current]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  goTo(0, false);

  /* Navegação — somente manual, sem auto-play */
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  /* Touch swipe */
  const root = document.querySelector('.carousel-root');
  root.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });
  root.addEventListener('touchend', e => {
    if (!isDragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    isDragging = false;
  }, { passive: true });

  /* Mouse drag */
  root.addEventListener('mousedown', e => { startX = e.clientX; isDragging = true; });
  root.addEventListener('mouseup', e => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    isDragging = false;
  });

  /* Keyboard */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'Escape') closeLightbox();
  });

  /* ── Lightbox ── */
  const overlay = $('lightbox');
  const lbImg   = $('lightbox-img');
  const lbCap   = $('lightbox-caption');
  const lbClose = $('lightbox-close');

  function openLightbox(idx) {
    const p = photos[idx];
    lbImg.innerHTML = '';
    const img = document.createElement('img');
    img.src = p.src;
    img.alt = p.place;
    lbImg.appendChild(img);
    lbCap.innerHTML = `<span class="place">${p.place}</span><br/>${p.date}`;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  lbClose.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
}

/* ─── TIMELINE ────────────────────────────────────────────────── */
function initTimeline() {
  const container = $('timeline-container');
  if (!container) return;
  CONFIG.timeline.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'tl-item reveal';
    div.style.transitionDelay = `${i * 0.1}s`;

    const dotClass = item.highlight ? 'highlight' : item.future ? 'future' : '';
    div.innerHTML = `
      <div class="tl-dot ${dotClass}"></div>
      <div class="tl-body">
        <p class="tl-date">${item.date}</p>
        <p class="tl-event">${item.event}</p>
        <p class="tl-desc">${item.desc}</p>
      </div>
    `;
    container.appendChild(div);
  });
  /* Register new reveal items */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  container.querySelectorAll('.tl-item').forEach(el => io.observe(el));
}

/* ─── COUNTDOWN ───────────────────────────────────────────────── */
function initCountdowns() {
  const list = $('countdown-list');
  if (!list) return;

  CONFIG.countdowns.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'countdown-card reveal';

    const targetDate = new Date(ev.date + 'T00:00:00');
    card.innerHTML = `
      <p class="countdown-event-label">Falta para...</p>
      <h3 class="countdown-event-name">${ev.name}</h3>
      <div class="countdown-units">
        <div class="countdown-unit-box"><span class="countdown-unit-num" data-unit="d">--</span><span class="countdown-unit-label">dias</span></div>
        <div class="countdown-unit-box"><span class="countdown-unit-num" data-unit="h">--</span><span class="countdown-unit-label">horas</span></div>
        <div class="countdown-unit-box"><span class="countdown-unit-num" data-unit="m">--</span><span class="countdown-unit-label">minutos</span></div>
        <div class="countdown-unit-box"><span class="countdown-unit-num" data-unit="s">--</span><span class="countdown-unit-label">segundos</span></div>
      </div>
    `;
    list.appendChild(card);

    function tick() {
      const now  = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        card.querySelector('[data-unit="d"]').textContent = '0';
        card.querySelector('[data-unit="h"]').textContent = '0';
        card.querySelector('[data-unit="m"]').textContent = '0';
        card.querySelector('[data-unit="s"]').textContent = '0';
        return;
      }
      card.querySelector('[data-unit="d"]').textContent = pad2(Math.floor(diff / 86400000));
      card.querySelector('[data-unit="h"]').textContent = pad2(Math.floor((diff % 86400000) / 3600000));
      card.querySelector('[data-unit="m"]').textContent = pad2(Math.floor((diff % 3600000) / 60000));
      card.querySelector('[data-unit="s"]').textContent = pad2(Math.floor((diff % 60000) / 1000));
    }
    tick();
    setInterval(tick, 1000);
  });

  /* Register reveals */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  list.querySelectorAll('.countdown-card').forEach(el => io.observe(el));
}

/* ─── ESTRELA ─────────────────────────────────────────────────── */
function initStarCanvas() {
  const canvas = $('star-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  const W = () => canvas.width;
  const H = () => canvas.height;

  /* Estrelas de fundo */
  const bgStars = Array.from({ length: 130 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.4 + .3,
    alpha: Math.random() * .7 + .2,
    twinkle: Math.random() * Math.PI * 2,
    speed: .02 + Math.random() * .04,
  }));

  /* Estrela cadente */
  let shootX = -1, shootY = -1, shootProgress = 0, nextShoot = 4;
  let shootTimer = 0;

  /* Partícula especial */
  let pulse = 0;
  let nameAnim = 0;

  function drawFrame(t) {
    ctx.clearRect(0, 0, W(), H());

    /* Fundo */
    const grad = ctx.createLinearGradient(0, 0, 0, H());
    grad.addColorStop(0,   '#050d1a');
    grad.addColorStop(.6,  '#0a1628');
    grad.addColorStop(1,   '#0d1b2a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W(), H());

    /* Estrelas de fundo */
    bgStars.forEach(s => {
      s.twinkle += s.speed;
      const a = s.alpha * (.6 + .4 * Math.sin(s.twinkle));
      ctx.globalAlpha = a;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x * W(), s.y * H(), s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    /* Estrela cadente */
    shootTimer += .016;
    if (shootTimer > nextShoot) {
      shootTimer = 0; nextShoot = 5 + Math.random() * 7;
      shootX = Math.random() * W() * .7;
      shootY = Math.random() * H() * .3;
      shootProgress = 0;
    }
    if (shootProgress < 1) {
      shootProgress += .025;
      const ex = shootX + shootProgress * W() * .25;
      const ey = shootY + shootProgress * H() * .15;
      const g2 = ctx.createLinearGradient(shootX, shootY, ex, ey);
      g2.addColorStop(0,   'rgba(255,255,255,0)');
      g2.addColorStop(.5,  'rgba(255,255,255,0.4)');
      g2.addColorStop(1,   'rgba(180,240,210,0.8)');
      ctx.strokeStyle = g2;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(shootX, shootY);
      ctx.lineTo(ex, ey);
      ctx.stroke();
    }

    /* ── Estrela especial ── */
    const cx = W() * .5;
    const cy = H() * .42;
    pulse += .04;
    nameAnim += .015;

    /* Halos */
    [60, 40, 22].forEach((r, i) => {
      const opacity = (.08 + .04 * Math.sin(pulse + i)) * (1 - i * .02);
      const gHalo = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gHalo.addColorStop(0,   `rgba(107,191,153,${opacity * 2.5})`);
      gHalo.addColorStop(.5,  `rgba(107,191,153,${opacity})`);
      gHalo.addColorStop(1,   'rgba(107,191,153,0)');
      ctx.fillStyle = gHalo;
      ctx.beginPath();
      ctx.arc(cx, cy, r * (1 + .12 * Math.sin(pulse + i * 1.3)), 0, Math.PI * 2);
      ctx.fill();
    });

    /* Raios girantes */
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(pulse * .3);
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const rayLen = 18 + 8 * Math.sin(pulse * 1.5 + i);
      ctx.globalAlpha = .18 + .1 * Math.sin(pulse * 2 + i);
      ctx.strokeStyle = '#a8e6c8';
      ctx.lineWidth = .8;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angle) * rayLen, Math.sin(angle) * rayLen);
      ctx.stroke();
    }
    ctx.restore();
    ctx.globalAlpha = 1;

    /* Forma de estrela */
    function drawStar(x, y, r1, r2, pts, color) {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      for (let i = 0; i < pts * 2; i++) {
        const angle = (i * Math.PI) / pts - Math.PI / 2;
        const r = i % 2 === 0 ? r1 : r2;
        i === 0 ? ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r)
                : ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#b8e0cc';
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();
    }
    const sr = 11 + 2.5 * Math.sin(pulse);
    drawStar(cx, cy, sr, sr * .45, 5, 'rgba(200,240,220,0.95)');
    drawStar(cx, cy, sr * .7, sr * .3, 5, '#ffffff');

    /* Nome */
    const alpha = .6 + .4 * Math.sin(nameAnim);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#c8f0dc';
    ctx.font = `${Math.round(W() * .035 + 9)}px 'Caveat', cursive`;
    ctx.textAlign = 'center';
    ctx.fillText(CONFIG.starName, cx, cy + 38 + 3 * Math.sin(nameAnim * 2));
    ctx.globalAlpha = 1;

    requestAnimationFrame(drawFrame);
  }
  requestAnimationFrame(drawFrame);
}

/* ─── RAZÕES ──────────────────────────────────────────────────── */
function initLoveReasons() {
  const list    = $('love-reasons-list');
  const revBtn  = $('reveal-reason-btn');
  const allBtn  = $('reveal-all-btn');
  const counter = $('reasons-counter');
  if (!list) return;

  const reasons  = CONFIG.loveReasons;
  let revealed   = 0;

  function updateCounter() { counter.textContent = `${revealed} de ${reasons.length}`; }

  function addItem(text, idx) {
    const item = document.createElement('div');
    item.className = 'reason-item reason-entering';
    item.innerHTML = `<span class="reason-num">${String(idx + 1).padStart(2, '0')}.</span><span class="reason-text">${text}</span><span class="reason-heart">♡</span>`;
    list.appendChild(item);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => item.classList.replace('reason-entering', 'reason-visible'));
    });
  }

  function revealOne() {
    if (revealed >= reasons.length) return;
    addItem(reasons[revealed], revealed);
    revealed++;
    updateCounter();
    if (revealed >= reasons.length) {
      revBtn.disabled = true;
      revBtn.textContent = '✓ Todas reveladas!';
      allBtn.disabled = true;
    }
  }

  /* Revelar 3 ao abrir */
  for (let i = 0; i < 3; i++) revealOne();

  revBtn.addEventListener('click', revealOne);
  allBtn.addEventListener('click', () => {
    while (revealed < reasons.length) revealOne();
  });
}

/* ─── DOCERIA ─────────────────────────────────────────────────── */
function initDoceria() {
  const messages = {
    'btn-treat-1': '🍫 Combinado! Palha italiana está reservada pra você.',
    'btn-treat-2': '🤗 Abraço surpresa ATIVADO! Prepare-se.',
    'btn-treat-3': '💋 Esse beijo é seu — pode cobrar quando quiser.',
    'btn-treat-4': '🎬 Você escolhe! Pode ser qualquer coisa... quase.',
  };
  Object.entries(messages).forEach(([id, msg]) => {
    const btn = $(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      showToast(msg);
      btn.disabled = true;
      setTimeout(() => { btn.disabled = false; }, 10000);
    });
  });

  /* Botão Fujão */
  const fleeBtn = $('flee-btn');
  if (!fleeBtn) return;

  const isMobile = () => window.matchMedia('(hover: none)').matches || window.innerWidth <= 640;
  let isFleeing  = false;

  function flee() {
    if (isMobile()) return;
    if (!isFleeing) {
      const rect = fleeBtn.getBoundingClientRect();
      isFleeing = true;
      fleeBtn.classList.add('is-fleeing');
      fleeBtn.style.width  = rect.width + 'px';
      fleeBtn.style.left   = rect.left + 'px';
      fleeBtn.style.top    = rect.top  + 'px';
      fleeBtn.style.transition = 'left .35s cubic-bezier(0.34,1.56,0.64,1), top .35s cubic-bezier(0.34,1.56,0.64,1)';
    }
    const bw = fleeBtn.offsetWidth, bh = fleeBtn.offsetHeight, m = 16;
    fleeBtn.style.left = Math.random() * (window.innerWidth  - bw - m * 2) + m + 'px';
    fleeBtn.style.top  = Math.random() * (window.innerHeight - bh - m * 2) + m + 'px';
  }

  fleeBtn.addEventListener('mouseenter', flee);
  fleeBtn.addEventListener('mousemove', flee);
  fleeBtn.addEventListener('touchstart', e => {
    e.preventDefault();
    showToast('❌ Impossível! Meu coração não aceita essa opção. 😄');
  }, { passive: false });
  fleeBtn.addEventListener('click', () => {
    if (!isMobile()) showToast('❌ Impossível! Meu coração não aceita essa opção. 😄');
  });
  document.addEventListener('scroll', () => {
    if (!isFleeing) return;
    isFleeing = false;
    fleeBtn.classList.remove('is-fleeing');
    fleeBtn.style.cssText = '';
  }, { passive: true });
}

/* ─── MURAL DE RECADOS (SUPABASE) ──────────────────────────────── */
const SUPABASE_URL = 'https://ejxinajgfmdupirmuonj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqeGluYWpnZm1kdXBpcm11b25qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMTk0NTIsImV4cCI6MjA5Njc5NTQ1Mn0.WoYZ8B46TfBoYmSh1ApqhhG8SUgdexj72OoSw1K5Zvg';

let supabaseClient = null;
if (typeof supabase !== 'undefined') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

async function initMural() {
  const form = $('mural-form');
  const container = $('mural-notes');
  if (!form || !container || !supabaseClient) return;

  /* Formata a chave do dia no formato YYYY-MM-DD no fuso local */
  function dayKey(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  /* Label humanizado do separador de dia */
  function dayLabel(dateObj) {
    const today     = new Date();
    const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);

    if (dayKey(dateObj) === dayKey(today)) return '📅 Hoje';
    if (dayKey(dateObj) === dayKey(yesterday)) return '🕰️ Ontem';

    return dateObj.toLocaleDateString('pt-BR', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  async function loadMessages() {
    try {
      /* Busca em ordem cronológica crescente para facilitar o agrupamento */
      const { data, error } = await supabaseClient
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;

      if (!data || data.length === 0) {
        container.innerHTML = `<p class="mural-empty">Nenhum bilhetinho ainda. Seja o primeiro a escrever! 🌸</p>`;
        return;
      }

      /* Agrupa por dia (chave YYYY-MM-DD) preservando ordem cronológica interna */
      const groups = new Map();
      data.forEach(msg => {
        const d   = new Date(msg.created_at);
        const key = dayKey(d);
        if (!groups.has(key)) groups.set(key, { date: d, messages: [] });
        groups.get(key).messages.push(msg);
      });

      /* Inverte a ordem dos grupos para mostrar o dia mais recente primeiro */
      const sortedKeys = [...groups.keys()].reverse();

      /* Renderiza grupos + bilhetinhos */
      container.innerHTML = '';

      sortedKeys.forEach(key => {
        const group = groups.get(key);

        /* ── Separador de dia ── */
        const sep = document.createElement('div');
        sep.className = 'mural-day-separator reveal';
        sep.innerHTML = `
          <span class="mural-day-line"></span>
          <span class="mural-day-label">${escapeHTML(dayLabel(group.date))}</span>
          <span class="mural-day-line"></span>
        `;
        container.appendChild(sep);

        /* ── Grid de bilhetinhos do dia ── */
        const grid = document.createElement('div');
        grid.className = 'mural-day-grid';
        container.appendChild(grid);

        group.messages.forEach(msg => {
          const d = new Date(msg.created_at);
          const timeStr = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
          const senderEscaped  = escapeHTML(msg.sender);
          const contentEscaped = escapeHTML(msg.content);

          const note = document.createElement('div');
          note.className = 'mural-note reveal';
          note.innerHTML = `
            <p class="mural-note-text">"${contentEscaped}"</p>
            <div class="mural-note-footer">
              <span class="mural-note-sender">♡ de ${senderEscaped}</span>
              <span class="mural-note-time">${timeStr}</span>
            </div>
          `;
          grid.appendChild(note);
        });
      });

      /* IntersectionObserver para animação de entrada */
      const revealEls = container.querySelectorAll('.reveal');
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
      }, { threshold: 0.08 });
      revealEls.forEach(el => io.observe(el));

    } catch (err) {
      console.error('Erro ao carregar mensagens:', err);
      container.innerHTML = `<p class="mural-empty" style="color: var(--accent);">⚠️ Não foi possível carregar as mensagens. Tente novamente mais tarde.</p>`;
    }
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const senderInput = $('mural-sender');
    const contentInput = $('mural-content');
    const submitBtn = form.querySelector('.mural-submit-btn');

    const sender = senderInput.value.trim();
    const content = contentInput.value.trim();

    if (!sender || !content) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const { error } = await supabaseClient
        .from('messages')
        .insert([{ sender, content }]);

      if (error) throw error;

      showToast('💌 Bilhetinho colado no mural!');
      contentInput.value = '';
      await loadMessages();
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      showToast('❌ Erro ao enviar bilhete. Tente de novo.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = '♡ Deixar Recado';
    }
  });

  await loadMessages();
}

/* ─── SCROLL TOP ──────────────────────────────────────────────── */
function initScrollTop() {
  const btn = $('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── FOOTER YEAR ─────────────────────────────────────────────── */
function initFooter() {
  const el = $('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPassword();
  initReveal();
  initPetals('petals-canvas', true);
  initCounter();
  initDailyMessage();
  initCarousel();
  initTimeline();
  initCountdowns();
  initStarCanvas();
  initLoveReasons();
  initDoceria();
  initScrollTop();
  initFooter();
  initMural();
});
