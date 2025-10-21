// Location data with multilingual content
const locations = {
    theatro: {
        name: {
            pt: "Theatro Municipal",
            en: "Municipal Theater",
            es: "Teatro Municipal"
        },
        description: {
            pt: "Construído em 1909, este teatro é um dos mais importantes palcos culturais da cidade. Sua arquitetura neoclássica e seu interior ornamentado contam a história da vida cultural da região. Já recebeu apresentações de artistas renomados e é considerado patrimônio histórico.",
            en: "Built in 1909, this theater is one of the most important cultural venues in the city. Its neoclassical architecture and ornate interior tell the story of the region's cultural life. It has hosted performances by renowned artists and is considered a historical heritage site.",
            es: "Construido en 1909, este teatro es uno de los escenarios culturales más importantes de la ciudad. Su arquitectura neoclásica y su interior ornamentado cuentan la historia de la vida cultural de la región. Ha recibido presentaciones de artistas renombrados y es considerado patrimonio histórico."
        },
        type: {
            pt: "Patrimônio Cultural",
            en: "Cultural Heritage",
            es: "Patrimonio Cultural"
        },
        icon: "fas fa-theater-masks",
        coordinates: { lat: -19.9167, lng: -43.9345 }
    },
    mercado: {
        name: {
            pt: "Mercado Central",
            en: "Central Market",
            es: "Mercado Central"
        },
        description: {
            pt: "Fundado em 1929, o Mercado Central é um dos pontos comerciais mais tradicionais da cidade. Com mais de 400 lojas, oferece desde produtos locais até artesanato. A estrutura em ferro e vidro é um exemplo da arquitetura industrial do início do século XX.",
            en: "Founded in 1929, the Central Market is one of the city's most traditional commercial points. With over 400 stores, it offers everything from local products to handicrafts. The iron and glass structure is an example of early 20th century industrial architecture.",
            es: "Fundado en 1929, el Mercado Central es uno de los puntos comerciales más tradicionales de la ciudad. Con más de 400 tiendas, ofrece desde productos locales hasta artesanías. La estructura de hierro y vidrio es un ejemplo de la arquitetura industrial del siglo XX."
        },
        type: {
            pt: "Centro Comercial",
            en: "Commercial Center",
            es: "Centro Comercial"
        },
        icon: "fas fa-shopping-basket",
        coordinates: { lat: -19.9200, lng: -43.9370 }
    },
    catedral: {
        name: {
            pt: "Catedral Metropolitana",
            en: "Metropolitan Cathedral",
            es: "Catedral Metropolitana"
        },
        description: {
            pt: "Inaugurada em 1932, a Catedral Metropolitana é um dos principais templos religiosos da cidade. Sua arquitetura gótica inspirada nas catedrais europeias impressiona pelos vitrais coloridos e pela imponente fachada. É um importante centro de peregrinação.",
            en: "Inaugurated in 1932, the Metropolitan Cathedral is one of the main religious temples in the city. Its Gothic architecture inspired by European cathedrals impresses with its colorful stained glass windows and imposing facade. It is an important pilgrimage center.",
            es: "Inaugurada en 1932, la Catedral Metropolitana es uno de los principales templos religiosos de la ciudad. Su arquitectura gótica inspirada en las catedrales europeias impresiona por sus vitrales de colores y su imponente fachada. Es un importante centro de peregrinación."
        },
        type: {
            pt: "Patrimônio Religioso",
            en: "Religious Heritage",
            es: "Patrimonio Religioso"
        },
        icon: "fas fa-church",
        coordinates: { lat: -19.9150, lng: -43.9380 }
    }
};

