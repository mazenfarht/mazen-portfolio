"use client";

import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS_PER_LOAD = 5;

const allProjects = [
  // =========================================================
  // 01 — AAFCE
  // =========================================================
  {
    country: "saudi",
    type: "website",
    countryBadge: "🇸🇦 Saudi Arabia",
    typeBadge: "Corporate Website",
    roleBadge: "My Role: Frontend Development",
    num: "01",
    title: (
      <>
        AAFCE
        <br />
        Construction
      </>
    ),
    desc: "Corporate website for Abdullah Abdul Majeed Al-Faraj Contracting Establishment, a Saudi construction and MEP contractor serving industrial, energy, infrastructure, healthcare, and commercial sectors.",
    features: [
      "🏗️ Corporate construction website",
      "⚙️ MEP & engineering services showcase",
      "🏢 Industry sectors presentation",
      "🇸🇦 Built for the Saudi market",
    ],
    techLine: "WordPress · HTML/CSS · JavaScript · Responsive",
    links: (
      <a
        href="https://aafce.alfarajgroupsa.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "AAFCE.png",
    imageAlt: "AAFCE · Construction",
    imageLabel: "AAFCE · Construction",
    reverse: false,
  },

  // =========================================================
  // 02 — MERIDIAN
  // =========================================================
  {
    country: "egypt",
    type: "website",
    countryBadge: "",
    typeBadge: "Real Estate Website",
    roleBadge: "My Role: Full Design & Development",
    num: "02",
    title: (
      <>
        MERIDIAN
        <br />
        Real Estate Platform
      </>
    ),
    desc: "A premium real estate website with a cinematic visual experience — immersive property showcases, scroll-driven interactions, and a premium design that positions the brand at the top of its market.",
    features: [
      "🏛️ Premium editorial design system",
      "🖱️ Interactive property showcase & gallery",
      "✨ Smooth animations & cinematic transitions",
      "📱 Fully responsive on all devices",
    ],
    techLine: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
    links: (
      <>
        <a
          href="https://meridian-real-estate-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Live Demo →
        </a>
        <a
          href="https://github.com/mazenfarht/MERIDIAN-Architectural-Real-Estate"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          GitHub
        </a>
      </>
    ),
    imageSrc: "real-estate.png",
    imageAlt: "MERIDIAN Real Estate",
    imageLabel: "MERIDIAN · Real Estate",
    reverse: true,
  },

  // =========================================================
  // 03 — CLINIC
  // =========================================================
  {
    country: "egypt",
    type: "dashboard",
    countryBadge: "🇪🇬 Egypt",
    typeBadge: "Business System",
    roleBadge: "My Role: Full Stack Development",
    num: "03",
    title: (
      <>
        Clinic Management
        <br />
        System
      </>
    ),
    desc: "Complete clinic management system with role-based dashboards for doctors and staff, real-time patient queue management, appointment booking, and analytics — built to replace manual processes with a reliable digital system.",
    features: [
      "👨‍⚕️ Separate dashboards for doctors & staff",
      "📋 Real-time queue & appointment management",
      "🔐 Secure login with role-based access control",
      "📊 Analytics dashboard with search & filters",
    ],
    techLine: "Next.js · TypeScript · Node.js · PostgreSQL · JWT",
    links: (
      <>
        <a
          href="https://github.com/mazenfarht/Clinic-System"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          GitHub →
        </a>
        <span className="deployment-badge">🚧 Deployment in Progress</span>
      </>
    ),
    imageSrc: "Doc.jpeg",
    imageAlt: "Clinic Management System",
    imageLabel: "Clinic Management System",
    reverse: false,
  },

  // =========================================================
  // 04 — PAPER MIDDLE EAST
  // =========================================================
  {
    country: "saudi",
    type: "website",
    countryBadge: "🇸🇦 Saudi Arabia",
    typeBadge: "Exhibition Website",
    roleBadge: "My Role: Frontend Development",
    num: "04",
    title: (
      <>
        Paper Middle East
        <br />
        Exhibition
      </>
    ),
    desc: "Official exhibition website for Paper Middle East, presenting the event, exhibitors, industry information, and visitor experience for the paper and related industries.",
    features: [
      "🏢 Official exhibition website",
      "🌍 Industry & exhibitor showcase",
      "📋 Event & visitor information",
      "📱 Fully responsive across devices",
    ],
    techLine: "WordPress · HTML/CSS · JavaScript · Responsive",
    links: (
      <a
        href="https://paperme-saudi.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "Paper.png",
    imageAlt: "Paper Middle East",
    imageLabel: "Paper Middle East · Exhibition",
    reverse: true,
  },

  // =========================================================
  // 05 — NEXCART
  // =========================================================
  {
    country: "egypt",
    type: "ecommerce",
    countryBadge: "🇪🇬 Egypt",
    typeBadge: "E-Commerce Platform",
    roleBadge: "My Role: Full Development",
    num: "05",
    title: (
      <>
        NexCart
        <br />
        E-Commerce
      </>
    ),
    desc: "A complete e-commerce platform with product catalog, shopping cart, wishlist, Stripe payments, and user authentication — built to give businesses a production-ready online store with a smooth customer experience.",
    features: [
      "🛒 Full shopping cart & wishlist system",
      "💳 Stripe payment integration",
      "🔐 User authentication & account management",
      "📱 Mobile-first responsive design",
    ],
    techLine: "React.js · Bootstrap · Stripe API · REST APIs",
    links: (
      <>
        <a
          href="https://nexcart-ecommerce-beta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Live Demo →
        </a>
        <a
          href="https://github.com/mazenfarht/nexcart-ecommerce"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          GitHub
        </a>
      </>
    ),
    imageSrc: "H.png",
    imageAlt: "NexCart E-Commerce",
    imageLabel: "NexCart · E-Commerce",
    reverse: false,
  },

  // =========================================================
  // 06 — PRINT2PACK
  // =========================================================
  {
    country: "egypt",
    type: "website",
    countryBadge: "🇪🇬 Egypt",
    typeBadge: "Exhibition Website",
    roleBadge: "My Role: Frontend Development",
    num: "06",
    title: (
      <>
        Print2Pack
        <br />
        Exhibition
      </>
    ),
    desc: "Official exhibition website for Print2Pack, presenting the event, exhibitors, industry information, and visitor experience for the printing and packaging industry.",
    features: [
      "🏢 Official exhibition website",
      "🌍 Industry & exhibitor showcase",
      "📋 Event & visitor information",
      "📱 Fully responsive across devices",
    ],
    techLine: "WordPress · HTML/CSS · JavaScript · Responsive",
    links: (
      <a
        href="https://print2packexpo.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "Print2Pack.png",
    imageAlt: "Print2Pack Exhibition",
    imageLabel: "Print2Pack · Exhibition",
    reverse: true,
  },

  // =========================================================
  // 07 — MOROCCO STITCH
  // =========================================================
  {
    country: "egypt",
    type: "website",
    countryBadge: "🇪🇬 Egypt",
    typeBadge: "Corporate Website",
    roleBadge: "My Role: Full Frontend",
    num: "07",
    title: (
      <>
        Morocco Stitch
        <br />
        &amp; Tex EXPO
      </>
    ),
    desc: "Official website for an international textile & garment exhibition — built for a real client at Anzemah. The site serves as the primary digital presence for the expo, featuring exhibitor showcases, event information, and a registration system.",
    features: [
      "🏢 Official exhibition digital presence",
      "📋 Exhibitor showcase & registration",
      "📱 Fully responsive across all devices",
      "🌍 International client — Morocco & Africa market",
    ],
    techLine: "WordPress · HTML/CSS · JavaScript · Responsive",
    links: (
      <a
        href="https://moroccostitchandtex.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "Morocco Stitch.png",
    imageAlt: "Morocco Stitch & Tex EXPO",
    imageLabel: "Morocco Stitch & Tex EXPO",
    reverse: false,
  },

  // =========================================================
  // 08 — ALFARAJ GROUP
  // =========================================================
  {
    country: "saudi",
    type: "website",
    countryBadge: "🇸🇦 Saudi Arabia",
    typeBadge: "Corporate Website",
    roleBadge: "My Role: Frontend Development",
    num: "08",
    title: (
      <>
        ALFARAJ
        <br />
        GROUP
      </>
    ),
    desc: "Corporate website for Alfaraj Group, a Saudi-owned business group operating across contracting, engineering, manufacturing, and integrated MEP solutions.",
    features: [
      "🏢 Multi-company corporate presence",
      "⚙️ Engineering & contracting services",
      "🏗️ Company portfolio presentation",
      "🇸🇦 Saudi business-focused website",
    ],
    techLine: "WordPress · HTML/CSS · JavaScript · Responsive",
    links: (
      <a
        href="https://alfarajgroupsa.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "ALFARAJ.png",
    imageAlt: "ALFARAJ GROUP",
    imageLabel: "ALFARAJ GROUP",
    reverse: true,
  },

  // =========================================================
  // 09 — LAMPA
  // =========================================================
  {
    country: "egypt",
    type: "ecommerce",
    countryBadge: "",
    typeBadge: "E-Commerce Platform",
    roleBadge: "My Role: Full Development",
    num: "09",
    title: (
      <>
        Lampa
        <br />
        E-Commerce
      </>
    ),
    desc: "Amazon-inspired e-commerce platform with a complete product catalog, shopping cart, checkout flow, AI chatbot for customer support, and a mobile-first UI — built to deliver a full online shopping experience.",
    features: [
      "🛍️ Full product catalog & cart system",
      "🤖 AI chatbot for customer queries",
      "📱 Mobile-first, fully responsive",
      "⚡ Fast loading & smooth checkout",
    ],
    techLine: "React.js · Node.js · AI Chatbot · REST APIs",
    links: (
      <>
        <a
          href="https://lampa-e-commerce.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Live Demo →
        </a>
        <a
          href="https://github.com/mazenfarht/Lampa-E-commerce"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          GitHub
        </a>
      </>
    ),
    imageSrc: "l.png",
    imageAlt: "Lampa E-Commerce",
    imageLabel: "Lampa · E-Commerce",
    reverse: false,
  },

  // =========================================================
  // 10 — AFROPLAST
  // =========================================================
  {
    country: "egypt",
    type: "website",
    countryBadge: "🇪🇬 Egypt",
    typeBadge: "Exhibition Website",
    roleBadge: "My Role: Frontend Development",
    num: "10",
    title: (
      <>
        AFROPLAST
        <br />
        Exhibition
      </>
    ),
    desc: "Official digital platform for AFROPLAST, a major exhibition focused on plastics, rubber, and non-woven technologies in Egypt and the MENA region. The website presents the event, exhibitors, visitor information, and registration experience.",
    features: [
      "🏢 Official exhibition website",
      "🌍 Exhibitor & industry showcase",
      "📋 Visitor registration experience",
      "📱 Fully responsive across devices",
    ],
    techLine: "WordPress · HTML/CSS · JavaScript · Responsive",
    links: (
      <a
        href="https://afroplast.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "Afro.png",
    imageAlt: "AFROPLAST · Exhibition",
    imageLabel: "AFROPLAST · Exhibition",
    reverse: true,
  },

  // =========================================================
  // 11 — NEUROTECH
  // =========================================================
  {
    country: "egypt",
    type: "website",
    countryBadge: "🇪🇬 Egypt",
    typeBadge: "EdTech Platform",
    roleBadge: "My Role: Full Development",
    num: "11",
    title: (
      <>
        NeuroTech
        <br />
        AI &amp; Data Platform
      </>
    ),
    desc: "Arabic learning platform focused on Artificial Intelligence, Data Science, and Data Analysis. The platform combines structured learning paths, practical projects, mentorship, and career-focused features through the EliteBridge system.",
    features: [
      "🤖 AI & Data learning platform",
      "📚 Structured educational roadmaps",
      "💻 Practical projects & courses",
      "🚀 EliteBridge career & hiring system",
    ],
    techLine: "Web Platform · AI · Data Science · EdTech",
    links: (
      <a
        href="https://neurotecheg.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "NeuroTech.png",
    imageAlt: "NeuroTech · AI Data",
    imageLabel: "NeuroTech · AI & Data",
    reverse: false,
  },

  // =========================================================
  // 12 — SWISS SCHOOL
  // =========================================================
  {
    country: "switzerland",
    type: "website",
    countryBadge: "🇨🇭 Switzerland",
    typeBadge: "Education Website",
    roleBadge: "My Role: Frontend Development",
    num: "12",
    title: (
      <>
        Swiss School
        <br />
        of Management
      </>
    ),
    desc: "Professional website for the Swiss School of Management, an international business school offering BBA, MBA, EMBA, and DBA programs across multiple international locations.",
    features: [
      "🎓 Academic programs showcase",
      "🌍 International campus network",
      "📚 Program & admissions information",
      "📱 Responsive educational website",
    ],
    techLine: "WordPress · HTML/CSS · JavaScript · Responsive",
    links: (
      <a
        href="https://ssm.swiss/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "swiss.png",
    imageAlt: "Swiss School of Management",
    imageLabel: "Swiss School of Management",
    reverse: true,
  },

  // =========================================================
  // 13 — CAFE LANDING PAGE
  // =========================================================
  {
    country: "egypt",
    type: "landing",
    countryBadge: "🇪🇬 Egypt",
    typeBadge: "Landing Page",
    roleBadge: "My Role: Full Development",
    num: "13",
    title: (
      <>
        Cafe
        <br />
        Landing Page
      </>
    ),
    desc: "Modern landing page for a cafe business, designed to present the brand, menu, services, and customer experience through a responsive and engaging web presence.",
    features: [
      "☕ Modern cafe brand presentation",
      "📋 Menu & services showcase",
      "📱 Fully responsive layout",
      "✨ Interactive & engaging user experience",
    ],
    techLine: "HTML5 · CSS3 · JavaScript · Responsive",
    links: (
      <>
        {/* Replace this URL with your actual Cafe project URL */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Live Demo →
        </a>
      </>
    ),
    imageSrc: "cafe.png",
    imageAlt: "Cafe Landing Page",
    imageLabel: "Cafe · Landing Page",
    reverse: false,
  },

  // =========================================================
  // 14 — DENTAL
  // =========================================================
  {
    country: "egypt",
    type: "landing",
    countryBadge: "🇪🇬 Egypt",
    typeBadge: "Landing Page",
    roleBadge: "My Role: Full Development",
    num: "14",
    title: (
      <>
        Dental Clinic
        <br />
        Landing Page
      </>
    ),
    desc: "Professional landing page for a dental clinic — featuring appointment booking, doctor profiles, service listings, patient testimonials, and a responsive layout optimized to convert website visitors into clinic patients.",
    features: [
      "📅 Online appointment booking form",
      "👨‍⚕️ Doctor profiles & specialties",
      "⭐ Patient testimonials section",
      "📱 Mobile-first responsive layout",
    ],
    techLine: "HTML5 · CSS3 · JavaScript",
    links: (
      <>
        <a
          href="https://mazenfarht.github.io/Dental-Clinic/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Live Demo →
        </a>
        <a
          href="https://github.com/mazenfarht/DENTAL-Clinic.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          GitHub
        </a>
      </>
    ),
    imageSrc: "dental1.png",
    imageAlt: "Dental Clinic Landing Page",
    imageLabel: "Dental Clinic · Landing Page",
    reverse: true,
  },

  // =========================================================
  // 15 — EASTERN PETRA
  // =========================================================
  {
    country: "saudi",
    type: "website",
    countryBadge: "🇸🇦 Saudi Arabia",
    typeBadge: "Corporate Website",
    roleBadge: "My Role: Frontend Development",
    num: "15",
    title: (
      <>
        Eastern
        <br />
        Petra
      </>
    ),
    desc: "Corporate digital presence for Eastern Petra, part of the Alfaraj Group's portfolio of Saudi companies.",
    features: [
      "🏢 Corporate company website",
      "🇸🇦 Saudi business presence",
      "📱 Responsive web experience",
      "🔗 Integrated within Alfaraj Group ecosystem",
    ],
    techLine: "WordPress · HTML/CSS · JavaScript · Responsive",
    links: (
      <a
        href="https://easternpetra.host/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Live Site →
      </a>
    ),
    imageSrc: "Est.png",
    imageAlt: "EASTERN PETRA",
    imageLabel: "EASTERN PETRA",
    reverse: false,
  },
];

export default function Projects() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD);

  const filteredProjects = allProjects.filter((p) => {
    if (currentFilter === "all") return true;
    return p.country === currentFilter || p.type === currentFilter;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const remaining = filteredProjects.length - visibleCount;
  const countToShow = Math.min(PROJECTS_PER_LOAD, remaining);

  const handleFilter = (filter: string) => {
    setCurrentFilter(filter);
    setVisibleCount(PROJECTS_PER_LOAD);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_LOAD);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navbar = document.getElementById("navbar");
      const offset = navbar ? navbar.offsetHeight : 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const filters = [
    { key: "all", label: "All" },
    { key: "saudi", label: "🇸🇦 Saudi Arabia" },
    { key: "egypt", label: "🇪🇬 Egypt" },
    { key: "ecommerce", label: "E-Commerce" },
    { key: "website", label: "Websites" },
    { key: "dashboard", label: "Dashboards" },
    { key: "landing", label: "Landing Pages" },
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-label reveal">02 — Projects</div>
        <h2 className="section-title reveal">
          Real Work.
          <br />
          <span className="accent">Real Results.</span>
        </h2>
        <p className="section-sub reveal">
          Business websites, e-commerce platforms, and systems — built for real
          clients
        </p>

        <div className="project-filters reveal">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${
                currentFilter === f.key ? " active" : ""
              }`}
              data-filter={f.key}
              onClick={() => handleFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-featured" id="projectsGrid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.num} {...project} />
          ))}
        </div>

        {remaining > 0 && (
          <div className="projects-load-more reveal">
            <button
              id="loadMoreProjects"
              className="load-more-btn"
              onClick={handleLoadMore}
            >
              Load More Projects
              <span className="load-more-count">
                View {countToShow} more{" "}
                {countToShow === 1 ? "project" : "projects"}
              </span>
              <span className="load-more-arrow">↓</span>
            </button>
          </div>
        )}

        <div className="projects-view-all reveal">
          <p className="pva-note">
            More projects including Saudi work, additional Egyptian projects,
            and WordPress websites — available on request.
          </p>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
