// utils.js

// ─── Formatação monetária (BR) ───────────────────────────────────────────
function formatCurrencyBR(value, withSymbol = true) {
  if (typeof value === 'string') value = parseFloat(value.replace(/\D/g, '')) / 100;
  if (isNaN(value)) return withSymbol ? 'R$ 0,00' : '0,00';

  return new Intl.NumberFormat('pt-BR', {
    style: withSymbol ? 'currency' : 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

// ─── Debounce ───────────────────────────────────────────────────────────
function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ─── Throttle ───────────────────────────────────────────────────────────
function throttle(func, limit = 300) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ─── Validação de e-mail ────────────────────────────────────────────────
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// ─── Formatação de telefone (BR) ────────────────────────────────────────
function formatPhoneBR(phone) {
  // Remove tudo exceto dígitos
  const digits = phone.replace(/\D/g, '');
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else {
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
}

// ─── Gerador de UUID (fallback) ─────────────────────────────────────────
function uuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

// ─── Detecção de ambiente ───────────────────────────────────────────────
function isMobile() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Exporta tudo
const Utils = {
  formatCurrencyBR,
  debounce,
  throttle,
  isValidEmail,
  formatPhoneBR,
  uuid,
  isMobile,
  isTouchDevice
};

// Disponibiliza globalmente
Object.assign(window, Utils);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Utils;
}