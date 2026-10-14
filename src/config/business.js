/**
 * GS ESTÉTICA AVANÇADA - Configuração Central de Negócio (JS)
 */
export const businessConfig = {
  brand: {
    name: "GS Estética Avançada",
    tagline: "Cuidado que valoriza a sua beleza.",
    professionalName: "Gabrielly Sampaio",
    professionalRole: "Estética Avançada",
    professionalPhoto: "./public/images/gabrielly-sampaio.png",
    instagramHandle: "@gs_esteticaavancadaa",
    instagramUrl: "https://www.instagram.com/gs_esteticaavancadaa/",
  },
  contact: {
    whatsapp: {
      isPending: true, // PENDENTE DE CONFIRMAÇÃO
      phoneNumber: null,
      formattedDisplay: "Pendente de confirmação",
      customMessage: "Olá! Gostaria de agendar uma avaliação na GS Estética Avançada.",
    },
    address: {
      isPending: true, // PENDENTE DE CONFIRMAÇÃO
      street: null,
      neighborhood: null,
      city: "Pendente de confirmação",
      state: "Pendente de confirmação",
      postalCode: null,
      googleMapsUrl: null,
    },
    operatingHours: {
      isPending: true, // PENDENTE DE CONFIRMAÇÃO
      weekdays: "Pendente de confirmação",
      saturday: "Pendente de confirmação",
      sunday: "Fechado",
      note: "Atendimento com horário previamente agendado.",
    },
  },
  colors: {
    ivory: "#FAF7F3",
    warmWhite: "#FFFCF9",
    nudeRose: "#EAD7D3",
    softMauve: "#C6AAB9",
    subtleGold: "#B69A60",
    graphite: "#292625",
  },
  seo: {
    title: "GS Estética Avançada | Gabrielly Sampaio",
    description: "Tecnologia, conhecimento e cuidado individualizado em uma experiência estética pensada para você. Atendimento exclusivo com Gabrielly Sampaio.",
    keywords: [
      "GS Estética Avançada",
      "Gabrielly Sampaio",
      "depilação a laser",
      "skincare avançado",
      "tratamentos corporais",
      "criolipólise",
      "contorno corporal",
      "estética de luxo"
    ],
    ogImage: "/images/og-preview.jpg",
  },
  treatments: [
    {
      id: "depilacao-laser",
      title: "Depilação a Laser",
      category: "Tecnologia & Conforto",
      shortDescription: "Tecnologia avançada para remoção de pelos com máximo conforto, segurança e protocolos adaptados a cada tipo de pele.",
      fullDescription: "Nosso protocolo de depilação a laser combina parâmetros precisos de emissão com sistemas de resfriamento para proporcionar sessões confortáveis, eficazes e seguras. O plano de aplicação é definido após avaliação individualizada das características da sua pele e pelo.",
      benefits: [
        "Sessões com foco no conforto e bem-estar",
        "Parâmetros calibrados para cada fototipo",
        "Cuidado pré e pós-aplicação orientado pela profissional"
      ],
      protocolInfo: "Recomenda-se avaliação prévia para determinação do cronograma de sessões.",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
      featured: true,
    },
    {
      id: "skincare-facial",
      title: "Tratamentos Faciais & Skincare",
      category: "Cuidado Facial",
      shortDescription: "Protocolos especializados para revitalização, hidratação profunda, uniformização e estímulo à saúde natural da pele.",
      fullDescription: "Procedimentos faciais focados na renovação celular, reequilíbrio cutâneo e iluminação natural. Cada atendimento considera as particularidades do seu manto hidrolipídico e objetivos estéticos, combinando dermocosméticos de alta performance e técnicas refinadas.",
      benefits: [
        "Revitalização e brilho natural",
        "Limpeza profunda e hidratação seletiva",
        "Acompanhamento personalizado de rotina facial"
      ],
      protocolInfo: "Protocolo adaptado às necessidades identificadas na consulta de avaliação.",
      imageUrl: "https://images.unsplash.com/photo-1512290900672-1f02e6024976?auto=format&fit=crop&w=1000&q=80",
      featured: true,
    },
    {
      id: "criolipolise",
      title: "Criolipólise Avançada",
      category: "Tecnologia Corporal",
      shortDescription: "Tecnologia de resfriamento controlado aplicada a áreas específicas, respeitando a integridade do tecido e a anatomia individual.",
      fullDescription: "Equipamento moderno que aplica temperaturas controladas com monitoramento contínuo em áreas selecionadas. Todo o procedimento é precedido por uma análise anatômica criteriosa para garantir indicação precisa e conforto absoluto.",
      benefits: [
        "Tecnologia com controle térmico rigoroso",
        "Mapeamento e acompanhamento das áreas aplicadas",
        "Orientações detalhadas para o período de recuperação"
      ],
      protocolInfo: "Sessões planejadas conforme avaliação presencial das metas e biotipo.",
      imageUrl: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1000&q=80",
      featured: true,
    },
    {
      id: "tratamentos-corporais",
      title: "Tratamentos Corporais",
      category: "Harmonia & Bem-estar",
      shortDescription: "Abordagens completas voltadas à textura, tônus cutâneo e melhora do aspecto geral da pele corporal.",
      fullDescription: "Conjunto de protocolos integrados que aliam dermocosméticos consagrados, ativos biocompatíveis e estímulos mecânicos/físicos para favorecer a circulação local, a elasticidade e a suavidade da pele.",
      benefits: [
        "Sensação de leveza e relaxamento",
        "Estímulo ao tônus e vitalidade da pele",
        "Sinergia entre técnicas manuais e tecnologias auxiliares"
      ],
      protocolInfo: "Cronograma estruturado de acordo com a resposta individual do organismo.",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      id: "contorno-corporal",
      title: "Protocolos de Contorno Corporal",
      category: "Definição & Firmeza",
      shortDescription: "Estratégias personalizadas para valorizar as linhas naturais do corpo através de tecnologias e metodologias sinérgicas.",
      fullDescription: "Protocolos dedicados a esculpir e valorizar as linhas anatômicas de forma harmoniosa e natural. Envolve combinações específicas de estimulação tissular, drenagem estratégica e tecnologia estética de ponta.",
      benefits: [
        "Valorização das proporções naturais",
        "Integração de protocolos para resultados consistentes",
        "Monitoramento contínuo da evolução"
      ],
      protocolInfo: "Indicado após consulta avaliativa para alinhamento de expectativas e etapas.",
      imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      id: "detox-corporal",
      title: "Detox Corporal & Drenagem",
      category: "Desintoxicação & Leveza",
      shortDescription: "Protocolo que favorece a eliminação de líquidos retidos, estimula a microcirculação e proporciona bem-estar profundo.",
      fullDescription: "Experiência pensada para aliviar a sensação de inchaço e fadiga, ativando os canais linfáticos e promovendo relaxamento muscular. Ideal para reequilibrar o corpo e potencializar a saúde cutânea.",
      benefits: [
        "Alívio imediato do inchaço e retenção de líquidos",
        "Sensação profunda de relaxamento e leveza",
        "Ativação suave da circulação linfática"
      ],
      protocolInfo: "Pode ser realizado de forma pontual ou integrado a programas corporais mais amplos.",
      imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=80",
      featured: false,
    }
  ],
  faqs: [
    {
      id: "agendamento",
      question: "Como agendar uma avaliação?",
      answer: "O agendamento é realizado diretamente com nossa equipe via canais oficiais. Assim que nossos dados de atendimento forem confirmados, você poderá agendar com facilidade e escolher o horário mais conveniente."
    },
    {
      id: "tratamentos-disponiveis",
      question: "Quais tratamentos estão disponíveis?",
      answer: "Oferecemos soluções em depilação a laser, cuidados faciais e skincare de alta performance, criolipólise, tratamentos corporais, protocolos de contorno e detox corporal. Cada procedimento é customizado para as suas metas."
    },
    {
      id: "tratamento-adequado",
      question: "Como saber qual tratamento é adequado para mim?",
      answer: "Toda conduta inicia-se com uma avaliação individualizada e minuciosa conduzida pela profissional Gabrielly Sampaio. Nela são analisadas suas características corporais ou faciais, histórico e objetivos para indicar o protocolo mais seguro e eficaz."
    },
    {
      id: "localizacao",
      question: "Onde fica a clínica?",
      answer: "O endereço oficial e os detalhes de acesso à nossa clínica estão em fase final de confirmação institucional e serão divulgados em breve com mapa detalhado e orientações de recepção."
    },
    {
      id: "valores-disponibilidade",
      question: "Como consultar valores e disponibilidade?",
      answer: "Valores, pacotes e disponibilidade de horários são informados de forma transparente durante a conversa preliminar e após a avaliação do protocolo necessário para o seu caso."
    }
  ],
  gallery: [
    {
      id: "gal-0",
      title: "Gabrielly Sampaio",
      category: "detalhes",
      imageUrl: "./public/images/gabrielly-sampaio.png",
      altText: "Retrato oficial de Gabrielly Sampaio na GS Estética Avançada"
    },
    {
      id: "gal-1",
      title: "Atendimento Personalizado",
      category: "ambiente",
      imageUrl: "https://images.unsplash.com/photo-1512290900672-1f02e6024976?auto=format&fit=crop&w=1200&q=80",
      altText: "Ambiente sofisticado com atmosfera de spa e produtos de estética premium"
    },
    {
      id: "gal-2",
      title: "Precisão e Conforto no Cuidado Facial",
      category: "procedimento",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
      altText: "Aplicação detalhada de tratamento facial em cabine exclusiva"
    },
    {
      id: "gal-3",
      title: "Tecnologia de Precisão",
      category: "tecnologia",
      imageUrl: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=80",
      altText: "Equipamentos modernos e ambiente clínico impecável"
    },
    {
      id: "gal-4",
      title: "Cuidado e Serenidade",
      category: "ambiente",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      altText: "Detalhes de relaxamento e acolhimento em espaço estético"
    },
    {
      id: "gal-5",
      title: "Harmonia e Bem-Estar",
      category: "detalhes",
      imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
      altText: "Elementos sensoriais e toques de delicadeza da clínica"
    },
    {
      id: "gal-6",
      title: "Protocolos Corporais Exclusivos",
      category: "procedimento",
      imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      altText: "Ambiente preparado para protocolos corporais e drenagem especializada"
    }
  ]
};
