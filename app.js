/* ==========================================
   EKRAMUL HAQUE — PORTFOLIO INTERACTIONS
========================================== */

"use strict";

// Mobile navigation
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function closeNav() {
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
}

navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  navToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
  navMenu.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeNav();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
});

// Typewriter-style role rotation
const typedRole = document.getElementById("typedRole");
const roles = [
  "digital experiences",
  "responsive websites",
  "full-stack solutions",
  "useful web applications"
];

let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = false;

function typeRole() {
  if (!typedRole || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (typedRole) typedRole.textContent = roles[0];
    return;
  }

  const current = roles[roleIndex];

  if (deleting) {
    charIndex--;
    typedRole.textContent = current.slice(0, charIndex);
  } else {
    charIndex++;
    typedRole.textContent = current.slice(0, charIndex);
  }

  let delay = deleting ? 35 : 65;

  if (!deleting && charIndex === current.length) {
    deleting = true;
    delay = 1500;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }

  window.setTimeout(typeRole, delay);
}

window.setTimeout(typeRole, 1600);

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -25px 0px"
  });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Active navigation link based on visible section
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
      });
    });
  }, {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  });

  sections.forEach((section) => sectionObserver.observe(section));
}

// Contact form: prepare an email using the visitor's email application.
// This is a static-site form; it does not send messages directly.
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !subject || !message) {
    formNote.textContent = "Please complete all fields before preparing your email.";
    return;
  }

  const recipient = "ekramul.haque.cse1@gmail.com";
  const emailSubject = encodeURIComponent(`[Portfolio Contact] ${subject}`);
  const emailBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  formNote.textContent = "Opening your email app. If nothing happens, email me directly.";
  window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
s