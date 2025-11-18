// map.js
class MapNavigator {
  constructor() {
    this.current = {
      region: null,
      state: null,
      city: null
    };
    this.data = null; // será carregado via loadRegions()
  }

  async loadRegions(source = './data/regions.json') {
    try {
      const res = await fetch(source);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.data = await res.json();
      console.log('[map.js] Dados carregados:', Object.keys(this.data.regions));
    } catch (err) {
      console.error('Falha ao carregar dados geográficos:', err);
      this.data = { regions: {} }; // fallback vazio
    }
  }

  setRegion(regionKey) {
    if (!this.data?.regions[regionKey]) {
      console.warn('Região desconhecida:', regionKey);
      return false;
    }
    this.current = { region: regionKey, state: null, city: null };
    this.notifyChange();
    return true;
  }

  setState(stateKey) {
    const region = this.data?.regions[this.current.region];
    if (!region?.states?.[stateKey]) {
      console.warn('Estado desconhecido:', stateKey);
      return false;
    }
    this.current.state = stateKey;
    this.current.city = null;
    this.notifyChange();
    return true;
  }

  setCity(cityKey) {
    const state = this.data?.regions[this.current.region]?.states?.[this.current.state];
    if (!state?.cities?.includes(cityKey)) {
      console.warn('Cidade desconhecida:', cityKey);
      return false;
    }
    this.current.city = cityKey;
    this.notifyChange();
    return true;
  }

  getCurrentPath() {
    const { region, state, city } = this.current;
    return { region, state, city };
  }

  getCurrentData() {
    const { region, state, city } = this.current;
    if (!region) return null;

    const regionData = this.data?.regions[region];
    if (!state) return { type: 'region', key: region, data: regionData };

    const stateData = regionData?.states?.[state];
    if (!city) return { type: 'state', key: state, data: stateData, parent: regionData };

    return {
      type: 'city',
      key: city,
      data: { name: city }, // futuro: buscar em cities.json ou API
      parent: stateData
    };
  }

  notifyChange() {
    document.dispatchEvent(new CustomEvent('map:navigationChange', {
      detail: { path: this.getCurrentPath(), data: this.getCurrentData() }
    }));
  }

  // Métodos utilitários
  getRegionName(regionKey) {
    return this.data?.regions[regionKey]?.name || regionKey;
  }

  getStateName(regionKey, stateKey) {
    return this.data?.regions[regionKey]?.states?.[stateKey]?.name || stateKey;
  }
}

// Instância global (singleton)
const mapNavigator = new MapNavigator();

// Pré-carrega dados ao iniciar (opcional — pode ser chamado manualmente)
document.addEventListener('DOMContentLoaded', () => {
  // mapNavigator.loadRegions(); // descomente quando tiver o JSON
});

// Exporta para uso em outros módulos
window.mapNavigator = mapNavigator;
if (typeof module !== 'undefined') module.exports = { MapNavigator, mapNavigator };