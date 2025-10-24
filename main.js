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

// Brazilian States Data - ENRICHED WITH PDF CONTENT
const brazilStates = {
    'AC': {
        name: 'Acre',
        region: 'norte',
        color: '#10b981',
        history: 'O Acre foi oficialmente incorporado ao Brasil em 1903, após a Revolução Acreana contra o domínio boliviano. Antes disso, era território espanhol e depois boliviano, mas ocupado por seringueiros brasileiros. O Tratado de Petrópolis comprou o território por 2 milhões de libras esterlinas. Em 1962, tornou-se estado brasileiro.',
        curiosities: 'O Acre já foi um país independente por alguns meses em 1899! Também é o berço do ambientalista Chico Mendes e da religião do Santo Daime. Mais de 87% de seu território ainda é floresta intacta.',
        cities: ['Rio Branco', 'Cruzeiro do Sul', 'Xapuri', 'Tarauacá', 'Sena Madureira'],
        attractions: ['Parque Nacional da Serra do Divisor', 'Reserva Extrativista Chico Mendes', 'Museu da Borracha', 'Parque Ambiental Chico Mendes', 'Cachoeira do Amor']
    },
    'AM': {
        name: 'Amazonas',
        region: 'norte',
        color: '#10b981',
        history: 'Fundado em 1850, o Amazonas viveu seu auge durante o Ciclo da Borracha (1879–1912), quando Manaus era chamada de "Paris dos Trópicos". Após o colapso do ciclo, o estado entrou em decadência até a criação da Zona Franca de Manaus em 1967, que impulsionou a industrialização.',
        curiosities: 'O Encontro das Águas, onde os rios Negro e Solimões correm lado a lado sem se misturar por 6 km, é um fenômeno único no mundo. Manaus também teve elefantes e leões no século XIX, trazidos pelos barões da borracha!',
        cities: ['Manaus', 'Parintins', 'Itacoatiara', 'Tefé', 'Presidente Figueiredo'],
        attractions: ['Teatro Amazonas', 'Encontro das Águas', 'Parque Nacional do Jaú', 'Reserva Mamirauá', 'Festival Folclórico de Parintins']
    },
    'AP': {
        name: 'Amapá',
        region: 'norte',
        color: '#10b981',
        history: 'O Amapá foi disputado entre Brasil e França até 1900, quando o Laudo de Berna deu ganho de causa ao Brasil. Criado como território federal em 1943 por Getúlio Vargas, tornou-se estado em 1988. É o único estado brasileiro cortado pela Linha do Equador.',
        curiosities: 'O Marco Zero do Equador em Macapá marca o ponto exato da linha do Equador. Durante os equinócios, o sol passa exatamente pelo círculo no topo do obelisco. O estado também abriga o "Stonehenge Amazônico", com pedras milenares.',
        cities: ['Macapá', 'Santana', 'Oiapoque', 'Laranjal do Jari', 'Porto Grande'],
        attractions: ['Marco Zero do Equador', 'Fortaleza de São José de Macapá', 'Parque Nacional Montanhas do Tumucumaque', 'Sítio Arqueológico do Rego Grande', 'Praia do Goiabal']
    },
    'PA': {
        name: 'Pará',
        region: 'norte',
        color: '#10b981',
        history: 'Fundado em 1616 com o Forte do Presépio, o Pará foi palco da Cabanagem (1835–1840), a maior revolta popular da Amazônia. Durante o Ciclo da Borracha, Belém foi conhecida como "Paris n’América". Hoje, é o maior estado do Norte em população.',
        curiosidades: 'O Círio de Nazaré, em Belém, é a maior procissão católica do mundo, com milhões de fiéis. A Ilha de Marajó é a maior ilha flúvio-marítima do planeta, maior que a Suíça! E os búfalos são mais numerosos que as pessoas na ilha.',
        cities: ['Belém', 'Santarém', 'Castanhal', 'Marabá', 'Parauapebas'],
        attractions: ['Mercado Ver-o-Peso', 'Basílica de Nazaré', 'Alter do Chão', 'Ilha de Marajó', 'Theatro da Paz']
    },
    'RO': {
        name: 'Rondônia',
        region: 'norte',
        color: '#10b981',
        history: 'Criado como Território Federal do Guaporé em 1943, mudou de nome para Rondônia em 1956 em homenagem ao marechal Cândido Rondon. A Estrada de Ferro Madeira-Mamoré, construída em 1912, foi marcada pela morte de 6 mil trabalhadores — a "Ferrovia do Diabo". Tornou-se estado em 1981.',
        curiosidades: 'O Forte Príncipe da Beira é a maior fortificação colonial da Amazônia. Rondônia também é berço do Arraial Flor do Maracujá, a maior festa junina da Amazônia. As usinas de Santo Antônio e Jirau geram energia para 40 milhões de pessoas!',
        cities: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Cacoal', 'Vilhena'],
        attractions: ['Estrada de Ferro Madeira-Mamoré', 'Forte Príncipe da Beira', 'Usina de Santo Antônio', 'Cachoeira do Rio Verde', 'Parque Nacional Pacaás Novos']
    },
    'RR': {
        name: 'Roraima',
        region: 'norte',
        color: '#10b981',
        history: 'Criado como Território Federal do Rio Branco em 1943, mudou de nome para Roraima (que significa "Serra Verde" em língua indígena) em 1962. Tornou-se estado em 1988. É o estado mais jovem do Brasil e o único totalmente ao norte da linha do Equador.',
        curiosidades: 'O Monte Roraima inspirou o livro "O Mundo Perdido" de Arthur Conan Doyle. É também considerado sagrado pelos povos indígenas, que acreditam que abriga o espírito criador Makunaima. Boa Vista é a única capital brasileira inteiramente ao norte do Equador.',
        cities: ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Alto Alegre', 'Mucajaí'],
        attractions: ['Monte Roraima', 'Serra do Tepequém', 'Ilha de Maracá', 'Parque Nacional do Viruá', 'Orla Taumanan']
    },
    'TO': {
        name: 'Tocantins',
        region: 'norte',
        color: '#10b981',
        history: 'O Tocantins é o estado mais novo do Brasil, criado em 5 de outubro de 1988 com a nova Constituição Federal. Sua capital, Palmas, foi planejada do zero em 1989, inspirada em Brasília. Antes, fazia parte do norte de Goiás.',
        curiosidades: 'O Jalapão é famoso por seus fervedouros — nascentes onde é impossível afundar devido à pressão da água. A Ilha do Bananal é a maior ilha fluvial do mundo. Palmas é uma das cidades mais jovens do Brasil, com pouco mais de 30 anos.',
        cities: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Miracema do Tocantins'],
        attractions: ['Jalapão', 'Ilha do Bananal', 'Cachoeira da Formiga', 'Taquaruçu', 'Parque Estadual do Cantão']
    },
    'MA': {
        name: 'Maranhão',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'Colonizado por franceses em 1612 (França Equinocial), foi retomado por portugueses em 1615. Durante o Império, foi palco da Balaiada (1838–1841), uma revolta popular contra as elites. Hoje, é conhecido por suas belezas naturais e culturais únicas.',
        curiosidades: 'Os Lençóis Maranhenses são um deserto que vira mar durante o inverno amazônico. São Luís é a única capital brasileira fundada por franceses e tem o maior conjunto de azulejos portugueses fora de Portugal. O Bumba Meu Boi é Patrimônio Cultural da Humanidade.',
        cities: ['São Luís', 'Imperatriz', 'Caxias', 'Codó', 'Bacabal'],
        attractions: ['Lençóis Maranhenses', 'Centro Histórico de São Luís', 'Delta do Parnaíba', 'Alcântara', 'Parnaíba']
    },
    'PI': {
        name: 'Piauí',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'O Piauí foi o primeiro estado a apoiar a Independência do Brasil, com a Batalha do Jenipapo em 1823. Sua capital, Teresina, foi a primeira cidade brasileira planejada para ser capital (1852). O estado abriga o Parque Nacional da Serra da Capivara, com pinturas rupestres de 50 mil anos.',
        curiosidades: 'A Serra da Capivara pode reescrever a história da ocupação humana nas Américas. O Delta do Parnaíba é um dos três únicos deltas em mar aberto do mundo. Teresina é chamada de "Cidade Verde" por suas inúmeras árvores.',
        cities: ['Teresina', 'Parnaíba', 'Floriano', 'Picos', 'São Raimundo Nonato'],
        attractions: ['Parque Nacional da Serra da Capivara', 'Delta do Parnaíba', 'Barra Grande', 'Sete Cidades', 'Oeiras']
    },
    'CE': {
        name: 'Ceará',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'O Ceará foi o primeiro estado brasileiro a abolir a escravidão, em 1884 — quatro anos antes da Lei Áurea. Foi também palco da Confederação do Equador (1824). Hoje, é um dos estados mais desenvolvidos do Nordeste, com forte atuação em energia eólica e tecnologia.',
        curiosidades: 'Jericoacoara foi eleita uma das praias mais bonitas do mundo. Juazeiro do Norte é o maior centro de peregrinação religiosa do Nordeste, em homenagem ao Padre Cícero. O Ceará é considerado a "capital do humor brasileiro", tendo revelado Chico Anysio e Renato Aragão.',
        cities: ['Fortaleza', 'Juazeiro do Norte', 'Sobral', 'Crato', 'Icó'],
        attractions: ['Jericoacoara', 'Canoa Quebrada', 'Centro Dragão do Mar', 'Geopark Araripe', 'Pedra da Galinha Choca']
    },
    'RN': {
        name: 'Rio Grande do Norte',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'Fundado em 1599 no Dia de Natal, o RN foi invadido por holandeses entre 1633 e 1654. Durante a Segunda Guerra Mundial, Natal foi o "Trampolim da Vitória", base estratégica para os Aliados. Mossoró foi a primeira cidade brasileira a libertar seus escravos, em 1883.',
        curiosidades: 'O RN é o maior produtor de energia eólica do Brasil — 95% de sua eletricidade vem dos ventos! O cajueiro de Pirangi é o maior do mundo, com 8.500 m². Lampião foi derrotado em Mossoró — a única cidade que conseguiu repelir o cangaceiro.',
        cities: ['Natal', 'Mossoró', 'Parnamirim', 'Caicó', 'São Gonçalo do Amarante'],
        attractions: ['Dunas de Genipabu', 'Praia de Pipa', 'Forte dos Reis Magos', 'Lagoa de Guaraíras', 'Serra de São Bento']
    },
    'PB': {
        name: 'Paraíba',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'Fundada em 1585 como Filipeia de Nossa Senhora das Neves, a Paraíba enfrentou invasões holandesas (1634–1654). O assassinato do presidente João Pessoa em 1930 foi o estopim da Revolução de 1930, que levou Getúlio Vargas ao poder. A capital foi renomeada em sua homenagem.',
        curiosidades: 'O pôr do sol no Jacaré, em Cabedelo, é acompanhado pelo Bolero de Ravel tocado ao vivo — um dos mais belos do mundo. O Lajedo de Pai Mateus, em Cabaceiras, é um dos lugares mais misteriosos do Brasil, com pedras milenares. Sousa abriga pegadas de dinossauros com 80 milhões de anos.',
        cities: ['João Pessoa', 'Campina Grande', 'Patos', 'Sousa', 'Cabedelo'],
        attractions: ['Praia do Jacaré', 'Centro Histórico de João Pessoa', 'Maior São João do Mundo', 'Vale dos Dinossauros', 'Lajedo de Pai Mateus']
    },
    'PE': {
        name: 'Pernambuco',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'Pernambuco foi palco da Insurreição Pernambucana (1645–1654), que expulsou os holandeses e é considerada o "berço do Exército Brasileiro". Também liderou a Revolução de 1817 e a Confederação do Equador (1824). Hoje, é um polo de inovação com o Porto Digital em Recife.',
        curiosidades: 'Recife abriga a primeira sinagoga das Américas (1636). Olinda é Patrimônio da Humanidade pela UNESCO. Fernando de Noronha tem a Baía do Sancho, eleita a praia mais bonita do mundo. O Galo da Madrugada é o maior bloco carnavalesco do planeta.',
        cities: ['Recife', 'Olinda', 'Petrolina', 'Caruaru', 'Garanhuns'],
        attractions: ['Recife Antigo', 'Olinda', 'Porto de Galinhas', 'Fernando de Noronha', 'Vale do São Francisco']
    },
    'AL': {
        name: 'Alagoas',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'Alagoas foi desmembrada de Pernambuco em 1817. Durante o século XIX, foi um importante centro açucareiro. Hoje, é conhecida por suas praias paradisíacas e rica cultura popular, com destaque para o bumba meu boi e o forró.',
        curiosidades: 'A Lagoa Mundaú, em Maceió, é tão transparente que parece um aquário natural. A cidade de Penedo foi fundada por holandeses e tem arquitetura colonial preservada. Alagoas é o menor estado do Nordeste em área, mas um dos mais densamente povoados.',
        cities: ['Maceió', 'Arapiraca', 'Penedo', 'Palmeira dos Índios', 'Rio Largo'],
        attractions: ['Praia do Gunga', 'Maragogi', 'Lagoa Mundaú', 'Centro Histórico de Penedo', 'Foz do São Francisco']
    },
    'SE': {
        name: 'Sergipe',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'Sergipe foi a quarta capitania hereditária do Brasil, criada em 1590. Foi reincorporada à Bahia várias vezes até obter autonomia definitiva em 1820. Em 1963, tornou-se o primeiro estado nordestino a produzir petróleo, com a descoberta em Carmópolis.',
        curiosidades: 'São Cristóvão é a quarta cidade mais antiga do Brasil e Patrimônio da Humanidade pela UNESCO. O Cânion do Xingó é um dos maiores cânions navegáveis do mundo. Sergipe é o menor estado do Brasil em área, mas tem uma das maiores densidades populacionais do Nordeste.',
        cities: ['Aracaju', 'São Cristóvão', 'Estância', 'Itabaiana', 'Laranjeiras'],
        attractions: ['Praia de Atalaia', 'São Cristóvão', 'Cânion do Xingó', 'Laranjeiras', 'Oceanário de Aracaju']
    },
    'BA': {
        name: 'Bahia',
        region: 'nordeste',
        color: '#f59e0b',
        history: 'A Bahia foi o primeiro território colonizado do Brasil, com a fundação de Salvador em 1549. Foi centro do ciclo do açúcar e do comércio de escravos africanos. A Independência da Bahia, em 2 de julho de 1823, é feriado estadual e símbolo de resistência.',
        curiosidades: 'Salvador tem o maior centro histórico preservado das Américas (Pelourinho). A Bahia é o berço do axé, do trio elétrico e do carnaval de rua mais famoso do mundo. Canudos foi palco de uma das maiores tragédias sociais do Brasil, retratada em "Os Sertões".',
        cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Juazeiro'],
        attractions: ['Pelourinho', 'Chapada Diamantina', 'Porto Seguro', 'Morro de São Paulo', 'Ilha de Boipeba']
    },
    'MG': {
        name: 'Minas Gerais',
        region: 'sudeste',
        color: '#3b82f6',
        history: 'Minas Gerais nasceu com o Ciclo do Ouro no século XVIII, quando foi palco da Inconfidência Mineira (1789), liderada por Tiradentes. Após o esgotamento do ouro, o estado se reinventou com a cafeicultura e, mais tarde, com a indústria e a tecnologia.',
        curiosidades: 'Ouro Preto é Patrimônio da Humanidade e berço da Inconfidência Mineira. O Pico da Bandeira é o terceiro ponto mais alto do Brasil. Minas é o maior produtor de leite e café do país. Belo Horizonte foi a primeira capital planejada do Brasil (1897).',
        cities: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Montes Claros'],
        attractions: ['Ouro Preto', 'Inhotim', 'Serra do Cipó', 'Cachoeira da Fumaça', 'Pão de Açúcar (MG)']
    },
    'SP': {
        name: 'São Paulo',
        region: 'sudeste',
        color: '#3b82f6',
        history: 'Fundada em 1554 por jesuítas, São Paulo foi o ponto de partida das bandeiras que expandiram o território brasileiro. No século XIX, tornou-se o centro do ciclo do café. Hoje, é o motor econômico do Brasil, com destaque em indústria, finanças e tecnologia.',
        curiosidades: 'São Paulo tem o maior número de restaurantes japoneses fora do Japão. O Edifício Copan é um dos maiores prédios residenciais do mundo. A cidade também abriga o único museu do Balé Bolshoi fora da Rússia, em Joinville (SC, mas administrado por SP).',
        cities: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André'],
        attractions: ['Avenida Paulista', 'MASP', 'Parque Ibirapuera', 'Mercado Municipal', 'Santuário de Aparecida']
    },
    'RJ': {
        name: 'Rio de Janeiro',
        region: 'sudeste',
        color: '#3b82f6',
        history: 'O Rio de Janeiro foi fundado em 1565 após a expulsão dos franceses (França Antártica). Foi capital do Brasil de 1763 a 1960. Durante o Império, foi palco da corte portuguesa (1808) e da Independência (1822). Hoje, é símbolo da cultura brasileira.',
        curiosidades: 'O Cristo Redentor é uma das Novas Sete Maravilhas do Mundo. O Maracanã foi palco do "Maracanazo" em 1950. O Rio é a única cidade do mundo a sediar os Jogos Olímpicos, a Copa do Mundo e o Réveillon mais famoso do Brasil (Copacabana).',
        cities: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói'],
        attractions: ['Cristo Redentor', 'Pão de Açúcar', 'Copacabana', 'Maracanã', 'Floresta da Tijuca']
    },
    'ES': {
        name: 'Espírito Santo',
        region: 'sudeste',
        color: '#3b82f6',
        history: 'Fundado em 1535 por Vasco Fernandes Coutinho, o Espírito Santo foi uma das primeiras capitanias hereditárias. Durante o século XIX, recebeu imigrantes italianos, alemães e pomeranos, que fundaram colônias agrícolas. Hoje, é um dos estados mais equilibrados do Brasil em termos econômicos e sociais.',
        curiosidades: 'A moqueca capixaba não leva dendê — é feita com urucum e azeite. O Convento da Penha, em Vila Velha, é o segundo maior centro de peregrinação do Brasil, atrás apenas do Círio de Nazaré. Guarapari tem areias monazíticas com supostas propriedades terapêuticas.',
        cities: ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Linhares'],
        attractions: ['Convento da Penha', 'Guarapari', 'Domingos Martins', 'Parque Nacional do Caparaó', 'Ilha do Frade']
    },
    'DF': {
        name: 'Distrito Federal',
        region: 'centro-oeste',
        color: '#8b5cf6',
        history: 'Brasília foi inaugurada em 21 de abril de 1960, cumprindo um sonho de mais de 300 anos de transferir a capital para o interior. Projetada por Lúcio Costa e Oscar Niemeyer, é Patrimônio Cultural da Humanidade pela UNESCO desde 1987.',
        curiosidades: 'O sonho de Dom Bosco em 1883 previu uma cidade entre os paralelos 15º e 20º — exatamente onde Brasília foi construída. Os candangos, trabalhadores que construíram a capital, são homenageados na Praça dos Três Poderes. Brasília é a única cidade moderna do século XX reconhecida pela UNESCO.',
        cities: ['Brasília', 'Taguatinga', 'Ceilândia', 'Gama', 'Sobradinho'],
        attractions: ['Praça dos Três Poderes', 'Catedral de Brasília', 'Congresso Nacional', 'Lago Paranoá', 'Ponte JK']
    },
    'GO': {
        name: 'Goiás',
        region: 'centro-oeste',
        color: '#8b5cf6',
        history: 'Goiás foi fundado no século XVIII com o Ciclo do Ouro. Sua antiga capital, Goiás Velho, é Patrimônio da Humanidade. Em 1937, a capital foi transferida para Goiânia, uma cidade planejada. Com a criação de Brasília em 1960, parte do território goiano foi incorporado ao DF.',
        curiosidades: 'A Procissão do Fogaréu, em Goiás Velho, é uma das manifestações religiosas mais impressionantes do Brasil. A Chapada dos Veadeiros é considerada um ponto de energia espiritual. Caldas Novas é a maior estância hidrotermal do mundo.',
        cities: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Catalão'],
        attractions: ['Chapada dos Veadeiros', 'Caldas Novas', 'Goiás Velho', 'Pirenópolis', 'Parque Nacional das Emas']
    },
    'MT': {
        name: 'Mato Grosso',
        region: 'centro-oeste',
        color: '#8b5cf6',
        history: 'Mato Grosso foi criado como capitania em 1748. Foi palco da Guerra do Paraguai (1864–1870), quando foi invadido pelas tropas paraguaias. Em 1977, foi dividido, dando origem ao Mato Grosso do Sul. Hoje, é um dos maiores produtores agrícolas do Brasil.',
        curiosidades: 'O Centro Geodésico da América do Sul fica na Chapada dos Guimarães. Nobres tem águas tão transparentes quanto Bonito (MS). A Estrada Transpantaneira é uma das melhores rotas de observação de vida selvagem do mundo.',
        cities: ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Barra do Garças'],
        attractions: ['Chapada dos Guimarães', 'Pantanal', 'Nobres', 'Parque Nacional do Xingu', 'Alta Floresta']
    },
    'MS': {
        name: 'Mato Grosso do Sul',
        region: 'centro-oeste',
        color: '#8b5cf6',
        history: 'Criado em 1979 a partir da divisão do antigo Mato Grosso, o estado se destacou pelo Pantanal e por Bonito. Durante a Guerra do Paraguai, foi palco da Retomada de Corumbá (1867). Hoje, é referência em turismo ecológico e sustentável.',
        curiosidades: 'Bonito é o destino de ecoturismo mais premiado do Brasil. O Pantanal é a maior planície alagável do planeta. Campo Grande é chamada de "Cidade Morena" por causa da cor avermelhada de sua terra. O estado também é conhecido pelo tereré, bebida típica à base de erva-mate.',
        cities: ['Campo Grande', 'Dourados', 'Corumbá', 'Três Lagoas', 'Ponta Porã'],
        attractions: ['Bonito', 'Pantanal', 'Serra da Bodoquena', 'Aquário do Pantanal', 'Buraco das Araras']
    },
    'PR': {
        name: 'Paraná',
        region: 'sul',
        color: '#ef4444',
        history: 'O Paraná foi criado como província em 1853, separando-se de São Paulo. Recebeu imigrantes europeus (alemães, italianos, poloneses) que fundaram colônias agrícolas. No século XX, tornou-se um polo industrial e energético, com a Usina de Itaipu.',
        curiosidades: 'Foz do Iguaçu tem as maiores quedas d’água do Brasil. Curitiba é referência mundial em planejamento urbano e transporte público. A Estrada de Ferro Paranaguá-Curitiba é uma das mais belas do mundo. O Paraná é o maior produtor de soja e trigo do Brasil.',
        cities: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Foz do Iguaçu'],
        attractions: ['Cataratas do Iguaçu', 'Jardim Botânico de Curitiba', 'Parque Estadual de Vila Velha', 'Ilha do Mel', 'Usina de Itaipu']
    },
    'SC': {
        name: 'Santa Catarina',
        region: 'sul',
        color: '#ef4444',
        history: 'Santa Catarina foi colonizada por açorianos no litoral e por imigrantes europeus (alemães, italianos, poloneses) no interior. Hoje, é um dos estados mais prósperos do Brasil, com destaque em indústria, agropecuária e turismo.',
        curiosidades: 'Florianópolis é chamada de "Ilha da Magia" e tem mais de 40 praias. Blumenau é a "capital da cerveja" e sede da Oktoberfest, a maior festa alemã das Américas. A Serra Catarinense é o único lugar do Brasil onde neva com frequência. Pomerode é a cidade mais alemã do Brasil.',
        cities: ['Florianópolis', 'Joinville', 'Blumenau', 'Chapecó', 'Criciúma'],
        attractions: ['Florianópolis', 'Balneário Camboriú', 'Blumenau', 'Serra Catarinense', 'Bombinhas']
    },
    'RS': {
        name: 'Rio Grande do Sul',
        region: 'sul',
        color: '#ef4444',
        history: 'O Rio Grande do Sul foi palco da Revolução Farroupilha (1835–1845), que proclamou a República Rio-Grandense. Também teve forte imigração europeia (italianos, alemães) e influência gaúcha, com a cultura do chimarrão, churrasco e tradições campeiras.',
        curiosidades: 'Gramado e Canela são os destinos de inverno mais famosos do Brasil. O Cânion Itaimbezinho é um dos mais impressionantes da América do Sul. Pelotas é famosa pelos doces coloniais, Patrimônio Cultural do Brasil. O estado também é berço de Getúlio Vargas e João Goulart.',
        cities: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Santa Maria', 'Gramado'],
        attractions: ['Gramado', 'Canela', 'Serra Gaúcha', 'Cânion Itaimbezinho', 'Região das Missões']
    }
};

