
document.addEventListener("DOMContentLoaded", () => {
  const services = {
    "full-stack": {
      title: "Full-Stack Development",
      category: "END-TO-END DEVELOPMENT",
      icon: "fa-solid fa-code",
      intro:
        "Complete web applications built with thoughtful interfaces, reliable backend logic, and structured data management.",
      overviewTitle: "Complete applications. One connected experience.",
      overview:
        "Full-stack development brings the frontend and backend together to create a complete web application. From the interface users interact with to the server logic that powers its features, every layer is designed to work together.",
      overviewTwo:
        "Depending on your requirements, the project may include user authentication, API integration, database operations, form handling, and administrative features.",
      goal:
        "Create a cohesive, maintainable web application that supports your users and your project's objectives.",
      visualTitle: "Full-stack solutions",
      visualText: "Frontend + Backend",
      features: [
        {
          icon: "fa-solid fa-display",
          title: "Frontend Development",
          text: "Responsive interfaces, reusable components, intuitive navigation, and interactive user experiences."
        },
        {
          icon: "fa-solid fa-server",
          title: "Backend Development",
          text: "Server-side logic, application routes, data processing, and organized business rules."
        },
        {
          icon: "fa-solid fa-database",
          title: "Database Integration",
          text: "Structured data models, database operations, and reliable communication between application layers."
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Authentication",
          text: "User registration, login workflows, and access-control features where required."
        },
        {
          icon: "fa-solid fa-plug",
          title: "API Integration",
          text: "Connect frontend interfaces with backend services and external APIs."
        },
        {
          icon: "fa-solid fa-gauge-high",
          title: "Testing & Refinement",
          text: "Check important workflows, resolve issues, and improve maintainability."
        }
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git"],
      related: ["web-apps", "api-database", "responsive-ui"]
    },

    ecommerce: {
      title: "E-commerce Websites",
      category: "DIGITAL COMMERCE",
      icon: "fa-solid fa-cart-shopping",
      intro:
        "Product-focused online shopping experiences designed to help customers discover products and navigate your store with ease.",
      overviewTitle: "Turn product browsing into a better shopping experience.",
      overview:
        "An e-commerce website provides a central place to showcase products, organize categories, present product information, and guide customers through a shopping journey.",
      overviewTwo:
        "The exact functionality can be tailored to your store, from product listings and search to shopping carts, order workflows, and payment-service integration.",
      goal:
        "Build a clear, convenient online store that showcases your products and supports your business requirements.",
      visualTitle: "Your online store",
      visualText: "Products + Shopping experience",
      features: [
        {
          icon: "fa-solid fa-box-open",
          title: "Product Catalog",
          text: "Organized products, categories, images, descriptions, and pricing information."
        },
        {
          icon: "fa-solid fa-magnifying-glass",
          title: "Product Discovery",
          text: "Search, category navigation, and filtering where appropriate."
        },
        {
          icon: "fa-solid fa-basket-shopping",
          title: "Shopping Cart",
          text: "A convenient cart interface for reviewing and managing selected items."
        },
        {
          icon: "fa-solid fa-mobile-screen",
          title: "Responsive Shopping",
          text: "A consistent shopping experience across phones, tablets, and desktop devices."
        },
        {
          icon: "fa-solid fa-credit-card",
          title: "Checkout Integration",
          text: "Checkout and payment-provider integration based on project needs and provider support."
        },
        {
          icon: "fa-solid fa-clipboard-list",
          title: "Order Management",
          text: "Order-related interfaces and workflows when included in the project scope."
        }
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Payment APIs"],
      related: ["full-stack", "responsive-ui", "api-database"]
    },

    "web-apps": {
      title: "Custom Web Applications",
      category: "CUSTOM SOLUTIONS",
      icon: "fa-solid fa-window-maximize",
      intro:
        "Purpose-built web applications designed to organize information, improve workflows, and address specific operational needs.",
      overviewTitle: "Software designed around your workflow.",
      overview:
        "Not every business problem can be solved with a standard website. Custom web applications allow you to build the features, dashboards, forms, and workflows that match how your organization works.",
      overviewTwo:
        "Possible solutions include admin dashboards, data-entry portals, reporting tools, task management interfaces, and systems that connect existing services.",
      goal:
        "Turn a specific business requirement into a usable, organized, and maintainable web application.",
      visualTitle: "Custom application",
      visualText: "Workflows + Data",
      features: [
        {
          icon: "fa-solid fa-table-columns",
          title: "Custom Dashboards",
          text: "Organized interfaces for displaying important information and operational summaries."
        },
        {
          icon: "fa-solid fa-list-check",
          title: "Workflow Management",
          text: "Forms, task flows, status tracking, and structured information handling."
        },
        {
          icon: "fa-solid fa-users",
          title: "User Management",
          text: "User accounts and role-based interfaces where required."
        },
        {
          icon: "fa-solid fa-chart-column",
          title: "Reports & Data Views",
          text: "Tables, filters, and reporting interfaces to help users understand their data."
        },
        {
          icon: "fa-solid fa-plug",
          title: "System Integration",
          text: "Connect the application with APIs, databases, and other supported services."
        },
        {
          icon: "fa-solid fa-arrows-rotate",
          title: "Scalable Structure",
          text: "Organized components and modules that make future improvements easier."
        }
      ],
      technologies: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "Git"],
      related: ["full-stack", "api-database", "website-support"]
    },

    "responsive-ui": {
      title: "Responsive UI Development",
      category: "INTERFACE DEVELOPMENT",
      icon: "fa-solid fa-mobile-screen-button",
      intro:
        "Modern, responsive user interfaces that adapt to different screen sizes while keeping the experience clear and consistent.",
      overviewTitle: "Beautiful interfaces that work across devices.",
      overview:
        "A well-designed interface should feel natural whether someone is browsing on a phone, tablet, laptop, or large desktop screen. Responsive UI development focuses on layouts, typography, spacing, navigation, and interaction.",
      overviewTwo:
        "The service can be used to build a new interface from a design reference or improve the responsiveness and usability of an existing website.",
      goal:
        "Deliver a polished, accessible interface that presents information clearly across supported screen sizes.",
      visualTitle: "Responsive interface",
      visualText: "Desktop + Tablet + Mobile",
      features: [
        {
          icon: "fa-solid fa-pen-ruler",
          title: "Modern Layouts",
          text: "Well-structured page layouts with consistent spacing, typography, and visual hierarchy."
        },
        {
          icon: "fa-solid fa-mobile-screen-button",
          title: "Mobile Responsiveness",
          text: "Flexible layouts and navigation adapted for smaller screens."
        },
        {
          icon: "fa-solid fa-wand-magic-sparkles",
          title: "Micro-interactions",
          text: "Thoughtful hover states, transitions, and subtle interface animations."
        },
        {
          icon: "fa-solid fa-universal-access",
          title: "Accessibility Basics",
          text: "Semantic HTML, keyboard-friendly controls, and readable content structure."
        },
        {
          icon: "fa-solid fa-layer-group",
          title: "Reusable Components",
          text: "Consistent interface elements that are easier to maintain and extend."
        },
        {
          icon: "fa-solid fa-bug",
          title: "Cross-device Checks",
          text: "Review layouts and interactions at different viewport sizes."
        }
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Flexbox", "CSS Grid", "Font Awesome"],
      related: ["full-stack", "ecommerce", "website-support"]
    },

    "api-database": {
      title: "API & Database Integration",
      category: "BACKEND & DATA",
      icon: "fa-solid fa-database",
      intro:
        "Connect applications to APIs and databases to support dynamic content, data exchange, and practical application functionality.",
      overviewTitle: "Connect your application to the data it needs.",
      overview:
        "APIs and databases allow applications to exchange information, store records, and support dynamic features. A well-structured integration helps different parts of a system communicate reliably.",
      overviewTwo:
        "Depending on the project, the work may involve REST endpoints, CRUD operations, database schemas, external API connections, validation, and error handling.",
      goal:
        "Create reliable data flows between the application, its database, and supported external services.",
      visualTitle: "Connected systems",
      visualText: "APIs + Database",
      features: [
        {
          icon: "fa-solid fa-plug",
          title: "REST API Integration",
          text: "Connect application features to API endpoints and supported external services."
        },
        {
          icon: "fa-solid fa-database",
          title: "Database Design",
          text: "Organize data models, relationships, and collections or tables."
        },
        {
          icon: "fa-solid fa-arrows-rotate",
          title: "CRUD Operations",
          text: "Create, read, update, and delete records according to application requirements."
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Validation & Security",
          text: "Input validation and appropriate access controls for data operations."
        },
        {
          icon: "fa-solid fa-triangle-exclamation",
          title: "Error Handling",
          text: "Handle failed requests, invalid inputs, and unexpected responses more gracefully."
        },
        {
          icon: "fa-solid fa-diagram-project",
          title: "Data Flow",
          text: "Connect frontend components, server logic, and storage in a clear structure."
        }
      ],
      technologies: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "MySQL", "PostgreSQL", "JavaScript"],
      related: ["full-stack", "web-apps", "website-support"]
    },

    "website-support": {
      title: "Website Support",
      category: "MAINTENANCE & SUPPORT",
      icon: "fa-solid fa-screwdriver-wrench",
      intro:
        "Improve an existing website through practical bug fixes, layout adjustments, feature updates, and ongoing technical improvements.",
      overviewTitle: "Keep your website working and improving.",
      overview:
        "Websites often need updates after launch. Existing features may require adjustments, responsive layouts may need refinement, and new requirements may emerge as a project grows.",
      overviewTwo:
        "Support can include troubleshooting, fixing interface issues, improving existing components, reviewing performance, and implementing agreed enhancements.",
      goal:
        "Help maintain a reliable, usable website while making improvements in line with your priorities.",
      visualTitle: "Website improvement",
      visualText: "Fix + Refine + Maintain",
      features: [
        {
          icon: "fa-solid fa-bug",
          title: "Bug Fixes",
          text: "Investigate and resolve reproducible interface and functionality issues."
        },
        {
          icon: "fa-solid fa-mobile-screen-button",
          title: "Responsive Fixes",
          text: "Correct layout, spacing, and navigation problems across screen sizes."
        },
        {
          icon: "fa-solid fa-pen-to-square",
          title: "Content & UI Updates",
          text: "Update existing page content, interface elements, and visual styling."
        },
        {
          icon: "fa-solid fa-gauge-high",
          title: "Performance Review",
          text: "Identify practical opportunities to reduce unnecessary work and improve loading."
        },
        {
          icon: "fa-solid fa-code-branch",
          title: "Feature Enhancements",
          text: "Improve or extend existing features within the agreed project scope."
        },
        {
          icon: "fa-solid fa-clipboard-check",
          title: "Quality Checks",
          text: "Review the updated functionality and test relevant user flows."
        }
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git", "GitHub", "Chrome DevTools", "Node.js"],
      related: ["responsive-ui", "full-stack", "web-apps"]
    }
  };

  const defaultService = "full-stack";
  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get("service");
  const serviceKey = Object.hasOwn(services, requestedService)
    ? requestedService
    : defaultService;

  const service = services[serviceKey];

  // Update page title and metadata
  document.title = `${service.title} | Ekramul Haque`;

  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.content = service.intro;
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  // Hero and overview
  setText("detailCategory", service.category);
  setText("detailTitle", service.title);
  setText("detailIntro", service.intro);
  setText("overviewTitle", service.overviewTitle);
  setText("overviewText", service.overview);
  setText("overviewTextTwo", service.overviewTwo);
  setText("detailGoal", service.goal);
  setText("visualFeatureTitle", service.visualTitle);
  setText("visualFeatureText", service.visualText);

  const detailIcon = document.getElementById("detailIcon");

  if (detailIcon) {
    detailIcon.replaceChildren();

    const icon = document.createElement("i");
    icon.className = service.icon;
    detailIcon.appendChild(icon);
  }

  // Feature cards
  const featureGrid = document.getElementById("featureGrid");

  if (featureGrid) {
    featureGrid.innerHTML = service.features.map((feature) => `
      <article class="detail-feature reveal">
        <span class="detail-feature-icon">
          <i class="${feature.icon}" aria-hidden="true"></i>
        </span>
        <h3>${feature.title}</h3>
        <p>${feature.text}</p>
      </article>
    `).join("");
  }

  // Technology badges
  const techList = document.getElementById("techList");

  if (techList) {
    techList.innerHTML = service.technologies.map((technology) => `
      <span>${technology}</span>
    `).join("");
  }

  // Related services
  const relatedGrid = document.getElementById("relatedGrid");

  if (relatedGrid) {
    relatedGrid.innerHTML = service.related.map((key) => {
      const item = services[key];

      return `
        <article class="related-card reveal">
          <i class="${item.icon}" aria-hidden="true"></i>
          <h3>${item.title}</h3>
          <p>${item.intro}</p>
          <a href="service-details.html?service=${key}">
            View details <i class="fa-solid fa-arrow-right"></i>
          </a>
        </article>
      `;
    }).join("");
  }

  // Add service context to the contact link
  const contactLink = document.getElementById("contactServiceLink");

  if (contactLink) {
    const subject = encodeURIComponent(`Project inquiry: ${service.title}`);
    const body = encodeURIComponent(
      `Hello Ekramul,\n\nI am interested in your ${service.title} service.\n\nProject details:\n`
    );

    contactLink.href =
      `mailto:ekramul.haque.cse1@gmail.com?subject=${subject}&body=${body}`;
  }

  // Reveal dynamically created cards too
  const dynamicElements = document.querySelectorAll(
    "#featureGrid .reveal, #relatedGrid .reveal"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    dynamicElements.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 3) * 80}ms`;
      observer.observe(element);
    });
  } else {
    dynamicElements.forEach((element) => {
      element.classList.add("visible");
    });
  }
});
