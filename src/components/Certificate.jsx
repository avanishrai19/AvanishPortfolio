import { Award, ArrowUpRight } from 'lucide-react'

function Certificate() {
  return (
    <section className="section-space section-border" id="certificate">
      <div className="section-wrap certificate-layout">
        <div>
          <p className="eyebrow section-eyebrow">05 / CERTIFICATE</p>
          <h2 className="section-title">Learning beyond class.</h2>
        </div>
        <article className="certificate-card">
          <span className="certificate-icon"><Award size={21} /></span>
          <div className="certificate-copy">
            <p>Web Technology</p>
            <h3>Web Technology Certificate</h3>
            <span>IGNOU / SWAYAM</span>
          </div>
          <span className="certificate-status">Certificate</span>
          <ArrowUpRight aria-hidden="true" className="certificate-arrow" size={16} />
        </article>
      </div>
    </section>
  )
}

export default Certificate