// Regional descriptions and map placeholders
const regionData = {
    norte: {
        name: "Região Norte",
        description: "Maior região do Brasil em área, abriga a Floresta Amazônica, rios majestosos e uma biodiversidade única. É o coração verde do país, com forte influência indígena e histórias de seringueiros e extrativistas.",
        icon: "fas fa-tree"
    },
    nordeste: {
        name: "Região Nordeste",
        description: "Berço da história do Brasil, onde tudo começou em 1500. Mistura praias paradisíacas, sertão resistente, cultura afro-brasileira vibrante e tradições que encantam o mundo.",
        icon: "fas fa-sun"
    },
    'centro-oeste': {
        name: "Região Centro-Oeste",
        description: "Região de contrastes: capital moderna (Brasília), Pantanal (maior planície alagável do mundo) e cerrado, berço das águas do Brasil. Terra de planejamento, natureza exuberante e espiritualidade.",
        icon: "fas fa-landmark"
    },
    sudeste: {
        name: "Região Sudeste",
        description: "Polo econômico e cultural do Brasil, reúne megacidades, montanhas históricas, praias icônicas e uma rica herança do ciclo do café e da industrialização.",
        icon: "fas fa-city"
    },
    sul: {
        name: "Região Sul",
        description: "Região de clima ameno, influência europeia marcante e paisagens que vão de praias atlânticas a montanhas com neve. Conhecida pela hospitalidade, tradição gaúcha e produção agrícola de excelência.",
        icon: "fas fa-mountain"
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
    
    // Add events for region cards
    document.querySelectorAll('.region-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const region = btn.dataset.region;
            showStateStep(region);
        });
    });

    // Back buttons
    document.getElementById('back-to-region')?.addEventListener('click', () => {
        document.getElementById('step-region').classList.remove('hidden');
        document.getElementById('step-state').classList.add('hidden');
        document.getElementById('step-city').classList.add('hidden');
    });

    document.getElementById('back-to-state')?.addEventListener('click', () => {
        const currentRegion = selectedStates.length > 0 
            ? brazilStates[selectedStates[0]]?.region || 'all' 
            : 'all';
        showStateStep(currentRegion);
    });

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

