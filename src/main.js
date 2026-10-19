/**
 * DEV ACADEMY — MAIN JAVASCRIPT
 * Lógica modular: Renderização do sumário do e-book, projetos práticos,
 * benefícios, feedback de download em tempo real e menu responsivo.
 */

import { ebookData } from './data/ebook.js';
import { servicesData } from './data/services.js';

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initMobileMenu();
  initServices();
  initChapters();
  initProjects();
  initBenefits();
  initScrollAnimations();
  initDownloadTracking();
});

/* 1. Atualizar Ano Dinâmico no Footer */
function initYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* 2. Menu Mobile Acessível */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-menu-cta a');

  if (!menuToggle || !mobileMenu) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : menuToggle.getAttribute('aria-expanded') === 'true';
    const newState = !isOpen;

    menuToggle.setAttribute('aria-expanded', String(newState));
    menuToggle.classList.toggle('active', newState);
    mobileMenu.setAttribute('aria-hidden', String(!newState));
    mobileMenu.classList.toggle('active', newState);

    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  menuToggle.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      menuToggle.focus();
    }
  });
}

/* 3. Renderização dos Serviços Especializados */
function initServices() {
  const container = document.getElementById('servicesShowcase');
  if (!container) return;

  // Renderizar seletor de abas dos 5 serviços
  const filterHtml = `
    <div class="services-nav-tabs animate-on-scroll" role="tablist">
      <button class="service-tab-btn active" data-id="all">Todos os Serviços</button>
      <button class="service-tab-btn" data-id="pdv">Sistema PDV</button>
      <button class="service-tab-btn" data-id="fintech">Fintech & Bancos</button>
      <button class="service-tab-btn" data-id="apostas">Casas de Apostas</button>
      <button class="service-tab-btn" data-id="sistemas">Sistemas Web</button>
      <button class="service-tab-btn" data-id="mobile">Apps Mobile</button>
    </div>
    <div class="services-cards-stack" id="servicesCardsStack"></div>
  `;

  container.innerHTML = filterHtml;
  const stack = document.getElementById('servicesCardsStack');

  function renderList(filterId = 'all') {
    const list = filterId === 'all' 
      ? servicesData 
      : servicesData.filter(s => s.id === filterId);

    stack.innerHTML = list.map((s, index) => {
      const isEven = index % 2 === 1;
      const whatsappMsg = encodeURIComponent(`Olá, gostaria de solicitar um orçamento para o serviço: ${s.title} com a Dev Academy.`);
      
      return `
        <article class="service-spotlight-card animate-on-scroll is-visible ${isEven ? 'layout-reverse' : ''}" id="servico-${s.id}">
          <div class="service-spotlight-grid">
            <div class="service-visual-col">
              <div class="service-img-wrapper">
                <div class="service-img-glow"></div>
                <img src="${s.image}" alt="${s.title}" class="service-poster-img" loading="lazy" />
              </div>
            </div>

            <div class="service-info-col">
              <div class="service-badge-row">
                <span class="badge-pill">${s.badge}</span>
              </div>
              <h3 class="service-headline">${s.headline}</h3>
              <p class="service-sub">${s.subtitle}</p>
              <p class="service-full-desc">${s.description}</p>

              <ul class="service-feature-checklist">
                ${s.features.map(f => `
                  <li>
                    <span class="feat-check">✓</span>
                    <span>${f}</span>
                  </li>
                `).join('')}
              </ul>

              <div class="service-action-row">
                <a href="https://wa.me/?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg btn-glow">
                  <span>${s.ctaText}</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  renderList('all');

  // Adicionar eventos nas abas
  const tabButtons = container.querySelectorAll('.service-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderList(btn.dataset.id);
    });
  });
}

/* 4. Renderização dos Capítulos e Sumário do E-book */
function initChapters() {
  const grid = document.getElementById('chaptersGrid');
  if (!grid) return;

  grid.innerHTML = ebookData.summary.map(ch => `
    <article class="chapter-card animate-on-scroll">
      <div class="chapter-header">
        <span class="chapter-num">${ch.num}</span>
        <span class="chapter-page">${ch.page}</span>
      </div>
      <span class="chapter-tag">${ch.tag}</span>
      <h3 class="chapter-title">${ch.title}</h3>
      <p class="chapter-desc">${ch.desc}</p>
    </article>
  `).join('');
}

/* 4. Renderização dos 3 Projetos Práticos */
function initProjects() {
  const grid = document.getElementById('practicalProjectsGrid');
  if (!grid) return;

  grid.innerHTML = ebookData.practicalProjects.map(p => `
    <article class="project-box animate-on-scroll">
      <span class="project-top-tag">${p.tag}</span>
      <h3 class="project-heading">${p.title}</h3>
      <p class="project-paragraph">${p.desc}</p>
      <div class="project-tools">
        ${p.tools.map(t => `<span class="tool-chip">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* 5. Renderização dos Benefícios */
function initBenefits() {
  const grid = document.getElementById('benefitsGrid');
  if (!grid) return;

  const iconMap = {
    cpu: '⚡',
    network: '🌐',
    workflow: '🔄',
    shield: '🛡️',
    dollar: '💼',
    book: '📖'
  };

  grid.innerHTML = ebookData.benefits.map(b => `
    <article class="benefit-card animate-on-scroll">
      <div class="benefit-icon-box">${iconMap[b.icon] || '✦'}</div>
      <h3 class="benefit-title">${b.title}</h3>
      <p class="benefit-desc">${b.desc}</p>
    </article>
  `).join('');
}

/* 6. Revelação Suave de Elementos (IntersectionObserver) */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* 7. Feedback de Download Instantâneo */
function initDownloadTracking() {
  const downloadButtons = document.querySelectorAll('.btn-download-trigger');
  const toast = document.getElementById('downloadToast');

  downloadButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4500);
      }
    });
  });
}
