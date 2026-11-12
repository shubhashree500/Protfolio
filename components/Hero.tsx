export default function Hero() {
  return (
    <>
      <section className="c s7 hc">
        <div className="st"><span className="dot" />Available for new projects</div>
        <h1>I Build Software That Helps Businesses Work Smarter.</h1>
        <p className="sub">Custom web apps, mobile apps, admin dashboards and business management systems, designed around your workflow.</p>
        <div className="cta">
          <a className="btn p" href="#contact">Start a Project</a>
          <a className="btn" href="#work">View My Work</a>
        </div>
        <p className="micro">Web Apps • Mobile Apps • Business Systems • APIs</p>
      </section>
      <section className="s5 art">
        <div className="av" role="img" aria-label="Illustration of Shree, a developer in a green hoodie and glasses, working on her laptop inside a green circle">
          <svg viewBox="0 0 480 470" aria-hidden="true"><defs><radialGradient id="cg" cx=".35" cy=".28" r=".9"><stop offset="0" stopColor="#5fc79a"/><stop offset=".55" stopColor="#2d7a66"/><stop offset="1" stopColor="#0f352f"/></radialGradient></defs>
<circle cx="240" cy="270" r="208" fill="none" stroke="#84d4b4" strokeOpacity=".28" strokeDasharray="3 10"/>
<circle cx="240" cy="270" r="190" fill="url(#cg)"/>
<ellipse cx="240" cy="426" rx="140" ry="9" fill="#000" opacity=".4"/>
<image className="me" href="/me.webp" x="90" y="153" width="300" height="271"/>
<path d="M92 120l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fff" opacity=".85"/><path d="M400 150l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#fff" opacity=".7"/></svg>
          <div className="bub" aria-label="hey, I am Shree">
            <span><i>const</i> hi<em>: string</em> = <u>&quot;hey, I am Shree&quot;</u>;</span>
          </div>
          <div className="bub2">Got an idea? Let&apos;s turn it into software.</div>
          <div className="chip" style={{ left: "-2%", bottom: "26%" }}>React</div>
          <div className="chip" style={{ right: "-2%", bottom: "14%", animationDelay: "-2s" }}>Smart automation</div>
          <div className="chip" style={{ left: "8%", bottom: "6%", animationDelay: "-3s" }}>Mobile apps</div>
        </div>
      </section>
    </>
  );
}