// Show state step
function showStateStep(regionKey) {
    const region = regionData[regionKey] || regionData.norte;
    document.getElementById('region-title').textContent = region.name;
    
    // Update region map placeholder
    const mapPlaceholder = document.getElementById('regionMapPlaceholder');
    mapPlaceholder.innerHTML = `
        <i class="${region.icon} text-6xl text-purple-600 mb-4"></i>
        <p class="text-gray-600">${region.description}</p>
    `;

    // Filter states
    const statesInRegion = Object.entries(brazilStates).filter(([uf, data]) => 
        regionKey === 'all' ? true : data.region === regionKey
    );

    const grid = document.getElementById('states-grid');
    grid.innerHTML = '';

    statesInRegion.forEach(([uf, state]) => {
        const card = document.createElement('div');
        card.className = 'state-card bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer transition-shadow border-l-4';
        card.style.borderLeftColor = state.color;
        card.innerHTML = `
            <div class="font-bold text-gray-800">${state.name}</div>
            <div class="text-sm text-gray-600 mt-1">${state.cities.length} cidades</div>
        `;
        card.onclick = () => showCityStep(uf);
        grid.appendChild(card);
    });

    document.getElementById('step-region').classList.add('hidden');
    document.getElementById('step-state').classList.remove('hidden');
    document.getElementById('step-city').classList.add('hidden');
}

