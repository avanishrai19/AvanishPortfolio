import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'

function Education() {
  return (
    <section className="section-space section-border education-section" id="education">
      <div className="section-wrap education-layout">
        <div><p className="eyebrow section-eyebrow">04 / EDUCATION</p><h2 className="section-title">Learning the foundations.</h2></div>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.institution}>
              <div className="education-detail">
                <span className="education-icon"><GraduationCap size={20} /></span><div><h3>{item.degree}</h3><p>{item.institution}</p><p className="education-status">Currently in {item.status}</p></div>
              </div>
              <span className="education-period">{item.period}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
