// components/MapaInterativoBrasil.jsx
import React, { useState, useMemo } from 'react';

// IMPORTANTE: Este componente usa window.brazilStates (injetado por main.js)
export default function MapaInterativoBrasil() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  // Mapear para keys BR-UF
  const regionInfo = useMemo(() => {
    const states = window.brazilStates || {};
    const map = {};
    Object.entries(states).forEach(([uf, data]) => {
      map[`BR-${uf}`] = {
        name: data.name,
        region: data.region.charAt(0).toUpperCase() + data.region.slice(1),
        history: data.history,
        curiosities: data.curiosities,
        cities: data.cities,
        attractions: data.attractions
      };
    });
    return map;
  }, []);

  const info = selected ? regionInfo[selected.id] : null;

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold text-center mb-4">Mapa Interativo do Brasil</h3>
      <p className="text-center text-gray-600 mb-6">Clique em um estado para ver detalhes</p>

      <div className="bg-gray-100 border-2 border-dashed rounded-xl p-8 text-center mb-6">
        <p className="text-gray-500">⚠️ Para usar o mapa interativo real, baixe um GeoJSON dos estados do Brasil e substitua esta área.</p>
        <p className="text-sm mt-2">Exemplo: <a href="https://github.com/kelvins/BR-States" target="_blank" className="text-blue-600">kelvins/BR-States</a></p>
        <p className="mt-4 font-medium">Estados disponíveis para visualização (clique abaixo):</p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2 mt-3">
          {Object.keys(regionInfo).map(id => (
            <button
              key={id}
              onClick={() => setSelected({ id, name: regionInfo[id].name })}
              className="bg-white p-2 rounded border text-xs hover:bg-gray-100"
            >
              {id.replace('BR-', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Painel de Informações */}
      <div className="mt-6 p-4 border rounded bg-white">
        {selected && info ? (
          <div>
            <h4 className="text-xl font-bold text-purple-700">{info.name}</h4>
            <p className="text-sm text-gray-600 mb-2">Região: {info.region}</p>
            <p className="font-medium mt-3">História</p>
            <p className="text-sm mb-2">{info.history}</p>
            <p className="font-medium">Curiosidades</p>
            <p className="text-sm text-blue-600 mb-3">{info.curiosities}</p>
            <p className="font-medium">Cidades</p>
            <p className="text-sm mb-1">{info.cities.join(', ')}</p>
            <button 
              className="mt-2 bg-purple-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => window.addToItinerary(selected.id.split('-')[1], info.name)}
            >
              Adicionar ao Roteiro
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Nenhum estado selecionado</p>
        )}
      </div>
    </div>
  );
}