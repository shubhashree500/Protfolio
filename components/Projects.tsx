"use client";
import { useRef, useState } from "react";
import { projects, Project } from "@/data/site";

export default function Projects() {
  const ref = useRef<HTMLDialogElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Web Application", "Mobile App", "Web & SEO", "Custom Dashboard"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const openModal = (p: Project) => {
    setSelectedProject(p);
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  return (
    <>
      <div className="s12 work-header" id="work">
        <div className="section-title-wrap">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Selected Work & Case Studies</h2>
          <p className="section-sub">
            Real-world software built for educational institutions, recruitment teams, and businesses.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="s12 bento project-grid" style={{ padding: 0 }}>
        {filteredProjects.map((p) => (
          <article className="c pj s6 project-card" key={p.title}>
            <div className="card-top-bar">
              <div className="term-dots">
                <span className="dot-mini red" />
                <span className="dot-mini yellow" />
                <span className="dot-mini green" />
              </div>
              <div className="card-badges">
                <span className="cat-pill">{p.category}</span>
                {p.badge && <span className="tag hl">{p.badge}</span>}
              </div>
            </div>

            <h3 className="project-heading">{p.title}</h3>

            {p.highlight && (
              <div className="project-highlight">
                <span className="highlight-icon">⚡</span>
                <span>{p.highlight}</span>
              </div>
            )}

            <p className="project-desc">{p.desc}</p>

            <div className="tags project-tags">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>

            <div className="project-card-footer">
              <button className="case-study-btn" onClick={() => openModal(p)}>
                <span>Explore Case Study</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Modal Dialog */}
      <dialog
        ref={ref}
        aria-labelledby="dt"
        className="case-study-dialog"
        onClick={(e) => { if (e.target === ref.current) closeModal(); }}
      >
        <button className="ib x close-btn" aria-label="Close case study" onClick={closeModal}>
          ✕
        </button>

        {selectedProject && (
          <div className="mb case-study-content">
            <div className="modal-header">
              <div className="modal-meta">
                <span className="cat-pill">{selectedProject.category}</span>
                {selectedProject.badge && <span className="tag hl">{selectedProject.badge}</span>}
              </div>
              <h2 id="dt" className="modal-title">{selectedProject.title}</h2>
              {selectedProject.highlight && (
                <p className="modal-highlight">⚡ {selectedProject.highlight}</p>
              )}
              <div className="tags" style={{ marginTop: 10 }}>
                {selectedProject.tech.map((t) => (
                  <span className="tag hl" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="modal-body-grid">
              <div className="modal-card">
                <div className="modal-card-label">
                  <span className="icon-pulse problem-dot" />
                  <h4>The Problem</h4>
                </div>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="modal-card highlight-card">
                <div className="modal-card-label">
                  <span className="icon-pulse solution-dot" />
                  <h4>The Solution</h4>
                </div>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="modal-card full-span">
                <div className="modal-card-label">
                  <span className="icon-pulse feature-dot" />
                  <h4>Key Architectural Features</h4>
                </div>
                <ul className="feature-list">
                  {selectedProject.features.map((f) => (
                    <li key={f}>
                      <span className="check-icon">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-card full-span outcome-card">
                <div className="modal-card-label">
                  <span className="icon-pulse outcome-dot" />
                  <h4>Business Impact & Outcome</h4>
                </div>
                <p>{selectedProject.outcome}</p>
              </div>
            </div>

            <div className="modal-footer-cta">
              <p className="note">Interested in a similar system for your business?</p>
              <a
                href="#contact"
                className="btn p"
                onClick={closeModal}
              >
                Discuss This Architecture →
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
