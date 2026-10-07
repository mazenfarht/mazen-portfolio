"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [
              ...entry.target.parentElement!.querySelectorAll(".reveal"),
            ];
            const idx = siblings.indexOf(entry.target as HTMLElement);
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
    return () => revealObs.disconnect();
  }, []);

  return null;
}
