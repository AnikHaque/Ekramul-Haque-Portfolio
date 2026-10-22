
const menuToggle = document.getElementById("menuToggle");
const contactNav = document.getElementById("contactNav");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const backToTop = document.getElementById("backToTop");

// Mobile navigation
if (menuToggle && contactNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = contactNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  contactNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      contactNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

// Reveal animation
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("revealed"));
}

// Footer year
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Back to top
window.addEventListener(
  "scroll",
  () => {
    if (backToTop) {
      backToTop.classList.toggle("visible", window.scrollY > 350);
    }
  },
  { passive: true }
);

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Contact form
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Hello Ekramul,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Service: ${service || "Not specified"}\n\n` +
      `Message:\n${message}\n\n` +
      `Sent through your portfolio contact form.`
    );

    formStatus.className = "form-status";
    formStatus.textContent = "Opening your email application...";

    // Opens the visitor's email application; does not send automatically.
    window.location.href =
      `mailto:ekramul.haque.cse1@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    formStatus.textContent =
      "If your email application did not open, email ekramul.haque.cse1@gmail.com directly.";
  });
}
