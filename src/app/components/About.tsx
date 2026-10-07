export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-label reveal">05 — About</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title reveal">
              Building websites
              <br />
              <span className="accent">for real businesses.</span>
            </h2>
            <p className="reveal">
              I&apos;m <strong>Mazen Mostafa</strong>, a professional web
              developer based in Cairo, Egypt. I specialize in building business
              websites, e-commerce platforms, dashboards, and web systems for
              businesses — with a focus on delivering professional,
              production-ready results that actually work for your business.
            </p>
            <p className="reveal">
              I&apos;ve worked on real client projects in Egypt, built websites
              through Anzemah — a web development company serving regional
              clients — and have experience delivering across different
              industries including healthcare, retail, real estate, and
              exhibitions. I&apos;ve handled everything from WordPress websites
              to custom-built React and Next.js systems.
            </p>
            <p className="reveal">
              My approach is simple: understand what your business needs, build
              it properly, and deliver it on time. Whether you&apos;re a small
              business needing your first website or a company that needs a
              custom system, I focus on outcomes — not just on writing code.
            </p>
            <div className="about-tech-line reveal">
              React.js · Next.js · TypeScript · WordPress · JavaScript ·
              Tailwind CSS · REST APIs
            </div>
            <div className="about-links reveal">
              <a
                href="https://linkedin.com/in/mazen-mostafa-353102225"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/mazenfarht"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="about-visual reveal">
            <div className="code-card">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-filename">mazen.js</span>
              </div>
              <pre className="code-body">
                <code>
                  <span className="c-keyword">const</span>{" "}
                  <span className="c-var">mazen</span> {`= {`}
                  {"\n"}
                  {"  "}
                  <span className="c-prop">name</span>:{" "}
                  <span className="c-str">&quot;Mazen Mostafa&quot;</span>,
                  {"\n"}
                  {"  "}
                  <span className="c-prop">role</span>:{" "}
                  <span className="c-str">&quot;Web Developer&quot;</span>,
                  {"\n"}
                  {"  "}
                  <span className="c-prop">markets</span>: [{"\n"}
                  {"    "}
                  <span className="c-str">&quot;Egypt 🇪🇬&quot;</span>,{" "}
                  <span className="c-str">&quot;Saudi Arabia 🇸🇦&quot;</span>
                  {"\n"}
                  {"  "}],{"\n"}
                  {"  "}
                  <span className="c-prop">builds</span>: [{"\n"}
                  {"    "}
                  <span className="c-str">&quot;Business Websites&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="c-str">&quot;E-Commerce&quot;</span>,{"\n"}
                  {"    "}
                  <span className="c-str">&quot;Dashboards&quot;</span>,{"\n"}
                  {"    "}
                  <span className="c-str">&quot;Web Systems&quot;</span>,{"\n"}
                  {"  "}],{"\n"}
                  {"  "}
                  <span className="c-prop">focus</span>:{" "}
                  <span className="c-str">&quot;Business outcomes&quot;</span>,
                  {"\n"}
                  {"  "}
                  <span className="c-prop">available</span>:{" "}
                  <span className="c-bool">true</span>,{"\n"}
                  {`};`}
                </code>
              </pre>
            </div>
            <div className="about-badge">
              <span className="badge-icon">💼</span>
              <div>
                <div className="badge-title">Anzemah — Web Development</div>
                <div className="badge-sub">
                  Frontend Developer · Real Client Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