// Brazilian States Data
const brazilStates = {
    'AC': {
        name: 'Acre',
        region: 'norte',
        position: { top: '45%', left: '15%' },
        color: '#10b981',
        description: 'Estado da Amazônia Ocidental, conhecido pela produção de borracha e castanha-do-pará.',
        cities: ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira'],
        attractions: ['Parque Nacional da Serra do Divisor', 'Reserva Extrativista do Alto Juruá']
    },
    'AL': {
        name: 'Alagoas',
        region: 'nordeste',
        position: { top: '35%', left: '75%' },
        color: '#f59e0b',
        description: 'Estado litorâneo com belas praias e rica cultura nordestina.',
        cities: ['Maceió', 'Arapiraca', 'Rio Largo'],
        attractions: ['Praia do Gunga', 'Maragogi', 'Foz do São Francisco']
    },
    'AP': {
        name: 'Amapá',
        region: 'norte',
        position: { top: '15%', left: '65%' },
        color: '#10b981',
        description: 'Estado do extremo norte do Brasil, com grande diversidade de fauna e flora.',
        cities: ['Macapá', 'Santana', 'Laranjal do Jari'],
        attractions: ['Parque Nacional Montanhas do Tumucumaque', 'Forte São José de Macapá']
    },
    'AM': {
        name: 'Amazonas',
        region: 'norte',
        position: { top: '35%', left: '45%' },
        color: '#10b981',
        description: 'Maior estado do Brasil, coração da Amazônia.',
        cities: ['Manaus', 'Parintins', 'Itacoatiara'],
        attractions: ['Teatro Amazonas', 'Encontro das Águas', 'Parque Nacional de Anavilhanas']
    },
    'BA': {
        name: 'Bahia',
        region: 'nordeste',
        position: { top: '45%', left: '65%' },
        color: '#f59e0b',
        description: 'Estado com rica herança cultural africana e belas praias.',
        cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista'],
        attractions: ['Pelourinho', 'Chapada Diamantina', 'Porto Seguro']
    },
    'CE': {
        name: 'Ceará',
        region: 'nordeste',
        position: { top: '25%', left: '70%' },
        color: '#f59e0b',
        description: 'Estado litorâneo com dunas e praias paradisíacas.',
        cities: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte'],
        attractions: ['Canoa Quebrada', 'Jericoacoara', 'Pedra da Galinha Choca']
    },
    'DF': {
        name: 'Distrito Federal',
        region: 'centro-oeste',
        position: { top: '50%', left: '55%' },
        color: '#8b5cf6',
        description: 'Capital federal do Brasil, com arquitetura moderna e planejada.',
        cities: ['Brasília', 'Taguatinga', 'Ceilândia'],
        attractions: ['Catedral Metropolitana', 'Congresso Nacional', 'Ponte JK']
    },
    'ES': {
        name: 'Espírito Santo',
        region: 'sudeste',
        position: { top: '65%', left: '70%' },
        color: '#3b82f6',
        description: 'Estado litorâneo com praias e montanhas.',
        cities: ['Vitória', 'Vila Velha', 'Serra'],
        attractions: ['Convento da Penha', 'Praia da Costa', 'Parque Nacional do Caparaó']
    },
    'GO': {
        name: 'Goiás',
        region: 'centro-oeste',
        position: { top: '55%', left: '58%' },
        color: '#8b5cf6',
        description: 'Estado do Cerrado com rica fauna e flora.',
        cities: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis'],
        attractions: ['Chapada dos Veadeiros', 'Caldas Novas', 'Pirenópolis']
    },
    'MA': {
        name: 'Maranhão',
        region: 'nordeste',
        position: { top: '30%', left: '65%' },
        color: '#f59e0b',
        description: 'Estado com diversidade de ecossistemas, desde praias até a Amazônia.',
        cities: ['São Luís', 'Imperatriz', 'São José de Ribamar'],
        attractions: ['Lençóis Maranhenses', 'Centro Histórico de São Luís', 'Delta do Parnaíba']
    },
    'MT': {
        name: 'Mato Grosso',
        region: 'centro-oeste',
        position: { top: '50%', left: '45%' },
        color: '#8b5cf6',
        description: 'Estado do Pantanal e da Amazônia, com grande biodiversidade.',
        cities: ['Cuiabá', 'Várzea Grande', 'Rondonópolis'],
        attractions: ['Pantanal', 'Chapada dos Guimarães', 'Cristalino']
    },
    'MS': {
        name: 'Mato Grosso do Sul',
        region: 'centro-oeste',
        position: { top: '65%', left: '48%' },
        color: '#8b5cf6',
        description: 'Estado do Pantanal Sul-mato-grossense.',
        cities: ['Campo Grande', 'Dourados', 'Três Lagoas'],
        attractions: ['Pantanal Sul', 'Bonito', 'Campo Grande']
    },
    'MG': {
        name: 'Minas Gerais',
        region: 'sudeste',
        position: { top: '65%', left: '62%' },
        color: '#3b82f6',
        description: 'Estado histórico com cidades barrocas e culinária tradicional.',
        cities: ['Belo Horizonte', 'Uberlândia', 'Contagem'],
        attractions: ['Ouro Preto', 'Tiradentes', 'Inhotim']
    },
    'PA': {
        name: 'Pará',
        region: 'norte',
        position: { top: '35%', left: '55%' },
        color: '#10b981',
        description: 'Estado amazônico com rica cultura paraense.',
        cities: ['Belém', 'Ananindeua', 'Santarém'],
        attractions: ['Mercado Ver-o-Peso', 'Ilha de Marajó', 'Círio de Nazaré']
    },
    'PB': {
        name: 'Paraíba',
        region: 'nordeste',
        position: { top: '30%', left: '78%' },
        color: '#f59e0b',
        description: 'Estado litorâneo com praias e sertão.',
        cities: ['João Pessoa', 'Campina Grande', 'Santa Rita'],
        attractions: ['Praia de Tambaba', 'Centro Histórico de João Pessoa', 'Forte de Santa Catarina']
    },
    'PR': {
        name: 'Paraná',
        region: 'sul',
        position: { top: '75%', left: '58%' },
        color: '#ef4444',
        description: 'Estado com diversidade de ecossistemas e economia forte.',
        cities: ['Curitiba', 'Londrina', 'Maringá'],
        attractions: ['Cataratas do Iguaçu', 'Vila Velha', 'Museu Oscar Niemeyer']
    },
    'PE': {
        name: 'Pernambuco',
        region: 'nordeste',
        position: { top: '35%', left: '75%' },
        color: '#f59e0b',
        description: 'Estado com rica história colonial e belas praias.',
        cities: ['Recife', 'Olinda', 'Caruaru'],
        attractions: ['Recife Antigo', 'Porto de Galinhas', 'Olinda']
    },
    'PI': {
        name: 'Piauí',
        region: 'nordeste',
        position: { top: '30%', left: '65%' },
        color: '#f59e0b',
        description: 'Estado com sertão e litoral, rico em cultura nordestina.',
        cities: ['Teresina', 'Parnaíba', 'Picos'],
        attractions: ['Parque Nacional de Sete Cidades', 'Delta do Parnaíba', 'Capitão Gervásio']
    },
    'RJ': {
        name: 'Rio de Janeiro',
        region: 'sudeste',
        position: { top: '70%', left: '68%' },
        color: '#3b82f6',
        description: 'Estado famoso por suas praias, montanhas e cultura.',
        cities: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias'],
        attractions: ['Cristo Redentor', 'Pão de Açúcar', 'Copacabana']
    },
    'RN': {
        name: 'Rio Grande do Norte',
        region: 'nordeste',
        position: { top: '25%', left: '78%' },
        color: '#f59e0b',
        description: 'Estado litorâneo com dunas e praias.',
        cities: ['Natal', 'Mossoró', 'Parnamirim'],
        attractions: ['Dunas de Genipabu', 'Forte dos Reis Magos', 'Pipa']
    },
    'RS': {
        name: 'Rio Grande do Sul',
        region: 'sul',
        position: { top: '85%', left: '55%' },
        color: '#ef4444',
        description: 'Estado gaúcho com cultura própria e paisagens diversas.',
        cities: ['Porto Alegre', 'Caxias do Sul', 'Pelotas'],
        attractions: ['Gramado', 'Canela', 'Serra Gaúcha']
    },
    'RO': {
        name: 'Rondônia',
        region: 'norte',
        position: { top: '50%', left: '25%' },
        color: '#10b981',
        description: 'Estado da Amazônia Sul-ocidental.',
        cities: ['Porto Velho', 'Ji-Paraná', 'Ariquemes'],
        attractions: ['Parque Nacional de Pacaás Novos', 'Cachoeira do Teotônio', 'Museu da Estrada de Ferro']
    },
    'RR': {
        name: 'Roraima',
        region: 'norte',
        position: { top: '15%', left: '45%' },
        color: '#10b981',
        description: 'Estado do extremo norte, com Montanha do Pico da Neblina.',
        cities: ['Boa Vista', 'Rorainópolis', 'Caracaraí'],
        attractions: ['Monte Roraima', 'Parque Nacional do Viruá', 'Serra do Tepequém']
    },
    'SC': {
        name: 'Santa Catarina',
        region: 'sul',
        position: { top: '80%', left: '60%' },
        color: '#ef4444',
        description: 'Estado litorâneo com praias e montanhas.',
        cities: ['Florianópolis', 'Joinville', 'Blumenau'],
        attractions: ['Florianópolis', 'Serra Catarinense', 'Ilha de Santa Catarina']
    },
    'SP': {
        name: 'São Paulo',
        region: 'sudeste',
        position: { top: '70%', left: '62%' },
        color: '#3b82f6',
        description: 'Maior estado do Brasil em população, centro financeiro e cultural.',
        cities: ['São Paulo', 'Guarulhos', 'Campinas'],
        attractions: ['Avenida Paulista', 'Museu de Arte de São Paulo', 'Parque Ibirapuera']
    },
    'SE': {
        name: 'Sergipe',
        region: 'nordeste',
        position: { top: '45%', left: '78%' },
        color: '#f59e0b',
        description: 'Menor estado do Brasil, com belas praias e cultura nordestina.',
        cities: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto'],
        attractions: ['Praia de Atalaia', 'Parque dos Falcões', 'São Cristóvão']
    },
    'TO': {
        name: 'Tocantins',
        region: 'norte',
        position: { top: '45%', left: '55%' },
        color: '#10b981',
        description: 'Estado do cerrado, com grande potencial turístico.',
        cities: ['Palmas', 'Araguaína', 'Gurupi'],
        attractions: ['Jalapão', 'Ilha do Bananal', 'Catedral de Palmas']
    }
};

