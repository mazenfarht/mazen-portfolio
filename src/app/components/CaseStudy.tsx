const WA_LINK =
  "https://wa.me/201142330408?text=Hello%20Mazen%2C%20I%27d%20like%20a%20similar%20structure%20for%20my%20company.%20My%20website%3A%20";

const sites = [
  {
    name: "AAFCE",
    note: "Construction & MEP contractor",
    img: "/AAFCE.png",
    href: "https://aafce.alfarajgroupsa.com/",
  },
  {
    name: "Eastern Petra",
    note: "Company website",
    img: "/Est.png",
    href: "https://easternpetra.host/",
  },
  {
    name: "Al Faraj Group",
    note: "Group corporate website",
    img: "/ALFARAJ.png",
    href: "https://alfarajgroupsa.com/",
  },
];

export default function CaseStudy() {
  return (
    <section className="section case-study" id="case-study">
      <div className="container">
        <div className="section-label reveal">Case Study</div>
        <h2 className="section-title reveal">
          Al Faraj Group
          <br />
          <span className="accent">3 Websites for a Saudi Group.</span>
        </h2>
        <p className="section-sub reveal">
          Contracting · MEP · Industrial — Saudi Arabia
        </p>

        <div className="cs-grid">
          <div className="cs-block reveal">
            <div className="cs-label">The Challenge</div>
            {/* TODO: replace with the real starting problem in your own words */}
            <p>
              A Saudi group operating across contracting, engineering,
              manufacturing and MEP needed each of its companies to have a
              clear, professional digital presence that explains its services
              and capabilities quickly.
            </p>
          </div>

          <div className="cs-block reveal">
            <div className="cs-label">What I Did</div>
            <p>
              I handled each website end to end: understanding the business,
              organizing services and content, UI/UX design, development,
              responsive implementation, performance, SEO basics and deployment.
            </p>
          </div>

          <div className="cs-block reveal">
            <div className="cs-label">Key Improvements</div>
            <ul className="cs-list">
              <li>Services and sectors organized in a clear structure</li>
              <li>Stronger presentation of services and projects</li>
              <li>Responsive, mobile-friendly experience</li>
              <li>Performance optimization and faster loading</li>
              <li>SEO basics</li>
            </ul>
          </div>

          <div className="cs-block reveal">
            <div className="cs-label">Result</div>
            <p>
              Delivered three websites for the group — Al Faraj Group, AAFCE and
              Eastern Petra. A fourth website (Performance Oasis) is currently
              in progress.
            </p>
          </div>
        </div>

        <div className="cs-sites">
          {sites.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-site reveal"
            >
              <img src={s.img} alt={s.name} loading="lazy" />
              <div className="cs-site-info">
                <strong>{s.name}</strong>
                <span>{s.note}</span>
                <span className="cs-link">Live Site →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="cs-cta reveal">
          <p>
            Have a company with many services or projects? Send me your website
            and I&apos;ll tell you how I would structure it.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Get a Similar Structure →
          </a>
        </div>
      </div>
    </section>
  );
}
