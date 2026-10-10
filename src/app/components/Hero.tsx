"use client";

import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
const phrases = [
  "Business Websites",
  "Corporate & Industrial Websites",
  "Website Redesign",
  "WordPress Websites",
  "Next.js Websites",
];

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing Effect
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const el = typedRef.current;

      if (!el) return;

      const current = phrases[phraseIndex];

      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
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

      timer = setTimeout(type, speed);
    }

    type();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Matrix Background Effect
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const cols = Math.floor(canvas.width / 18);
    const drops = Array(cols).fill(1);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";

    const interval = setInterval(() => {
      ctx.fillStyle = "rgba(10, 10, 12, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00e5a0";
      ctx.font = "12px Space Mono, monospace";

      drops.forEach((y, i) => {
        const c = chars[Math.floor(Math.random() * chars.length)];

        ctx.fillText(c, i * 18, y * 18);

        if (y * 18 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      });
    }, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <canvas id="matrixCanvas" ref={canvasRef}></canvas>

        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-tag reveal">
          <span className="dot"></span>
          Available for New Projects
        </div>

        <h1 className="hero-name reveal">
          <span className="line1">Mazen</span>

          <span className="line2">
            Mostafa<span className="accent">.</span>
          </span>
        </h1>

        <div className="hero-title reveal">
          <span className="typed-prefix">// </span>

          <span className="typed" id="typedText" ref={typedRef}></span>

          <span className="blink-cursor">_</span>
        </div>

        <p className="hero-desc reveal">
          I build websites that make businesses{" "}
          <strong>easier to understand, trust, and engage with online</strong>.
          Corporate, industrial and contracting websites for companies in Saudi
          Arabia and Egypt — clear, fast, and aligned with your business.
        </p>

        <div className="hero-ctas reveal">
          <a href="#case-study" className="btn btn-primary btn-lg">
            See the Al Faraj Case Study <span className="btn-arrow">→</span>
          </a>

          <a
            href="https://wa.me/201142330408?text=Hello%20Mazen%2C%20I%27d%20like%20a%20quick%20review%20of%20my%20company%20website%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Get a Free Website Review
          </a>

          <a
            href="https://wa.me/201142330408"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost flex items-center gap-2"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
        </div>

        <div className="hero-badges reveal">
          <span className="hero-badge">🌍 Egypt &amp; Saudi Arabia</span>

          <span className="hero-badge">🏢 Corporate Websites</span>

          <span className="hero-badge">🏗️ Industrial &amp; Contracting</span>

          <span className="hero-badge">⚡ WordPress &amp; Next.js</span>
        </div>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
