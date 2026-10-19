(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={title:`Kit de Criação: Agentes de IA`,subtitle:`Do zero à criação de agentes inteligentes, mesmo sem saber programar.`,badge:`E-book Oficial • Edição 2026`,downloadUrl:`./downloads/kit-criacao-agentes-ia-devacademy.pdf`,downloadFileName:`Kit_Criacao_Agentes_IA_DevAcademy.pdf`,pagesCount:8,author:`Dev Academy`,summary:[{num:`01`,tag:`CONCEITOS FUNDAMENTAIS`,title:`Agentes de IA vs. Chatbots Tradicionais`,page:`Pág. 03`,desc:`A distinção crucial entre um chatbot passivo e um agente autônomo. O padrão ReAct (Reasoning + Acting) para percepção, reflexão, ação e auto-correção.`},{num:`02`,tag:`ARQUITETURA DE AGENTES`,title:`Anatomia de um Agente Eficiente`,page:`Pág. 04`,desc:`Os 4 pilares: Cérebro (LLM como Claude 3.7, GPT-4o), Memória de curto/longo prazo (RAG), Ferramentas (Tools) e Gatilhos (Triggers). Sistemas Multi-Agentes.`},{num:`03`,tag:`STACK NO-CODE`,title:`Plataformas No-Code Essenciais`,page:`Pág. 05`,desc:`Como orquestrar agentes corporativos sem escrever código usando n8n, integrações rápidas com Make.com (WhatsApp) e construtores como Flowise & Dify.ai.`},{num:`04`,tag:`ENGENHARIA DE PROMPT`,title:`Prompt Master: O DNA do seu Agente`,page:`Pág. 06`,desc:`O Framework C-R-O-F (Contexto, Papel, Objetivo, Formato) e o segredo do Negative Prompting para eliminar 90% dos erros e alucinações operacionais.`},{num:`05`,tag:`PROJETOS PRÁTICOS`,title:`3 Projetos de Agentes para Criar Hoje`,page:`Pág. 07`,desc:`Modelos prontos: SDR no WhatsApp com n8n, Agente Radar de Curadoria 24/7 e Analista Financeiro inteligente de notas fiscais com OCR.`},{num:`06`,tag:`MERCADO & MONETIZAÇÃO`,title:`Monetização & Próximos Passos`,page:`Pág. 08`,desc:`Como estruturar contratos mensais recorrentes de R$ 1.500 a R$ 5.000 prestando serviços de automação e implantação de agentes para empresas.`}],benefits:[{icon:`cpu`,title:`Sem Dependência de Código`,desc:`Aprenda a construir e plugar sistemas inteligentes usando fluxogramas visuais e ferramentas modernas No-Code.`},{icon:`network`,title:`Enxames Multi-Agentes`,desc:`Entenda como orquestrar múltiplos agentes que colaboram entre si: pesquisadores, redatores, revisores e publicadores.`},{icon:`workflow`,title:`Loop ReAct na Prática`,desc:`Domine o ciclo autônomo de raciocínio, execução de ferramentas externas (Google, CRM, WhatsApp) e autovalidação.`},{icon:`shield`,title:`Framework C-R-O-F & Anti-Alucinação`,desc:`Regras de engenharia de prompt para garantir que seu agente nunca invente dados e responda em JSON estruturado.`},{icon:`dollar`,title:`Alta Demanda Comercial`,desc:`Projetos de alta valorização que pequenas e médias empresas procuram desesperadamente para cortar custos e acelerar vendas.`},{icon:`book`,title:`100% Gratuito & Direto ao Ponto`,desc:`Guia técnico conciso, sem enrolação teórica, pronto para você ler e implementar ainda hoje.`}],practicalProjects:[{id:`sdr-whatsapp`,tag:`PROJETO 01`,title:`SDR & Atendimento WhatsApp Autônomo`,tools:[`n8n`,`Evolution API / Z-API`,`Notion / Hubspot`],desc:`Conecte o WhatsApp ao n8n. O agente responde dúvidas com base no catálogo em PDF, recolhe os dados de contato do cliente e cadastra o lead qualificado no CRM.`},{id:`news-radar`,tag:`PROJETO 02`,title:`Agente Radar de Notícias & Curadoria`,tools:[`Make.com`,`OpenAI / Claude`,`Telegram / Slack`],desc:`Todo dia às 07:00, o agente varre 10 sites do seu nicho, resume os três principais acontecimentos com insights e envia um relatório executivo formatado.`},{id:`finance-ocr`,tag:`PROJETO 03`,title:`Analista Financeiro de Notas Fiscais`,tools:[`n8n`,`OCR Vision`,`Google Sheets`],desc:`Toda vez que uma nota fiscal ou recibo chega no seu e-mail, o agente lê o anexo usando OCR inteligente, extrai os valores, classifica a despesa e alimenta a planilha.`}]},t=[{id:`pdv`,title:`Sistema PDV Completo & Integrado`,subtitle:`Desenvolvimento de Sistemas de Ponto de Venda`,headline:`Controle total de vendas, estoque e financeiro para seu negócio`,description:`Desenvolvemos o sistema de ponto de venda ideal para sua operação comercial: frente de caixa ágil, controle de estoque em tempo real e integração direta com maquininhas de cartão.`,image:`./assets/servico_pdv.png`,badge:`SISTEMAS PDV`,features:[`Frente de caixa ágil e intuitiva para equipe`,`Controle automatizado de estoque e alertas de reposição`,`Integração nativa com maquininhas e TEF`,`Relatórios financeiros e emissão fiscal rápida`],ctaText:`Iniciar meu projeto de PDV →`},{id:`fintech`,title:`Banco Digital & Plataformas Fintech`,subtitle:`Criação de Sites e Aplicativos para Fintechs`,headline:`Criamos o seu Banco Digital com PIX e Open Finance`,description:`Desenvolvemos plataformas financeiras completas, seguras e intuitivas. Integração com gateways de pagamento, emissão de cartão virtual e físico com criptografia de ponta a ponta.`,image:`./assets/servico_fintech.png`,badge:`FINTECH & BANCO DIGITAL`,features:[`PIX instantâneo e Gateway de pagamentos integrados`,`Gestão de cartões virtuais e físicos personalizados`,`Segurança máxima com criptografia bancária`,`Dashboard analítico com conciliação automática`],ctaText:`Criar minha Fintech agora →`},{id:`apostas`,title:`Plataformas de Cassino & Apostas Esportivas`,subtitle:`Criação de Sites e Apps de iGaming`,headline:`Plataformas completas e de alta performance para apostas`,description:`Desenvolvimento de ecossistemas seguros e escaláveis para o mercado de apostas e iGaming: integração com provedores de slots, apostas ao vivo, sistema de afiliados e PIX automatizado.`,image:`./assets/servico_apostas.png`,badge:`CASAS DE APOSTAS & IGAMING`,features:[`PIX automatizado para depósitos e saques instantâneos`,`Integração com Cassino ao Vivo, Slots e Apostas Esportivas`,`Painel administrativo completo de afiliados e comissões`,`Arquitetura blindada contra ataques e alta concorrência`],ctaText:`Construir plataforma de apostas →`},{id:`sistemas`,title:`Desenvolvimento de Sistemas Sob Medida`,subtitle:`Sistemas Web, ERP e Dashboards Inteligentes`,headline:`Sistemas integrados e inteligentes para seu negócio evoluir`,description:`Criamos softwares corporativos personalizados que conectam todas as áreas da sua empresa. Automação de processos operacionais, gestão de dados estruturada e painéis de BI em tempo real.`,image:`./assets/servico_sistemas.png`,badge:`SISTEMAS SOB MEDIDA`,features:[`Gestão de dados centralizada e altamente organizada`,`Automação de fluxos e processos inteligentes`,`Painel de BI com métricas e gráficos em tempo real`,`Integração via APIs com ferramentas de terceiros`],ctaText:`Falar com nossos especialistas →`},{id:`mobile`,title:`Desenvolvimento de Aplicativos Móveis`,subtitle:`Mobile Presentation • Performance & Usabilidade`,headline:`Redefina a experiência mobile com apps inovadores`,description:`A criação de aplicativos móveis focada em performance, inovação e usabilidade. Interfaces modernas para iOS e Android com navegação fluida, notificações push e inteligência artificial.`,image:`./assets/servico_mobile.png`,badge:`APLICATIVOS MOBILE`,features:[`Aplicativos nativos e híbridos para iOS e Android`,`Design de Interface (UI/UX) focado na experiência do usuário`,`Tecnologia e performance de ponta sem travamentos`,`Integração direta com APIs e bancos de dados em nuvem`],ctaText:`Transforme sua ideia em app →`}];document.addEventListener(`DOMContentLoaded`,()=>{n(),r(),i(),a(),o(),s(),c(),l()});function n(){let e=document.getElementById(`currentYear`);e&&(e.textContent=new Date().getFullYear())}function r(){let e=document.getElementById(`menuToggle`),t=document.getElementById(`mobileMenu`),n=document.querySelectorAll(`.mobile-nav-link, .mobile-menu-cta a`);if(!e||!t)return;let r=n=>{let r=!(n===void 0?e.getAttribute(`aria-expanded`)===`true`:n);e.setAttribute(`aria-expanded`,String(r)),e.classList.toggle(`active`,r),t.setAttribute(`aria-hidden`,String(!r)),t.classList.toggle(`active`,r),r?document.body.style.overflow=`hidden`:document.body.style.overflow=``};e.addEventListener(`click`,()=>r()),n.forEach(e=>{e.addEventListener(`click`,()=>r(!1))}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.getAttribute(`aria-expanded`)===`true`&&(r(!1),e.focus())})}function i(){let e=document.getElementById(`servicesShowcase`);if(!e)return;e.innerHTML=`
    <div class="services-nav-tabs animate-on-scroll" role="tablist">
      <button class="service-tab-btn active" data-id="all">Todos os Serviços</button>
      <button class="service-tab-btn" data-id="pdv">Sistema PDV</button>
      <button class="service-tab-btn" data-id="fintech">Fintech & Bancos</button>
      <button class="service-tab-btn" data-id="apostas">Casas de Apostas</button>
      <button class="service-tab-btn" data-id="sistemas">Sistemas Web</button>
      <button class="service-tab-btn" data-id="mobile">Apps Mobile</button>
    </div>
    <div class="services-cards-stack" id="servicesCardsStack"></div>
  `;let n=document.getElementById(`servicesCardsStack`);function r(e=`all`){let r=e===`all`?t:t.filter(t=>t.id===e);n.innerHTML=r.map((e,t)=>{let n=t%2==1,r=encodeURIComponent(`Olá, gostaria de solicitar um orçamento para o serviço: ${e.title} com a Dev Academy.`);return`
        <article class="service-spotlight-card animate-on-scroll is-visible ${n?`layout-reverse`:``}" id="servico-${e.id}">
          <div class="service-spotlight-grid">
            <div class="service-visual-col">
              <div class="service-img-wrapper">
                <div class="service-img-glow"></div>
                <img src="${e.image}" alt="${e.title}" class="service-poster-img" loading="lazy" />
              </div>
            </div>

            <div class="service-info-col">
              <div class="service-badge-row">
                <span class="badge-pill">${e.badge}</span>
              </div>
              <h3 class="service-headline">${e.headline}</h3>
              <p class="service-sub">${e.subtitle}</p>
              <p class="service-full-desc">${e.description}</p>

              <ul class="service-feature-checklist">
                ${e.features.map(e=>`
                  <li>
                    <span class="feat-check">✓</span>
                    <span>${e}</span>
                  </li>
                `).join(``)}
              </ul>

              <div class="service-action-row">
                <a href="https://wa.me/?text=${r}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg btn-glow">
                  <span>${e.ctaText}</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      `}).join(``)}r(`all`);let i=e.querySelectorAll(`.service-tab-btn`);i.forEach(e=>{e.addEventListener(`click`,()=>{i.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),r(e.dataset.id)})})}function a(){let t=document.getElementById(`chaptersGrid`);t&&(t.innerHTML=e.summary.map(e=>`
    <article class="chapter-card animate-on-scroll">
      <div class="chapter-header">
        <span class="chapter-num">${e.num}</span>
        <span class="chapter-page">${e.page}</span>
      </div>
      <span class="chapter-tag">${e.tag}</span>
      <h3 class="chapter-title">${e.title}</h3>
      <p class="chapter-desc">${e.desc}</p>
    </article>
  `).join(``))}function o(){let t=document.getElementById(`practicalProjectsGrid`);t&&(t.innerHTML=e.practicalProjects.map(e=>`
    <article class="project-box animate-on-scroll">
      <span class="project-top-tag">${e.tag}</span>
      <h3 class="project-heading">${e.title}</h3>
      <p class="project-paragraph">${e.desc}</p>
      <div class="project-tools">
        ${e.tools.map(e=>`<span class="tool-chip">${e}</span>`).join(``)}
      </div>
    </article>
  `).join(``))}function s(){let t=document.getElementById(`benefitsGrid`);if(!t)return;let n={cpu:`⚡`,network:`🌐`,workflow:`🔄`,shield:`🛡️`,dollar:`💼`,book:`📖`};t.innerHTML=e.benefits.map(e=>`
    <article class="benefit-card animate-on-scroll">
      <div class="benefit-icon-box">${n[e.icon]||`✦`}</div>
      <h3 class="benefit-title">${e.title}</h3>
      <p class="benefit-desc">${e.desc}</p>
    </article>
  `).join(``)}function c(){let e=document.querySelectorAll(`.animate-on-scroll`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -40px 0px`});e.forEach(e=>t.observe(e))}function l(){let e=document.querySelectorAll(`.btn-download-trigger`),t=document.getElementById(`downloadToast`);e.forEach(e=>{e.addEventListener(`click`,()=>{t&&(t.classList.add(`show`),setTimeout(()=>{t.classList.remove(`show`)},4500))})})}