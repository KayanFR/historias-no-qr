// js/locations.js
export const locations = {
  theatro: {
    name: { pt: "Theatro Municipal", en: "Municipal Theater", es: "Teatro Municipal" },
    description: { pt: "Construído em 1909...", en: "Built in 1909...", es: "Construido en 1929..." },
    type: { pt: "Patrimônio Cultural", en: "Cultural Heritage", es: "Patrimonio Cultural" },
    icon: "fas fa-theater-masks",
    coordinates: { lat: -19.9167, lng: -43.9345 }
  },
  mercado: {
    name: { pt: "Mercado Central", en: "Central Market", es: "Mercado Central" },
    description: { pt: "Fundado em 1929...", en: "Founded in 1929...", es: "Fundado en 1929..." },
    type: { pt: "Centro Comercial", en: "Commercial Center", es: "Centro Comercial" },
    icon: "fas fa-shopping-basket",
    coordinates: { lat: -19.9200, lng: -43.9370 }
  },
  catedral: {
    name: { pt: "Catedral Metropolitana", en: "Metropolitan Cathedral", es: "Catedral Metropolitana" },
    description: { pt: "Inaugurada em 1932...", en: "Inaugurated in 1932...", es: "Inaugurada en 1932..." },
    type: { pt: "Patrimônio Religioso", en: "Religious Heritage", es: "Patrimonio Religioso" },
    icon: "fas fa-church",
    coordinates: { lat: -19.9150, lng: -43.9380 }
  }
};

