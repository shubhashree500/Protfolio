"use client";
import { useState, type FormEvent } from "react";
import { contact } from "@/data/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastBody, setLastBody] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const f = Object.fromEntries(new FormData(formElement)) as Record<string, string>;

    const subject = `Project Enquiry: ${f.type || "Custom Software"} - ${f.name}`;
    const body = `Hi Shubhashree,\n\nI would like to discuss a project enquiry with you:\n\n• Name: ${f.name}\n• Email: ${f.email}\n• Phone / WhatsApp: ${f.phone || "Not provided"}\n• Company / Organization: ${f.company || "Not provided"}\n• What I want to build: ${f.type}\n• Estimated Budget: ${f.budget}\n\nProject Details:\n${f.msg || "Let's discuss requirements."}\n\nLooking forward to hearing from you!`;

    setLastBody(body);
    setSubmitted(true);

    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const copyDetails = async () => {
    if (lastBody) {
      try {
        await navigator.clipboard.writeText(lastBody);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <section className="c s12 contact-section" id="contact">
      <div className="section-title-wrap" style={{ marginBottom: 28 }}>
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">Have a Software Idea? Let&apos;s Build It.</h2>
        <p className="section-sub">
          Tell me what you&apos;re trying to build, automate, or improve. I&apos;ll help you design and engineer the right software solution.
        </p>
      </div>

      <div className="ct">
        <div className="form-card">
          <form onSubmit={onSubmit}>
            <label className="f">
              <span className="f-label">Your Name <span className="req">*</span></span>
              <input name="name" required autoComplete="name" placeholder="e.g. Rahul Sharma" />
            </label>

            <label className="f">
              <span className="f-label">Your Email <span className="req">*</span></span>
              <input name="email" type="email" required autoComplete="email" placeholder="e.g. rahul@company.com" />
            </label>

            <label className="f">
              <span className="f-label">Phone / WhatsApp Number</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="e.g. +91 98765 43210" />
            </label>

            <label className="f">
              <span className="f-label">Company / Institute Name</span>
              <input name="company" autoComplete="organization" placeholder="e.g. Apex Institute / TechCorp" />
            </label>

            <label className="f">
              <span className="f-label">What do you want to build?</span>
              <select name="type" defaultValue="Web application">
                {[
                  "Web application",
                  "Mobile application (React Native)",
                  "Admin dashboard / Internal tool",
                  "College / School Management System",
                  "Business Management System",
                  "API / Backend Architecture",
                  "Smart Automation",
                  "Not sure yet (Need Consultation)"
                ].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </label>

            <label className="f">
              <span className="f-label">Estimated Budget</span>
              <select name="budget" defaultValue="₹50,000 – ₹1,00,000">
                {[
                  "Under ₹50,000",
                  "₹50,000 – ₹1,00,000",
                  "₹1,00,000 – ₹3,00,000",
                  "₹3,00,000 – ₹5,00,000",
                  "Above ₹5,00,000",
                  "Flexible / Need quote"
                ].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </label>

            <label className="f full">
              <span className="f-label">Tell me about your project, workflow or problem to solve</span>
              <textarea
                name="msg"
                placeholder="Describe what you want the software to do, key features needed, and your expected timeline..."
                rows={4}
              />
            </label>

            <div className="f full form-actions">
              <button className="btn p submit-btn" type="submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span>Send Project Enquiry</span>
              </button>
            </div>
          </form>

          {submitted && (
            <div className="submission-notice" role="alert">
              <div className="notice-icon">✓</div>
              <div className="notice-text">
                <strong>Enquiry ready to send to {contact.email}!</strong>
                <p>
                  Your email client has been opened. If it did not open automatically,{" "}
                  <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Project Enquiry")}&body=${encodeURIComponent(lastBody)}`} className="notice-link">
                    click here to open email directly
                  </a>.
                </p>
                <button type="button" className="copy-btn" onClick={copyDetails}>
                  {copied ? "✓ Copied Details to Clipboard" : "📋 Copy Message Details"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Connect Direct Channels */}
        <div className="dir contact-sidebar">
          <div className="sidebar-intro">
            <span className="sidebar-badge">Direct Channels</span>
            <h3 className="sidebar-heading">Prefer instant communication?</h3>
            <p className="note">Reach out directly via WhatsApp, direct call, or email. Fast responses guaranteed.</p>
          </div>

          {/* WhatsApp Direct Link */}
          <a
            className="contact-card-btn whatsapp-card"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="channel-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">WhatsApp Me</span>
              <span className="channel-detail">Chat on WhatsApp</span>
              <span className="channel-hint">Tap to open direct chat →</span>
            </div>
          </a>

          {/* Email Direct Link */}
          <a
            className="contact-card-btn email-card"
            href={`mailto:${contact.email}?subject=Project%20Enquiry`}
          >
            <div className="channel-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">Email Me</span>
              <span className="channel-detail">{contact.email}</span>
              <span className="channel-hint">Send direct email →</span>
            </div>
          </a>

          {/* Schedule a Call Direct Link */}
          <a
            className="contact-card-btn call-card"
            href={contact.call}
          >
            <div className="channel-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">Schedule a Call</span>
              <span className="channel-detail">Direct Phone Call</span>
              <span className="channel-hint">Tap to call directly →</span>
            </div>
          </a>

          <div className="response-time-box">
            <span className="status-live-dot" />
            <div>
              <p className="response-title">Fast Response Guaranteed</p>
              <p className="note">Inquiries answered within 2–4 hours on business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
