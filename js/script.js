// 根据当前页面路径高亮导航项
function initActiveNav() {
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!navLinks.length) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href") || "";
    if (linkPath === currentPath) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  });
}

// Intersection Observer：section 进入视口时淡入
function initRevealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !revealElements.length) {
    // 简单降级：不支持则直接显示
    revealElements.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.02,
      rootMargin: "0px 0px 12% 0px",
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  initActiveNav();
  initRevealOnScroll();
});