let currentLanguage = 'pt';
let audioPlaying = false;
let selectedStates = [];
let currentRegion = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    loadNearbyLocations();
    setupLanguageSelector();
    createBrazilMap();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Initialize animations
function initializeAnimations() {
    // Hero title animation
    anime({
        targets: '#heroTitle',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 500
    });

    // Hero subtitle animation
    anime({
        targets: '#heroSubtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 800
    });

    // Floating elements animation
    anime({
        targets: '.floating-animation',
        opacity: [0, 0.2],
        scale: [0.8, 1],
        duration: 1500,
        easing: 'easeOutExpo',
        delay: anime.stagger(200, {start: 1200})
    });
}

// Create Brazil Map
function createBrazilMap() {
    const container = document.getElementById('stateButtons');
    if (!container) return;

    container.innerHTML = '';
    
    Object.keys(brazilStates).forEach(uf => {
        const state = brazilStates[uf];
        const button = document.createElement('button');
        button.className = 'state-button';
        button.style.top = state.position.top;
        button.style.left = state.position.left;
        button.style.backgroundColor = state.color;
        button.textContent = uf;
        button.onclick = () => selectState(uf);
        button.dataset.region = state.region;
        
        container.appendChild(button);
    });
}

// Filter states by region
function filterByRegion(region) {
    currentRegion = region;
    
    // Update filter buttons
    document.querySelectorAll('.region-filter').forEach(btn => {
        btn.classList.remove('active', 'bg-purple-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('active', 'bg-purple-600', 'text-white');
    
    // Show/hide states
    document.querySelectorAll('.state-button').forEach(button => {
        if (region === 'all' || button.dataset.region === region) {
            button.style.display = 'flex';
            anime({
                targets: button,
                opacity: [0, 1],
                scale: [0.5, 1],
                duration: 300,
                easing: 'easeOutQuad'
            });
        } else {
            button.style.display = 'none';
        }
    });
}

// Select state
function selectState(uf) {
    const state = brazilStates[uf];
    if (!state) return;
    
    // Toggle selection
    const button = document.querySelector(`.state-button:nth-child(${Object.keys(brazilStates).indexOf(uf) + 1})`);
    const isSelected = selectedStates.includes(uf);
    
    if (isSelected) {
        // Remove from selection
        selectedStates = selectedStates.filter(s => s !== uf);
        button.classList.remove('selected');
    } else {
        // Add to selection
        selectedStates.push(uf);
        button.classList.add('selected');
        
        // Show state info
        showStateInfo(uf);
    }
    
    updateSelectedStates();
    
    // Animate button
    anime({
        targets: button,
        scale: [1, 1.2, 1],
        duration: 400,
        easing: 'easeOutElastic(1, .6)'
    });
}

// Show state info
function showStateInfo(uf) {
    const state = brazilStates[uf];
    const infoPanel = document.getElementById('stateInfo');
    const button = document.querySelector(`.state-button:nth-child(${Object.keys(brazilStates).indexOf(uf) + 1})`);
    
    // Position info panel near the button
    const rect = button.getBoundingClientRect();
    const mapRect = document.querySelector('.brazil-map').getBoundingClientRect();
    
    infoPanel.style.top = (rect.top - mapRect.top + 50) + 'px';
    infoPanel.style.left = (rect.left - mapRect.left) + 'px';
    
    // Update content
    document.getElementById('stateName').textContent = state.name;
    document.getElementById('stateDescription').textContent = state.description;
    
    const citiesContainer = document.getElementById('stateCities');
    citiesContainer.innerHTML = '';
    
    state.cities.forEach(city => {
        const cityElement = document.createElement('div');
        cityElement.className = 'text-sm text-gray-700 flex items-center';
        cityElement.innerHTML = `<i class="fas fa-map-marker-alt text-red-500 mr-2"></i>${city}`;
        citiesContainer.appendChild(cityElement);
    });
    
    infoPanel.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        infoPanel.style.display = 'none';
    }, 5000);
}

// Close state info
function closeStateInfo() {
    document.getElementById('stateInfo').style.display = 'none';
}

// Update selected states panel
function updateSelectedStates() {
    const container = document.getElementById('selectedStates');
    
    if (selectedStates.length === 0) {
        container.innerHTML = `
            <div class="text-center text-gray-500 py-8 col-span-full">
                <i class="fas fa-map-marked-alt text-4xl mb-3"></i>
                <p>Selecione estados no mapa para criar seu roteiro</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    selectedStates.forEach((uf, index) => {
        const state = brazilStates[uf];
        const stateCard = document.createElement('div');
        stateCard.className = 'bg-white p-4 rounded-lg shadow-md border-l-4';
        stateCard.style.borderLeftColor = state.color;
        
        stateCard.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-semibold text-gray-800">${state.name}</h4>
                <button onclick="removeState('${uf}')" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <p class="text-sm text-gray-600 mb-2">${state.description.substring(0, 80)}...</p>
            <div class="flex items-center text-xs text-gray-500">
                <i class="fas fa-map-marker-alt mr-1"></i>
                <span>${state.cities.length} cidades principais</span>
            </div>
        `;
        
        container.appendChild(stateCard);
    });
    
    // Draw routes between selected states
    drawRoutes();
}

