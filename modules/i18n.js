// i18n.js
const DEFAULT_LANG = 'pt';
const SUPPORTED_LANGS = ['pt', 'en', 'es'];

const TRANSLATIONS = {
  pt: {
    home_title: 'Descubra o Brasil com QR Codes',
    how_it_works: 'Como Funciona?',
    regions: 'Explore as Regiões do Brasil',
    step1: 'Visite um ponto turístico',
    step2: 'Escaneie com seu celular',
    step3: 'Acesse conteúdo exclusivo',
    fallback: 'Conteúdo ainda não disponível nesta língua.',
    language_label: 'Idioma:'
  },
  en: {
    home_title: 'Discover Brazil with QR Codes',
    how_it_works: 'How It Works?',
    regions: 'Explore the Regions of Brazil',
    step1: 'Visit a tourist spot',
    step2: 'Scan with your phone',
    step3: 'Access exclusive content',
    fallback: 'Content not yet available in this language.',
    language_label: 'Language:'
  },
  es: {
    home_title: 'Descubre Brasil con códigos QR',
    how_it_works: '¿Cómo funciona?',
    regions: 'Explora las regiones de Brasil',
    step1: 'Visita un punto turístico',
    step2: 'Escanea con tu teléfono',
    step3: 'Accede a contenido exclusivo',
    fallback: 'Contenido aún no disponible en este idioma.',
    language_label: 'Idioma:'
  }
};

class I18n {
  constructor() {
    this.currentLang = this.loadLang();
    this.initLanguageSelector();
  }

  loadLang() {
    const saved = localStorage.getItem('brasilqr-lang');
    return SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;
  }

  setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem('brasilqr-lang', lang);
    this.currentLang = lang;
    this.updateDOM();
    document.documentElement.lang = lang;
    document.dispatchEvent(new CustomEvent('i18n:langChanged', { detail: { lang } }));
  }

  get(key, fallback = '') {
    return TRANSLATIONS[this.currentLang]?.[key] || TRANSLATIONS[DEFAULT_LANG]?.[key] || fallback || key;
  }

  updateDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const attr = el.dataset.i18nAttr || 'textContent';
      const value = this.get(key, el.dataset.i18nFallback || '');
      if (attr === 'placeholder') {
        el.placeholder = value;
      } else if (attr === 'innerHTML') {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
  }

  initLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (!selector) return;

    selector.value = this.currentLang;
    selector.addEventListener('change', e => {
      this.setLang(e.target.value);
    });
  }

  // Método estático para uso imediato (ex: em templates)
  static t(key) {
    return (new I18n()).get(key);
  }
}

// Inicializa automaticamente ao carregar
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
  window.i18n.updateDOM();
});

// Exporta para uso em módulos (se usar type="module")
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { I18n, TRANSLATIONS };
}