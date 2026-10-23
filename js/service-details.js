
document.addEventListener("DOMContentLoaded", () => {
  const services = {
    frontend: {
      title: "Frontend Development",
      eyebrow: "FRONTEND DEVELOPMENT",
      icon: "fa-code",
      description:
        "Create modern, responsive, and interactive user interfaces that make your website engaging, accessible, and easy to use.",
      overview:
        "Frontend development brings your digital product to life. I focus on clean layouts, responsive behavior, reusable components, and thoughtful interactions that work across screen sizes.",
      visualLabel: "FRONTEND SOLUTIONS",
      visualTitle: "User Interface",
      approach: "Design. Develop. Refine.",
      features: [
        {
          icon: "fa-mobile-screen",
          title: "Responsive Layouts",
          text: "Layouts that adapt to mobile, tablet, and desktop screens."
        },
        {
          icon: "fa-wand-magic-sparkles",
          title: "Modern UI Design",
          text: "Consistent visual styles, spacing, typography, and interactions."
        },
        {
          icon: "fa-puzzle-piece",
          title: "Reusable Components",
          text: "Organized components that make interfaces easier to maintain."
        }
      ],
      deliverables: [
        ["Responsive Website UI", "A layout designed for different screen sizes."],
        ["Interactive Components", "Navigation, buttons, cards, and interface interactions."],
        ["Maintainable Code", "Structured HTML, CSS, and JavaScript or React code."],
        ["Cross-Device Review", "A review of layout and usability across screen sizes."]
      ],
      technologies: [
        ["HTML5", "fa-html5"],
        ["CSS3", "fa-css3-alt"],
        ["JavaScript", "fa-js"],
        ["React", "fa-react"],
        ["Tailwind CSS", "fa-wind"]
      ]
    },

    backend: {
      title: "Backend Development",
      eyebrow: "BACKEND DEVELOPMENT",
      icon: "fa-layer-group",
      description:
        "Develop reliable server-side applications, APIs, and application logic that support your product and its users.",
      overview:
        "A dependable backend helps an application work consistently behind the scenes. The focus is on clear architecture, API design, data flow, validation, and maintainable server-side code.",
      visualLabel: "BACKEND SOLUTIONS",
      visualTitle: "Application Logic",
      approach: "Structure. Connect. Test.",
      features: [
        {
          icon: "fa-plug",
          title: "API Development",
          text: "Endpoints that connect frontend interfaces with application data."
        },
        {
          icon: "fa-shield-halved",
          title: "Authentication",
          text: "User access and authentication flows based on project needs."
        },
        {
          icon: "fa-diagram-project",
          title: "Application Structure",
          text: "Organized routes, controllers, middleware, and business logic."
        }
      ],
      deliverables: [
        ["API Endpoints", "Structured endpoints for application operations."],
        ["Server-Side Logic", "Backend functionality aligned with requirements."],
        ["Input Validation", "Checks for incoming data and expected formats."],
        ["Project Documentation", "Clear notes about setup and API usage where applicable."]
      ],
      technologies: [
        ["Node.js", "fa-node-js"],
        ["Express.js", "fa-server"],
        ["REST APIs", "fa-plug"],
        ["JWT", "fa-key"],
        ["Git", "fa-git-alt"]
      ]
    },

    database: {
      title: "Database Solutions",
      eyebrow: "DATABASE MANAGEMENT",
      icon: "fa-database",
      description:
        "Organize, query, and manage application data through practical database design and efficient data access.",
      overview:
        "Good data management starts with an appropriate structure. I focus on data models, relationships, query organization, and maintainable integration between applications and databases.",
      visualLabel: "DATABASE SOLUTIONS",
      visualTitle: "Data Management",
      approach: "Model. Query. Optimize.",
      features: [
        {
          icon: "fa-table",
          title: "Data Modeling",
          text: "Organize information around application requirements and relationships."
        },
        {
          icon: "fa-magnifying-glass-chart",
          title: "Query Development",
          text: "Create clear queries for retrieving and managing data."
        },
        {
          icon: "fa-link",
          title: "Application Integration",
          text: "Connect backend services with appropriate database systems."
        }
      ],
      deliverables: [
        ["Database Structure", "Models or schemas that reflect the project requirements."],
        ["Query Implementation", "Queries for common application operations."],
        ["Data Integration", "Connection between the application and database."],
        ["Maintainable Models", "Organized definitions that support future changes."]
      ],
      technologies: [
        ["MongoDB", "fa-database"],
        ["MySQL", "fa-database"],
        ["PostgreSQL", "fa-database"],
        ["Mongoose", "fa-leaf"],
        ["SQL", "fa-code"]
      ]
    },

    analytics: {
      title: "Data Analysis & Reporting",
      eyebrow: "DATA & ANALYTICS",
      icon: "fa-chart-line",
      description:
        "Transform structured data into useful insights through analysis, reporting, and clear performance metrics.",
      overview:
        "Data analysis helps make complex information easier to understand. The process can include preparing data, writing queries, identifying patterns, and presenting findings in a structured report.",
      visualLabel: "DATA ANALYTICS",
      visualTitle: "Insight & Reporting",
      approach: "Analyze. Interpret. Report.",
      features: [
        {
          icon: "fa-filter",
          title: "Data Preparation",
          text: "Organize and validate data before drawing conclusions."
        },
        {
          icon: "fa-chart-column",
          title: "Performance Reporting",
          text: "Summarize important metrics and trends in readable reports."
        },
        {
          icon: "fa-lightbulb",
          title: "Actionable Insights",
          text: "Present findings that support informed decisions."
        }
      ],
      deliverables: [
        ["Prepared Data", "Organized data suitable for analysis."],
        ["SQL Queries", "Queries for extracting and summarizing information."],
        ["Reports & Metrics", "Structured reporting of key findings."],
        ["Insight Summary", "A clear explanation of patterns and observations."]
      ],
      technologies: [
        ["Python", "fa-python"],
        ["SQL", "fa-database"],
        ["Excel", "fa-file-excel"],
        ["Data Reporting", "fa-chart-line"],
        ["Git", "fa-git-alt"]
      ]
    },

    optimization: {
      title: "Website Optimization",
      eyebrow: "PERFORMANCE & QUALITY",
      icon: "fa-gauge-high",
      description:
        "Improve website usability, responsiveness, code organization, and loading behavior through targeted improvements.",
      overview:
        "Website optimization starts by identifying what needs improvement. Depending on the project, this may involve reviewing layout behavior, simplifying code, reducing unnecessary work, and improving the overall user experience.",
      visualLabel: "WEBSITE OPTIMIZATION",
      visualTitle: "Performance Review",
      approach: "Inspect. Improve. Verify.",
      features: [
        {
          icon: "fa-stopwatch",
          title: "Performance Review",
          text: "Identify opportunities to improve page loading and responsiveness."
        },
        {
          icon: "fa-bug",
          title: "Debugging",
          text: "Investigate interface issues and unexpected behavior."
        },
        {
          icon: "fa-code",
          title: "Code Improvements",
          text: "Improve readability and remove avoidable complexity where possible."
        }
      ],
      deliverables: [
        ["Issue Review", "A summary of identified issues and improvement areas."],
        ["Code Refinement", "Targeted fixes and cleanup within the agreed scope."],
        ["Responsive Checks", "Review of key layouts on different screen sizes."],
        ["Improvement Summary", "A clear outline of completed changes."]
      ],
      technologies: [
        ["JavaScript", "fa-js"],
        ["CSS3", "fa-css3-alt"],
        ["Chrome DevTools", "fa-wrench"],
        ["Lighthouse", "fa-gauge-high"],
        ["Git", "fa-git-alt"]
      ]
    },

    consultation: {
      title: "Technical Consultation",
      eyebrow: "TECHNICAL CONSULTATION",
      icon: "fa-lightbulb",
      description:
        "Get practical guidance on project requirements, technology choices, application structure, and technical problem-solving.",
      overview:
        "A clear technical direction can make a project easier to plan and maintain. Consultation focuses on understanding the problem, reviewing possible approaches, and outlining practical next steps.",
      visualLabel: "TECHNICAL PLANNING",
      visualTitle: "Project Strategy",
      approach: "Understand. Evaluate. Plan.",
      features: [
        {
          icon: "fa-list-check",
          title: "Requirements Analysis",
          text: "Break down goals and define the main functional requirements."
        },
        {
          icon: "fa-sitemap",
          title: "Technology Selection",
          text: "Evaluate suitable tools based on project needs and constraints."
        },
        {
          icon: "fa-puzzle-piece",
          title: "Problem Solving",
          text: "Explore practical approaches to technical challenges."
        }
      ],
      deliverables: [
        ["Requirements Summary", "A structured view of the project's needs."],
        ["Technology Recommendations", "Potential tools and approaches with rationale."],
        ["Implementation Roadmap", "Suggested steps for moving forward."],
        ["Technical Notes", "Documented recommendations for reference."]
      ],
      technologies: [
        ["JavaScript", "fa-js"],
        ["Node.js", "fa-node-js"],
        ["React", "fa-react"],
        ["SQL", "fa-database"],
        ["Git", "fa-git-alt"]
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get("service") || "frontend";
  const service = services[requestedService] || services.frontend;

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  const setIcon = (id, iconClass) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
    }
  };

  setText("sdBreadcrumbTitle", service.title);
  setText("sdEyebrow", service.eyebrow);
  setText("sdDescription", service.description);
  setText("sdOverview", service.overview);
  setText("sdVisualLabel", service.visualLabel);
  setText("sdVisualTitle", service.visualTitle);
  setText("sdVisualApproach", service.approach);
  setIcon("sdVisualIcon", service.icon);

  const title = document.getElementById("sdTitle");
  if (title) {
    title.replaceChildren();

    const titleLine = document.createElement("span");
    titleLine.textContent = service.title;

    const subtitle = document.createElement("span");
    subtitle.className = "sd-gradient";
    subtitle.textContent = "built around your goals.";

    title.append(titleLine, document.createElement("br"), subtitle);
  }

  document.title = `${service.title} | Ekramul Haque`;

  const featureGrid = document.getElementById("sdFeatureGrid");
  if (featureGrid) {
    featureGrid.replaceChildren();

    service.features.forEach((feature) => {
      const card = document.createElement("article");
      card.className = "sd-feature-card sd-reveal";

      const icon = document.createElement("div");
      icon.className = "sd-feature-icon";

      const iconElement = document.createElement("i");
      iconElement.className = `fa-solid ${feature.icon}`;
      icon.appendChild(iconElement);

      const heading = document.createElement("h3");
      heading.textContent = feature.title;

      const description = document.createElement("p");
      description.textContent = feature.text;

      card.append(icon, heading, description);
      featureGrid.appendChild(card);
    });
  }

  const deliverablesList = document.getElementById("sdDeliverablesList");
  if (deliverablesList) {
    deliverablesList.replaceChildren();

    service.deliverables.forEach(([headingText, descriptionText]) => {
      const item = document.createElement("article");
      item.className = "sd-deliverable";

      const check = document.createElement("span");
      check.className = "sd-deliverable-check";
      check.innerHTML = '<i class="fa-solid fa-check"></i>';

      const content = document.createElement("div");
      const heading = document.createElement("h3");
      heading.textContent = headingText;

      const description = document.createElement("p");
      description.textContent = descriptionText;

      content.append(heading, description);
      item.append(check, content);
      deliverablesList.appendChild(item);
    });
  }

  const techList = document.getElementById("sdTechList");
  if (techList) {
    techList.replaceChildren();

    service.technologies.forEach(([name, iconClass]) => {
      const item = document.createElement("div");
      item.className = "sd-tech-item";

      const icon = document.createElement("i");
      icon.className = `fa-brands ${iconClass}`;

      // Some Font Awesome icons belong to the solid icon set.
      if (iconClass === "fa-database" ||
          iconClass === "fa-code" ||
          iconClass === "fa-wrench" ||
          iconClass === "fa-gauge-high" ||
          iconClass === "fa-chart-line" ||
          iconClass === "fa-leaf") {
        icon.className = `fa-solid ${iconClass}`;
      }

      const label = document.createElement("span");
      label.textContent = name;

      item.append(icon, label);
      techList.appendChild(item);
    });
  }

  // Mobile navigation
  const menuToggle = document.getElementById("sdMenuToggle");
  const navLinks = document.getElementById("sdNavLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // Scroll reveal, including dynamically generated cards
  const revealElements = document.querySelectorAll(".sd-reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sd-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -25px 0px"
    });

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 3) * 70}ms`;
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => element.classList.add("sd-visible"));
  }

  // Back to top
  const backTop = document.querySelector(".sd-back-top");

  if (backTop) {
    backTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});