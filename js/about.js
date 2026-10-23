
"use strict";

// Mobile Navigation
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function closeNav() {
  if (!navToggle || !navMenu) return;

  navMenu.classList.remove("open");

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");

  document.body.classList.remove("menu-open");
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen =
      navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );

    navMenu.classList.toggle("open", !isOpen);

    document.body.classList.toggle("menu-open", !isOpen);
  });

  // Close menu after clicking a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  // Close menu when returning to desktop width
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeNav();
    }
  });

  // Close menu with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

// Automatic Copyright Year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Animate each element only once
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -25px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

} else {
  // Fallback for older browsers
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}