// Remove state from selection
function removeState(uf) {
    selectedStates = selectedStates.filter(s => s !== uf);
    const button = document.querySelector(`.state-button:nth-child(${Object.keys(brazilStates).indexOf(uf) + 1})`);
    button.classList.remove('selected');
    updateSelectedStates();
}

// Draw routes between selected states
function drawRoutes() {
    const container = document.getElementById('routeLines');
    container.innerHTML = '';
    
    if (selectedStates.length < 2) return;
    
    for (let i = 0; i < selectedStates.length - 1; i++) {
        const fromState = brazilStates[selectedStates[i]];
        const toState = brazilStates[selectedStates[i + 1]];
        
        const line = document.createElement('div');
        line.className = 'route-line';
        
        // Calculate line position and rotation
        const fromPos = fromState.position;
        const toPos = toState.position;
        
        const fromTop = parseFloat(fromPos.top);
        const fromLeft = parseFloat(fromPos.left);
        const toTop = parseFloat(toPos.top);
        const toLeft = parseFloat(toPos.left);
        
        const length = Math.sqrt(Math.pow(toLeft - fromLeft, 2) + Math.pow(toTop - fromTop, 2));
        const angle = Math.atan2(toTop - fromTop, toLeft - fromLeft) * 180 / Math.PI;
        
        line.style.width = length + '%';
        line.style.top = fromPos.top;
        line.style.left = fromPos.left;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = '0 50%';
        
        container.appendChild(line);
    }
}

