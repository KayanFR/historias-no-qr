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

  nordeste: {
    name: {
      pt: "Região Nordeste",
      en: "Northeast Region",
      es: "Región Noreste"
    },
    history: {
      pt: `O Nordeste é o berço da história do Brasil: foi em Porto Seguro (BA), em 1500, que Pedro Álvares Cabral chegou ao território, iniciando a colonização portuguesa. A região se desenvolveu com o ciclo do açúcar, baseado no trabalho escravo africano, gerando uma rica cultura afro-brasileira que ainda hoje define a identidade nordestina. No século XIX, o Nordeste foi palco de importantes movimentos de resistência, como a Revolução Pernambucana (1817) e a Confederação do Equador (1824), além da Guerra de Canudos (BA). Durante o século XX, enfrentou secas devastadoras, o que alimentou o imaginário do sertão sofrido — mas também revelou sua força na música, literatura e religiosidade popular. Hoje, o Nordeste une tradição e modernidade: é líder em turismo (praias, cultura, patrimônio histórico), energia renovável e inovação, mantendo viva sua alma de resistência, fé e alegria.`,
      en: `The Northeast is the cradle of Brazil’s history: in 1500, Pedro Álvares Cabral landed in Porto Seguro (BA), marking the beginning of Portuguese colonization. The region developed around the sugar cycle, sustained by enslaved African labor, forging a rich Afro-Brazilian culture that still defines the Northeastern identity. In the 19th century, it became a stage for resistance movements like the Pernambucan Revolution (1817) and the Confederation of the Equator (1824), and later the Canudos War (BA). In the 20th century, devastating droughts shaped the image of the harsh sertão—but also gave rise to a powerful cultural expression in music, literature, and popular religion. Today, the Northeast blends tradition and modernity: it leads in tourism (beaches, culture, historical heritage), renewable energy, and innovation, preserving its soul of resilience, faith, and joy.`,
      es: `El Noreste es la cuna de la historia de Brasil: en 1500, Pedro Álvares Cabral desembarcó en Porto Seguro (BA), marcando el inicio de la colonización portuguesa. La región se desarrolló con el ciclo del azúcar, basado en el trabajo esclavo africano, forjando una rica cultura afrobrasileña que aún define su identidad. En el siglo XIX, fue escenario de movimientos de resistencia como la Revolución Pernambucana (1817) y la Confederación del Ecuador (1824), y luego la Guerra de Canudos (BA). En el siglo XX, sequías devastadoras moldearon la imagen del sertão árido, pero también dieron impulso a una potente expresión cultural en música, literatura y religiosidad popular. Hoy, el Noreste une tradición y modernidad: lidera en turismo (playas, cultura, patrimonio histórico), energía renovable e innovación, conservando su alma de resistencia, fe y alegría.`
    },
    attractions: [
      {
        name: { pt: "Lençóis Maranhenses", en: "Lençóis Maranhenses", es: "Lençóis Maranhenses" },
        location: "MA",
        description: {
          pt: "Deserto que vira mar durante o inverno amazônico: entre maio e setembro, chuvas formam milhares de lagoas de água cristalina entre as dunas — um fenômeno único no mundo.",
          en: "A desert that becomes a sea during the Amazonian rainy season: between May and September, rains form thousands of crystal-clear lagoons among the dunes—a phenomenon unique in the world.",
          es: "Un desierto que se vuelve mar durante el invierno amazónico: entre mayo y septiembre, las lluvias forman miles de lagunas de agua cristalina entre las dunas —un fenómeno único en el mundo."
        }
      },
      {
        name: { pt: "Pelourinho (Salvador)", en: "Pelourinho (Salvador)", es: "Pelourinho (Salvador)" },
        location: "BA",
        description: {
          pt: "Centro histórico de Salvador, tombado pela UNESCO. Suas ruas de pedra, casarões coloridos e igrejas barrocas contam a história da colonização, da escravidão e da resistência cultural afro-brasileira.",
          en: "Salvador’s historic center, a UNESCO World Heritage site. Its cobblestone streets, colorful mansions, and baroque churches tell the story of colonization, slavery, and Afro-Brazilian cultural resistance.",
          es: "Centro histórico de Salvador, Patrimonio de la Humanidad por la UNESCO. Sus calles empedradas, casas coloniales y templos barrocos narran la historia de la colonización, la esclavitud y la resistencia cultural afrobrasileña."
        }
      },
      {
        name: { pt: "Chapada Diamantina", en: "Chapada Diamantina", es: "Chapada Diamantina" },
        location: "BA",
        description: {
          pt: "Planalto com cânions, cachoeiras gigantes (como a Fumaça) e cavernas com águas azuis (Poço Encantado). Refúgio de espiritualidade, ecoturismo e trilhas desafiadoras.",
          en: "A plateau with canyons, giant waterfalls (like Fumaça) and caves with turquoise waters (Poço Encantado). A haven for spirituality, ecotourism, and challenging hikes.",
          es: "Meseta con cañones, cascadas gigantes (como la Fumaça) y cuevas con aguas turquesas (Poço Encantado). Refugio de espiritualidad, ecoturismo y senderos desafiantes."
        }
      },
      {
        name: { pt: "Jericoacoara", en: "Jericoacoara", es: "Jericoacoara" },
        location: "CE",
        description: {
          pt: "Vila isolada entre dunas e lagoas, eleita uma das praias mais bonitas do mundo. O pôr do sol na Duna do Pôr do Sol e a Pedra Furada são imperdíveis.",
          en: "A remote village nestled among dunes and lagoons, voted one of the world’s most beautiful beaches. The sunset at Duna do Pôr do Sol and the Pedra Furada arch are unmissable.",
          es: "Pueblo aislado entre dunas y lagunas, elegido como una de las playas más bellas del mundo. La puesta de sol en la Duna do Pôr do Sol y la Pedra Furada son imperdibles."
        }
      },
      {
        name: { pt: "Carnaval de Olinda e Recife", en: "Carnival of Olinda and Recife", es: "Carnaval de Olinda y Recife" },
        location: "PE",
        description: {
          pt: "O mais democrático e cultural do Brasil: bonecos gigantes, frevo acrobático e maracatu fazem a festa nas ladeiras de Olinda e nas ruas de Recife — lar do maior bloco carnavalesco do mundo, o Galo da Madrugada.",
          en: "The most democratic and cultural carnival in Brazil: giant puppets, acrobatic frevo, and maracatu enliven the streets of Olinda and Recife—home to the world’s largest carnival bloc, Galo da Madrugada.",
          es: "El carnaval más democrático y cultural de Brasil: muñecos gigantes, frevo acrobático y maracatu animan las calles de Olinda y Recife —hogar del mayor bloque carnavalesco del mundo, el Galo da Madrugada."
        }
      },
      {
        name: { pt: "Serra da Capivara", en: "Serra da Capivara", es: "Serra da Capivara" },
        location: "PI",
        description: {
          pt: "Parque Nacional Patrimônio Mundial da UNESCO, abriga as pinturas rupestres mais antigas das Américas — com até 50 mil anos — reescrevendo a história da ocupação humana no continente.",
          en: "A UNESCO World Heritage National Park, it houses the Americas' oldest rock paintings—up to 50,000 years old—rewriting the story of human settlement in the continent.",
          es: "Parque Nacional Patrimonio Mundial de la UNESCO, alberga las pinturas rupestres más antiguas de las Américas —con hasta 50.000 años— reescribiendo la historia del poblamiento humano en el continente."
        }
      },
      {
        name: { pt: "Delta do Parnaíba", en: "Parnaíba Delta", es: "Delta del Parnaíba" },
        location: "PI/MA",
        description: {
          pt: "Um dos três únicos deltas em mar aberto do planeta. Mais de 80 ilhas, manguezais e dunas formam um labirinto natural que muda com as marés — cenário para observar guarás vermelhos ao entardecer.",
          en: "One of only three open-sea deltas in the world. Over 80 islands, mangroves, and dunes form a natural labyrinth that shifts with the tides—a perfect setting to watch red ibises at sunset.",
          es: "Uno de los tres únicos deltas en mar abierto del planeta. Más de 80 islas, manglares y dunas forman un laberinto natural que cambia con las mareas —escenario ideal para observar ibis rojos al atardecer."
        }
      },
      {
        name: { pt: "Cânion do Xingó", en: "Xingó Canyon", es: "Cañón del Xingó" },
        location: "SE/AL",
        description: {
          pt: "Um dos maiores cânions navegáveis do mundo, com paredões avermelhados de 50 metros e águas verdes do Rio São Francisco. Formado após a represa de Xingó (1994), é um espetáculo geológico único.",
          en: "One of the world’s largest navigable canyons, with 50-meter red cliffs and emerald waters of the São Francisco River. Created after the Xingó dam (1994), it’s a unique geological spectacle.",
          es: "Uno de los cañones navegables más grandes del mundo, con paredes rojas de 50 metros y aguas esmeralda del río São Francisco. Formado tras la represa de Xingó (1994), es un espectáculo geológico único."
        }
      }
    ],
    curiosities: [
      {
        pt: "São Luís (MA) é a única capital brasileira fundada por franceses — em 1612, durante a França Equinocial — e tem o maior conjunto de azulejos portugueses fora de Portugal.",
        en: "São Luís (MA) is the only Brazilian capital founded by the French—in 1612, during the Equinoctial France—and holds the largest collection of Portuguese tiles outside Portugal.",
        es: "São Luís (MA) es la única capital brasileña fundada por franceses —en 1612, durante la Francia Ecuatorial— y tiene la mayor colección de azulejos portugueses fuera de Portugal."
      },
      {
        pt: "O Ceará foi o primeiro estado a abolir a escravidão no Brasil — em 25 de março de 1884 — quatro anos antes da Lei Áurea.",
        en: "Ceará was the first Brazilian state to abolish slavery—on March 25, 1884—four years before the Golden Law.",
        es: "Ceará fue el primer estado brasileño en abolir la esclavitud —el 25 de marzo de 1884— cuatro años antes de la Ley Áurea."
      },
      {
        pt: "O Maior São João do Mundo é em Campina Grande (PB): dura 30 dias e reúne milhões de pessoas.",
        en: "The world’s largest June Festival is in Campina Grande (PB): it lasts 30 days and draws millions of people.",
        es: "El mayor San Juan del mundo se celebra en Campina Grande (PB): dura 30 días y reúne a millones de personas."
      },
      {
        pt: "Pernambuco abriga a primeira sinagoga das Américas — a Kahal Zur Israel, em Recife — fundada em 1636 pelos judeus sefarditas sob o governo holandês.",
        en: "Pernambuco houses the first synagogue in the Americas — Kahal Zur Israel in Recife — founded in 1636 by Sephardic Jews under Dutch rule.",
        es: "Pernambuco alberga la primera sinagoga de las Américas —Kahal Zur Israel, en Recife— fundada en 1636 por judíos sefardíes bajo el gobierno holandés."
      },
      {
        pt: "A Batalha do Jenipapo (PI, 1823) foi o confronto mais sangrento da Independência do Brasil — e o Piauí foi crucial para consolidar a soberania nacional.",
        en: "The Battle of Jenipapo (PI, 1823) was the bloodiest conflict of Brazilian Independence—and Piauí was crucial to securing national sovereignty.",
        es: "La Batalla del Jenipapo (PI, 1823) fue el conflicto más sangriento de la Independencia de Brasil —y Piauí fue crucial para consolidar la soberanía nacional."
      },
      {
        pt: "O Rio Grande do Norte é o maior produtor de energia eólica do Brasil — 95% de sua eletricidade vem dos ventos!",
        en: "Rio Grande do Norte is Brazil’s largest wind energy producer—95% of its electricity comes from wind!",
        es: "Río Grande del Norte es el mayor productor de energía eólica de Brasil —¡el 95% de su electricidad proviene del viento!"
      },
      {
        pt: "São Cristóvão (SE) é a quarta cidade mais antiga do Brasil — fundada em 1590 — e seu centro histórico é Patrimônio da Humanidade pela UNESCO.",
        en: "São Cristóvão (SE) is Brazil’s fourth-oldest city—founded in 1590—and its historic center is a UNESCO World Heritage Site.",
        es: "São Cristóvão (SE) es la cuarta ciudad más antigua de Brasil —fundada en 1590— y su centro histórico es Patrimonio de la Humanidad por la UNESCO."
      },
      {
        pt: "Fernando de Noronha (PE) tem a Baía do Sancho, eleita repetidamente a praia mais bonita do mundo.",
        en: "Fernando de Noronha (PE) is home to Baía do Sancho, repeatedly voted the world’s most beautiful beach.",
        es: "Fernando de Noronha (PE) alberga la Bahía do Sancho, repetidamente elegida como la playa más bella del mundo."
      }
    ]
  }
};
  // demais regiões serão adicionadas conforme você enviar os arquivos
};
