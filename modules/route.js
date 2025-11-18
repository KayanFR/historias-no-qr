// route.js
class RouteManager {
  constructor(key = 'brasilqr-routes') {
    this.storageKey = key;
    this.routes = this.load();
  }

  load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : { current: [], saved: [] };
    } catch (e) {
      console.warn('Falha ao carregar rotas:', e);
      return { current: [], saved: [] };
    }
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.routes));
    } catch (e) {
      console.error('Falha ao salvar rotas:', e);
    }
  }

  addToCurrent(location) {
    // location = { type: 'city', region: 'sudeste', state: 'sp', city: 'sao-paulo', name: 'São Paulo' }
    if (!location?.name) return false;
    this.routes.current.push({ ...location, timestamp: Date.now() });
    this.save();
    this.notify();
    return true;
  }

  saveCurrentAs(name) {
    if (this.routes.current.length === 0) return false;
    this.routes.saved.push({
      name: name || `Roteiro ${new Date().toLocaleDateString('pt-BR')}`,
      locations: [...this.routes.current],
      createdAt: Date.now()
    });
    this.routes.current = [];
    this.save();
    this.notify();
    return true;
  }

  getRoutes() {
    return { ...this.routes };
  }

  notify() {
    document.dispatchEvent(new CustomEvent('route:updated', { detail: this.routes }));
  }

  clearCurrent() {
    this.routes.current = [];
    this.save();
    this.notify();
  }

  // Utilitário: formata rota para exibição
  formatRoute(locations) {
    return locations.map(loc => loc.name).join(' → ');
  }
}

const routeManager = new RouteManager();

// Ex: ao selecionar uma cidade, adicionar ao roteiro atual
document.addEventListener('map:navigationChange', e => {
  const data = e.detail.data;
  if (data?.type === 'city') {
    routeManager.addToCurrent({
      type: 'city',
      region: e.detail.path.region,
      state: e.detail.path.state,
      city: e.detail.path.city,
      name: data.data.name || e.detail.path.city
    });
  }
});

window.routeManager = routeManager;
if (typeof module !== 'undefined') module.exports = { RouteManager, routeManager };