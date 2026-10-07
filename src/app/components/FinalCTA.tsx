export default function FinalCTA() {
  //   const handleAnchorClick = (
  //     e: React.MouseEvent<HTMLAnchorElement>,
  //     href: string
  //   ) => {
  //     const target = document.querySelector(href);
  //     if (target) {
  //       e.preventDefault();
  //       const navbar = document.getElementById("navbar");
  //       const offset = navbar ? navbar.offsetHeight : 70;
  //       const top = target.getBoundingClientRect().top + window.scrollY - offset;
  //       window.scrollTo({ top, behavior: "smooth" });
  //     }
  //   };

  return (
    <section className="section final-cta-section">
      <div className="container">
        <div className="final-cta-inner reveal">
          <div className="final-cta-label">Have a project in mind?</div>
          <h2 className="final-cta-heading">
            Let&apos;s build it
            <br />
            <span className="accent">for your business.</span>
          </h2>
          <p className="final-cta-desc">
            Tell me what you need and let&apos;s discuss the best solution for
            your business — whether it&apos;s a website, online store, or a
            complete web system.
          </p>
          <div className="final-cta-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a Project <span className="btn-arrow">→</span>
            </a>
            <a
              href="https://wa.me/201142330408"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-lg"
            >
              <i className="fab fa-whatsapp"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