// Clear all routes
function clearRoute() {
    selectedStates.forEach(uf => {
        const button = document.querySelector(`.state-button:nth-child(${Object.keys(brazilStates).indexOf(uf) + 1})`);
        button.classList.remove('selected');
    });
    
    selectedStates = [];
    updateSelectedStates();
    showNotification('Roteiro limpo com sucesso!', 'info');
}

// Optimize route
function optimizeRoute() {
    if (selectedStates.length < 2) {
        showNotification('Selecione pelo menos 2 estados para otimizar a rota', 'warning');
        return;
    }
    
    // Simple optimization: sort by geographic proximity
    selectedStates.sort((a, b) => {
        const stateA = brazilStates[a];
        const stateB = brazilStates[b];
        
        // Sort by region first, then by position
        const regionOrder = { 'norte': 1, 'nordeste': 2, 'centro-oeste': 3, 'sudeste': 4, 'sul': 5 };
        const regionDiff = regionOrder[stateA.region] - regionOrder[stateB.region];
        
        if (regionDiff !== 0) return regionDiff;
        
        // Within same region, sort by left position
        return parseFloat(stateA.position.left) - parseFloat(stateB.position.left);
    });
    
    updateSelectedStates();
    showNotification('Rota otimizada com sucesso!', 'success');
}

