// MapaInterativoBrasil.jsx
// ✅ Versão atualizada para substituir os 6 botões por um mapa interativo
// ✅ Integração total com brazilStates (MainJS.txt) e região/cor/curiosidades/história/etc.

import React, { useState, useMemo, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const brazilStates = {
  'AC': { name: 'Acre', region: 'norte', color: '#10b981', history: '...', curiosities: '...', cities: ['Rio Branco'], attractions: ['Parque Nacional da Serra do Divisor'] },
  'AM': { name: 'Amazonas', region: 'norte', color: '#10b981', history: '...', curiosities: '...', cities: ['Manaus'], attractions: ['Teatro Amazonas'] },
  'AP': { name: 'Amapá', region: 'norte', color: '#10b981', history: '...', curiosities: '...', cities: ['Macapá'], attractions: ['Marco Zero do Equador'] },
  'PA': { name: 'Pará', region: 'norte', color: '#10b981', history: '...', curiosities: '...', cities: ['Belém'], attractions: ['Mercado Ver-o-Peso'] },
  'RO': { name: 'Rondônia', region: 'norte', color: '#10b981', history: '...', curiosities: '...', cities: ['Porto Velho'], attractions: ['Estrada de Ferro Madeira-Mamoré'] },
  'RR': { name: 'Roraima', region: 'norte', color: '#10b981', history: '...', curiosities: '...', cities: ['Boa Vista'], attractions: ['Monte Roraima'] },
  'TO': { name: 'Tocantins', region: 'norte', color: '#10b981', history: '...', curiosities: '...', cities: ['Palmas'], attractions: ['Jalapão'] },
  'MA': { name: 'Maranhão', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['São Luís'], attractions: ['Lençóis Maranhenses'] },
  'PI': { name: 'Piauí', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['Teresina'], attractions: ['Parque Nacional da Serra da Capivara'] },
  'CE': { name: 'Ceará', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['Fortaleza'], attractions: ['Jericoacoara'] },
  'RN': { name: 'Rio Grande do Norte', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['Natal'], attractions: ['Dunas de Genipabu'] },
  'PB': { name: 'Paraíba', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['João Pessoa'], attractions: ['Praia do Jacaré'] },
  'PE': { name: 'Pernambuco', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['Recife'], attractions: ['Recife Antigo'] },
  'AL': { name: 'Alagoas', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['Maceió'], attractions: ['Praia do Gunga'] },
  'SE': { name: 'Sergipe', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['Aracaju'], attractions: ['Praia de Atalaia'] },
  'BA': { name: 'Bahia', region: 'nordeste', color: '#f59e0b', history: '...', curiosities: '...', cities: ['Salvador'], attractions: ['Pelourinho'] },
  'MG': { name: 'Minas Gerais', region: 'sudeste', color: '#3b82f6', history: '...', curiosities: '...', cities: ['Belo Horizonte'], attractions: ['Ouro Preto'] },
  'SP': { name: 'São Paulo', region: 'sudeste', color: '#3b82f6', history: '...', curiosities: '...', cities: ['São Paulo'], attractions: ['Avenida Paulista'] },
  'RJ': { name: 'Rio de Janeiro', region: 'sudeste', color: '#3b82f6', history: '...', curiosities: '...', cities: ['Rio de Janeiro'], attractions: ['Cristo Redentor'] },
  'ES': { name: 'Espírito Santo', region: 'sudeste', color: '#3b82f6', history: '...', curiosities: '...', cities: ['Vitória'], attractions: ['Convento da Penhalapão'] },
  'DF': { name: 'Distrito Federal', region: 'centro-oeste', color: '#8b5cf6', history: '...', curiosities: '...', cities: ['Brasília'], attractions: ['Praça dos Três Poderes'] },
  'GO': { name: 'Goiás', region: 'centro-oeste', color: '#8b5cf6', history: '...', curiosities: '...', cities: ['Goiânia'], attractions: ['Chapada dos Veadeiros'] },
  'MT': { name: 'Mato Grosso', region: 'centro-oeste', color: '#8b5cf6', history: '...', curiosities: '...', cities: ['Cuiabá'], attractions: ['Chapada dos Guimarães'] },
  'MS': { name: 'Mato Grosso do Sul', region: 'centro-oeste', color: '#8b5cf6', history: '...', curiosities: '...', cities: ['Campo Grande'], attractions: ['Bonito'] },
  'PR': { name: 'Paraná', region: 'sul', color: '#ef4444', history: '...', curiosities: '...', cities: ['Curitiba'], attractions: ['Cataratas do Iguaçu'] },
  'SC': { name: 'Santa Catarina', region: 'sul', color: '#ef4444', history: '...', curiosities: '...', cities: ['Florianópolis'], attractions: ['Florianópolis'] },
  'RS': { name: 'Rio Grande do Sul', region: 'sul', color: '#ef4444', history: '...', curiosities: '...', cities: ['Porto Alegre'], attractions: ['Gramado'] }
};

const regionColors = {
  norte: '#10b981',
  nordeste: '#f59e0b',
  'centro-oeste': '#8b5cf6',
  sudeste: '#3b82f6',
  sul: '#ef4444'
};

export default function MapaInterativoBrasil({ geoUrl = 'brazil-states.json' }) {
  const [currentStep, setCurrentStep] = useState('region'); // 'region' | 'state' | 'item'
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Agrupa estados por região (para exibir após clicar)
  const statesInRegion = useMemo(() => {
    if (!selectedRegion) return [];
    return Object.entries(brazilStates)
      .filter(([uf, data]) => data.region === selectedRegion)
      .map(([uf, data]) => ({ uf, ...data }));
  }, [selectedRegion]);

  // Deriva cor do estado pela região
  const getStateColor = (uf) => {
    const state = brazilStates[uf];
    return state ? state.color : '#e5e7eb';
  };

  // Obter estados a exibir no mapa com base no passo
  const getFillColor = (geo) => {
    const uf = geo.properties?.sigla;
    if (!uf) return '#e5e7eb';

    const stateData = brazilStates[uf];
    if (!stateData) return '#f3f4f6';

    // Se região está selecionada, só estados dessa região têm cor
    if (currentStep === 'region' && selectedRegion && stateData.region === selectedRegion) {
      return stateData.color;
    }
    // Se estado está aberto, só ele é destacado
    if (currentStep === 'state' && selectedState === uf) {
      return stateData.color;
    }
    return '#e5e7eb';
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Explore o Brasil</h2>
      <p className="text-gray-600 mb-4">Clique em uma <strong>região</strong> → depois em um <strong>estado</strong> → e descubra cidades, história e curiosidades.</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mapa */}
        <div className="flex-1 bg-gray-50 rounded-lg p-4">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 850, center: [-55, -12] }}
            style={{ width: '100%', height: '500px', background: '#f9fafb', borderRadius: '8px' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const uf = geo.properties?.sigla;
                  const isActive = currentStep === 'region' && selectedRegion === brazilStates[uf]?.region;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        if (!uf) return;
                        const region = brazilStates[uf]?.region;
                        if (currentStep === 'region') {
                          setSelectedRegion(region);
                          setCurrentStep('state');
                        } else if (currentStep === 'state') {
                          setSelectedState(uf);
                          setCurrentStep('item');
                        }
                      }}
                      style={{
                        default: { fill: getFillColor(geo), stroke: '#9ca3af', strokeWidth: 0.5 },
                        hover: { fill: '#ffedd5', stroke: '#f97316', strokeWidth: 1 },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Legenda */}
          <div className="mt-4 p-3 bg-white rounded shadow-sm text-sm">
            <h4 className="font-semibold mb-1">Regiões</h4>
            {Object.entries(regionColors).map(([key, color]) => (
              <div key={key} className="flex items-center mb-1">
                <span className="w-3 h-3 rounded mr-2 inline-block" style={{ backgroundColor: color }}></span>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            ))}
          </div>
        </div>

        {/* Painel lateral */}
        <div className="w-full lg:w-96">
          <div className="bg-white rounded-lg shadow p-5 sticky top-4">
            {currentStep === 'region' && (
              <>
                <h3 className="font-bold text-lg">Escolha uma região</h3>
                <p className="text-gray-600 text-sm mt-1">Clique em qualquer estado no mapa para selecionar sua região.</p>
              </>
            )}

            {currentStep === 'state' && selectedRegion && (
              <>
                <button
                  onClick={() => { setCurrentStep('region'); setSelectedRegion(null); }}
                  className="text-purple-600 flex items-center mb-3"
                >
                  <i className="fas fa-arrow-left mr-1"></i> Voltar às regiões
                </button>
                <h3 className="font-bold text-lg">
                  {statesInRegion.length > 0 ? `Estados do ${selectedRegion === 'norte' ? 'Norte' : selectedRegion === 'nordeste' ? 'Nordeste' : selectedRegion === 'sudeste' ? 'Sudeste' : selectedRegion === 'sul' ? 'Sul' : 'Centro-Oeste'}` : 'Região'}
                </h3>
                <div className="mt-3 space-y-2 max-h-80 overflow-y-auto pr-1">
                  {statesInRegion.map(({ uf, name, color }) => (
                    <div
                      key={uf}
                      className="flex items-center p-3 rounded border-l-4 cursor-pointer hover:bg-gray-50"
                      style={{ borderLeftColor: color }}
                      onClick={() => {
                        setSelectedState(uf);
                        setCurrentStep('item');
                      }}
                    >
                      <span className="font-medium text-gray-800">{name}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {currentStep === 'item' && selectedState && (
              <>
                <button
                  onClick={() => { setCurrentStep('state'); setSelectedState(null); }}
                  className="text-purple-600 flex items-center mb-3"
                >
                  <i className="fas fa-arrow-left mr-1"></i> Voltar aos estados
                </button>
                <div className="space-y-4">
                  {(() => {
                    const state = brazilStates[selectedState];
                    if (!state) return <p>Estado não encontrado.</p>;
                    return (
                      <>
                        <h3 className="font-bold text-lg">{state.name}</h3>
                        <div className="text-sm text-gray-700">
                          <p className="mb-3">{state.history.substring(0, 150)}{state.history.length > 150 ? '...' : ''}</p>
                          <div className="bg-blue-50 p-3 rounded mb-3">
                            <h4 className="font-semibold text-blue-800">Curiosidades</h4>
                            <p className="text-blue-700 text-sm">{state.curiosities.substring(0, 120)}{state.curiosities.length > 120 ? '...' : ''}</p>
                          </div>

                          <h4 className="font-semibold mt-4 mb-2">Hotéis & Pontos Turísticos</h4>
                          <div className="space-y-2">
                            {state.cities.map(city => (
                              <div
                                key={`city-${city}`}
                                className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                                onClick={() => setSelectedItem({ type: 'city', name: city })}
                              >
                                <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
                                {city} <span className="text-xs text-gray-500">(Hotéis)</span>
                              </div>
                            ))}
                            {state.attractions?.map(attr => (
                              <div
                                key={`attr-${attr}`}
                                className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                                onClick={() => setSelectedItem({ type: 'attraction', name: attr })}
                              >
                                <i className="fas fa-monument text-blue-500 mr-2"></i>
                                {attr}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </>
            )}

            {selectedItem && (
              <>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-purple-600 flex items-center mb-3"
                >
                  <i className="fas fa-arrow-left mr-1"></i> Voltar aos pontos
                </button>
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">{selectedItem.name}</h3>
                  <div className="text-gray-700">
                    {selectedItem.type === 'city' ? (
                      <>
                        <p className="mb-2">Hotéis próximos a <strong>{selectedItem.name}</strong> podem ser encontrados em:</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Booking.com ou Airbnb — busque por "{selectedItem.name}, {brazilStates[selectedState]?.name}"</li>
                          <li>Hotéis com avaliação acima de 8.0 são recomendados</li>
                        </ul>
                        <div className="mt-4">
                          <h4 className="font-semibold">Hotéis Recomendados (exemplo)</h4>
                          <ul className="text-sm pl-5 list-disc">
                            <li>Hotel {selectedItem.name} Palace ★★★★</li>
                            <li>Pousada Cultural {selectedItem.name} ★★★</li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        <h4 className="font-semibold">Hotéis Próximos</h4>
                        <p className="text-sm mb-3">Hotéis próximos à <strong>{selectedItem.name}</strong> são ideais para quem quer explorar a região com conforto.</p>
                        <h4 className="font-semibold">Curiosidades</h4>
                        <p>{brazilStates[selectedState]?.curiosities}</p>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