export const brazilStates = {
  'AC': { name: 'Acre', region: 'norte', color: '#10b981', history: 'O Acre foi oficialmente incorporado...', curiosities: 'O Acre já foi um país independente...', cities: ['Rio Branco', 'Cruzeiro do Sul', 'Xapuri', 'Tarauacá', 'Sena Madureira'], attractions: ['Parque Nacional da Serra do Divisor', 'Reserva Extrativista Chico Mendes', 'Museu da Borracha', 'Parque Ambiental Chico Mendes', 'Cachoeira do Amor'] },
  'AM': { name: 'Amazonas', region: 'norte', color: '#10b981', history: 'Fundado em 1850...', curiosities: 'O Encontro das Águas...', cities: ['Manaus', 'Parintins', 'Itacoatiara', 'Tefé', 'Presidente Figueiredo'], attractions: ['Teatro Amazonas', 'Encontro das Águas', 'Parque Nacional do Jaú', 'Reserva Mamirauá', 'Festival Folclórico de Parintins'] },
  'AP': { name: 'Amapá', region: 'norte', color: '#10b981', history: 'O Amapá foi disputado...', curiosities: 'O Marco Zero do Equador...', cities: ['Macapá', 'Santana', 'Oiapoque', 'Laranjal do Jari', 'Porto Grande'], attractions: ['Marco Zero do Equador', 'Fortaleza de São José de Macapá', 'Parque Nacional Montanhas do Tumucumaque', 'Sítio Arqueológico do Rego Grande', 'Praia do Goiabal'] },
  'PA': { name: 'Pará', region: 'norte', color: '#10b981', history: 'Fundado em 1616...', curiosities: 'O Círio de Nazaré...', cities: ['Belém', 'Santarém', 'Castanhal', 'Marabá', 'Parauapebas'], attractions: ['Mercado Ver-o-Peso', 'Basílica de Nazaré', 'Alter do Chão', 'Ilha de Marajó', 'Theatro da Paz'] },
  'RO': { name: 'Rondônia', region: 'norte', color: '#10b981', history: 'Criado como Território Federal...', curiosities: 'O Forte Príncipe da Beira...', cities: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Cacoal', 'Vilhena'], attractions: ['Estrada de Ferro Madeira-Mamoré', 'Forte Príncipe da Beira', 'Usina de Santo Antônio', 'Cachoeira do Rio Verde', 'Parque Nacional Pacaás Novos'] },
  'RR': { name: 'Roraima', region: 'norte', color: '#10b981', history: 'Criado como Território Federal...', curiosities: 'O Monte Roraima inspirou...', cities: ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Alto Alegre', 'Mucajaí'], attractions: ['Monte Roraima', 'Serra do Tepequém', 'Ilha de Maracá', 'Parque Nacional do Viruá', 'Orla Taumanan'] },
  'TO': { name: 'Tocantins', region: 'norte', color: '#10b981', history: 'O Tocantins é o estado mais novo...', curiosities: 'O Jalapão é famoso...', cities: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Miracema do Tocantins'], attractions: ['Jalapão', 'Ilha do Bananal', 'Cachoeira da Formiga', 'Taquaruçu', 'Parque Estadual do Cantão'] },
  'MA': { name: 'Maranhão', region: 'nordeste', color: '#f59e0b', history: 'Colonizado por franceses...', curiosities: 'Os Lençóis Maranhenses...', cities: ['São Luís', 'Imperatriz', 'Caxias', 'Codó', 'Bacabal'], attractions: ['Lençóis Maranhenses', 'Centro Histórico de São Luís', 'Delta do Parnaíba', 'Alcântara', 'Parnaíba'] },
  'PI': { name: 'Piauí', region: 'nordeste', color: '#f59e0b', history: 'O Piauí foi o primeiro estado...', curiosities: 'A Serra da Capivara pode reescrever...', cities: ['Teresina', 'Parnaíba', 'Floriano', 'Picos', 'São Raimundo Nonato'], attractions: ['Parque Nacional da Serra da Capivara', 'Delta do Parnaíba', 'Barra Grande', 'Sete Cidades', 'Oeiras'] },
  'CE': { name: 'Ceará', region: 'nordeste', color: '#f59e0b', history: 'O Ceará foi o primeiro estado...', curiosities: 'Jericoacoara foi eleita...', cities: ['Fortaleza', 'Juazeiro do Norte', 'Sobral', 'Crato', 'Icó'], attractions: ['Jericoacoara', 'Canoa Quebrada', 'Centro Dragão do Mar', 'Geopark Araripe', 'Pedra da Galinha Choca'] },
  'RN': { name: 'Rio Grande do Norte', region: 'nordeste', color: '#f59e0b', history: 'Fundado em 1599...', curiosities: 'O RN é o maior produtor...', cities: ['Natal', 'Mossoró', 'Parnamirim', 'Caicó', 'São Gonçalo do Amarante'], attractions: ['Dunas de Genipabu', 'Praia de Pipa', 'Forte dos Reis Magos', 'Lagoa de Guaraíras', 'Serra de São Bento'] },
  'PB': { name: 'Paraíba', region: 'nordeste', color: '#f59e0b', history: 'Fundada em 1585...', curiosities: 'O pôr do sol no Jacaré...', cities: ['João Pessoa', 'Campina Grande', 'Patos', 'Sousa', 'Cabedelo'], attractions: ['Praia do Jacaré', 'Centro Histórico de João Pessoa', 'Maior São João do Mundo', 'Vale dos Dinossauros', 'Lajedo de Pai Mateus'] },
  'PE': { name: 'Pernambuco', region: 'nordeste', color: '#f59e0b', history: 'Pernambuco foi palco...', curiosities: 'Recife abriga a primeira sinagoga...', cities: ['Recife', 'Olinda', 'Petrolina', 'Caruaru', 'Garanhuns'], attractions: ['Recife Antigo', 'Olinda', 'Porto de Galinhas', 'Fernando de Noronha', 'Vale do São Francisco'] },
  'AL': { name: 'Alagoas', region: 'nordeste', color: '#f59e0b', history: 'Alagoas foi desmembrada...', curiosities: 'A Lagoa Mundaú...', cities: ['Maceió', 'Arapiraca', 'Penedo', 'Palmeira dos Índios', 'Rio Largo'], attractions: ['Praia do Gunga', 'Maragogi', 'Lagoa Mundaú', 'Centro Histórico de Penedo', 'Foz do São Francisco'] },
  'SE': { name: 'Sergipe', region: 'nordeste', color: '#f59e0b', history: 'Sergipe foi a quarta capitania...', curiosities: 'São Cristóvão é a quarta cidade...', cities: ['Aracaju', 'São Cristóvão', 'Estância', 'Itabaiana', 'Lagarto'], attractions: ['Praia de Atalaia', 'São Cristóvão', 'Cânion do Xingó', 'Laranjeiras', 'Oceanário de Aracaju'] },
  'BA': { name: 'Bahia', region: 'nordeste', color: '#f59e0b', history: 'A Bahia foi o primeiro território...', curiosities: 'Salvador tem o maior centro histórico...', cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Juazeiro'], attractions: ['Pelourinho', 'Chapada Diamantina', 'Porto Seguro', 'Morro de São Paulo', 'Ilha de Boipeba'] },
  'MG': { name: 'Minas Gerais', region: 'sudeste', color: '#3b82f6', history: 'Minas Gerais nasceu...', curiosities: 'Ouro Preto é Patrimônio...', cities: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Montes Claros'], attractions: ['Ouro Preto', 'Inhotim', 'Serra do Cipó', 'Cachoeira da Fumaça', 'Pão de Açúcar (MG)'] },
  'SP': { name: 'São Paulo', region: 'sudeste', color: '#3b82f6', history: 'Fundada em 1554...', curiosities: 'São Paulo tem o maior número...', cities: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André'], attractions: ['Avenida Paulista', 'MASP', 'Parque Ibirapuera', 'Mercado Municipal', 'Santuário de Aparecida'] },
  'RJ': { name: 'Rio de Janeiro', region: 'sudeste', color: '#3b82f6', history: 'O Rio de Janeiro foi fundado...', curiosities: 'O Cristo Redentor...', cities: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói'], attractions: ['Cristo Redentor', 'Pão de Açúcar', 'Copacabana', 'Maracanã', 'Floresta da Tijuca'] },
  'ES': { name: 'Espírito Santo', region: 'sudeste', color: '#3b82f6', history: 'Fundado em 1535...', curiosities: 'A moqueca capixaba não leva dendê...', cities: ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Linhares'], attractions: ['Convento da Penha', 'Guarapari', 'Domingos Martins', 'Parque Nacional do Caparaó', 'Ilha do Frade'] },
  'DF': { name: 'Distrito Federal', region: 'centro-oeste', color: '#8b5cf6', history: 'Brasília foi inaugurada...', curiosities: 'O sonho de Dom Bosco...', cities: ['Brasília', 'Taguatinga', 'Ceilândia', 'Gama', 'Sobradinho'], attractions: ['Praça dos Três Poderes', 'Catedral de Brasília', 'Congresso Nacional', 'Lago Paranoá', 'Ponte JK'] },
  'GO': { name: 'Goiás', region: 'centro-oeste', color: '#8b5cf6', history: 'Goiás foi fundado...', curiosities: 'A Procissão do Fogaréu...', cities: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Barra do Garças'], attractions: ['Chapada dos Veadeiros', 'Caldas Novas', 'Goiás Velho', 'Pirenópolis', 'Parque Nacional das Emas'] },
  'MT': { name: 'Mato Grosso', region: 'centro-oeste', color: '#8b5cf6', history: 'Mato Grosso foi criado...', curiosities: 'O Centro Geodésico...', cities: ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Barra do Garças'], attractions: ['Chapada dos Guimarães', 'Pantanal', 'Nobres', 'Parque Nacional do Xingu', 'Alta Floresta'] },
  'MS': { name: 'Mato Grosso do Sul', region: 'centro-oeste', color: '#8b5cf6', history: 'Criado em 1979...', curiosities: 'Bonito é o destino...', cities: ['Campo Grande', 'Dourados', 'Corumbá', 'Três Lagoas', 'Ponta Porã'], attractions: ['Bonito', 'Pantanal', 'Serra da Bodoquena', 'Aquário do Pantanal', 'Buraco das Araras'] },
  'PR': { name: 'Paraná', region: 'sul', color: '#ef4444', history: 'O Paraná foi criado...', curiosities: 'Foz do Iguaçu tem as maiores quedas d’água...', cities: ['Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Foz do Iguaçu'], attractions: ['Cataratas do Iguaçu', 'Jardim Botânico de Curitiba', 'Parque Estadual de Vila Velha', 'Ilha do Mel', 'Usina de Itaipu'] },
  'SC': { name: 'Santa Catarina', region: 'sul', color: '#ef4444', history: 'Santa Catarina foi colonizada...', curiosities: 'Florianópolis é chamada...', cities: ['Florianópolis', 'Joinville', 'Blumenau', 'Chapecó', 'Criciúma'], attractions: ['Florianópolis', 'Balneário Camboriú', 'Blumenau', 'Serra Catarinense', 'Bombinhas'] },
  'RS': { name: 'Rio Grande do Sul', region: 'sul', color: '#ef4444', history: 'O Rio Grande do Sul foi palco...', curiosities: 'Gramado e Canela...', cities: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Santa Maria', 'Gramado'], attractions: ['Gramado', 'Canela', 'Serra Gaúcha', 'Cânion Itaimbezinho', 'Região das Missões'] }
};

export const regionData = {
  norte: { name: "Região Norte", description: "Maior região do Brasil...", icon: "fas fa-mountain" },
  nordeste: { name: "Região Nordeste", description: "Berço da história do Brasil...", icon: "fas fa-umbrella-beach" },
  'centro-oeste': { name: "Região Centro-Oeste", description: "Região de contrastes...", icon: "fas fa-tree" },
  sudeste: { name: "Região Sudeste", description: "Polo econômico e cultural...", icon: "fas fa-city" },
  sul: { name: "Região Sul", description: "Região de clima ameno...", icon: "fas fa-mug-hot" }
};