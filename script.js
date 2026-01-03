const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const highlights = [
  { icon: "factory", title: "Manufacturing Operations", description: "Optimizing production workflows and assembly processes" },
  { icon: "cog", title: "Mechanical Design", description: "SolidWorks, GD&T, and DFM/DFA expertise" },
  { icon: "truck", title: "Supply Chain", description: "Procurement, planning, and logistics management" },
  { icon: "lightbulb", title: "NPI Support", description: "New Product Introduction and prototyping" },
];

const skillCategories = [
  { title: "Prototyping & NPI", skills: ["Prototype Development", "NPI", "DFM/DFA", "Root Cause Analysis", "SOPs"] },
  { title: "Design & CAD", skills: ["SolidWorks", "AutoCAD", "Fusion 360", "NX", "Creo", "Solid Edge", "GD&T"] },
  { title: "Manufacturing", skills: ["Lean Manufacturing", "JIT/Kanban", "Assembly", "Production Systems", "Quality Testing"] },
  { title: "Supply Chain", skills: ["Procurement", "Inventory Control", "Forecasting", "Logistics", "ERP Systems"] },
  { title: "Analysis & Tools", skills: ["FEA", "Thermal Analysis", "MySQL", "VBA", "BI Tools", "KPIs"] },
  { title: "Other", skills: ["Machine Learning", "Convex Optimization", "Mathematical Models", "Reverse Engineering"] },
];

const educationData = [
  { degree: "M.S. Industrial Engineering", school: "Arizona State University" },
  { degree: "B.Tech. Mechanical Engineering", school: "Indus University" },
];

const experienceData = [
  { title: "Operations Research Analyst", company: "Freshkube", skills: ["Prototyping", "Mechanical Design", "Supply Chain", "Procurement Planning", "Material Sourcing", "NPI", "DFM & DFA", "SOPs", "Root Cause Analysis"] },
  { title: "Graduate Services Assistant", company: "Arizona State University", skills: ["Mathematical Models", "Convex Optimization", "MySQL", "VBA (Macro)", "Production Systems", "Lean Manufacturing", "JIT/Kanban"] },
  { title: "CAD Engineer", company: "Cube CAD Center", skills: ["Software Training", "AutoCAD", "SolidWorks", "Fusion 360", "NX", "Creo", "Solid Edge", "Reverse Engineering", "Assembly", "Manufacturing"] },
  { title: "Supply Chain Manager", company: "Win Industries", skills: ["Supply Chain", "Material Procurement", "Customer Support", "Inventory Control", "BI Tools", "KPIs", "Forecasting", "Logistics", "Production Schedule", "ERP System"] },
  { title: "Trainee Engineer", company: "Plasma Induction", skills: ["Maintenance", "Workshop Operations", "Material Quality Testing", "Equipment Reliability", "Product Testing", "Tools Training"] },
];

const projectSections = [
  {
    id: "prototype-1",
    title: "Prototype 1 - System Upgrade and Testing",
    description:
      "This system is designed for small farmers to transport perishable products during the harvesting season, minimizing pre-cooling requirements and reducing transportation time to centralized warehouses.",
    images: ["public/placeholder.svg"],
    layout: "single",
  },
  {
    id: "prototype-2",
    title: "Prototype 2 - Manufacturing and Testing",
    description:
      "This system is designed for the Air Force to meet military standards (MIL-STD) for storing pharmaceutical products while operating reliably in harsh environmental conditions.",
    images: ["public/placeholder.svg", "public/placeholder.svg"],
    layout: "double",
  },
  {
    id: "fea",
    title: "Finite Element Analysis (FEA)",
    description:
      "Different mechanical structural designs were evaluated to identify the most sustainable load condition that meets customer requirements.",
    images: ["public/placeholder.svg", "public/placeholder.svg", "public/placeholder.svg", "public/placeholder.svg"],
    layout: "grid",
  },
  {
    id: "thermal",
    title: "Thermal Analysis of System",
    description: "Comprehensive thermal analysis was performed to evaluate insulation performance and temperature distribution.",
    images: ["public/placeholder.svg", "public/placeholder.svg", "public/placeholder.svg", "public/placeholder.svg"],
    layout: "grid",
  },
  {
    id: "corrosion",
    title: "Corrosion Testing (ASTM B117)",
    description: "Salt spray testing conducted according to ASTM B117 standards to evaluate the corrosion resistance of materials.",
    images: ["public/placeholder.svg", "public/placeholder.svg", "public/placeholder.svg", "public/placeholder.svg"],
    layout: "comparison",
  },
];

