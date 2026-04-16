const PORTFOLIO_FLOW = [
  {
    href: "motivation.html",
    label: "1. Motivation & Research",
  },
  {
    href: "requirements.html",
    label: "2. User Requirements",
  },
  {
    href: "ideation.html",
    label: "3. Ideation & Alternatives",
  },
  {
    href: "implementation.html",
    label: "4. Technical Implementation",
  },
  {
    href: "evaluation.html",
    label: "5. Evaluation & Reflection",
  },
];

function getCurrentPath() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function createSectionNavLink(target, type) {
  if (!target) {
    const placeholder = document.createElement("span");
    placeholder.className = "section-nav-spacer";
    placeholder.setAttribute("aria-hidden", "true");
    return placeholder;
  }

  const link = document.createElement("a");
  const isPrevious = type === "previous";
  const arrow = isPrevious ? "←" : "→";
  const prefix = isPrevious ? "Previous" : "Next";

  link.className = `section-nav-link section-nav-link-${type}`;
  link.href = target.href;
  link.setAttribute("aria-label", `${prefix} page: ${target.label}`);
  link.innerHTML = `
    <span class="section-nav-eyebrow">${prefix}</span>
    <span class="section-nav-title">${isPrevious ? `${arrow} ` : ""}${target.label}${!isPrevious ? ` ${arrow}` : ""}</span>
  `;

  return link;
}

function initSectionNavigation() {
  const currentPath = getCurrentPath();
  const currentPageIndex = PORTFOLIO_FLOW.findIndex((page) => page.href === currentPath);
  const main = document.querySelector("main");
  if (!main || currentPageIndex === -1) return;

  const previousEntry = PORTFOLIO_FLOW[currentPageIndex - 1] || null;
  const nextEntry = PORTFOLIO_FLOW[currentPageIndex + 1] || null;
  const nav = document.createElement("div");

  nav.className = "section-nav page-nav";
  nav.append(
    createSectionNavLink(previousEntry, "previous"),
    createSectionNavLink(nextEntry, "next")
  );

  main.append(nav);
}

document.addEventListener("DOMContentLoaded", initSectionNavigation);
