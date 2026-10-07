"use client";

import { useEffect, useRef } from "react";

interface ProjectCardProps {
  country: string;
  type: string;
  countryBadge: string;
  typeBadge: string;
  roleBadge: string;
  num: string;
  title: React.ReactNode;
  desc: string;
  features: string[];
  techLine: string;
  links: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  reverse?: boolean;
}

export default function ProjectCard({
  country,
  type,
  countryBadge,
  typeBadge,
  roleBadge,
  num,
  title,
  desc,
  features,
  techLine,
  links,
  imageSrc,
  imageAlt,
  imageLabel,
  reverse = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add("visible");
          observer.unobserve(card);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="project-card featured reveal"
      data-country={country}
      data-type={type}
    >
      <div className={`project-card-inner${reverse ? " reverse" : ""}`}>
        <div className="project-info">
          <div className="project-meta-row">
            {countryBadge && (
              <span className="project-country-badge">{countryBadge}</span>
            )}

            <span className="project-type-badge">{typeBadge}</span>

            <span className="project-role-badge">{roleBadge}</span>
          </div>

          <div className="project-num">{num}</div>

          <h3 className="project-title">{title}</h3>

          <p className="project-desc">{desc}</p>

          <ul className="project-features">
            {features.map((feature, index) => (
              <li key={`${num}-feature-${index}`}>{feature}</li>
            ))}
          </ul>

          <div className="project-tech-line">{techLine}</div>

          <div className="project-links">{links}</div>
        </div>

        <div className="project-visual">
          <div className="project-img-wrap">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="project-img"
              loading="lazy"
            />

            <div className="project-img-overlay">
              <span className="project-img-label">{imageLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
