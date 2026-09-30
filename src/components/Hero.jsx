import { ArrowDown, ArrowDownToLine, BriefcaseBusiness, GitBranch, MapPin } from 'lucide-react'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="section-wrap hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> BCA student · building for the web</p>
          <h1 className="hero-title">Hi, I&apos;m <span>Avanish Rai</span></h1>
          <p className="hero-role">Full Stack Developer in the Making</p>
          <p className="hero-description">I&apos;m a BCA student passionate about web development, React, and backend engineering. I enjoy building practical applications and learning how each piece of a product works together.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View Projects <ArrowDown size={16} /></a>
            <button className="button button-secondary" onClick={() => window.print()} type="button">Download Resume <ArrowDownToLine size={16} /></button>
            <div className="hero-socials">
              <a aria-label="Avanish Rai on GitHub" className="social-link" href="https://github.com/avanishrai19" rel="noreferrer" target="_blank"><GitBranch size={18} /></a>
              <a aria-label="Open LinkedIn" className="social-link" href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><BriefcaseBusiness size={18} /></a>
            </div>
          </div>
          <p className="hero-location"><MapPin size={15} /> Dehradun, Uttarakhand, India</p>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src="/images/avanish-rai.png" alt="Avanish Rai" fetchPriority="high" />
            <div className="portrait-caption">
              <p>Learning by building</p>
              <span>React · Flask · exploring MERN</span>
            </div>
          </div>
          <div className="portrait-note">
            <p>Currently</p>
            <span>BCA · Semester 5</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
