import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import { contact, services, workflowSteps, techMatrix, clientSectors } from "@/data/site";

export default function Home() {
  return (
    <div className="w">
      {/* Top Navigation */}
      <header className="top">
        <a className="logo" href="#top">
          <span className="logo-text">Shree</span>
          <span className="logo-dot" />
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#tech">Tech</a>
          <a className="nav-link" href="#workflow">Process</a>
          <a className="btn p nav-cta" href="#contact">Start a Project</a>
        </nav>
      </header>

      {/* Main Bento Grid */}
      <main id="top" className="bento">
        {/* 1st Page Hero (Preserved with original layout & illustration) */}
        <Hero />

        {/* Selected Work Section (Creative Showcase & Case Studies) */}
        <Projects />

        {/* What I Build Section (Creative Services Bento Grid) */}
        <section className="c s12 services-section" id="services">
          <div className="section-title-wrap">
            <span className="section-badge">Core Capabilities</span>
            <h2 className="section-title">What I Build For Clients</h2>
            <p className="section-sub">
              Engineering full-cycle digital products that solve operational bottlenecks, replace spreadsheets, and scale businesses.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, idx) => (
              <div className="service-card" key={s.title}>
                <div className="service-header">
                  <span className="service-num">0{idx + 1}</span>
                  <span className="service-tech-pill">{s.techHighlight}</span>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-tagline">{s.tagline}</p>
                <p className="service-desc">{s.description}</p>
                
                <div className="service-deliverables">
                  <span className="deliv-title">Deliverables:</span>
                  <ul className="deliv-list">
                    {s.deliverables.map((d) => (
                      <li key={d}>
                        <span className="deliv-check">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech I Use Section (Structured Tech Stack with proficiency badges) */}
        <section className="c s12 tech-section" id="tech">
          <div className="section-title-wrap">
            <span className="section-badge">Modern Tech Stack</span>
            <h2 className="section-title">Technologies & Architecture</h2>
            <p className="section-sub">
              Battle-tested tools, frameworks, and database architectures chosen for speed, reliability, and maintainability.
            </p>
          </div>

          <div className="tech-grid">
            {techMatrix.map((matrix) => (
              <div className="tech-box" key={matrix.category}>
                <div className="tech-box-header">
                  <div className="tech-category-dot" />
                  <h3 className="tech-box-title">{matrix.category}</h3>
                </div>
                <div className="tech-items">
                  {matrix.items.map((item) => (
                    <div className="tech-pill-wrap" key={item.name}>
                      <span className="tech-pill-name">{item.name}</span>
                      <span className="tech-pill-level">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How I Work Section (Upgraded with Tech-Powered Workflow Steps) */}
        <section className="c s12 workflow-section" id="workflow">
          <div className="section-title-wrap">
            <span className="section-badge">Engineering Process</span>
            <h2 className="section-title">How I Work — Tech-Driven Development</h2>
            <p className="section-sub">
              A transparent, agile workflow combining modern tech stacks, rigorous testing, and continuous deployment.
            </p>
          </div>

          <div className="workflow-timeline">
            {workflowSteps.map((ws) => (
              <div className="workflow-card" key={ws.step}>
                <div className="workflow-card-top">
                  <span className="workflow-step-num">{ws.step}</span>
                  <div className="workflow-tech-tags">
                    {ws.tech.map((t) => (
                      <span className="tag hl" key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <h3 className="workflow-step-title">{ws.title}</h3>
                <p className="workflow-step-desc">{ws.desc}</p>

                <div className="workflow-outcome">
                  <span className="outcome-label">Key Deliverable:</span>
                  <span className="outcome-val">{ws.outcome}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Sectors Banner */}
          <div className="sectors-banner">
            <div className="sectors-header">
              <span className="sectors-title">Industries & Solutions I Engineer For:</span>
            </div>
            <div className="sectors-tags">
              {clientSectors.map((sector) => (
                <span className="sector-tag" key={sector}>
                  <span className="sector-dot" />
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Direct Channels */}
        <ContactForm />
      </main>

      {/* Footer with updated GitHub, LinkedIn, email, and WhatsApp */}
      <footer className="footer-wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="logo-text">Shree</span>
            <p className="footer-tagline">
              Building software that solves real business problems. Custom web apps, mobile apps, and business systems.
            </p>
            <div className="footer-contact-info">
              <a href={`mailto:${contact.email}`} className="footer-contact-link">
                ✉ {contact.email}
              </a>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <span className="footer-col-title">Navigation</span>
              <a href="#top">Home</a>
              <a href="#work">Selected Work</a>
              <a href="#services">What I Build</a>
              <a href="#tech">Tech Stack</a>
              <a href="#workflow">How I Work</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-col">
              <span className="footer-col-title">Connect & Profiles</span>
              {/* Requirement 5: GitHub and LinkedIn */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-footer-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub Profile</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-footer-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-footer-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Shubhashree (Shree). All rights reserved.</span>
          <a href="#top" className="back-to-top">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
