"use client";
import { useEffect, useRef, useState } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navAnchors = document.querySelectorAll(".nav-links a");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => a.classList.remove("active"));
            const match = document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );
            if (match) {
              match.classList.add("active");
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((section) => obs.observe(section));
    return () => {
      obs.disconnect();
    };
  }, []);
  const closeMenu = () => {
    setMenuOpen(false);
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
      closeMenu();
    }
  };
  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
      {" "}
      <div className="nav-inner">
        {" "}
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => handleAnchorClick(e, "#hero")}
        >
          {" "}
          <span className="accent">&lt;</span> MMS{" "}
          <span className="accent">/&gt;</span>{" "}
        </a>{" "}
        <ul
          className={`nav-links${menuOpen ? " open" : ""}`}
          id="navLinks"
          ref={navLinksRef}
        >
          {" "}
          <li>
            {" "}
            <a
              href="#services"
              onClick={(e) => handleAnchorClick(e, "#services")}
            >
              {" "}
              Services{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#case-study"
              onClick={(e) => handleAnchorClick(e, "#case-study")}
            >
              {" "}
              Case Study{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#projects"
              onClick={(e) => handleAnchorClick(e, "#projects")}
            >
              {" "}
              Projects{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a href="#about" onClick={(e) => handleAnchorClick(e, "#about")}>
              {" "}
              About{" "}
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
            >
              {" "}
              Contact{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
        <div className="nav-right">
          {" "}
          <a
            href="#contact"
            className="btn btn-primary btn-sm nav-cta-desktop"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            {" "}
            Start a Project →{" "}
          </a>{" "}
          <button
            className={`hamburger${menuOpen ? " active" : ""}`}
            id="hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {" "}
            <span></span> <span></span> <span></span>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}