const contactLinks = [
  { href: "#", label: "jayjayani16@gmail.com", icon: "mail" },
  { href: "#", label: "LinkedIn Profile", icon: "linkedin" },
  { href: "#", label: "GitHub Profile", icon: "github" },
];

const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background";

function createNavLink(link, isMobile = false) {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.textContent = link.label;
  anchor.className = `${isMobile ? "py-2 " : ""}text-muted-foreground hover:text-primary transition-colors font-medium`;
  if (isMobile) {
    anchor.addEventListener("click", () => toggleMenu(false));
  }
  return anchor;
}

function createResumeButton(isMobile = false) {
  const btn = document.createElement(isMobile ? "button" : "a");
  btn.className = `${buttonBaseClasses} ${
    isMobile ? "w-fit" : ""
  } border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2`;
  btn.innerHTML = '<i data-lucide="download" class="h-4 w-4"></i><span>Resume</span>';
  return btn;
}

function renderProjectMedia(project) {
  if (project.layout === "single") {
    return `<div class="aspect-video bg-muted rounded-lg overflow-hidden"><img src="${project.images[0]}" alt="${project.title}" class="w-full h-full object-cover" /></div>`;
  }

  if (project.layout === "double") {
    return `<div class="grid md:grid-cols-2 gap-4">${project.images
      .map(
        (img, idx) =>
          `<div class="aspect-[4/3] bg-muted rounded-lg overflow-hidden"><img src="${img}" alt="${project.title} ${idx + 1}" class="w-full h-full object-cover" /></div>`,
      )
      .join("")}</div>`;
  }

  if (project.layout === "grid") {
    return `<div class="grid grid-cols-2 gap-4">${project.images
      .map(
        (img, idx) =>
          `<div class="aspect-square bg-muted rounded-lg overflow-hidden"><img src="${img}" alt="${project.title} ${idx + 1}" class="w-full h-full object-cover" /></div>`,
      )
      .join("")}</div>`;
  }

  if (project.layout === "comparison") {
    return `<div class="grid md:grid-cols-2 gap-6">${project.images
      .map(
        (img, idx) =>
          `<div class="space-y-2"><div class="aspect-[4/3] bg-muted rounded-lg overflow-hidden"><img src="${img}" alt="Test ${idx + 1}" class="w-full h-full object-cover" /></div><p class="text-center text-sm text-muted-foreground font-medium">${
            idx % 2 === 0 ? "Before Test" : "After Test"
          }</p></div>`,
      )
      .join("")}</div>`;
  }
  return "";
}

