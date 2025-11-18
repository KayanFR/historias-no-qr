// scanner.js
class QRScanner {
  constructor() {
    this.video = null;
    this.canvas = null;
    this.scanning = false;
    this.onScan = null;
  }

  isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  supportsCamera() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  async start(onScanCallback) {
    if (!this.isMobile() || !this.supportsCamera()) {
      this.promptManualInput();
      return false;
    }

    this.onScan = onScanCallback;
    await this.setupVideo();
    this.scanning = true;
    return true;
  }

  async setupVideo() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      
      this.video = document.createElement('video');
      this.video.style.display = 'none';
      this.video.autoplay = true;
      this.video.playsInline = true;
      this.video.srcObject = stream;
      document.body.appendChild(this.video);

      this.canvas = document.createElement('canvas');
      this.video.addEventListener('play', () => this.scanFrame());
    } catch (err) {
      console.warn('Câmera indisponível:', err);
      this.promptManualInput();
    }
  }

  scanFrame() {
    if (!this.scanning || !this.video || this.video.paused) return;

    const ctx = this.canvas.getContext('2d');
    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
    ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    // ⚠️ Aqui integraríamos uma lib como jsQR ou ZXing (via CDN ou import)
    // Para MVP, usamos fallback: pedir para colar o código
    // (Você pode depois substituir este bloco por detecção real)

    setTimeout(() => this.scanFrame(), 500);
  }

  stop() {
    this.scanning = false;
    if (this.video && this.video.srcObject) {
      this.video.srcObject.getTracks().forEach(track => track.stop());
    }
    if (this.video) this.video.remove();
    if (this.canvas) this.canvas.remove();
  }

  promptManualInput() {
    const input = prompt(i18n.get('scan_prompt', 'Cole o conteúdo do QR Code aqui:'));
    if (input && this.onScan) {
      this.onScan(input.trim());
    }
  }

  // Método público útil
  static detectAndScan(onSuccess) {
    const scanner = new QRScanner();
    scanner.start(data => {
      scanner.stop();
      onSuccess(data);
    });
  }
}

// Evento global para escaneamento (ex: botão "Escanear no Local")
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-action="scan"]').forEach(btn => {
    btn.addEventListener('click', () => {
      QRScanner.detectAndScan(data => {
        console.log('QR Code lido:', data);
        // Ex: redirecionar, carregar conteúdo, etc.
        window.location.href = data.startsWith('http') ? data : `?qr=${encodeURIComponent(data)}`;
      });
    });
  });
});