// Show city step
function showCityStep(uf) {
    const state = brazilStates[uf];
    if (!state) return;

    document.getElementById('state-title').textContent = state.name;
    
    // Show full state content
    const contentDiv = document.getElementById('state-full-content');
    contentDiv.innerHTML = `
        <h3 class="text-xl font-bold text-gray-800 mb-3">${state.name}</h3>
        <p class="text-gray-600 mb-4">${state.history}</p>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-semibold text-blue-800 mb-2">Curiosidades</h4>
            <p class="text-blue-700">${state.curiosities}</p>
        </div>
        <div class="flex flex-wrap gap-2">
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">#História</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">#Cultura</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">#Turismo</span>
        </div>
    `;

    // Cities and attractions
    const list = document.getElementById('cities-list');
    list.innerHTML = '';

    // Add cities
    state.cities.forEach(city => {
        const cityCard = document.createElement('div');
        cityCard.className = 'attraction-card';
        cityCard.innerHTML = `
            <div class="font-semibold text-gray-800 flex items-center">
                <i class="fas fa-map-marker-alt text-red-500 mr-2"></i>
                ${city}
            </div>
            <div class="text-sm text-gray-600 mt-1">Cidade histórica</div>
            <button onclick="addToItinerary('${uf}', '${city}')" 
                    class="mt-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-700">
                Adicionar ao Roteiro
            </button>
        `;
        list.appendChild(cityCard);
    });

    // Add attractions
    if (state.attractions && state.attractions.length > 0) {
        const attrTitle = document.createElement('h4');
        attrTitle.className = 'font-semibold text-gray-700 mt-6 mb-3';
        attrTitle.textContent = 'Atrações Turísticas';
        list.appendChild(attrTitle);

        state.attractions.forEach(attr => {
            const attrCard = document.createElement('div');
            attrCard.className = 'attraction-card';
            attrCard.innerHTML = `
                <div class="font-semibold text-gray-800 flex items-center">
                    <i class="fas fa-monument text-blue-500 mr-2"></i>
                    ${attr}
                </div>
                <div class="text-sm text-gray-600 mt-1">Ponto turístico</div>
                <button onclick="addToItinerary('${uf}', '${attr}')" 
                        class="mt-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-700">
                    Adicionar ao Roteiro
                </button>
            `;
            list.appendChild(attrCard);
        });
    }

    document.getElementById('step-state').classList.add('hidden');
    document.getElementById('step-city').classList.remove('hidden');
}

// Add to itinerary
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

// Update selected states
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

// Remove state
function removeState(uf) {
    selectedStates = selectedStates.filter(s => s !== uf);
    updateSelectedStates();
}

// Clear route
function clearRoute() {
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

    document.getElementById('contentTitle').textContent = location.name[currentLanguage];
    document.getElementById('contentDescription').textContent = location.description[currentLanguage];
    document.getElementById('locationType').textContent = location.type[currentLanguage];
    document.getElementById('locationIcon').className = `${location.icon} text-8xl text-white/80`;
    
    const contentSection = document.getElementById('content');
    contentSection.classList.remove('hidden');
    contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
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

// Setup language selector
function setupLanguageSelector() {
    const selector = document.getElementById('languageSelect');
    selector.addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
    });
}

// Update language
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

// Play audio
function playAudio() {
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

// Utility functions
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

// Show notification
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

// Add scroll animations
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
document.addEventListener('DOMContentLoaded', observeElements);
// Initialize scroll animations
document.addEventListener('DOMContentLoaded', observeElements);
