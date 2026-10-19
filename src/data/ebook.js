export const ebookData = {
  title: "Kit de Criação: Agentes de IA",
  subtitle: "Do zero à criação de agentes inteligentes, mesmo sem saber programar.",
  badge: "E-book Oficial • Edição 2026",
  downloadUrl: "./downloads/kit-criacao-agentes-ia-devacademy.pdf",
  downloadFileName: "Kit_Criacao_Agentes_IA_DevAcademy.pdf",
  pagesCount: 8,
  author: "Dev Academy",
  summary: [
    {
      num: "01",
      tag: "CONCEITOS FUNDAMENTAIS",
      title: "Agentes de IA vs. Chatbots Tradicionais",
      page: "Pág. 03",
      desc: "A distinção crucial entre um chatbot passivo e um agente autônomo. O padrão ReAct (Reasoning + Acting) para percepção, reflexão, ação e auto-correção."
    },
    {
      num: "02",
      tag: "ARQUITETURA DE AGENTES",
      title: "Anatomia de um Agente Eficiente",
      page: "Pág. 04",
      desc: "Os 4 pilares: Cérebro (LLM como Claude 3.7, GPT-4o), Memória de curto/longo prazo (RAG), Ferramentas (Tools) e Gatilhos (Triggers). Sistemas Multi-Agentes."
    },
    {
      num: "03",
      tag: "STACK NO-CODE",
      title: "Plataformas No-Code Essenciais",
      page: "Pág. 05",
      desc: "Como orquestrar agentes corporativos sem escrever código usando n8n, integrações rápidas com Make.com (WhatsApp) e construtores como Flowise & Dify.ai."
    },
    {
      num: "04",
      tag: "ENGENHARIA DE PROMPT",
      title: "Prompt Master: O DNA do seu Agente",
      page: "Pág. 06",
      desc: "O Framework C-R-O-F (Contexto, Papel, Objetivo, Formato) e o segredo do Negative Prompting para eliminar 90% dos erros e alucinações operacionais."
    },
    {
      num: "05",
      tag: "PROJETOS PRÁTICOS",
      title: "3 Projetos de Agentes para Criar Hoje",
      page: "Pág. 07",
      desc: "Modelos prontos: SDR no WhatsApp com n8n, Agente Radar de Curadoria 24/7 e Analista Financeiro inteligente de notas fiscais com OCR."
    },
    {
      num: "06",
      tag: "MERCADO & MONETIZAÇÃO",
      title: "Monetização & Próximos Passos",
      page: "Pág. 08",
      desc: "Como estruturar contratos mensais recorrentes de R$ 1.500 a R$ 5.000 prestando serviços de automação e implantação de agentes para empresas."
    }
  ],
  benefits: [
    {
      icon: "cpu",
      title: "Sem Dependência de Código",
      desc: "Aprenda a construir e plugar sistemas inteligentes usando fluxogramas visuais e ferramentas modernas No-Code."
    },
    {
      icon: "network",
      title: "Enxames Multi-Agentes",
      desc: "Entenda como orquestrar múltiplos agentes que colaboram entre si: pesquisadores, redatores, revisores e publicadores."
    },
    {
      icon: "workflow",
      title: "Loop ReAct na Prática",
      desc: "Domine o ciclo autônomo de raciocínio, execução de ferramentas externas (Google, CRM, WhatsApp) e autovalidação."
    },
    {
      icon: "shield",
      title: "Framework C-R-O-F & Anti-Alucinação",
      desc: "Regras de engenharia de prompt para garantir que seu agente nunca invente dados e responda em JSON estruturado."
    },
    {
      icon: "dollar",
      title: "Alta Demanda Comercial",
      desc: "Projetos de alta valorização que pequenas e médias empresas procuram desesperadamente para cortar custos e acelerar vendas."
    },
    {
      icon: "book",
      title: "100% Gratuito & Direto ao Ponto",
      desc: "Guia técnico conciso, sem enrolação teórica, pronto para você ler e implementar ainda hoje."
    }
  ],
  practicalProjects: [
    {
      id: "sdr-whatsapp",
      tag: "PROJETO 01",
      title: "SDR & Atendimento WhatsApp Autônomo",
      tools: ["n8n", "Evolution API / Z-API", "Notion / Hubspot"],
      desc: "Conecte o WhatsApp ao n8n. O agente responde dúvidas com base no catálogo em PDF, recolhe os dados de contato do cliente e cadastra o lead qualificado no CRM."
    },
    {
      id: "news-radar",
      tag: "PROJETO 02",
      title: "Agente Radar de Notícias & Curadoria",
      tools: ["Make.com", "OpenAI / Claude", "Telegram / Slack"],
      desc: "Todo dia às 07:00, o agente varre 10 sites do seu nicho, resume os três principais acontecimentos com insights e envia um relatório executivo formatado."
    },
    {
      id: "finance-ocr",
      tag: "PROJETO 03",
      title: "Analista Financeiro de Notas Fiscais",
      tools: ["n8n", "OCR Vision", "Google Sheets"],
      desc: "Toda vez que uma nota fiscal ou recibo chega no seu e-mail, o agente lê o anexo usando OCR inteligente, extrai os valores, classifica a despesa e alimenta a planilha."
    }
  ]
};
