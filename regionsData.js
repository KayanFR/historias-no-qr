// regionsData.js
// Dados detalhados das 5 regiões do Brasil — Região Norte (v1.0)
// Baseado nos documentos oficiais fornecidos

const regionsDetailed = {
  norte: {
    name: {
      pt: "Região Norte",
      en: "North Region",
      es: "Región Norte"
    },
    history: {
      pt: `A Região Norte é a maior do Brasil em extensão territorial, abrangendo cerca de 45% do país. Berço da Floresta Amazônica, é habitada há milhares de anos por povos indígenas, como os Tikuna, Yanomami, Ashaninka e muitos outros. Com a colonização portuguesa, fortificações como o Forte do Presépio (1616) e o Forte Príncipe da Beira (1776) foram erguidas para proteger o território. O Ciclo da Borracha (final do século XIX) trouxe prosperidade, atraindo milhares de migrantes do Nordeste — os seringueiros — e transformando cidades como Manaus e Belém em centros culturais e econômicos. Após o colapso do ciclo, a região viveu décadas de isolamento, até a criação de territórios federais (como Acre em 1903, Amapá em 1943, Rondônia em 1943 e Roraima em 1943) e, posteriormente, sua elevação a estados. Hoje, a Região Norte é símbolo de preservação ambiental, diversidade cultural e resistência dos povos da floresta.`,
      en: `The North Region is the largest in Brazil by area, covering about 45% of the country. Home to the Amazon Rainforest, it has been inhabited for thousands of years by Indigenous peoples, such as the Tikuna, Yanomami, Ashaninka, and many others. During Portuguese colonization, fortifications like the Presépio Fort (1616) and Príncipe da Beira Fort (1776) were built to secure the territory. The Rubber Boom (late 19th century) brought prosperity, attracting thousands of migrants from the Northeast—the rubber tappers—and transforming cities like Manaus and Belém into cultural and economic hubs. After the boom’s collapse, the region experienced decades of isolation, until the creation of federal territories (e.g., Acre in 1903, Amapá in 1943, Rondônia in 1943, Roraima in 1943) and their later elevation to statehood. Today, the North Region symbolizes environmental preservation, cultural diversity, and the resilience of forest peoples.`,
      es: `La Región Norte es la más extensa de Brasil, abarcando cerca del 45% del país. Cuna de la Selva Amazónica, ha sido habitada durante miles de años por pueblos indígenas, como los Tikuna, Yanomami, Ashaninka y muchos otros. Durante la colonización portuguesa, se construyeron fortificaciones como el Fuerte del Presépio (1616) y el Fuerte Príncipe da Beira (1776) para proteger el territorio. El Ciclo del Caucho (finales del siglo XIX) trajo prosperidad, atrayendo a miles de migrantes del Noreste —los seringueiros— y transformando ciudades como Manaus y Belém en centros culturales y económicos. Tras el colapso del ciclo, la región vivió décadas de aislamiento, hasta la creación de territorios federales (como Acre en 1903, Amapá en 1943, Rondônia en 1943 y Roraima en 1943) y su posterior elevación a estados. Hoy, la Región Norte simboliza la preservación ambiental, la diversidad cultural y la resistencia de los pueblos de la selva.`
    },
    attractions: [
      {
        name: { pt: "Encontro das Águas", en: "Meeting of Waters", es: "Encuentro de las Aguas" },
        location: "AM",
        description: {
          pt: "Fenômeno único no mundo, onde os rios Negro (águas escuras e quentes) e Solimões (águas barrentas e frias) correm lado a lado por mais de 6 km sem se misturar, devido às diferenças de temperatura, densidade e velocidade.",
          en: "A unique natural phenomenon where the Rio Negro (dark, warm waters) and Rio Solimões (muddy, cold waters) flow side by side for over 6 km without mixing, due to differences in temperature, density, and velocity.",
          es: "Fenómeno único en el mundo donde los ríos Negro (aguas oscuras y cálidas) y Solimões (aguas turbias y frías) corren lado a lado por más de 6 km sin mezclarse, debido a diferencias de temperatura, densidad y velocidad."
        }
      },
      {
        name: { pt: "Parque Nacional Montanhas do Tumucumaque", en: "Tumucumaque Mountains National Park", es: "Parque Nacional Montañas del Tumucumaque" },
        location: "AP",
        description: {
          pt: "Maior parque nacional de floresta tropical do mundo, com mais de 3,8 milhões de hectares. Abriga onças, antas, araras e centenas de espécies endêmicas. Local de preservação extrema e ecoturismo controlado.",
          en: "The world’s largest tropical forest national park, spanning over 3.8 million hectares. Home to jaguars, tapirs, macaws, and hundreds of endemic species. A sanctuary for strict preservation and regulated ecotourism.",
          es: "El parque nacional de selva tropical más grande del mundo, con más de 3,8 millones de hectáreas. Alberga jaguares, tapires, guacamayos y cientos de especies endémicas. Santuario de preservación estricta y ecoturismo regulado."
        }
      },
      {
        name: { pt: "Serra do Divisor", en: "Serra do Divisor", es: "Serra do Divisor" },
        location: "AC",
        description: {
          pt: "Única área montanhosa da Amazônia, na fronteira com o Peru. Oferece cachoeiras cristalinas (como a do Amor e do Ar Condicionado), cavernas, rios navegáveis e comunidades indígenas. Acesso feito principalmente por barco a partir de Cruzeiro do Sul.",
          en: "The only mountainous region in the Amazon, on the border with Peru. Features crystal-clear waterfalls (e.g., Cachoeira do Amor), caves, navigable rivers, and Indigenous communities. Accessible mainly by boat from Cruzeiro do Sul.",
          es: "Única área montañosa de la Amazonía, en la frontera con Perú. Ofrece cascadas cristalinas (como la del Amor), cuevas, ríos navegables y comunidades indígenas. Accesible principalmente en barco desde Cruzeiro do Sul."
        }
      },
      {
        name: { pt: "Ilha de Marajó", en: "Marajó Island", es: "Isla de Marajó" },
        location: "PA",
        description: {
          pt: "Maior ilha flúvio-marítima do mundo (maior que a Suíça), localizada na foz do Amazonas. Famosa por suas praias de água doce, búfalos (mais numerosos que humanos!) e cerâmica marajoara — legado de uma civilização pré-colombiana avançada.",
          en: "The world’s largest fluvial-maritime island (larger than Switzerland), located at the mouth of the Amazon River. Famous for its freshwater beaches, water buffaloes (more numerous than people!), and Marajoara pottery—legacy of an advanced pre-Columbian civilization.",
          es: "La isla fluvio-marítima más grande del mundo (más grande que Suiza), ubicada en la desembocadura del río Amazonas. Famosa por sus playas de agua dulce, búfalos (¡más numerosos que los humanos!) y cerámica marajoara —legado de una civilización precolombina avanzada."
        }
      },
      {
        name: { pt: "Monte Roraima", en: "Mount Roraima", es: "Monte Roraima" },
        location: "RR",
        description: {
          pt: "Maciço de 2,7 bilhões de anos, na tríplice fronteira Brasil–Venezuela–Guiana. Considerado sagrado pelos povos Macuxi, inspirou o livro 'O Mundo Perdido', de Arthur Conan Doyle. Seu platô abriga lagos, formações rochosas únicas e espécies endêmicas.",
          en: "A 2.7-billion-year-old table-top mountain at the Brazil–Venezuela–Guyana tri-border. Sacred to the Macuxi people, it inspired Arthur Conan Doyle’s 'The Lost World'. Its summit features lakes, unique rock formations, and endemic species.",
          es: "Macizo de 2.700 millones de años en la triple frontera Brasil–Venezuela–Guyana. Considerado sagrado por los Macuxi, inspiró 'El Mundo Perdido' de Arthur Conan Doyle. Su cima alberga lagos, formaciones rocosas únicas y especies endémicas."
        }
      },
      {
        name: { pt: "Estrada de Ferro Madeira-Mamoré", en: "Madeira-Mamoré Railway", es: "Ferrocarril Madeira-Mamoré" },
        location: "RO",
        description: {
          pt: "Construída entre 1907 e 1912, conhecida como a 'Ferrovia do Diabo'. Mais de 6 mil trabalhadores morreram de malária e febre amarela. Hoje é um museu a céu aberto em Porto Velho, símbolo do sacrifício humano na Amazônia.",
          en: "Built between 1907 and 1912, known as the 'Devil’s Railway'. Over 6,000 workers died of malaria and yellow fever. Today, it’s an open-air museum in Porto Velho, symbolizing human sacrifice in the Amazon.",
          es: "Construido entre 1907 y 1912, conocido como el 'Ferrocarril del Diablo'. Más de 6.000 trabajadores murieron de malaria y fiebre amarilla. Hoy es un museo al aire libre en Porto Velho, símbolo del sacrificio humano en la Amazonía."
        }
      },
      {
        name: { pt: "Jalapão", en: "Jalapão", es: "Jalapão" },
        location: "TO",
        description: {
          pt: "Paraíso do Cerrado tocantinense: dunas douradas, rios de águas cristalinas e os famosos fervedouros — nascentes onde é impossível afundar devido à pressão natural da areia.",
          en: "Tocantins’ Cerrado paradise: golden dunes, crystal-clear rivers, and the famous 'fervedouros' — natural springs where sinking is impossible due to upward water pressure.",
          es: "Paraíso del Cerrado tocantinense: dunas doradas, ríos de aguas cristalinas y los famosos 'fervedouros' —nacientes donde es imposible hundirse por la presión ascendente del agua."
        }
      }
    ],
    curiosities: [
      {
        pt: "O 'Acre' já foi um país independente por alguns meses em 1899, com bandeira, hino e até presidente (Luís Gálvez).",
        en: "Acre was briefly an independent country in 1899, with its own flag, anthem, and president (Luís Gálvez).",
        es: "Acre fue brevemente un país independiente en 1899, con bandera, himno y hasta presidente (Luís Gálvez)."
      },
      {
        pt: "Macapá (AP) é a única capital brasileira cortada pela Linha do Equador — o Estádio Zerão tem metade do campo em cada hemisfério!",
        en: "Macapá (AP) is the only Brazilian capital crossed by the Equator — the Zerão Stadium has one half of its field in each hemisphere!",
        es: "Macapá (AP) es la única capital brasileña atravesada por la Línea Ecuatorial —¡el estadio Zerão tiene la mitad del campo en cada hemisferio!"
      },
      {
        pt: "Manaus chegou a ter elefantes e leões no século XIX — importados pelos barões da borracha para exibição.",
        en: "Manaus once had elephants and lions in the 19th century—imported by rubber barons as status symbols.",
        es: "Manaus tuvo elefantes y leones en el siglo XIX —importados por los barones del caucho como símbolos de estatus."
      },
      {
        pt: "O Sítio Arqueológico do Rego Grande (AP), o 'Stonehenge Amazônico', tem mais de 2.000 anos — usado como observatório astronômico por povos indígenas.",
        en: "The Rego Grande Archaeological Site (AP), the 'Amazonian Stonehenge', is over 2,000 years old—used as an astronomical observatory by Indigenous peoples.",
        es: "El Sitio Arqueológico del Rego Grande (AP), el 'Stonehenge Amazónico', tiene más de 2.000 años —usado como observatorio astronómico por pueblos indígenas."
      },
      {
        pt: "O Círio de Nazaré (PA) é a maior procissão católica do mundo, com milhões de fiéis — reconhecida pela UNESCO como Patrimônio Cultural Imaterial.",
        en: "The Círio de Nazaré (PA) is the world’s largest Catholic procession, with millions of faithful — recognized by UNESCO as Intangible Cultural Heritage.",
        es: "El Círio de Nazaré (PA) es la procesión católica más grande del mundo, con millones de fieles —reconocida por la UNESCO como Patrimonio Cultural Inmaterial."
      },
      {
        pt: "O Jalapão (TO) é o único lugar do Brasil onde se encontram dunas de areia dourada no Cerrado.",
        en: "Jalapão (TO) is the only place in Brazil where golden sand dunes occur in the Cerrado biome.",
        es: "Jalapão (TO) es el único lugar de Brasil donde se encuentran dunas de arena dorada en el bioma Cerrado."
      },
      {
        pt: "Boa Vista (RR) é a única capital brasileira inteiramente ao norte da Linha do Equador.",
        en: "Boa Vista (RR) is the only Brazilian capital entirely north of the Equator.",
        es: "Boa Vista (RR) es la única capital brasileña completamente al norte de la Línea Ecuatorial."
      }
    ]
  }
  // demais regiões serão adicionadas conforme você enviar os arquivos
};
