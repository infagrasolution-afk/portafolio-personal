// app.js - Lógica interactiva para el portafolio de Luis Infante
document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const projectsGrid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");
  const modalOverlay = document.getElementById("project-modal");
  const modalContainer = document.getElementById("modal-container");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const soundToggleBtn = document.getElementById("sound-toggle-btn");
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const toastNotice = document.getElementById("toast-notice");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  let currentCategory = "all";
  let searchQuery = "";
  let soundEnabled = true;

  // Web Audio API Synthesizer for high-tech micro-interactions
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
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === "open") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(740, now + 0.18);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === "notify") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.1); // A5
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {
      // Audio fallback without throwing
    }
  }

  // Sound Toggle
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      soundToggleBtn.innerHTML = soundEnabled 
        ? '<i class="fa-solid fa-volume-high"></i>' 
        : '<i class="fa-solid fa-volume-xmark"></i>';
      soundToggleBtn.title = soundEnabled ? "Sonido activado" : "Sonido desactivado";
      if (soundEnabled) playUiTone("notify");
    });
  }

  // Render Projects Cards
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
                   style="--card-glow: ${proj.glowColor || 'rgba(0, 242, 254, 0.2)'};">
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
                    ? `<a href="${proj.links.demo}" target="_blank" rel="noopener noreferrer" class="card-link-btn btn-demo" onclick="event.stopPropagation();">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
                      </a>`
                    : ""
                }
                ${
                  hasGithub
                    ? `<a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="card-link-btn" onclick="event.stopPropagation();">
                        <i class="fa-brands fa-github"></i> Código
                      </a>`
                    : `<span class="card-link-btn" style="opacity: 0.6; cursor: default;" onclick="event.stopPropagation();">
                        <i class="fa-solid fa-lock"></i> Privado
                      </span>`
                }
              </div>

              <button class="card-inspect-btn" onclick="openCaseStudy('${proj.id}')">
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
    });
  }

  // Filter click handler
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      playUiTone("click");
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "all";
      renderProjects();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Open Case Study Modal
  window.openCaseStudy = function (projectId) {
    playUiTone("open");
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!proj || !modalContainer) return;

    const hasLiveDemo = proj.links.demo;
    const hasGithub = proj.links.github;
    const badgeClass = `badge-${proj.badgeType || "tech"}`;

    modalContainer.innerHTML = `
      <button class="modal-close-btn" id="modal-close-btn" title="Cerrar (Esc)">
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
        <h2 class="modal-title">${proj.title}</h2>
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
          <i class="fa-solid fa-circle-info"></i> Resumen Técnico & Arquitectura
        </div>
        <p class="modal-text">${proj.summary}</p>

        <!-- Highlights -->
        <div class="modal-section-title">
          <i class="fa-solid fa-bolt"></i> Aspectos Destacados de Ingeniería
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
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 28px;">
          <div style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 12px; padding: 18px;">
            <div style="font-family: var(--font-heading); font-weight: 700; color: #f87171; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-triangle-exclamation"></i> El Desafío
            </div>
            <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">${proj.challenge}</p>
          </div>
          <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 18px;">
            <div style="font-family: var(--font-heading); font-weight: 700; color: #34d399; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-wand-magic-sparkles"></i> La Solución
            </div>
            <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">${proj.solution}</p>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="modal-section-title">
          <i class="fa-solid fa-layer-group"></i> Stack Tecnológico Utilizado
        </div>
        <div class="card-tags" style="margin-bottom: 0;">
          ${proj.techStack
            .map((t) => `<span class="tech-tag" style="font-size: 0.85rem; padding: 6px 12px;">${t}</span>`)
            .join("")}
        </div>
      </div>

      <div class="modal-footer">
        ${
          hasGithub
            ? `<a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 20px;">
                <i class="fa-brands fa-github"></i> Ver Código en GitHub
              </a>`
            : `<span class="btn-secondary" style="opacity: 0.6; cursor: default; padding: 10px 20px;">
                <i class="fa-solid fa-lock"></i> Código Protegido (Privado)
              </span>`
        }
        ${
          hasLiveDemo
            ? `<a href="${proj.links.demo}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 20px;">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir Demo en Vivo
              </a>`
            : ""
        }
      </div>
    `;

    // Reattach close event
    const newCloseBtn = document.getElementById("modal-close-btn");
    if (newCloseBtn) {
      newCloseBtn.addEventListener("click", closeModal);
    }

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    playUiTone("click");
    if (modalOverlay) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeModal();
    }
    // Command/Ctrl + K to focus search
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  // Copy Email to Clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      playUiTone("notify");
      navigator.clipboard.writeText("infagrasolution@gmail.com").then(() => {
        showToast("¡Correo infagrasolution@gmail.com copiado!");
      });
    });
  }

  function showToast(msg) {
    if (!toastNotice) return;
    const toastText = document.getElementById("toast-text");
    if (toastText) toastText.textContent = msg;
    toastNotice.classList.add("show");
    setTimeout(() => {
      toastNotice.classList.remove("show");
    }, 3200);
  }

  // Direct Contact Modal Logic
  const openContactBtn = document.getElementById("open-contact-modal-btn");
  const contactModal = document.getElementById("contact-modal");
  const contactModalClose = document.getElementById("contact-modal-close");
  const sendWhatsAppBtn = document.getElementById("send-whatsapp-btn");
  const sendGmailBtn = document.getElementById("send-gmail-btn");
  const sendMailtoLink = document.getElementById("send-mailto-link");
  const typePills = document.querySelectorAll("#project-type-pills .type-pill");

  let selectedProjectType = "Solución con IA";

  typePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      playUiTone("click");
      typePills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      selectedProjectType = pill.getAttribute("data-type") || "Proyecto General";
    });
  });

  function openContactModal() {
    playUiTone("open");
    if (contactModal) {
      contactModal.classList.add("active");
      document.body.style.overflow = "hidden";
      const nameInput = document.getElementById("contact-name");
      if (nameInput) setTimeout(() => nameInput.focus(), 150);
    }
  }

  function closeContactModal() {
    playUiTone("click");
    if (contactModal) {
      contactModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (openContactBtn) openContactBtn.addEventListener("click", openContactModal);
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
      const text = `Hola Luis, mi nombre es ${data.name} (${data.info}). Te escribo desde tu portafolio sobre *${data.type}*:\n\n"${data.message}"`;
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
      const subject = `Propuesta de Proyecto (${data.type}) - ${data.name}`;
      const body = `Hola Luis,\n\nMi nombre es ${data.name}.\nContacto directo: ${data.info}\nTipo de requerimiento: ${data.type}\n\nMensaje:\n${data.message}\n\n--- Enviado desde tu Portafolio Web.`;
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
        message: "Hola Luis, me gustaría solicitar una propuesta."
      };
      const subject = `Propuesta de Proyecto (${data.type}) - ${data.name}`;
      const body = `Nombre: ${data.name}\nContacto: ${data.info}\n\n${data.message}`;
      window.location.href = `mailto:infagrasolution@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (contactModal && contactModal.classList.contains("active")) {
        closeContactModal();
      }
    }
  });

  // Initial render
  renderProjects();
});
