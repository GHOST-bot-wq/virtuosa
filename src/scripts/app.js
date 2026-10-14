import { businessConfig } from '../config/business.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initTreatments();
  initTreatmentModal();
  initGallery();
  initLightbox();
  initFaqAccordion();
  initContactActions();
  initModals();
  updateDynamicYear();
});

/**
 * Header adaptável na rolagem
 */
function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-opacity-95', 'shadow-sm', 'py-3');
      header.classList.remove('py-5');
    } else {
      header.classList.remove('bg-opacity-95', 'shadow-sm', 'py-3');
      header.classList.add('py-5');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Menu mobile acessível
 */
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-menu-drawer');
  const overlay = document.getElementById('mobile-menu-overlay');
  const navLinks = drawer ? drawer.querySelectorAll('a') : [];

  if (!openBtn || !drawer || !overlay) return;

  const openMenu = () => {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('opacity-100'), 10);
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn?.focus();
  };

  const closeMenu = () => {
    drawer.classList.add('translate-x-full');
    overlay.classList.remove('opacity-100');
    setTimeout(() => overlay.classList.add('hidden'), 300);
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('translate-x-full')) {
      closeMenu();
    }
  });
}

/**
 * Renderização dos Tratamentos
 */
function initTreatments() {
  const container = document.getElementById('treatments-grid');
  if (!container) return;

  container.innerHTML = businessConfig.treatments.map((t, idx) => `
    <article class="premium-card rounded-2xl overflow-hidden flex flex-col group h-full" data-treatment-id="${t.id}">
      <div class="relative h-64 md:h-72 overflow-hidden bg-[#FAF7F3]">
        <img 
          src="${t.imageUrl}" 
          alt="${t.title}" 
          loading="lazy" 
          class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#292625]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <span class="absolute top-4 left-4 tag-badge bg-[#FAF7F3]/90 backdrop-blur-sm shadow-xs">
          ${t.category}
        </span>
      </div>
      
      <div class="p-6 md:p-8 flex flex-col flex-1 justify-between bg-[#FFFCF9]">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#B69A60]"></span>
            <span class="text-xs uppercase tracking-widest text-[#524C4A] font-medium">Protocolo 0${idx + 1}</span>
          </div>
          <h3 class="font-serif text-2xl md:text-3xl text-[#292625] mb-3 leading-snug">
            ${t.title}
          </h3>
          <p class="text-[#524C4A] text-sm md:text-base font-light leading-relaxed mb-6 line-clamp-3">
            ${t.shortDescription}
          </p>
        </div>

        <div class="pt-4 border-t border-[#EAD7D3]/40 flex items-center justify-between">
          <button 
            type="button" 
            class="open-treatment-modal text-sm font-medium tracking-wide text-[#292625] hover:text-[#B69A60] transition-colors flex items-center gap-2 cursor-pointer group/btn" 
            data-id="${t.id}"
            aria-label="Saiba mais sobre ${t.title}"
          >
            <span>Saiba mais</span>
            <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
          
          <button 
            type="button" 
            class="booking-trigger text-xs uppercase tracking-wider text-[#B69A60] hover:text-[#292625] transition-colors font-medium cursor-pointer"
            data-treatment="${t.title}"
          >
            Agendar
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Modal de Detalhes do Tratamento
 */
function initTreatmentModal() {
  const modal = document.getElementById('treatment-modal');
  const modalBackdrop = document.getElementById('treatment-modal-backdrop');
  const closeBtn = document.getElementById('treatment-modal-close');
  const contentEl = document.getElementById('treatment-modal-body');
  
  if (!modal || !modalBackdrop || !contentEl) return;

  const openTreatment = (treatmentId) => {
    const item = businessConfig.treatments.find(t => t.id === treatmentId);
    if (!item) return;

    contentEl.innerHTML = `
      <div class="space-y-6">
        <div class="relative h-64 md:h-80 -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden bg-[#FAF7F3]">
          <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-[#292625]/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <span class="tag-badge bg-[#FAF7F3]/95 mb-2">${item.category}</span>
            <h3 class="font-serif text-3xl md:text-4xl text-[#FFFCF9]">${item.title}</h3>
          </div>
        </div>

        <div>
          <h4 class="text-xs uppercase tracking-widest text-[#B69A60] font-semibold mb-2">Visão Geral</h4>
          <p class="text-[#524C4A] text-base leading-relaxed font-light">${item.fullDescription}</p>
        </div>

        <div>
          <h4 class="text-xs uppercase tracking-widest text-[#B69A60] font-semibold mb-3">Diferenciais do Cuidado</h4>
          <ul class="space-y-2">
            ${item.benefits.map(b => `
              <li class="flex items-start gap-3 text-sm text-[#292625]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#B69A60] mt-2 shrink-0"></span>
                <span>${b}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-[#FAF7F3] border border-[#EAD7D3]/60">
          <p class="text-xs text-[#7A7370] leading-relaxed">
            <strong class="text-[#292625] font-medium">Nota institucional:</strong> ${item.protocolInfo}
          </p>
        </div>

        <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-end">
          <button type="button" class="btn-secondary text-xs" id="treatment-modal-inner-close">Fechar</button>
          <button type="button" class="btn-primary text-xs booking-trigger" data-treatment="${item.title}">
            Solicitar Avaliação Deste Tratamento
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.remove('hidden');
    setTimeout(() => modalBackdrop.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';

    // Handler para fechar pelo botão interno
    document.getElementById('treatment-modal-inner-close')?.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    setTimeout(() => {
      modalBackdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-treatment-modal');
    if (trigger) {
      const id = trigger.getAttribute('data-id');
      if (id) openTreatment(id);
    }
  });

  closeBtn?.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Galeria com Filtros
 */
function initGallery() {
  const container = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  if (!container) return;

  const renderGallery = (category = 'all') => {
    const items = category === 'all' 
      ? businessConfig.gallery 
      : businessConfig.gallery.filter(item => item.category === category);

    container.innerHTML = items.map((g, idx) => `
      <div 
        class="gallery-item group relative overflow-hidden rounded-2xl cursor-pointer bg-[#FAF7F3] border border-[#EAD7D3]/40 transition-all duration-500 hover:shadow-lg ${idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2' : ''}" 
        data-index="${idx}" 
        data-id="${g.id}"
        role="button"
        tabindex="0"
        aria-label="Ampliar foto: ${g.title}"
      >
        <div class="relative w-full h-64 md:h-full min-h-[260px] overflow-hidden">
          <img 
            src="${g.imageUrl}" 
            onerror="this.onerror=null; this.src='../../.gemini/antigravity/brain/93782557-515c-4e70-ab31-26aa550287fe/.user_uploaded/media_1792000430134_81ea379d.png';"
            alt="${g.altText}" 
            loading="lazy" 
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-[#292625]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span class="text-xs uppercase tracking-widest text-[#FFFCF9]/80 font-medium">${g.category}</span>
            <h4 class="font-serif text-xl md:text-2xl text-[#FFFCF9]">${g.title}</h4>
            <span class="text-xs text-[#EAD7D3] mt-1 flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"></path>
              </svg>
              Clique para ampliar
            </span>
          </div>
        </div>
      </div>
    `).join('');
  };

  renderGallery('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#292625]', 'text-[#FFFCF9]');
        b.classList.add('bg-transparent', 'text-[#524C4A]');
      });
      btn.classList.add('bg-[#292625]', 'text-[#FFFCF9]');
      btn.classList.remove('bg-transparent', 'text-[#524C4A]');
      
      const category = btn.getAttribute('data-filter') || 'all';
      renderGallery(category);
    });
  });
}

/**
 * Lightbox Acessível para a Galeria
 */
function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const counterEl = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!lightbox || !imgEl) return;

  let currentIndex = 0;
  const items = businessConfig.gallery;

  const updateLightbox = (idx) => {
    if (idx < 0) idx = items.length - 1;
    if (idx >= items.length) idx = 0;
    currentIndex = idx;

    const item = items[currentIndex];
    imgEl.onerror = () => {
      imgEl.onerror = null;
      imgEl.src = '../../.gemini/antigravity/brain/93782557-515c-4e70-ab31-26aa550287fe/.user_uploaded/media_1792000430134_81ea379d.png';
    };
    imgEl.src = item.imageUrl;
    imgEl.alt = item.altText;
    if (titleEl) titleEl.textContent = item.title;
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${items.length}`;
  };

  const openLightbox = (idx) => {
    updateLightbox(idx);
    lightbox.classList.remove('hidden');
    setTimeout(() => lightbox.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    setTimeout(() => {
      lightbox.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      const idx = parseInt(item.getAttribute('data-index') || '0', 10);
      openLightbox(idx);
    }
  });

  document.addEventListener('keydown', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      const idx = parseInt(item.getAttribute('data-index') || '0', 10);
      openLightbox(idx);
    }
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => updateLightbox(currentIndex - 1));
  nextBtn?.addEventListener('click', () => updateLightbox(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') updateLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight') updateLightbox(currentIndex + 1);
  });
}

/**
 * Accordion de Perguntas Frequentes (FAQ)
 */
function initFaqAccordion() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = businessConfig.faqs.map((faq, index) => `
    <div class="border-b border-[#EAD7D3]/60 py-5 transition-colors">
      <button 
        type="button" 
        class="faq-trigger w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
        aria-expanded="false"
        aria-controls="faq-ans-${faq.id}"
        id="faq-btn-${faq.id}"
      >
        <span class="font-serif text-xl md:text-2xl text-[#292625] group-hover:text-[#B69A60] transition-colors pr-6">
          ${faq.question}
        </span>
        <span class="w-8 h-8 rounded-full border border-[#EAD7D3] flex items-center justify-center shrink-0 text-[#292625] group-hover:border-[#B69A60] transition-all">
          <svg class="w-4 h-4 transform transition-transform duration-300 icon-expand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m7.5-7.5h-15"></path>
          </svg>
        </span>
      </button>
      <div 
        id="faq-ans-${faq.id}" 
        role="region" 
        aria-labelledby="faq-btn-${faq.id}" 
        class="faq-content hidden pt-4 text-[#524C4A] text-base font-light leading-relaxed max-w-3xl"
      >
        ${faq.answer}
      </div>
    </div>
  `).join('');

  const triggers = container.querySelectorAll('.faq-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const targetId = trigger.getAttribute('aria-controls');
      const content = document.getElementById(targetId);
      const icon = trigger.querySelector('.icon-expand');

      // Fecha outros para manter a elegância editorial
      triggers.forEach(other => {
        if (other !== trigger) {
          other.setAttribute('aria-expanded', 'false');
          const otherTarget = document.getElementById(other.getAttribute('aria-controls'));
          if (otherTarget) otherTarget.classList.add('hidden');
          const otherIcon = other.querySelector('.icon-expand');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content?.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content?.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(45deg)';
      }
    });
  });
}

/**
 * Controle de Ações de Contato / WhatsApp
 * Se pendente: abre modal informativo transparente
 * Se confirmado: abre link wa.me
 */
function initContactActions() {
  const pendingModal = document.getElementById('pending-contact-modal');
  const closePendingBtn = document.getElementById('pending-contact-close');
  const dismissPendingBtn = document.getElementById('pending-contact-dismiss');

  const handleBooking = (e) => {
    e.preventDefault();
    const treatmentName = e.currentTarget.getAttribute('data-treatment') || '';
    
    if (businessConfig.contact.whatsapp.isPending || !businessConfig.contact.whatsapp.phoneNumber) {
      // Abre modal informativo com transparência e opção do Instagram oficial
      if (pendingModal) {
        pendingModal.classList.remove('hidden');
        setTimeout(() => pendingModal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
      }
    } else {
      // WhatsApp confirmado
      const phone = businessConfig.contact.whatsapp.phoneNumber;
      let text = businessConfig.contact.whatsapp.customMessage;
      if (treatmentName) {
        text = `Olá! Gostaria de informações e agendamento para o tratamento: ${treatmentName} na GS Estética Avançada.`;
      }
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    }
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.booking-trigger');
    if (trigger) {
      handleBooking({
        preventDefault: () => e.preventDefault(),
        currentTarget: trigger
      });
    }
  });

  const closePending = () => {
    if (!pendingModal) return;
    pendingModal.classList.remove('active');
    setTimeout(() => {
      pendingModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  closePendingBtn?.addEventListener('click', closePending);
  dismissPendingBtn?.addEventListener('click', closePending);
  pendingModal?.addEventListener('click', (e) => {
    if (e.target === pendingModal) closePending();
  });
}

/**
 * Modais institucionais (Termos & Privacidade)
 */
function initModals() {
  const privacyModal = document.getElementById('privacy-modal');
  const privacyOpenBtns = document.querySelectorAll('.open-privacy-modal');
  const privacyCloseBtn = document.getElementById('privacy-modal-close');

  const openPrivacy = (e) => {
    e.preventDefault();
    if (!privacyModal) return;
    privacyModal.classList.remove('hidden');
    setTimeout(() => privacyModal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  };

  const closePrivacy = () => {
    if (!privacyModal) return;
    privacyModal.classList.remove('active');
    setTimeout(() => {
      privacyModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  privacyOpenBtns.forEach(btn => btn.addEventListener('click', openPrivacy));
  privacyCloseBtn?.addEventListener('click', closePrivacy);
  privacyModal?.addEventListener('click', (e) => {
    if (e.target === privacyModal) closePrivacy();
  });
}

/**
 * Atualização dinâmica de ano
 */
function updateDynamicYear() {
  const yearEl = document.getElementById('dynamic-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}
