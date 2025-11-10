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
};   

const regionsDetailed = {   
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

const regionsDetailed = {
  centro-oeste: {
    name: {
      pt: "Região Centro-Oeste",
      en: "Central-West Region",
      es: "Región Centro-Oeste"
    },
    history: {
      pt: `O Centro-Oeste é o coração geográfico e político do Brasil — uma região de contrastes marcantes: da modernidade de Brasília à exuberância selvagem do Pantanal, passando pelos planaltos do Cerrado, berço das águas do país. Historicamente, foi território de povos indígenas como os Goyá, Bororo e Xavante, até a chegada dos bandeirantes no século XVIII, em busca de ouro e escravos. A criação da Capitania de Goiás (1748) e, posteriormente, do Distrito Federal (1960), transformou a região num eixo estratégico. Hoje, o Centro-Oeste equilibra liderança no agronegócio (soja, milho, pecuária), conservação ambiental (Pantanal e Cerrado são Patrimônios Mundiais da UNESCO) e inovação urbana — simbolizada por Brasília, única cidade moderna do século XX reconhecida como Patrimônio da Humanidade.`,
      en: `The Central-West is Brazil’s geographical and political heart—a region of striking contrasts: from the modernity of Brasília to the wild exuberance of the Pantanal, through the highlands of the Cerrado, the birthplace of Brazil’s major rivers. Historically, it was home to Indigenous peoples like the Goyá, Bororo, and Xavante, until bandeirantes arrived in the 18th century seeking gold and enslaved people. The creation of the Captaincy of Goiás (1748) and later the Federal District (1960) turned the region into a strategic axis. Today, the Central-West balances leadership in agribusiness (soy, corn, cattle), environmental conservation (Pantanal and Cerrado are UNESCO World Heritage sites), and urban innovation—embodied by Brasília, the only 20th-century city recognized as a UNESCO World Heritage site.`,
      es: `El Centro-Oeste es el corazón geográfico y político de Brasil —una región de contrastes marcantes: desde la modernidad de Brasilia hasta la exuberancia salvaje del Pantanal, pasando por los planaltos del Cerrado, cuna de las aguas del país. Históricamente, fue territorio de pueblos indígenas como los Goyá, Bororo y Xavante, hasta la llegada de los bandeirantes en el siglo XVIII, en busca de oro y esclavos. La creación de la Capitanía de Goiás (1748) y, posteriormente, del Distrito Federal (1960), transformó la región en un eje estratégico. Hoy, el Centro-Oeste equilibra liderazgo en el agronegocio (soja, maíz, ganadería), conservación ambiental (Pantanal y Cerrado son Patrimonios Mundiales de la UNESCO) e innovación urbana —simbolizada por Brasilia, única ciudad moderna del siglo XX reconocida como Patrimonio de la Humanidad.`
    },
    attractions: [
      {
        name: { pt: "Pantanal", en: "Pantanal", es: "Pantanal" },
        location: "MS/MT",
        description: {
          pt: "Maior planície alagável do planeta, o Pantanal abriga a maior biodiversidade da América do Sul — com onças-pintadas, tuiuiús, jacarés e capivaras. É Patrimônio Natural da Humanidade pela UNESCO e símbolo da conservação ambiental brasileira.",
          en: "The world’s largest tropical wetland, the Pantanal hosts South America’s richest biodiversity—including jaguars, jabiru storks, caimans, and capybaras. A UNESCO World Heritage Site, it symbolizes Brazilian environmental conservation.",
          es: "La mayor llanura inundable del planeta, el Pantanal alberga la mayor biodiversidad de Sudamérica —con onzas pintadas, tuiuiús, caimanes y capibaras. Es Patrimonio Natural de la Humanidad por la UNESCO y símbolo de la conservación ambiental brasileña."
        }
      },
      {
        name: { pt: "Brasília", en: "Brasília", es: "Brasilia" },
        location: "DF",
        description: {
          pt: "Inaugurada em 21 de abril de 1960, Brasília é símbolo do planejamento urbano moderno, com projeto de Lúcio Costa e arquitetura de Oscar Niemeyer. Sua Praça dos Três Poderes, Catedral e Congresso são ícones nacionais. É Patrimônio Cultural da Humanidade — única cidade moderna do século XX a receber esse título.",
          en: "Inaugurated on April 21, 1960, Brasília symbolizes modern urban planning, with a masterplan by Lúcio Costa and architecture by Oscar Niemeyer. Its Three Powers Plaza, Cathedral, and Congress are national icons. A UNESCO World Heritage Site—the only 20th-century city so honored.",
          es: "Inaugurada el 21 de abril de 1960, Brasilia simboliza la planificación urbana moderna, con proyecto de Lúcio Costa y arquitectura de Oscar Niemeyer. Su Plaza de los Tres Poderes, Catedral y Congreso son íconos nacionales. Patrimonio de la Humanidad por la UNESCO —única ciudad moderna del siglo XX con ese título."
        }
      },
      {
        name: { pt: "Chapada dos Veadeiros", en: "Chapada dos Veadeiros", es: "Chapada dos Veadeiros" },
        location: "GO",
        description: {
          pt: "Patrimônio Natural da Humanidade, é um planalto cristalino com cachoeiras espetaculares (como Santa Bárbara e Catarata dos Couros), formações rochosas milenares e rica biodiversidade do Cerrado. Conhecida também por sua energia espiritual e misticismo.",
          en: "A UNESCO World Heritage Site, this crystalline plateau features breathtaking waterfalls (like Santa Bárbara and Catarata dos Couros), ancient rock formations, and rich Cerrado biodiversity. Also renowned for its spiritual energy and mysticism.",
          es: "Patrimonio Natural de la Humanidad, es un planalto cristalino con cascadas espectaculares (como Santa Bárbara y Catarata dos Couros), formaciones rocosas milenarias y rica biodiversidad del Cerrado. Conocida también por su energía espiritual y misticismo."
        }
      },
      {
        name: { pt: "Caldas Novas", en: "Caldas Novas", es: "Caldas Novas" },
        location: "GO",
        description: {
          pt: "Maior estância hidrotermal do mundo, com águas naturalmente quentes (até 60°C) brotando do solo. Ideal para relaxamento, saúde e lazer, com resorts, parques aquáticos e natureza preservada.",
          en: "The world’s largest hydrothermal resort, with naturally hot waters (up to 60°C) emerging from the ground. Ideal for relaxation, wellness, and leisure, with resorts, water parks, and preserved nature.",
          es: "La mayor estación hidrotermal del mundo, con aguas naturalmente calientes (hasta 60°C) que brotan del suelo. Ideal para relajación, salud y ocio, con resorts, parques acuáticos y naturaleza preservada."
        }
      },
      {
        name: { pt: "Bonito", en: "Bonito", es: "Bonito" },
        location: "MS",
        description: {
          pt: "Berço do ecoturismo sustentável no Brasil. Seus rios cristalinos (como o Sucuri e Rio da Prata), grutas (Lago Azul, Buraco das Araras) e cachoeiras permitem flutuação entre peixes coloridos — experiência única no mundo.",
          en: "The birthplace of sustainable ecotourism in Brazil. Its crystal-clear rivers (e.g., Sucuri, Rio da Prata), caves (Blue Lake, Buraco das Araras), and waterfalls allow snorkeling among colorful fish—a unique experience worldwide.",
          es: "Cuna del ecoturismo sostenible en Brasil. Sus ríos cristalinos (como Sucuri y Río da Prata), grutas (Lago Azul, Buraco das Araras) y cascadas permiten flotación entre peces coloridos —experiencia única en el mundo."
        }
      },
      {
        name: { pt: "Parque Nacional das Emas", en: "Emas National Park", es: "Parque Nacional de las Emas" },
        location: "GO/MT",
        description: {
          pt: "Patrimônio Natural da Humanidade, abriga savanas do Cerrado e é palco do raro fenômeno da bioluminescência do cerrado — onde fungos iluminam o campo à noite. Lar da ema, lobo-guará e tamanduá-bandeira.",
          en: "A UNESCO World Heritage Site, it protects Cerrado savannas and hosts the rare cerrado bioluminescence phenomenon—where fungi light up the fields at night. Home to the rhea, maned wolf, and giant anteater.",
          es: "Patrimonio Natural de la Humanidad, alberga sabanas del Cerrado y es escenario del raro fenómeno de bioluminiscencia del cerrado —donde hongos iluminan el campo por la noche. Hogar de la ñandú, lobo de crin y oso hormiguero gigante."
        }
      },
      {
        name: { pt: "Terra Ronca", en: "Terra Ronca", es: "Terra Ronca" },
        location: "GO",
        description: {
          pt: "Um dos maiores complexos de cavernas da América do Sul, com rios subterrâneos, estalactites e estalagmites milenares. Local de fé e aventura, abriga a Festa do Bom Jesus da Lapa — procissão dentro das cavernas.",
          en: "One of South America’s largest cave systems, with underground rivers, thousand-year-old stalactites and stalagmites. A site of faith and adventure, hosting the Festa do Bom Jesus da Lapa—a procession held inside the caves.",
          es: "Uno de los mayores complejos de cavernas de Sudamérica, con ríos subterráneos, estalactitas y estalagmitas milenarias. Lugar de fe y aventura, alberga la Fiesta del Bom Jesus da Lapa —procesión dentro de las cavernas."
        }
      }
    ],
    curiosities: [
      {
        pt: "Brasília foi construída em apenas 41 meses — um feito considerado impossível na época. Mais de 30 mil candangos trabalharam sob condições extremas para erguer a capital.",
        en: "Brasília was built in just 41 months—a feat deemed impossible at the time. Over 30,000 candangos worked under extreme conditions to erect the capital.",
        es: "Brasilia se construyó en solo 41 meses —una hazaña considerada imposible en su época. Más de 30.000 candangos trabajaron en condiciones extremas para erigir la capital."
      },
      {
        pt: "O Cerrado é o berço das águas do Brasil: de lá nascem os rios Araguaia, Tocantins, São Francisco, Paraná e Paraguai — responsáveis por 90% da água doce do país.",
        en: "The Cerrado is the birthplace of Brazil’s waters: the Araguaia, Tocantins, São Francisco, Paraná, and Paraguay rivers originate here—supplying 90% of the country’s freshwater.",
        es: "El Cerrado es la cuna de las aguas de Brasil: allí nacen los ríos Araguaia, Tocantins, São Francisco, Paraná y Paraguay —responsables del 90% del agua dulce del país."
      },
      {
        pt: "A Procissão do Fogaréu, em Goiás Velho, é uma das manifestações religiosas mais impressionantes do Brasil — homens encapuzados marcham com tochas na Semana Santa, encenando a prisão de Cristo.",
        en: "The Procissão do Fogaréu, in Goiás Velho, is one of Brazil’s most impressive religious events—hooded men march with torches during Holy Week, reenacting Christ’s arrest.",
        es: "La Procesión del Fogaréu, en Goiás Velho, es una de las manifestaciones religiosas más impresionantes de Brasil —hombres encapuchados marchan con antorchas en Semana Santa, recreando la prisión de Cristo."
      },
      {
        pt: "O Pantanal tem mais de 650 espécies de aves, 260 de peixes e 100 de mamíferos — a maior concentração de vida selvagem da América do Sul.",
        en: "The Pantanal hosts over 650 bird species, 260 fish, and 100 mammals—the highest concentration of wildlife in South America.",
        es: "El Pantanal alberga más de 650 especies de aves, 260 de peces y 100 de mamíferos —la mayor concentración de vida silvestre de Sudamérica."
      },
      {
        pt: "A Gruta do Lago Azul (Bonito) tem 90 metros de profundidade — e ainda não se sabe onde termina sua rede subterrânea. Fósseis de preguiças gigantes já foram encontrados lá.",
        en: "The Blue Lake Cave (Bonito) is 90 meters deep—and its underground network’s end remains unknown. Giant sloth fossils have been found inside.",
        es: "La Gruta del Lago Azul (Bonito) tiene 90 metros de profundidad —y aún se desconoce dónde termina su red subterránea. Ya se encontraron fósiles de perezosos gigantes allí."
      },
      {
        pt: "O Kadiwéu, povo indígena do MS, foi o único a receber terras diretamente de Dom Pedro II — em reconhecimento à sua bravura na Guerra do Paraguai.",
        en: "The Kadiwéu Indigenous people of MS were the only group granted land directly by Emperor Dom Pedro II—in recognition of their bravery in the Paraguayan War.",
        es: "Los Kadiwéu, pueblo indígena de MS, fueron el único grupo en recibir tierras directamente del emperador Dom Pedro II —en reconocimiento a su valentía en la Guerra del Paraguay."
      },
      {
        pt: "O fenômeno da bioluminescência no Parque Nacional das Emas é tão raro que poucos cientistas conseguiram registrá-lo — luzes verdes surgem espontaneamente no cerrado após as chuvas.",
        en: "The bioluminescence phenomenon in Emas National Park is so rare that few scientists have documented it—green lights spontaneously appear in the Cerrado after rains.",
        es: "El fenómeno de bioluminiscencia en el Parque Nacional de las Emas es tan raro que pocos científicos lo han registrado —luces verdes surgen espontáneamente en el cerrado tras las lluvias."
      },
      {
        pt: "Mato Grosso do Sul foi criado em 1979 — e até hoje há confusão com Mato Grosso. Por isso, a placa do carro do estado leva o nome completo: ‘Mato Grosso do Sul’.",
        en: "Mato Grosso do Sul was created in 1979—and confusion with Mato Grosso persists. That’s why state license plates read the full name: ‘Mato Grosso do Sul’.",
        es: "Mato Grosso do Sul se creó en 1979 —y aún hoy hay confusión con Mato Grosso. Por eso, las placas del estado llevan el nombre completo: ‘Mato Grosso do Sul’."
      } 
    ]
  }
};  

const regionsDetailed = {
  sudeste: {
    name: {
      pt: "Região Sudeste",
      en: "Southeast Region",
      es: "Región Sudeste"
    },
    history: {
      pt: `O Sudeste é o coração econômico, cultural e histórico do Brasil — berço da fundação de vilas coloniais, palco de revoluções, modernização urbana e inovação. A região abriga as quatro primeiras capitais do país: São Vicente (1532), Salvador (1549, até 1763), Rio de Janeiro (1763–1960) e Brasília (1960). Durante o ciclo do ouro, Minas Gerais tornou-se o centro financeiro da colônia; no século XIX, o café transformou São Paulo e o Rio de Janeiro em potências exportadoras; no século XX, a industrialização consolidou o Sudeste como motor do desenvolvimento nacional. Hoje, a região reúne megacidades, montanhas históricas, praias icônicas e uma rica herança do ciclo do café, da imigração e da modernidade.`,
      en: `The Southeast is the economic, cultural, and historical heart of Brazil — the birthplace of colonial towns, the stage of revolutions, urban modernization, and innovation. The region hosts the country’s first four capitals: São Vicente (1532), Salvador (1549–1763), Rio de Janeiro (1763–1960), and Brasília (1960). During the gold cycle, Minas Gerais became the colony’s financial center; in the 19th century, coffee turned São Paulo and Rio de Janeiro into export powerhouses; in the 20th century, industrialization cemented the Southeast as the engine of national development. Today, the region combines megacities, historic mountains, iconic beaches, and a rich legacy of coffee, immigration, and modernism.`,
      es: `El Sudeste es el corazón económico, cultural e histórico de Brasil — cuna de pueblos coloniales, escenario de revoluciones, modernización urbana e innovación. La región alberga las cuatro primeras capitales del país: São Vicente (1532), Salvador (1549–1763), Río de Janeiro (1763–1960) y Brasilia (1960). Durante el ciclo del oro, Minas Gerais se convirtió en el centro financiero de la colonia; en el siglo XIX, el café transformó a São Paulo y Río de Janeiro en potencias exportadoras; en el siglo XX, la industrialización consolidó al Sudeste como motor del desarrollo nacional. Hoy, la región reúne megaciudades, montañas históricas, playas icónicas y una rica herencia del ciclo del café, la inmigración y la modernidad.`
    },
    attractions: [
      {
        name: { pt: "Estrada Real", en: "Royal Road", es: "Camino Real" },
        location: "MG/SP/RJ",
        description: {
          pt: "Rota histórica criada no século XVIII para transportar ouro, diamantes e mantimentos entre Minas Gerais, Rio de Janeiro e São Paulo. Hoje é um dos maiores roteiros turísticos do Brasil, unindo cidades históricas, natureza e gastronomia.",
          en: "A historic route created in the 18th century to transport gold, diamonds, and supplies between Minas Gerais, Rio de Janeiro, and São Paulo. Today, it’s one of Brazil’s largest tourist circuits, connecting historic towns, nature, and gastronomy.",
          es: "Ruta histórica creada en el siglo XVIII para transportar oro, diamantes y provisiones entre Minas Gerais, Río de Janeiro y São Paulo. Hoy es uno de los circuitos turísticos más grandes de Brasil, uniendo ciudades históricas, naturaleza y gastronomía."
        }
      },
      {
        name: { pt: "Cristo Redentor e Pão de Açúcar", en: "Christ the Redeemer & Sugarloaf Mountain", es: "Cristo Redentor y Pan de Azúcar" },
        location: "RJ",
        description: {
          pt: "Símbolos mundiais do Rio de Janeiro. O Cristo Redentor (1931), no Corcovado, é uma das Novas Sete Maravilhas do Mundo. O Pão de Açúcar, com seu bondinho centenário, oferece uma das vistas mais espetaculares do planeta.",
          en: "Global icons of Rio de Janeiro. Christ the Redeemer (1931), atop Corcovado, is one of the New Seven Wonders of the World. Sugarloaf, with its century-old cable car, offers one of Earth’s most breathtaking views.",
          es: "Símbolos mundiales de Río de Janeiro. El Cristo Redentor (1931), en el Corcovado, es una de las Nuevas Siete Maravillas del Mundo. El Pan de Azúcar, con su teleférico centenario, ofrece una de las vistas más impresionantes del planeta."
        }
      },
      {
        name: { pt: "Cidades Históricas de Minas Gerais", en: "Historic Cities of Minas Gerais", es: "Ciudades Históricas de Minas Gerais" },
        location: "MG",
        description: {
          pt: "Conjunto de cidades barrocas tombadas pela UNESCO, como Ouro Preto, Mariana e Diamantina. Guardam o legado do Ciclo do Ouro, da Inconfidência Mineira e do gênio artístico de Aleijadinho.",
          en: "A collection of Baroque towns designated UNESCO World Heritage Sites, such as Ouro Preto, Mariana, and Diamantina. They preserve the legacy of the Gold Cycle, the Inconfidência Mineira, and the artistic genius of Aleijadinho.",
          es: "Conjunto de ciudades barrocas declaradas Patrimonio de la Humanidad por la UNESCO, como Ouro Preto, Mariana y Diamantina. Conservan el legado del Ciclo del Oro, la Inconfidencia Mineira y el genio artístico de Aleijadinho."
        }
      },
      {
        name: { pt: "Avenida Paulista e MASP", en: "Paulista Avenue & MASP", es: "Avenida Paulista y MASP" },
        location: "SP",
        description: {
          pt: "A avenida mais famosa do Brasil, símbolo da modernidade paulista. O MASP, com seu vão livre e acervo internacional, é marco da arquitetura moderna e da cultura brasileira.",
          en: "Brazil’s most famous avenue, symbol of São Paulo’s modernity. MASP, with its open undercroft and international collection, is a landmark of modern architecture and Brazilian culture.",
          es: "La avenida más famosa de Brasil, símbolo de la modernidad paulista. El MASP, con su vano libre y acervo internacional, es hito de la arquitectura moderna y la cultura brasileña."
        }
      },
      {
        name: { pt: "Convento da Penha", en: "Penha Convent", es: "Convento de la Peña" },
        location: "ES",
        description: {
          pt: "Um dos santuários religiosos mais antigos e importantes do Brasil, construído no século XVI sobre um penhasco em Vila Velha. Oferece vista panorâmica da Baía de Vitória e é palco da segunda maior festa religiosa do país.",
          en: "One of Brazil’s oldest and most important religious sanctuaries, built in the 16th century atop a cliff in Vila Velha. It offers panoramic views of Vitória Bay and hosts the country’s second-largest religious festival.",
          es: "Uno de los santuarios religiosos más antiguos e importantes de Brasil, construido en el siglo XVI sobre un acantilado en Vila Velha. Ofrece vista panorámica de la Bahía de Vitória y es sede de la segunda fiesta religiosa más grande del país."
        }
      },
      {
        name: { pt: "Litoral do Sudeste", en: "Southeast Coastline", es: "Litoral del Sudeste" },
        location: "RJ/SP/ES",
        description: {
          pt: "Mais de 1.000 km de praias que vão do extremo sul do Espírito Santo até o norte de São Paulo — de Guarapari e Ilha Grande a Ubatuba e Ilhabela. Combina vida urbana (Copacabana, Ipanema), natureza preservada (Paraty, restingas) e cultura caiçara.",
          en: "Over 1,000 km of coastline stretching from southern Espírito Santo to northern São Paulo — from Guarapari and Ilha Grande to Ubatuba and Ilhabela. Blends urban life (Copacabana, Ipanema), preserved nature (Paraty, restingas), and caiçara culture.",
          es: "Más de 1.000 km de litoral desde el sur de Espírito Santo hasta el norte de São Paulo —de Guarapari e Ilha Grande a Ubatuba e Ilhabela. Combina vida urbana (Copacabana, Ipanema), naturaleza preservada (Paraty, restingas) y cultura caiçara."
        }
      },
      {
        name: { pt: "Serra da Mantiqueira", en: "Mantiqueira Mountains", es: "Serra de la Mantiqueira" },
        location: "MG/SP/RJ",
        description: {
          pt: "Cadeia montanhosa que abriga o Pico da Bandeira (2.892 m), terceiro ponto mais alto do Brasil. É refúgio de ecoturismo, gastronomia de altitude (queijos, vinhos) e cidades charmosas como Campos do Jordão e Gonçalves.",
          en: "A mountain range home to Pico da Bandeira (2,892 m), Brazil’s third-highest peak. A haven for ecotourism, high-altitude gastronomy (cheeses, wines), and charming towns like Campos do Jordão and Gonçalves.",
          es: "Cadena montañosa que alberga el Pico da Bandeira (2.892 m), tercer punto más alto de Brasil. Refugio de ecoturismo, gastronomía de altura (quesos, vinos) y ciudades encantadoras como Campos do Jordão y Gonçalves."
        }
      }
    ],
    curiosities: [
      {
        pt: "O Sudeste concentra 43% da população brasileira em apenas 10,8% do território nacional — é a região mais densamente povoada do país.",
        en: "The Southeast concentrates 43% of Brazil’s population in just 10.8% of the national territory — it’s the country’s most densely populated region.",
        es: "El Sudeste concentra el 43% de la población brasileña en apenas el 10,8% del territorio nacional —es la región más densamente poblada del país."
      },
      {
        pt: "São Paulo é a única cidade do mundo que tem o maior número de restaurantes japoneses fora do Japão — são mais de 800 casas de culinária oriental.",
        en: "São Paulo is the only city in the world with the largest number of Japanese restaurants outside Japan — over 800 establishments serving Asian cuisine.",
        es: "São Paulo es la única ciudad del mundo con más restaurantes japoneses fuera de Japón —más de 800 establecimientos de cocina asiática."
      },
      {
        pt: "O Rio de Janeiro foi a única capital europeia fora da Europa: de 1808 a 1821, durante a fuga da corte portuguesa de Napoleão, o Rio foi a sede do Império Português.",
        en: "Rio de Janeiro was the only European capital outside Europe: from 1808 to 1821, during the Portuguese court’s flight from Napoleon, Rio served as the capital of the Portuguese Empire.",
        es: "Río de Janeiro fue la única capital europea fuera de Europa: de 1808 a 1821, durante la fuga de la corte portuguesa de Napoleón, Río fue la sede del Imperio Portugués."
      },
      {
        pt: "A Semana de Arte Moderna de 1922, em São Paulo, foi o marco do Modernismo brasileiro — e aconteceu no Theatro Municipal, inspirado na Ópera de Paris.",
        en: "The 1922 Modern Art Week in São Paulo marked the birth of Brazilian Modernism — and took place at the Municipal Theater, inspired by the Paris Opera.",
        es: "La Semana de Arte Moderno de 1922 en São Paulo marcó el nacimiento del Modernismo brasileño —y ocurrió en el Teatro Municipal, inspirado en la Ópera de París."
      },
      {
        pt: "A moqueca capixaba (ES) não leva dendê — é feita com urucum e azeite. Já a baiana leva dendê e leite de coco. A rivalidade é séria!",
        en: "Capixaba moqueca (ES) uses annatto and olive oil—not palm oil. Bahian moqueca uses palm oil and coconut milk. The rivalry is real!",
        es: "La moqueca capixaba (ES) se prepara con achiote y aceite —no con dendé. La bahiana lleva dendé y leche de coco. ¡La rivalidad es seria!"
      },
      {
        pt: "O Pico da Bandeira (ES/MG) foi, por décadas, considerado o ponto mais alto do Brasil — até a medição precisa do Pico da Neblina, na Amazônia, em 1965.",
        en: "Pico da Bandeira (ES/MG) was long considered Brazil’s highest point—until the precise measurement of Pico da Neblina in the Amazon in 1965.",
        es: "El Pico da Bandeira (ES/MG) fue durante décadas considerado el punto más alto de Brasil —hasta la medición precisa del Pico da Neblina en la Amazonía, en 1965."
      },
      {
        pt: "O Museu do Amanhã (RJ), projetado por Santiago Calatrava, é inteiramente dedicado à ciência, sustentabilidade e futuro da humanidade — e foi construído para as Olimpíadas de 2016.",
        en: "The Museum of Tomorrow (RJ), designed by Santiago Calatrava, is entirely dedicated to science, sustainability, and humanity’s future—and built for the 2016 Olympics.",
        es: "El Museo del Mañana (RJ), diseñado por Santiago Calatrava, está dedicado por completo a la ciencia, la sostenibilidad y el futuro de la humanidad —y fue construido para las Olimpíadas de 2016."
      },
      {
        pt: "A Revolução Constitucionalista de 1932 (SP) é o único movimento armado com feriado estadual — 9 de julho é comemorado apenas em São Paulo.",
        en: "The 1932 Constitutionalist Revolution (SP) is the only armed movement with a state holiday—July 9 is celebrated only in São Paulo.",
        es: "La Revolución Constitucionalista de 1932 (SP) es el único movimiento armado con feriado estatal —el 9 de julio se celebra solo en São Paulo."
      }
    ]
  }
};

const regionsDetailed = {
  sul: {
    name: {
      pt: "Região Sul",
      en: "Southern Region",
      es: "Región Sur"
    },
    history: {
      pt: `A Região Sul é a mais europeia do Brasil — resultado de intensa imigração alemã, italiana, polonesa, ucraniana e açoriana, que moldou sua cultura, arquitetura, gastronomia e identidade. Antes dos europeus, era habitada por povos indígenas como os Guarani, Kaingang e Xokleng. Durante o século XIX, o ciclo do tropeirismo e a pecuária criaram o gaúcho, símbolo de liberdade e bravura. A Revolução Farroupilha (1835–1845) marcou profundamente o espírito de resistência e autonomia da região. Hoje, o Sul combina tradição com modernidade: é líder em agronegócio, indústria, tecnologia e turismo de natureza — preservando vinhedos, cânions, neves naturais e festas que reúnem milhões de pessoas.`,
      en: `The Southern Region is the most European-influenced in Brazil — shaped by massive German, Italian, Polish, Ukrainian, and Azorean immigration, which forged its culture, architecture, cuisine, and identity. Before European arrival, it was home to Indigenous peoples like the Guarani, Kaingang, and Xokleng. In the 19th century, the tropeiro trade routes and cattle ranching gave rise to the gaúcho, symbol of freedom and bravery. The Farroupilha Revolution (1835–1845) deeply marked the region’s spirit of resistance and autonomy. Today, the South balances tradition and modernity — leading in agribusiness, industry, technology, and nature tourism — preserving vineyards, canyons, natural snowfalls, and festivals that draw millions.`,
      es: `La Región Sur es la más europea de Brasil — resultado de intensa inmigración alemana, italiana, polaca, ucraniana y azoriana, que moldeó su cultura, arquitectura, gastronomía e identidad. Antes de los europeos, estaba habitada por pueblos indígenas como los Guaraní, Kaingang y Xokleng. Durante el siglo XIX, las rutas de los tropeiros y la ganadería dieron origen al gaucho, símbolo de libertad y valentía. La Revolución Farroupilha (1835–1845) marcó profundamente el espíritu de resistencia y autonomía regional. Hoy, el Sur combina tradición y modernidad — lidera en agroindustria, industria, tecnología y turismo de naturaleza — preservando viñedos, cañones, nieves naturales y fiestas que reúnen a millones.`
    },
    attractions: [
      {
        name: { pt: "Cânion Itaimbezinho", en: "Itaimbezinho Canyon", es: "Cañón Itaimbezinho" },
        location: "RS/SC",
        description: {
          pt: "Localizado no Parque Nacional dos Aparados da Serra, é um dos cânions mais impressionantes da América do Sul, com paredes de até 720 metros de profundidade. Trilhas e mirantes oferecem vistas espetaculares do encontro entre o planalto e o mar de nuvens.",
          en: "Located in the Aparados da Serra National Park, it’s one of South America’s most impressive canyons, with cliffs up to 720 meters deep. Trails and viewpoints offer breathtaking views where the plateau meets the sea of clouds.",
          es: "Ubicado en el Parque Nacional de los Aparados da Serra, es uno de los cañones más impresionantes de Sudamérica, con paredes de hasta 720 metros de profundidad. Senderos y miradores ofrecen vistas espectaculares donde el planalto se encuentra con el mar de nubes."
        }
      },
      {
        name: { pt: "Serra Catarinense e as Neves", en: "Serra Catarinense and Snowfalls", es: "Serra Catarinense y las nieves" },
        location: "SC",
        description: {
          pt: "Único lugar do Brasil onde neva com frequência. Cidades como São Joaquim e Urupema registram temperaturas abaixo de -10°C no inverno. A região também produz vinhos de altitude premiados internacionalmente.",
          en: "The only place in Brazil with frequent natural snowfall. Cities like São Joaquim and Urupema reach temperatures below -10°C in winter. The region also produces internationally awarded high-altitude wines.",
          es: "Único lugar de Brasil donde nieva con frecuencia. Ciudades como São Joaquim y Urupema registran temperaturas bajo los -10°C en invierno. La región también produce vinos de altitud galardonados internacionalmente."
        }
      },
      {
        name: { pt: "Caminho das Tropas", en: "Tropeiro Trail", es: "Camino de los Troperos" },
        location: "PR/SC/RS",
        description: {
          pt: "Rota histórica usada pelos tropeiros no século XVIII para transportar gado do Rio Grande do Sul até Sorocaba (SP). Deu origem a cidades como Lapa, Curitiba e São Leopoldo — e à cultura do chimarrão, do pinhão assado e do feijão tropeiro.",
          en: "Historic route used by tropeiros in the 18th century to drive cattle from Rio Grande do Sul to Sorocaba (SP). It gave rise to cities like Lapa, Curitiba, and São Leopoldo — and the culture of chimarrão, roasted pine nuts, and feijão tropeiro.",
          es: "Ruta histórica usada por los troperos en el siglo XVIII para conducir ganado desde Río Grande do Sul hasta Sorocaba (SP). Dio origen a ciudades como Lapa, Curitiba y São Leopoldo — y a la cultura del chimarrão, piñón asado y feijão tropeiro."
        }
      },
      {
        name: { pt: "Vale Europeu", en: "European Valley", es: "Valle Europeo" },
        location: "SC/PR",
        description: {
          pt: "Região formada por cidades como Pomerode, Blumenau, Joinville e Treze Tílias — onde a arquitetura enxaimel, as festas típicas (Oktoberfest, Festa do Colono) e o idioma alemão ainda são vivos. É um dos maiores legados culturais da imigração no Brasil.",
          en: "Region formed by cities like Pomerode, Blumenau, Joinville, and Treze Tílias — where half-timbered architecture, traditional festivals (Oktoberfest, Festa do Colono), and the German language are still alive. It’s one of Brazil’s greatest cultural legacies of immigration.",
          es: "Región formada por ciudades como Pomerode, Blumenau, Joinville y Treze Tílias — donde la arquitectura de entramado, fiestas típicas (Oktoberfest, Festa do Colono) y el idioma alemán aún están vivos. Es uno de los mayores legados culturales de la inmigración en Brasil."
        }
      },
      {
        name: { pt: "Fronteira das Três Águas", en: "Three Waters Border", es: "Frontera de las Tres Aguas" },
        location: "PR",
        description: {
          pt: "Ponto onde as bacias do Iguaçu, Paraná e Paraguai se encontram — essenciais para a geração de energia (Itaipu), navegação e biodiversidade. A região abriga Foz do Iguaçu, um dos principais destinos turísticos do mundo.",
          en: "Point where the Iguaçu, Paraná, and Paraguay river basins meet — essential for energy (Itaipu), navigation, and biodiversity. The region hosts Foz do Iguaçu, one of the world’s top tourist destinations.",
          es: "Punto donde se encuentran las cuencas de los ríos Iguaçu, Paraná y Paraguay — esenciales para generación de energía (Itaipú), navegación y biodiversidad. La región alberga Foz do Iguaçu, uno de los destinos turísticos más importantes del mundo."
        }
      },
      {
        name: { pt: "Tradição Gaúcha e o Piquete Farroupilha", en: "Gaúcho Tradition and Farroupilha Encampment", es: "Tradición Gaucha y el Piquete Farroupilha" },
        location: "RS",
        description: {
          pt: "Durante a Semana Farroupilha (setembro), milhares de famílias montam acampamentos temáticos (piquetes) em parques de todo o RS, recriando o modo de vida dos farrapos: chimarrão, churrasco de chão, música nativista e danças tradicionais.",
          en: "During Farroupilha Week (September), thousands of families set up themed encampments (piquetes) in parks across RS, recreating the farroupilha lifestyle: chimarrão, ground barbecue, nativist music, and traditional dances.",
          es: "Durante la Semana Farroupilha (septiembre), miles de familias montan campamentos temáticos (piquetes) en parques de todo RS, recreando el estilo de vida farroupilha: chimarrão, asado en el piso, música nativista y danzas tradicionales."
        }
      }
    ],
    curiosities: [
      {
        pt: "Santa Catarina é o único estado brasileiro onde neva com frequência — e a menor temperatura registrada foi -17,8°C em Urupema.",
        en: "Santa Catarina is the only Brazilian state with frequent snowfall—and the lowest recorded temperature was -17.8°C in Urupema.",
        es: "Santa Catarina es el único estado brasileño donde nieva con frecuencia —y la temperatura más baja registrada fue -17,8°C en Urupema."
      },
      {
        pt: "Os golfinhos de Laguna (SC) ajudam pescadores há mais de 100 anos — um fenômeno único no mundo, transmitido de geração em geração entre humanos e animais.",
        en: "The dolphins of Laguna (SC) have helped fishermen for over 100 years—a unique phenomenon in the world, passed down across generations of humans and animals.",
        es: "Los delfines de Laguna (SC) ayudan a pescadores desde hace más de 100 años —fenómeno único en el mundo, transmitido de generación en generación entre humanos y animales."
      },
      {
        pt: "A Ponte Hercílio Luz (SC) foi reaberta em 2019 após 37 anos de restauração — e é a maior ponte pênsil em balanço do Brasil.",
        en: "The Hercílio Luz Bridge (SC) reopened in 2019 after 37 years of restoration—and is Brazil’s longest balanced suspension bridge.",
        es: "El Puente Hercílio Luz (SC) reabrió en 2019 tras 37 años de restauración —y es el puente colgante más largo de Brasil."
      },
      {
        pt: "A Oktoberfest de Blumenau (SC) é a maior festa alemã das Américas — com mais de 700 mil visitantes por edição.",
        en: "Blumenau’s Oktoberfest (SC) is the largest German festival in the Americas—with over 700,000 visitors per edition.",
        es: "La Oktoberfest de Blumenau (SC) es la fiesta alemana más grande de las Américas —con más de 700 mil visitantes por edición."
      },
      {
        pt: "O Rio Grande do Sul teve uma república independente: a República Rio-Grandense (1836–1845), durante a Revolução Farroupilha.",
        en: "Rio Grande do Sul once had its own independent republic: the Rio-Grandense Republic (1836–1845), during the Farroupilha Revolution.",
        es: "Río Grande do Sul tuvo una república independiente: la República Rio-Grandense (1836–1845), durante la Revolución Farroupilha."
      },
      {
        pt: "O Paraná abriga a Usina de Itaipu, que gera energia suficiente para abastecer 15% do Brasil e 90% do Paraguai.",
        en: "Paraná hosts the Itaipu Dam, which generates enough energy to power 15% of Brazil and 90% of Paraguay.",
        es: "Paraná alberga la represa de Itaipú, que genera energía suficiente para abastecer el 15% de Brasil y el 90% de Paraguay."
      },
      {
        pt: "A cidade de Joinville (SC) tem a única escola do Balé Bolshoi fora da Rússia — e realiza o maior festival de dança do mundo.",
        en: "Joinville (SC) hosts the only Bolshoi Ballet School outside Russia—and holds the world’s largest dance festival.",
        es: "Joinville (SC) alberga la única escuela del Ballet Bolshoi fuera de Rusia —y realiza el festival de danza más grande del mundo."
      },
      {
        pt: "A cultura do chimarrão foi trazida pelos tropeiros e hoje é símbolo de união, hospitalidade e identidade sulista.",
        en: "The chimarrão tradition was brought by tropeiros and is now a symbol of union, hospitality, and Southern identity.",
        es: "La tradición del chimarrão fue traída por los troperos y hoy es símbolo de unión, hospitalidad e identidad sureña."
      }
    ]
  }
};