// Load nearby locations
function loadNearbyLocations() {
    const container = document.getElementById('nearbyLocations');
    if (!container) return;

    container.innerHTML = '';
    
    Object.keys(locations).forEach(key => {
        const location = locations[key];
        const locationElement = createLocationElement(key, location);
        container.appendChild(locationElement);
    });
}

// Create location element
function createLocationElement(key, location) {
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
            <div class="text-gray-400">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    `;
    
    return div;
}

// Show location content
function showLocationContent(locationKey) {
    const location = locations[locationKey];
    if (!location) return;

    // Update content
    document.getElementById('contentTitle').textContent = location.name[currentLanguage];
    document.getElementById('contentDescription').textContent = location.description[currentLanguage];
    document.getElementById('locationType').textContent = location.type[currentLanguage];
    document.getElementById('locationIcon').className = `${location.icon} text-8xl text-white/80`;
    
    // Show content section
    const contentSection = document.getElementById('content');
    contentSection.classList.remove('hidden');
    
    // Smooth scroll to content
    contentSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Animate content appearance
    anime({
        targets: '.content-card',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        easing: 'easeOutExpo'
    });
}

// Simulate QR Code scan
function simulateQRScan() {
    // Show scanning animation
    const scanner = document.querySelector('.qr-scanner');
    scanner.style.borderColor = 'rgba(34, 197, 94, 0.6)';
    scanner.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
    
    // Animate scanner
    anime({
        targets: scanner,
        scale: [1, 1.05, 1],
        duration: 500,
        easing: 'easeInOutQuad',
        complete: () => {
            // Reset scanner appearance
            setTimeout(() => {
                scanner.style.borderColor = 'rgba(255,255,255,0.3)';
                scanner.style.backgroundColor = 'transparent';
                
                // Show random location content
                const locationKeys = Object.keys(locations);
                const randomKey = locationKeys[Math.floor(Math.random() * locationKeys.length)];
                showLocationContent(randomKey);
            }, 1000);
        }
    });
    
    // Show feedback
    showNotification('QR Code detectado! Redirecionando...', 'success');
}

// Setup language selector
function setupLanguageSelector() {
    const selector = document.getElementById('languageSelect');
    selector.addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
    });
}

// Update language throughout the app
function updateLanguage() {
    // Update hero content based on language
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
    
    // Reload nearby locations with new language
    loadNearbyLocations();
    
    // Update content section if visible
    const contentSection = document.getElementById('content');
    if (!contentSection.classList.contains('hidden')) {
        const currentLocation = document.getElementById('contentTitle').textContent;
        // Find location key by name (simplified approach)
        const locationKey = Object.keys(locations).find(key => 
            Object.values(locations[key].name).includes(currentLocation)
        );
        if (locationKey) {
            showLocationContent(locationKey);
        }
    }
    
    showNotification(`Idioma alterado para ${currentLanguage.toUpperCase()}`, 'info');
}

// Play audio description
function playAudio() {
    const button = event.target.closest('button');
    const icon = button.querySelector('i');
    
    if (audioPlaying) {
        // Stop audio
        audioPlaying = false;
        icon.className = 'fas fa-volume-up';
        button.className = 'bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors';
        showNotification('Áudio parado', 'info');
    } else {
        // Play audio
        audioPlaying = true;
        icon.className = 'fas fa-stop';
        button.className = 'bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors';
        showNotification('Reproduzindo áudio descritivo...', 'success');
        
        // Simulate audio duration
        setTimeout(() => {
            audioPlaying = false;
            icon.className = 'fas fa-volume-up';
            button.className = 'bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors';
        }, 5000);
    }
}

// Show location on map
function showOnMap() {
    const mapSection = document.getElementById('map');
    mapSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    showNotification('Localização exibida no mapa', 'info');
}

// Utility functions
function scrollToScanner() {
    document.getElementById('scanner').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToMap() {
    document.getElementById('map').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white transform translate-x-full transition-transform duration-300`;
    
    // Set color based on type
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500'
    };
    
    notification.classList.add(colors[type] || colors.info);
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add scroll animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for scroll animations
    document.querySelectorAll('section > div').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', observeElements);
