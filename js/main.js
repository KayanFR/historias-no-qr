// main.js
// Responsável por lógica de UI, interação e preparação para integração modular
// Nenhum dado de região/cidade está aqui — serão carregados externamente

// ─── Utilitários ────────────────────────────────────────────────────────
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// ─── Scroll Suave ───────────────────────────────────────────────────────
function scrollToSection(id) {
  const el = $(`#${id}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ─── Gerenciamento de Região (UI apenas) ───────────────────────────────
function setupRegionSelection() {
  const regionButtons = $$('[data-region]');
  const regionContent = $('#region-content');
  const regionTitle = $('#region-title');
  const regionText = $('#region-text');

  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const regionKey = btn.dataset.region;

      // Atualiza UI com feedback imediato
      regionTitle.textContent = `Carregando ${formatRegionName(regionKey)}...`;
      regionText.innerHTML = '<p><em>Buscando informações...</em></p>';
      regionContent.classList.remove('hidden');

      // Placeholder: disparar carregamento externo (ex: loadRegionData(regionKey))
      // A implementação real ficará em outro arquivo (ex: regionsLoader.js)
      setTimeout(() => {
        // Simula carregamento bem-sucedido (será substituído por fetch/imports)
        regionTitle.textContent = formatRegionName(regionKey);
        regionText.innerHTML = `
          <p>✅ Dados da região carregados com sucesso (em breve: conteúdo real).</p>
          <p>Este bloco será preenchido automaticamente por <code>regionsLoader.js</code>.</p>
        `;
      }, 400);
    });
  });
}

function formatRegionName(key) {
  const names = {
    norte: 'Região Norte',
    nordeste: 'Região Nordeste',
    'centro-oeste': 'Região Centro-Oeste',
    sudeste: 'Região Sudeste',
    sul: 'Região Sul'
  };
  return names[key] || key;
}

// ─── Acessibilidade e Qualidade de Vida ────────────────────────────────
function improveAccessibility() {
  // Exemplo: garantir foco visível e suporte a teclado
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      // Fecha overlays, modais, etc. (futuro)
    }
  });

  // Adiciona atributos ARIA dinamicamente onde necessário
  const regionContent = $('#region-content');
  if (regionContent) {
    regionContent.setAttribute('role', 'region');
    regionContent.setAttribute('aria-live', 'polite');
  }
}

// ─── QR Code (Placeholder para hook futuro) ────────────────────────────
function setupQRPlaceholder() {
  // Futuramente: ao selecionar região/cidade, chamar:
  // generateQRCode(url) → preencher .qr-placeholder
  // Por enquanto: mantém compatível com estrutura do HTML/CSS
}

// ─── Inicialização ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });

  // Botão "Explorar Regiões" no hero
  const exploreBtn = $('#explore-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => scrollToSection('regions'));
  }

  // Configura seleção de regiões
  setupRegionSelection();

  // Acessibilidade
  improveAccessibility();

  // QR (hook)
  setupQRPlaceholder();

  console.log('[main.js] Inicializado com sucesso. Pronto para integração com dados externos.');
});