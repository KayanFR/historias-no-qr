// js/main.js
import { locations, brazilStates, regionData } from './locations.js';

// Tornar dados globais para o mapa React
window.brazilStates = brazilStates;

let currentLanguage = 'pt';
let audioPlaying = false;
let selectedStates = [];

// Corrigido: agora recebe event
function playAudio(event) {
  event = event || window.event;
  const button = event.target.closest('button');
  const icon = button.querySelector('i');
  if (audioPlaying) {
    audioPlaying = false;
    icon.className = 'fas fa-volume-up';
    button.className = 'bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors';
    showNotification('Áudio parado', 'info');
  } else {
    audioPlaying = true;
    icon.className = 'fas fa-stop';
    button.className = 'bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors';
    showNotification('Reproduzindo áudio descritivo...', 'success');
    setTimeout(() => {
      audioPlaying = false;
      icon.className = 'fas fa-volume-up';
      button.className = 'bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors';
    }, 5000);
  }
}

function simulateQRScan() {
  const scanner = document.querySelector('.qr-scanner');
  scanner.style.borderColor = 'rgba(34, 197, 94, 0.6)';
  scanner.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
  anime({
    targets: scanner,
    scale: [1, 1.05, 1],
    duration: 500,
    easing: 'easeInOutQuad',
    complete: () => {
      setTimeout(() => {
        scanner.style.borderColor = 'rgba(255,255,255,0.3)';
        scanner.style.backgroundColor = 'transparent';
        const locationKeys = Object.keys(locations);
        const randomKey = locationKeys[Math.floor(Math.random() * locationKeys.length)];
        showLocationContent(randomKey);
      }, 1000);
    }
  });
  showNotification('QR Code detectado! Redirecionando...', 'success');
}

function showLocationContent(locationKey) {
  const location = locations[locationKey];
  if (!location) return;
  document.getElementById('contentTitle').textContent = location.name[currentLanguage];
  document.getElementById('contentDescription').textContent = location.description[currentLanguage];
  document.getElementById('locationType').textContent = location.type[currentLanguage];
  document.getElementById('locationIcon').className = `${location.icon} text-8xl text-white/80`;
  const contentSection = document.getElementById('content');
  contentSection.classList.remove('hidden');
  contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  anime({ targets: '.content-card', opacity: [0, 1], translateY: [50, 0], duration: 800, easing: 'easeOutExpo' });
}

function addToItinerary(uf, itemName) {
  const state = brazilStates[uf];
  if (!state) return;
  const exists = selectedStates.some(s => s === uf);
  if (!exists) {
    selectedStates.push(uf);
  }
  updateSelectedStates();
  showNotification(`"${itemName}" adicionado ao roteiro!`, 'success');
}

function removeState(uf) {
  selectedStates = selectedStates.filter(s => s !== uf);
  updateSelectedStates();
}

function updateSelectedStates() {
  const container = document.getElementById('selectedStates');
  if (selectedStates.length === 0) {
    container.innerHTML = `
      <div class="text-center text-gray-500 py-8 col-span-full">
        <i class="fas fa-map-marked-alt text-4xl mb-3"></i>
        <p>Selecione estados ou cidades para criar seu roteiro</p>
      </div>
    `;
    return;
  }
  container.innerHTML = '';
  selectedStates.forEach(uf => {
    const state = brazilStates[uf];
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow-md border-l-4';
    card.style.borderLeftColor = state.color;
    card.innerHTML = `
      <div class="flex justify-between items-start">
        <h4 class="font-semibold text-gray-800">${state.name}</h4>
        <button onclick="removeState('${uf}')" class="text-red-500 hover:text-red-700">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <p class="text-sm text-gray-600 mt-1">${state.history.substring(0, 80)}...</p>
      <div class="text-xs text-gray-500 mt-2">
        <i class="fas fa-map-marker-alt mr-1"></i> ${state.cities.length} cidades
      </div>
    `;
    container.appendChild(card);
  });
}

function clearRoute() {
  selectedStates = [];
  updateSelectedStates();
  showNotification('Roteiro limpo com sucesso!', 'info');
}

function optimizeRoute() {
  if (selectedStates.length < 2) {
    showNotification('Selecione pelo menos 2 estados para otimizar a rota', 'warning');
    return;
  }
  const regionOrder = { 'norte': 1, 'nordeste': 2, 'centro-oeste': 3, 'sudeste': 4, 'sul': 5 };
  selectedStates.sort((a, b) => {
    const stateA = brazilStates[a];
    const stateB = brazilStates[b];
    const regionDiff = regionOrder[stateA.region] - regionOrder[stateB.region];
    if (regionDiff !== 0) return regionDiff;
    return stateA.name.localeCompare(stateB.name);
  });
  updateSelectedStates();
  showNotification('Rota otimizada com sucesso!', 'success');
}

function loadNearbyLocations() {
  const container = document.getElementById('nearbyLocations');
  if (!container) return;
  container.innerHTML = '';
  Object.keys(locations).forEach(key => {
    const location = locations[key];
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer';
    div.onclick = () => showLocationContent(key);
    div.innerHTML = `
      <div class="flex items-center">
        <div class="bg-purple-100 p-3 rounded-full mr-4">
          <i class="${location.icon} text-purple-600 text-xl"></i>
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-800">${location.name[currentLanguage]}</h4>
          <p class="text-gray-600 text-sm">${location.type[currentLanguage]}</p>
        </div>
        <div class="text-gray-400"><i class="fas fa-chevron-right"></i></div>
      </div>
    `;
    container.appendChild(div);
  });
}

function setupLanguageSelector() {
  const selector = document.getElementById('languageSelect');
  selector.addEventListener('change', function() {
    currentLanguage = this.value;
    updateLanguage();
  });
}

function updateLanguage() {
  const heroTitles = {
    pt: 'Histórias no QR',
    en: 'Stories in QR',
    es: 'Historias en QR'
  };
  const heroSubtitles = {
    pt: 'Transformando o Turismo Digital através da tecnologia QR Code',
    en: 'Transforming Digital Tourism through QR Code Technology',
    es: 'Transformando el Turismo Digital a través de la tecnología QR Code'
  };
  document.getElementById('heroTitle').textContent = heroTitles[currentLanguage];
  document.getElementById('heroSubtitle').textContent = heroSubtitles[currentLanguage];
  loadNearbyLocations();
  const contentSection = document.getElementById('content');
  if (!contentSection.classList.contains('hidden')) {
    const currentLocation = document.getElementById('contentTitle').textContent;
    const locationKey = Object.keys(locations).find(key => 
      Object.values(locations[key].name).includes(currentLocation)
    );
    if (locationKey) {
      showLocationContent(locationKey);
    }
  }
  showNotification(`Idioma alterado para ${currentLanguage.toUpperCase()}`, 'info');
}

function scrollToScanner() {
  document.getElementById('scanner').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToMap() {
  document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showOnMap() {
  document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'start' });
  showNotification('Localização exibida no mapa', 'info');
}

function showNotification(message, type = 'info') {
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  const notification = document.createElement('div');
  notification.className = `notification fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white transform translate-x-full transition-transform duration-300`;
  const colors = { success: 'bg-green-500', error: 'bg-red-500', info: 'bg-blue-500', warning: 'bg-yellow-500' };
  notification.classList.add(colors[type] || colors.info);
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => { notification.remove(); }, 300);
  }, 3000);
}

// Observar elementos para animações de rolagem
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('section > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Inicializar app
document.addEventListener('DOMContentLoaded', function() {
  loadNearbyLocations();
  setupLanguageSelector();
  observeElements();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});