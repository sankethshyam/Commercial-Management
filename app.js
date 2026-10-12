const { capabilities, caseStudies, principles, process } = window.siteData;

const byId = (id) => document.getElementById(id);

function renderCapabilities() {
  byId("capability-grid").innerHTML = capabilities.map(({ number, title, description }) => `
    <article class="capability-card reveal">
      <div class="card-top"><span>${number}</span><span class="card-arrow" aria-hidden="true">↘</span></div>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join("");
}

function renderProcess() {
  byId("process-list").innerHTML = process.map(({ number, title, description }) => `
    <li class="process-item reveal">
      <span class="process-number">${number}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <span class="process-arrow" aria-hidden="true">→</span>
    </li>
  `).join("");
}

function renderCaseStudies() {
  byId("case-study-list").innerHTML = caseStudies.map(({ label, title, status, fields }, index) => `
    <article class="case-study reveal">
      <div class="case-study-meta">
        <p>${label}</p>
        <span>${status}</span>
      </div>
      <div class="case-study-body">
        <h3>${title}</h3>
        <dl>
          ${fields.map(([term, detail]) => `<div><dt>${term}</dt><dd>${detail}</dd></div>`).join("")}
        </dl>
      </div>
      <span class="case-index" aria-hidden="true">0${index + 1}</span>
    </article>
  `).join("");
}

function renderPrinciples() {
  byId("principle-list").innerHTML = principles.map((principle, index) => `
    <li class="reveal"><span>${String(index + 1).padStart(2, "0")}</span><p>${principle}</p><i aria-hidden="true"></i></li>
  `).join("");
}

function setupMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupReveals() {
  const elements = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((element) => observer.observe(element));
}

renderCapabilities();
renderProcess();
renderCaseStudies();
renderPrinciples();
setupMenu();
setupHeader();
setupReveals();
byId("current-year").textContent = new Date().getFullYear();
