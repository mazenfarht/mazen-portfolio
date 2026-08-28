/* =========================================
   MAZEN MOSTAFA — CLIENT PORTFOLIO JS
   ========================================= */

// ─── NAVBAR ────────────────────────────────
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
  document.body.style.overflow = navLinks.classList.contains("open")
    ? "hidden"
    : "";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ─── TYPED TEXT ────────────────────────────
const phrases = [
  "Business Websites",
  "E-Commerce Platforms",
  "Landing Pages",
  "Web Dashboards",
  "Business Systems",
  "WordPress Websites",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typedText");

function type() {
  if (!typedEl) return;
  const current = phrases[phraseIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }
  let speed = isDeleting ? 40 : 80;
  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 300;
  }
  setTimeout(type, speed);
}
type();

// ─── MATRIX CANVAS ─────────────────────────
const canvas = document.getElementById("matrixCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const cols = Math.floor(canvas.width / 18);
  const drops = Array(cols).fill(1);
  const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";

  function draw() {
    ctx.fillStyle = "rgba(10, 10, 12, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00e5a0";
    ctx.font = "12px Space Mono, monospace";
    drops.forEach((y, i) => {
      const c = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(c, i * 18, y * 18);
      if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(draw, 60);
}

// ─── SCROLL REVEAL ─────────────────────────
const revealEls = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [
          ...entry.target.parentElement.querySelectorAll(".reveal"),
        ];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, idx * 80);
        revealObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
revealEls.forEach((el) => revealObs.observe(el));

// ─── SMOOTH SCROLL FOR ANCHORS ─────────────
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = document.getElementById("navbar").offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

// ─── PROJECT FILTERS ───────────────────────
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card.featured");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      if (filter === "all") {
        card.classList.remove("hidden-card");
      } else {
        const country = card.dataset.country || "";
        const type = card.dataset.type || "";
        const matches =
          (filter === "saudi" && country === "saudi") ||
          (filter === "egypt" && country === "egypt") ||
          (filter === "ecommerce" && type === "ecommerce") ||
          (filter === "website" && type === "website") ||
          (filter === "dashboard" && type === "dashboard") ||
          (filter === "landing" && type === "landing");
        if (matches) {
          card.classList.remove("hidden-card");
        } else {
          card.classList.add("hidden-card");
        }
      }
    });
  });
});

// ==========================================
// PROJECTS — LOAD MORE
// ==========================================

const projectsGrid = document.getElementById("projectsGrid");
const loadMoreBtn = document.getElementById("loadMoreProjects");
const filterButtons = document.querySelectorAll(".filter-btn");

const PROJECTS_PER_LOAD = 5;
let visibleProjects = PROJECTS_PER_LOAD;
let currentFilter = "all";

function getFilteredProjects() {
  const projects = Array.from(projectsGrid.querySelectorAll(".project-card"));

  return projects.filter((project) => {
    if (currentFilter === "all") return true;

    const country = project.dataset.country;
    const type = project.dataset.type;

    return country === currentFilter || type === currentFilter;
  });
}

function renderProjects() {
  const allProjects = Array.from(
    projectsGrid.querySelectorAll(".project-card")
  );

  const filteredProjects = getFilteredProjects();

  // Hide everything first
  allProjects.forEach((project) => {
    project.style.display = "none";
  });

  // Show only the allowed amount
  filteredProjects.slice(0, visibleProjects).forEach((project) => {
    project.style.display = "";
  });

  // Update Load More button
  updateLoadMoreButton(filteredProjects);
}

// Load More
loadMoreBtn.addEventListener("click", () => {
  visibleProjects += PROJECTS_PER_LOAD;
  renderProjects();
});

// Filters
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Active button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    // Get filter
    currentFilter = button.dataset.filter;

    // Reset visible projects
    visibleProjects = PROJECTS_PER_LOAD;

    renderProjects();
  });
});

function updateLoadMoreButton(filteredProjects) {
  const remaining = filteredProjects.length - visibleProjects;

  if (remaining > 0) {
    loadMoreBtn.style.display = "flex";

    const countToShow = Math.min(PROJECTS_PER_LOAD, remaining);

    loadMoreBtn.querySelector(
      ".load-more-count"
    ).textContent = `View ${countToShow} more ${
      countToShow === 1 ? "project" : "projects"
    }`;
  } else {
    loadMoreBtn.style.display = "none";
  }
}

// Initial render
renderProjects();

// ─── FAQ ACCORDION ─────────────────────────
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    // Close all
    faqItems.forEach((i) => {
      i.classList.remove("open");
      i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });
    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
    }
  });
});

// ─── EMAILJS INIT ──────────────────────────
(function () {
  emailjs.init("KP5mi6DBn6TsWj0jp");
})();

// ─── TOAST SYSTEM ──────────────────────────
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "success" ? "✓" : "✕"}</span>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add("show"));
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

// ─── CONTACT FORM WITH EMAILJS ─────────────
const form = document.getElementById("contactForm");

function showError(fieldId, errorId, msg) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  if (field) field.classList.add("error");
  if (error) error.textContent = msg;
}
function clearError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  if (field) field.classList.remove("error");
  if (error) error.textContent = "";
}

["name", "email", "message"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("input", () => clearError(id, id + "Error"));
  }
});

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const projectTypeEl = document.getElementById("projectType");
    const projectType = projectTypeEl ? projectTypeEl.value : "";

    clearError("name", "nameError");
    clearError("email", "emailError");
    clearError("message", "messageError");
    if (projectTypeEl) clearError("projectType", "projectTypeError");

    if (!name || name.length < 2) {
      showError(
        "name",
        "nameError",
        "Please enter your name (at least 2 characters)."
      );
      valid = false;
    }
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailReg.test(email)) {
      showError("email", "emailError", "Please enter a valid email address.");
      valid = false;
    }
    if (projectTypeEl && !projectType) {
      showError(
        "projectType",
        "projectTypeError",
        "Please select a project type."
      );
      valid = false;
    }
    if (!message || message.length < 10) {
      showError(
        "message",
        "messageError",
        "Please describe your project (at least 10 characters)."
      );
      valid = false;
    }

    if (!valid) return;

    const btn = document.getElementById("submitBtn");
    const btnText = btn.querySelector(".btn-text");
    const btnArrow = btn.querySelector(".btn-arrow");
    const btnSpinner = btn.querySelector(".btn-spinner");

    btn.disabled = true;
    btnText.hidden = true;
    btnArrow.hidden = true;
    btnSpinner.classList.remove("hidden");

    const resetBtn = () => {
      btn.disabled = false;
      btnText.hidden = false;
      btnArrow.hidden = false;
      btnSpinner.classList.add("hidden");
    };

    try {
      await emailjs.sendForm(
        "service_exs1rr8",
        "template_l0hziec",
        form,
        "KP5mi6DBn6TsWj0jp"
      );
      showToast("Message sent! I'll get back to you soon. 🚀", "success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      showToast(
        "Failed to send message. Please try WhatsApp or email me directly.",
        "error"
      );
    } finally {
      resetBtn();
    }
  });
}

// ─── ACTIVE NAV HIGHLIGHT ──────────────────
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const navObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove("active"));
        const match = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (match) match.classList.add("active");
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);
sections.forEach((s) => navObs.observe(s));