function populateSections() {
  const desktopNav = document.querySelector("[data-desktop-nav]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  navLinks.forEach((link) => {
    desktopNav?.appendChild(createNavLink(link));
    mobileNav?.appendChild(createNavLink(link, true));
  });

  desktopNav?.appendChild(createResumeButton());
  mobileNav?.appendChild(createResumeButton(true));

  const highlightGrid = document.querySelector("[data-highlight-grid]");
  highlightGrid.innerHTML = highlights
    .map(
      (item) => `
        <div class="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <i data-lucide="${item.icon}" class="h-6 w-6 text-primary"></i>
          </div>
          <h3 class="text-lg font-semibold text-foreground mb-2">${item.title}</h3>
          <p class="text-muted-foreground text-sm">${item.description}</p>
        </div>
      `,
    )
    .join("");

  const skillsGrid = document.querySelector("[data-skills-grid]");
  skillsGrid.innerHTML = skillCategories
    .map(
      (category) => `
        <div class="bg-card p-6 rounded-lg border border-border">
          <h3 class="text-lg font-semibold text-foreground mb-4">${category.title}</h3>
          <div class="flex flex-wrap gap-2">
            ${category.skills
              .map(
                (skill) =>
                  `<span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary">${skill}</span>`,
              )
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");

  const educationGrid = document.querySelector("[data-education-grid]");
  educationGrid.innerHTML = educationData
    .map(
      (edu) => `
        <div class="bg-card p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <i data-lucide="graduation-cap" class="h-7 w-7 text-primary"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-foreground mb-2">${edu.degree}</h3>
              <p class="text-muted-foreground">${edu.school}</p>
            </div>
          </div>
        </div>
      `,
    )
    .join("");

  const experienceTimeline = document.querySelector("[data-experience-timeline]");
  experienceTimeline.innerHTML = experienceData
    .map(
      (exp) => `
        <div class="relative pl-0 md:pl-16">
          <div class="absolute left-4 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block"></div>
          <div class="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 md:hidden">
                <i data-lucide="briefcase" class="h-5 w-5 text-primary"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-foreground">${exp.title}</h3>
                <p class="text-primary font-medium">${exp.company}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              ${exp.skills
                .map(
                  (skill) =>
                    `<span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors text-foreground">${skill}</span>`,
                )
                .join("")}
            </div>
          </div>
        </div>
      `,
    )
    .join("");

  const projectsContainer = document.querySelector("[data-projects]");
  projectsContainer.innerHTML = projectSections
    .map(
      (project) => `
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div class="p-6 md:p-8">
            <h3 class="text-2xl font-semibold text-foreground mb-4">${project.title}</h3>
            <p class="text-muted-foreground mb-6 leading-relaxed">${project.description}</p>
            ${renderProjectMedia(project)}
          </div>
        </div>
      `,
    )
    .join("");

  const contactContainer = document.querySelector("[data-contact-links]");
  contactContainer.innerHTML = contactLinks
    .map(
      (item) => `
        <a href="${item.href}" class="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
          <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"><i data-lucide="${item.icon}" class="h-5 w-5 text-primary"></i></div>
          <span>${item.label}</span>
        </a>
      `,
    )
    .join("");
}

function toggleMenu(forceState) {
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const menuIcon = document.querySelector("[data-menu-icon]");
  const closeIcon = document.querySelector("[data-close-icon]");
  const isOpen = typeof forceState === "boolean" ? !forceState : mobileMenu.classList.contains("hidden") === false;
  const shouldOpen = typeof forceState === "boolean" ? forceState : !isOpen;

  mobileMenu.classList.toggle("hidden", !shouldOpen);
  if (menuIcon && closeIcon) {
    menuIcon.classList.toggle("hidden", shouldOpen);
    closeIcon.classList.toggle("hidden", !shouldOpen);
  }
}

function attachNavbarBehavior() {
  const navbar = document.querySelector("[data-navbar]");
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled", "bg-background/95", "backdrop-blur-sm", "shadow-md");
    } else {
      navbar.classList.remove("navbar-scrolled", "bg-background/95", "backdrop-blur-sm", "shadow-md");
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
}

function attachFormBehavior() {
  const form = document.getElementById("contact-form");
  const submitButton = form?.querySelector("[data-submit]");
  const submitLabel = form?.querySelector("[data-submit-label]");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!submitButton || !submitLabel) return;

    submitButton.disabled = true;
    submitLabel.textContent = "Sending...";

    setTimeout(() => {
      submitButton.disabled = false;
      submitLabel.textContent = "Send Message";
      form.reset();
      showToast("Message Sent!", "Thank you for reaching out. I'll get back to you soon.");
    }, 1000);
  });
}

function showToast(title, message) {
  const container = document.querySelector("[data-toast-container]");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-card bg-card text-card-foreground border border-border shadow-lg rounded-lg p-4 w-80 transition-all duration-200";
  toast.innerHTML = `<p class="text-sm font-semibold">${title}</p><p class="text-sm text-muted-foreground mt-1">${message}</p>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 220);
  }, 3200);
}

function setupMenuToggle() {
  const toggleButton = document.querySelector("[data-menu-toggle]");
  toggleButton?.addEventListener("click", () => toggleMenu());
}

function updateFooterYear() {
  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear().toString();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  populateSections();
  attachNavbarBehavior();
  attachFormBehavior();
  setupMenuToggle();
  updateFooterYear();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
