// app.js - Lógica interactiva para el portafolio de Luis Infante (Infagra Solution)
document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------
  // DOM Elements
  // -------------------------------------------------------------
  const projectsGrid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const timelineContainer = document.getElementById("career-timeline-container");

  // Modals & Overlays
  const projectModal = document.getElementById("project-modal");
  const modalContainer = document.getElementById("modal-container");
  const recruiterModal = document.getElementById("recruiter-modal");
  const recruiterModalClose = document.getElementById("recruiter-modal-close");
  const cvModal = document.getElementById("cv-modal");
  const cvModalClose = document.getElementById("cv-modal-close");
  const contactModal = document.getElementById("contact-modal");
  const contactModalClose = document.getElementById("contact-modal-close");

  // Mobile Drawer
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerOverlay = document.getElementById("drawer-overlay");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  // UI Sound & Notifications
  const soundToggleBtn = document.getElementById("sound-toggle-btn");
  const soundDrawerBtn = document.getElementById("sound-drawer-btn");
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const toastNotice = document.getElementById("toast-notice");
  const toastText = document.getElementById("toast-text");

  // Recruiter Triggers
  const recruiterNavBtn = document.getElementById("recruiter-nav-btn");
  const recruiterHeroBtn = document.getElementById("recruiter-hero-btn");
  const recruiterDrawerBtn = document.getElementById("recruiter-drawer-btn");
  const contactRecruiterBtn = document.getElementById("contact-recruiter-btn");
  const recruiterOpenCvBtn = document.getElementById("recruiter-open-cv-btn");

  // CV Triggers
  const cvHeroBtn = document.getElementById("cv-hero-btn");
  const cvDrawerBtn = document.getElementById("cv-drawer-btn");
  const printCvBtn = document.getElementById("print-cv-btn");

  // Contact Triggers
  const openContactBtn = document.getElementById("open-contact-modal-btn");
  const navContactBtn = document.getElementById("nav-contact-btn");
  const floatingContactBtn = document.getElementById("floating-contact-btn");
  const sendWhatsAppBtn = document.getElementById("send-whatsapp-btn");
  const sendGmailBtn = document.getElementById("send-gmail-btn");
  const sendMailtoLink = document.getElementById("send-mailto-link");
  const typePills = document.querySelectorAll("#project-type-pills .type-pill");

  // State
  let currentCategory = "all";
  let searchQuery = "";
  let soundEnabled = true;
  let selectedProjectType = "Contratación / Empleo";

  // -------------------------------------------------------------
  // Web Audio API Synthesizer (Micro-Interactions)
  // -------------------------------------------------------------
  let audioCtx = null;

  function playUiTone(type = "click") {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.07);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.07);
      } else if (type === "open") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(740, now + 0.16);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.16);
      } else if (type === "notify") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.09); // A5
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      }
    } catch (e) {
      // Audio fallback without throwing
    }
  }

  // Sound Toggle Function
  function toggleSound() {
    soundEnabled = !soundEnabled;
    const iconHtml = soundEnabled 
      ? '<i class="fa-solid fa-volume-high"></i>' 
      : '<i class="fa-solid fa-volume-xmark"></i>';
    const titleText = soundEnabled ? "Sonido activado" : "Sonido desactivado";

    if (soundToggleBtn) {
      soundToggleBtn.innerHTML = iconHtml;
      soundToggleBtn.title = titleText;
    }
    if (soundDrawerBtn) {
      soundDrawerBtn.innerHTML = iconHtml;
      soundDrawerBtn.title = titleText;
    }
    if (soundEnabled) playUiTone("notify");
    showToast(soundEnabled ? "🔊 Efectos de sonido activados" : "🔇 Efectos de sonido desactivados");
  }

  if (soundToggleBtn) soundToggleBtn.addEventListener("click", toggleSound);
  if (soundDrawerBtn) soundDrawerBtn.addEventListener("click", toggleSound);

  // -------------------------------------------------------------
  // Toast Notifications
  // -------------------------------------------------------------
  let toastTimer = null;
  function showToast(msg) {
    if (!toastNotice || !toastText) return;
    toastText.textContent = msg;
    toastNotice.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove("show");
    }, 3200);
  }

  // -------------------------------------------------------------
  // Mobile Drawer Navigation Logic
  // -------------------------------------------------------------
  function openMobileDrawer() {
    playUiTone("open");
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.add("active");
      mobileDrawer.setAttribute("aria-hidden", "false");
      drawerOverlay.classList.add("active");
      drawerOverlay.setAttribute("aria-hidden", "false");
      if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
  }

  function closeMobileDrawer() {
    playUiTone("click");
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.remove("active");
      mobileDrawer.setAttribute("aria-hidden", "true");
      drawerOverlay.classList.remove("active");
      drawerOverlay.setAttribute("aria-hidden", "true");
      if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  }

  if (mobileToggle) mobileToggle.addEventListener("click", openMobileDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeMobileDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeMobileDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileDrawer();
    });
  });

  const drawerBrandLink = document.getElementById("drawer-brand-link");
  if (drawerBrandLink) {
    drawerBrandLink.addEventListener("click", () => {
      closeMobileDrawer();
    });
  }

  // -------------------------------------------------------------
  // Render Projects Cards
  // -------------------------------------------------------------
  function renderProjects() {
    if (!projectsGrid) return;

    const filtered = PROJECTS_DATA.filter((proj) => {
      const matchCat = currentCategory === "all" || proj.category === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.subtitle.toLowerCase().includes(q) ||
        proj.shortDesc.toLowerCase().includes(q) ||
        proj.techStack.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.4;"></i>
          <h3 style="font-family: var(--font-heading); color: #fff; margin-bottom: 8px;">No se encontraron proyectos</h3>
          <p>Prueba con otros términos de búsqueda o selecciona otra categoría.</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered
      .map((proj) => {
        const badgeClass = `badge-${proj.badgeType || "tech"}`;
        const hasLiveDemo = proj.links.demo;
        const hasGithub = proj.links.github;

        return `
          <article class="project-card" 
                   data-id="${proj.id}" 
                   style="--card-glow: ${proj.glowColor || 'rgba(0, 242, 254, 0.2)'};"
                   tabindex="0"
                   role="button"
                   aria-label="Ver detalles de ${proj.title}">
            <div class="card-top">
              <div class="card-header-bar">
                <div class="card-icon-box" style="background: ${proj.gradient};">
                  <i class="fa-solid ${proj.icon}"></i>
                </div>
                <div class="card-badge ${badgeClass}">
                  <span class="status-dot" style="background-color: ${proj.accentColor}; box-shadow: 0 0 8px ${proj.accentColor};"></span>
                  ${proj.badge}
                </div>
              </div>

              <h3 class="card-title">${proj.title}</h3>
              <p class="card-subtitle">${proj.subtitle}</p>
              <p class="card-desc">${proj.shortDesc}</p>

              <div class="card-tags">
                ${proj.techStack
                  .slice(0, 4)
                  .map((tech) => `<span class="tech-tag">${tech}</span>`)
                  .join("")}
                ${proj.techStack.length > 4 ? `<span class="tech-tag">+${proj.techStack.length - 4}</span>` : ""}
              </div>
            </div>

            <div class="card-footer">
              <div class="card-links">
                ${
                  hasLiveDemo
                    ? `<a href="${proj.links.demo}" target="_blank" rel="noopener noreferrer" class="card-link-btn btn-demo" onclick="event.stopPropagation();" title="Abrir Demo en Vivo">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
                      </a>`
                    : ""
                }
                ${
                  proj.links.githubBack
                    ? `<a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="card-link-btn" onclick="event.stopPropagation();" title="Repositorio Frontend">
                        <i class="fa-brands fa-github"></i> Front
                      </a>
                      <a href="${proj.links.githubBack}" target="_blank" rel="noopener noreferrer" class="card-link-btn" onclick="event.stopPropagation();" title="Repositorio Backend">
                        <i class="fa-brands fa-github"></i> Back
                      </a>`
                    : (hasGithub
                        ? `<a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="card-link-btn" onclick="event.stopPropagation();" title="Ver Código en GitHub">
                            <i class="fa-brands fa-github"></i> Código
                          </a>`
                        : `<span class="card-link-btn" style="opacity: 0.6; cursor: default;" onclick="event.stopPropagation();">
                            <i class="fa-solid fa-lock"></i> Privado
                          </span>`)
                }
              </div>

              <button type="button" class="card-inspect-btn" onclick="openCaseStudy('${proj.id}')">
                Detalles <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    // Attach mousemove listener to cards for luminous spotlight
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });

      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        if (id) openCaseStudy(id);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const id = card.getAttribute("data-id");
          if (id) openCaseStudy(id);
        }
      });
    });
  }

  // Filter Buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      playUiTone("click");
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "all";
      renderProjects();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? "block" : "none";
      }
      renderProjects();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      playUiTone("click");
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        searchClearBtn.style.display = "none";
        searchInput.focus();
      }
      renderProjects();
    });
  }

  // -------------------------------------------------------------
  // Render Career Timeline (Experience Section)
  // -------------------------------------------------------------
  function renderTimeline() {
    if (!timelineContainer || typeof CAREER_TIMELINE === "undefined") return;

    timelineContainer.innerHTML = CAREER_TIMELINE.map((item) => {
      const badgeClass = `badge-${item.badgeType || "tech"}`;
      return `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-role">${item.role}</h3>
                <div class="timeline-company">${item.company}</div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="card-badge ${badgeClass}">${item.badge}</span>
                <span class="timeline-period-badge">${item.period}</span>
              </div>
            </div>

            <p class="timeline-desc">${item.description}</p>

            <ul class="timeline-bullets">
              ${item.achievements.map((ach) => `
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  <span>${ach}</span>
                </li>
              `).join("")}
            </ul>

            <div class="timeline-tech">
              ${item.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // -------------------------------------------------------------
  // Project Case Study Modal
  // -------------------------------------------------------------
  window.openCaseStudy = function (projectId) {
    playUiTone("open");
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!proj || !modalContainer || !projectModal) return;

    const hasLiveDemo = proj.links.demo;
    const hasGithub = proj.links.github;
    const badgeClass = `badge-${proj.badgeType || "tech"}`;

    modalContainer.innerHTML = `
      <button type="button" class="modal-close-btn" id="modal-close-btn" title="Cerrar (Esc)" aria-label="Cerrar modal">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div class="modal-banner" style="background: ${proj.gradient};">
        <div class="modal-badge-row">
          <span class="card-badge ${badgeClass}">
            <span class="status-dot" style="background-color: ${proj.accentColor}; box-shadow: 0 0 8px ${proj.accentColor};"></span>
            ${proj.badge}
          </span>
          <span class="card-badge" style="background: rgba(255,255,255,0.06); color: #cbd5e1;">
            <i class="fa-solid fa-tag"></i> ${proj.categoryLabel}
          </span>
          <span class="card-badge" style="background: rgba(255,255,255,0.06); color: #cbd5e1;">
            <i class="fa-solid fa-shield"></i> ${proj.visibility}
          </span>
        </div>
        <h2 class="modal-title" id="modal-project-title">${proj.title}</h2>
        <p class="modal-subtitle">${proj.subtitle}</p>
      </div>

      <div class="modal-body">
        <!-- Metrics Strip -->
        <div class="metrics-grid-modal">
          ${proj.metrics
            .map(
              (m) => `
            <div class="metric-card-modal">
              <div class="metric-label-modal">${m.label}</div>
              <div class="metric-value-modal">${m.value}</div>
            </div>
          `
            )
            .join("")}
        </div>

        <!-- Overview -->
        <div class="modal-section-title">
          <i class="fa-solid fa-circle-info text-cyan"></i> Resumen Técnico & Arquitectura
        </div>
        <p class="modal-text">${proj.summary}</p>

        <!-- Highlights -->
        <div class="modal-section-title">
          <i class="fa-solid fa-bolt text-cyan"></i> Aspectos Destacados de Ingeniería
        </div>
        <ul class="highlight-list">
          ${proj.highlights
            .map(
              (h) => `
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <span>${h}</span>
            </li>
          `
            )
            .join("")}
        </ul>

        <!-- Challenge & Solution -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 16px; margin-bottom: 24px;">
          <div style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 12px; padding: 16px;">
            <div style="font-family: var(--font-heading); font-weight: 700; color: #f87171; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-triangle-exclamation"></i> El Desafío
            </div>
            <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6;">${proj.challenge}</p>
          </div>
          <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 16px;">
            <div style="font-family: var(--font-heading); font-weight: 700; color: #34d399; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-wand-magic-sparkles"></i> La Solución
            </div>
            <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6;">${proj.solution}</p>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="modal-section-title">
          <i class="fa-solid fa-layer-group text-cyan"></i> Stack Tecnológico Utilizado
        </div>
        <div class="card-tags" style="margin-bottom: 0;">
          ${proj.techStack
            .map((t) => `<span class="tech-tag" style="font-size: 0.82rem; padding: 6px 12px;">${t}</span>`)
            .join("")}
        </div>
      </div>

      <div class="modal-footer">
        ${
          proj.links.githubBack
            ? `<a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                <i class="fa-brands fa-github"></i> Repo Frontend
              </a>
              <a href="${proj.links.githubBack}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                <i class="fa-brands fa-github"></i> Repo Backend
              </a>`
            : (hasGithub
                ? `<a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                    <i class="fa-brands fa-github"></i> Ver Código en GitHub
                  </a>`
                : `<span class="btn-secondary" style="opacity: 0.6; cursor: default;">
                    <i class="fa-solid fa-lock"></i> Código Protegido
                  </span>`)
        }
        ${
          hasLiveDemo
            ? `<a href="${proj.links.demo}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir Demo en Vivo
              </a>`
            : ""
        }
      </div>
    `;

    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closeProjectModal);

    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  function closeProjectModal() {
    playUiTone("click");
    if (projectModal) {
      projectModal.classList.remove("active");
      projectModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // -------------------------------------------------------------
  // Recruiter Pitch Modal Logic
  // -------------------------------------------------------------
  function openRecruiterModal() {
    playUiTone("open");
    closeMobileDrawer();
    if (recruiterModal) {
      recruiterModal.classList.add("active");
      recruiterModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeRecruiterModal() {
    playUiTone("click");
    if (recruiterModal) {
      recruiterModal.classList.remove("active");
      recruiterModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (recruiterNavBtn) recruiterNavBtn.addEventListener("click", openRecruiterModal);
  if (recruiterHeroBtn) recruiterHeroBtn.addEventListener("click", openRecruiterModal);
  if (recruiterDrawerBtn) recruiterDrawerBtn.addEventListener("click", openRecruiterModal);
  if (contactRecruiterBtn) contactRecruiterBtn.addEventListener("click", openRecruiterModal);
  if (recruiterModalClose) recruiterModalClose.addEventListener("click", closeRecruiterModal);

  if (recruiterModal) {
    recruiterModal.addEventListener("click", (e) => {
      if (e.target === recruiterModal) closeRecruiterModal();
    });
  }

  if (recruiterOpenCvBtn) {
    recruiterOpenCvBtn.addEventListener("click", () => {
      closeRecruiterModal();
      openCvModal();
    });
  }

  // -------------------------------------------------------------
  // CV / Resume Modal Logic
  // -------------------------------------------------------------
  function openCvModal() {
    playUiTone("open");
    closeMobileDrawer();
    if (cvModal) {
      cvModal.classList.add("active");
      cvModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeCvModal() {
    playUiTone("click");
    if (cvModal) {
      cvModal.classList.remove("active");
      cvModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (cvHeroBtn) cvHeroBtn.addEventListener("click", openCvModal);
  if (cvDrawerBtn) cvDrawerBtn.addEventListener("click", openCvModal);
  if (cvModalClose) cvModalClose.addEventListener("click", closeCvModal);

  if (cvModal) {
    cvModal.addEventListener("click", (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }

  if (printCvBtn) {
    printCvBtn.addEventListener("click", () => {
      playUiTone("click");
      window.print();
    });
  }

  // -------------------------------------------------------------
  // Direct Contact Modal Logic
  // -------------------------------------------------------------
  typePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      playUiTone("click");
      typePills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      selectedProjectType = pill.getAttribute("data-type") || "Contratación / Empleo";
    });
  });

  function openContactModal() {
    playUiTone("open");
    closeMobileDrawer();
    if (contactModal) {
      contactModal.classList.add("active");
      contactModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      const nameInput = document.getElementById("contact-name");
      if (nameInput) setTimeout(() => nameInput.focus(), 150);
    }
  }

  function closeContactModal() {
    playUiTone("click");
    if (contactModal) {
      contactModal.classList.remove("active");
      contactModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (openContactBtn) openContactBtn.addEventListener("click", openContactModal);
  if (navContactBtn) {
    navContactBtn.addEventListener("click", (e) => {
      // If clicked on desktop, scroll to section or open modal
      // We keep smooth anchor scroll to contact section
    });
  }
  if (floatingContactBtn) floatingContactBtn.addEventListener("click", openContactModal);
  if (contactModalClose) contactModalClose.addEventListener("click", closeContactModal);

  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  function getContactFormData() {
    const name = document.getElementById("contact-name")?.value.trim() || "";
    const info = document.getElementById("contact-info")?.value.trim() || "";
    const message = document.getElementById("contact-message")?.value.trim() || "";

    if (!name || !info || !message) {
      playUiTone("click");
      showToast("⚠️ Por favor completa tu nombre, contacto y mensaje.");
      return null;
    }
    return { name, info, message, type: selectedProjectType };
  }

  // Send to WhatsApp
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener("click", () => {
      const data = getContactFormData();
      if (!data) return;

      playUiTone("notify");
      const text = `Hola Luis, mi nombre es ${data.name} (${data.info}). Te contacto desde tu portafolio por: *${data.type}*:\n\n"${data.message}"`;
      const url = `https://wa.me/584120161906?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
      closeContactModal();
      showToast("¡Abriendo chat de WhatsApp!");
    });
  }

  // Send via Gmail Web
  if (sendGmailBtn) {
    sendGmailBtn.addEventListener("click", () => {
      const data = getContactFormData();
      if (!data) return;

      playUiTone("notify");
      const subject = `Oportunidad / Propuesta (${data.type}) - ${data.name}`;
      const body = `Hola Luis,\n\nMi nombre es ${data.name}.\nContacto directo: ${data.info}\nMotivo: ${data.type}\n\nMensaje:\n${data.message}\n\n--- Enviado desde tu Portafolio Web.`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=infagrasolution@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");
      closeContactModal();
      showToast("¡Abriendo Gmail en tu navegador!");
    });
  }

  // Fallback mailto link
  if (sendMailtoLink) {
    sendMailtoLink.addEventListener("click", (e) => {
      e.preventDefault();
      const data = getContactFormData() || {
        name: "Interesado",
        info: "",
        type: selectedProjectType,
        message: "Hola Luis, me gustaría conversar sobre una oportunidad."
      };
      const subject = `Propuesta (${data.type}) - ${data.name}`;
      const body = `Nombre: ${data.name}\nContacto: ${data.info}\n\n${data.message}`;
      window.location.href = `mailto:infagrasolution@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  // -------------------------------------------------------------
  // Keyboard Shortcuts (Esc to close, Ctrl+K to search)
  // -------------------------------------------------------------
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (projectModal && projectModal.classList.contains("active")) closeProjectModal();
      if (recruiterModal && recruiterModal.classList.contains("active")) closeRecruiterModal();
      if (cvModal && cvModal.classList.contains("active")) closeCvModal();
      if (contactModal && contactModal.classList.contains("active")) closeContactModal();
      if (mobileDrawer && mobileDrawer.classList.contains("active")) closeMobileDrawer();
    }
    // Ctrl/Cmd + K shortcut
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });

  // -------------------------------------------------------------
  // Copy Email to Clipboard
  // -------------------------------------------------------------
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      playUiTone("notify");
      navigator.clipboard.writeText("infagrasolution@gmail.com").then(() => {
        showToast("¡Correo infagrasolution@gmail.com copiado al portapapeles!");
      }).catch(() => {
        showToast("infagrasolution@gmail.com");
      });
    });
  }

  // -------------------------------------------------------------
  // ScrollSpy Active Link Highlight
  // -------------------------------------------------------------
  const sections = document.querySelectorAll("section[id]");
  const desktopNavLinks = document.querySelectorAll(".nav-menu .nav-item a");

  function handleScrollSpy() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        drawerLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", handleScrollSpy, { passive: true });

  // -------------------------------------------------------------
  // Initial Boot
  // -------------------------------------------------------------
  renderProjects();
  renderTimeline();
});
