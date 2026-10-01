import { Award, ArrowUpRight } from 'lucide-react'

function Certificate() {
  return (
    <section className="section-space section-border" id="certificate">
      <div className="section-wrap certificate-layout">
        <div>
          <p className="eyebrow section-eyebrow">05 / CERTIFICATE</p>
          <h2 className="section-title">Learning beyond class.</h2>
        </div>
        <a
          className="certificate-card"
          href="/nd2_ns_nou25_cs23_265610052635_nou26_cs08-4.pdf"
          rel="noreferrer"
          target="_blank"
          aria-label="View IGNOU Web Technology certificate PDF"
        >
          <span className="certificate-icon">
            <Award size={21} />
          </span>
          <div className="certificate-copy">
            <p>Web Technology</p>
            <h3>Web Technology Certificate</h3>
            <span>IGNOU / SWAYAM</span>
          </div>
          <span className="certificate-status">View certificate</span>
          <ArrowUpRight aria-hidden="true" className="certificate-arrow" size={16} />
        </a>
      </div>
    </section>
  )
}

export default Certificate
