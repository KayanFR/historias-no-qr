// audio.js
class AudioReader {
  constructor() {
    this.speech = null;
    this.isSpeaking = false;
    this.langMap = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
  }

  canSpeak() {
    return 'speechSynthesis' in window;
  }

  getVoice(lang = 'pt') {
    const voices = speechSynthesis.getVoices();
    const code = this.langMap[lang] || 'pt-BR';
    return voices.find(v => v.lang.startsWith(code)) || voices[0];
  }

  speak(text, lang = 'pt') {
    if (!this.canSpeak() || !text?.trim()) return;

    this.cancel(); // interrompe anterior

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.langMap[lang] || 'pt-BR';
    utterance.voice = this.getVoice(lang);
    utterance.rate = 0.95; // mais natural
    utterance.pitch = 1;

    utterance.onstart = () => {
      this.isSpeaking = true;
      document.dispatchEvent(new CustomEvent('audio:speakingStart'));
    };
    utterance.onend = () => {
      this.isSpeaking = false;
      document.dispatchEvent(new CustomEvent('audio:speakingEnd'));
    };
    utterance.onerror = (e) => {
      console.warn('Erro na síntese de voz:', e);
      this.isSpeaking = false;
    };

    speechSynthesis.speak(utterance);
    this.speech = utterance;
  }

  cancel() {
    if (this.speech) {
      speechSynthesis.cancel();
      this.isSpeaking = false;
      this.speech = null;
    }
  }

  // Controle via botões
  setupButtons() {
    document.addEventListener('click', e => {
      const target = e.target;
      if (target.matches('[data-audio="play"]')) {
        const text = target.dataset.text || target.closest('[data-audio-content]')?.textContent || '';
        const lang = target.dataset.lang || i18n?.currentLang || 'pt';
        this.speak(text, lang);
      } else if (target.matches('[data-audio="stop"]')) {
        this.cancel();
      }
    });
  }
}

// Inicializa
const audioReader = new AudioReader();

document.addEventListener('DOMContentLoaded', () => {
  // Carrega vozes (necessário em alguns navegadores)
  if (audioReader.canSpeak()) {
    speechSynthesis.addEventListener('voiceschanged', () => {
      // Garante que vozes estejam disponíveis
    });
    speechSynthesis.getVoices(); // trigger
  }

  audioReader.setupButtons();
});

// Exporta
window.audioReader = audioReader;
if (typeof module !== 'undefined') module.exports = { AudioReader, audioReader };