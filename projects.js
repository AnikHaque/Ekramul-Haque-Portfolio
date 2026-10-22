
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const projectNav = document.querySelector(".project-nav");

  if (menuToggle && projectNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = projectNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.className = isOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      }
    });

    projectNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        projectNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");

        const icon = menuToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });
  }

  // Dynamic footer year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Project category filters
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const emptyState = document.querySelector(".empty-state");
  const projectGrid = document.querySelector(".project-grid");

  function filterProjects(category) {
    let visibleProjects = 0;

    projectCards.forEach((card) => {
      const matches =
        category === "all" ||
        card.dataset.category === category;

      card.hidden = !matches;

      if (matches) visibleProjects++;
    });

    filterButtons.forEach((button) => {
      const active = button.dataset.filter === category;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (emptyState) {
      emptyState.hidden = visibleProjects !== 0;
    }

    if (projectGrid) {
      projectGrid.hidden = visibleProjects === 0;
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterProjects(button.dataset.filter);
    });
  });

  const resetButton = document.querySelector(".reset-filter");

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      filterProjects("all");
    });
  }

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  // Back to top
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    backToTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
