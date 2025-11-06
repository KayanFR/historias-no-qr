// MapaInterativoBrasil.jsx
// ✅ Versão atualizada para substituir os 6 botões por um mapa interativo
// ✅ Integração total com brazilStates (MainJS.txt) e região/cor/curiosidades/história/etc.

import React, { useState, useMemo, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// Importando os dados EXISTENTES (reutilizando sua estrutura do MainJS.txt)
// ⚠️ Substitua este bloco por `import { brazilStates, regionData } from './data.js'` se modularizar depois
// Aqui replico só o necessário (você já tem isso em main.js — vamos reutilizar a mesma estrutura!)
const brazilStates = {
  'AC': { name: 'Acre', region: 'norte', color: '#10b981', history: '...', curiosities: '...', cities: ['Rio Branco', 'Cruzeiro do Sul'], attractions: ['Parque Nacional da Serra do Divisor'] },
  'AM': { name: 'Amazonas', region: 'norte', color: '#10b981', /* ... */ },
  'AP': { name: 'Amapá', region: 'norte', color: '#10b981', /* ... */ },
  'PA': { name: 'Pará', region: 'norte', color: '#10b981', /* ... */ },
  'RO': { name: 'Rondônia', region: 'norte', color: '#10b981', /* ... */ },
  'RR': { name: 'Roraima', region: 'norte', color: '#10b981', /* ... */ },
  'TO': { name: 'Tocantins', region: 'norte', color: '#10b981', /* ... */ },
  'MA': { name: 'Maranhão', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'PI': { name: 'Piauí', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'CE': { name: 'Ceará', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'RN': { name: 'Rio Grande do Norte', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'PB': { name: 'Paraíba', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'PE': { name: 'Pernambuco', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'AL': { name: 'Alagoas', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'SE': { name: 'Sergipe', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'BA': { name: 'Bahia', region: 'nordeste', color: '#f59e0b', /* ... */ },
  'MG': { name: 'Minas Gerais', region: 'sudeste', color: '#3b82f6', /* ... */ },
  'SP': { name: 'São Paulo', region: 'sudeste', color: '#3b82f6', /* ... */ },
  'RJ': { name: 'Rio de Janeiro', region: 'sudeste', color: '#3b82f6', /* ... */ },
  'ES': { name: 'Espírito Santo', region: 'sudeste', color: '#3b82f6', /* ... */ },
  'DF': { name: 'Distrito Federal', region: 'centro-oeste', color: '#8b5cf6', /* ... */ },
  'GO': { name: 'Goiás', region: 'centro-oeste', color: '#8b5cf6', /* ... */ },
  'MT': { name: 'Mato Grosso', region: 'centro-oeste', color: '#8b5cf6', /* ... */ },
  'MS': { name: 'Mato Grosso do Sul', region: 'centro-oeste', color: '#8b5cf6', /* ... */ },
  'PR': { name: 'Paraná', region: 'sul', color: '#ef4444', /* ... */ },
  'SC': { name: 'Santa Catarina', region: 'sul', color: '#ef4444', /* ... */ },
  'RS': { name: 'Rio Grande do Sul', region: 'sul', color: '#ef4444', /* ... */ }
};

const regionData = {
  norte: { name: "Região Norte", color: '#10b981' },
  nordeste: { name: "Região Nordeste", color: '#f59e0b' },
  'centro-oeste': { name: "Região Centro-Oeste", color: '#8b5cf6' },
  sudeste: { name: "Região Sudeste", color: '#3b82f6' },
  sul: { name: "Região Sul", color: '#ef4444' }
};

// Função para agrupar estados por região (para pré-carregar ao clicar em região)
const getStatesByRegion = (regionKey) => {
  return Object.entries(brazilStates)
    .filter(([uf, data]) => data.region === regionKey)
    .map(([uf, data]) => ({ uf, ...data }));
};

export default function MapaInterativoBrasil({ topojsonUrl = '/data/brazil-states.json' }) {
  const [hoveredGeo, setHoveredGeo] = useState(null);
  const [currentStep, setCurrentStep] = useState('region'); // 'region' | 'state' | 'city'
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // cidade ou atração

  // Deriva cor do estado com base na região
  const getColorByUf = (uf) => {
    const state = brazilStates[uf];
    return state ? state.color : '#E6E6E6';
  };

  // Tooltip dinâmico com nome do estado
  const tooltipContent = useMemo(() => {
    if (!hoveredGeo) return null;
    const uf = hoveredGeo.uf;
    const state = brazilStates[uf];
    return state ? `${state.name} (${uf})` : hoveredGeo.name || uf;
  }, [hoveredGeo]);

  // Dados para o painel lateral
  const panelContent = useMemo(() => {
    if (currentStep === 'region' && selectedRegion) {
      const states = getStatesByRegion(selectedRegion);
      return {
        title: regionData[selectedRegion]?.name || 'Região',
        subtitle: `Escolha um estado para explorar`,
        items: states.map(s => ({ type: 'state', id: s.uf, name: s.name, color: s.color })),
        backAction: () => { setSelectedRegion(null); setCurrentStep('region'); }
      };
    }

    if (currentStep === 'state' && selectedState) {
      const state = brazilStates[selectedState];
      if (!state) return null;
      const allItems = [
        ...state.cities.map(c => ({ type: 'city', name: c, id: `${state.uf}_city_${c}` })),
        ...(state.attractions || []).map(a => ({ type: 'attraction', name: a, id: `${state.uf}_attr_${a}` }))
      ];
      return {
        title: `Hotéis, História & Turismo em ${state.name}`,
        subtitle: state.history?.substring(0, 100) + '...',
        items: allItems,
        backAction: () => { setSelectedState(null); setCurrentStep('region'); }
      };
    }

    if (currentStep === 'city' && selectedItem) {
      // Extrair UF do ID (ex: SP_city_São Paulo → SP)
      const uf = selectedItem.id.split('_')[0];
      const state = brazilStates[uf];
      const isCity = selectedItem.type === 'city';
      const name = selectedItem.name;

      return {
        title: isCity ? `Hotéis & História em ${name}` : `Hotéis & Curiosidades em ${name}`,
        subtitle: isCity ? `Cidade do estado de ${state.name}` : 'Atração turística local',
        content: (
          <div className="space-y-4">
            {state && (
              <>
                <div>
                  <h4 className="font-semibold text-gray-800">Hotéis próximos</h4>
                  <p className="text-sm text-gray-600">Hotéis próximos a este local podem ser encontrados em sites como Booking.com ou Airbnb — buscando por "{name}, {state.name}".</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{isCity ? 'História' : 'Curiosidades'}</h4>
                  <p className="text-gray-700">{isCity ? state.history : state.curiosities}</p>
                </div>
              </>
            )}
            <button
              onClick={() => { setCurrentStep('state'); setSelectedItem(null); }}
              className="text-purple-600 flex items-center mt-4"
            >
              <i className="fas fa-arrow-left mr-1"></i> Voltar aos pontos turísticos
            </button>
          </div>
        ),
        backAction: () => { setSelectedItem(null); setCurrentStep('state'); }
      };
    }

    return {
      title: "Explore o Brasil",
      subtitle: "Clique em uma região no mapa para começar",
      content: <p className="text-gray-600">Selecione uma região colorida no mapa → depois um estado → e explore cidades e atrações com história, curiosidades e sugestões de hotéis.</p>
    };
  }, [currentStep, selectedRegion, selectedState, selectedItem]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Mapa Interativo do Brasil</h2>
      <p className="text-sm text-gray-600 mb-4">
        Clique em uma <strong>região</strong> colorida → depois em um <strong>estado</strong> → e explore <strong>cidades e atrações</strong> com história, curiosidades e dicas de hotéis.
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mapa */}
        <div className="flex-1 relative">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 850, center: [-55, -12] }}
            style={{ width: '100%', height: '500px', background: '#f9fafb', borderRadius: '8px' }}
          >
            <Geographies geography={topojsonUrl}>
              {({ geographies }) =>
                geographies.map(geo => {
                  // Extrair UF do GeoJSON esperado (campo "sigla")
                  const uf = geo.properties?.sigla || geo.id;
                  const isActive = currentStep === 'region' && selectedRegion === brazilStates[uf]?.region;
                  const isRegionSelected = selectedRegion && selectedRegion === brazilStates[uf]?.region;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => setHoveredGeo({ uf, name: geo.properties?.nome || uf })}
                      onMouseLeave={() => setHoveredGeo(null)}
                      onClick={() => {
                        if (currentStep === 'region') {
                          const region = brazilStates[uf]?.region;
                          if (region) {
                            setSelectedRegion(region);
                            setCurrentStep('state');
                          }
                        } else if (currentStep === 'state') {
                          if (selectedState === uf) {
                            // Já está aberto → fecha
                            setSelectedState(null);
                            setSelectedRegion(null);
                            setCurrentStep('region');
                          } else {
                            setSelectedState(uf);
                            setSelectedRegion(brazilStates[uf]?.region);
                            setCurrentStep('city');
                          }
                        }
                      }}
                      style={{
                        default: {
                          fill: isRegionSelected ? getColorByUf(uf) : '#E6E6E6',
                          stroke: '#999',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: 'pointer'
                        },
                        hover: {
                          fill: isRegionSelected ? getColorByUf(uf) : '#FFB347',
                          stroke: '#666',
                          strokeWidth: 1,
                          outline: 'none'
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Tooltip flutuante */}
          {tooltipContent && (
            <div
              className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded text-sm"
              style={{ pointerEvents: 'none' }}
            >
              {tooltipContent}
            </div>
          )}

          {/* Legenda de regiões */}
          <div className="absolute top-4 right-4 bg-white p-3 rounded shadow text-sm">
            <h4 className="font-semibold mb-1">Regiões do Brasil</h4>
            {Object.entries(regionData).map(([key, data]) => (
              <div key={key} className="flex items-center mb-1">
                <span
                  className="w-3 h-3 rounded mr-2 inline-block"
                  style={{ backgroundColor: data.color }}
                ></span>
                {data.name}
              </div>
            ))}
          </div>
        </div>

        {/* Painel lateral */}
        <div className="w-full lg:w-96 bg-white border rounded-lg p-4 shadow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-lg text-gray-800">{panelContent.title}</h3>
            {panelContent.backAction && currentStep !== 'region' && (
              <button
                onClick={panelContent.backAction}
                className="text-gray-500 hover:text-gray-700"
                title="Voltar"
              >
                <i className="fas fa-arrow-left"></i>
              </button>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-4">{panelContent.subtitle}</p>

          {panelContent.content ? (
            <div>{panelContent.content}</div>
          ) : panelContent.items ? (
            <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
              {panelContent.items.map((item, idx) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-lg border hover:shadow cursor-pointer transition ${
                    item.color ? 'border-l-4' : ''
                  }`}
                  style={item.color ? { borderLeftColor: item.color } : {}}
                  onClick={() => {
                    if (item.type === 'state') {
                      setSelectedState(item.id);
                      setCurrentStep('city');
                    } else {
                      setSelectedItem(item);
                      setCurrentStep('city');
                    }
                  }}
                >
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {item.type === 'state' ? 'Estado' : item.type === 'city' ? 'Hotéis & História' : 'Hotéis & Curiosidades'}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* Dica técnica */}
      <div className="mt-6 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm rounded">
        <strong>Para desenvolvedores:</strong> Este componente requer o arquivo <code>/data/brazil-states.json</code> com estrutura contendo <code>properties.sigla</code> (ex: "SP"). 
        Recomendamos usar o GeoJSON do IBGE via <a href="https://github.com/fabriciovergal/geodata-br" target="_blank" className="text-blue-600">geodata-br</a>.
      </div>
    </div>
  );
}
