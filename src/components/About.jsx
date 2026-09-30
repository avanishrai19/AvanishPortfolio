import { ArrowUpRight, Code2, GraduationCap, Layers3 } from 'lucide-react'

const highlights = [
  { icon: GraduationCap, label: 'Studying', value: 'BCA · 5th Semester' },
  { icon: Code2, label: 'Building with', value: 'React.js & Flask' },
  { icon: Layers3, label: 'Learning next', value: 'The MERN stack' },
]

function About() {
  return (
    <section className="section-space section-border" id="about">
      <div className="section-wrap about-layout">
        <div>
          <p className="eyebrow section-eyebrow">01 / ABOUT ME</p>
          <h2 className="section-title about-title">Curious about how the whole thing works.</h2>
        </div>
        <div>
          <p className="about-lead">I&apos;m pursuing a BCA at Guru Nanak College, Dehradun, and working toward becoming a full stack developer. I&apos;ve built projects with React.js and Flask, and I&apos;m currently learning the MERN stack.</p>
          <p className="about-detail">I like making practical applications that solve a clear problem, while getting more comfortable with the frontend, backend, and database choices behind them.</p>
          <div className="about-highlights">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div className="highlight-card" key={label}>
                <Icon className="highlight-icon" size={18} />
                <p className="highlight-label">{label}</p>
                <p className="highlight-value">{value}</p>
              </div>
            ))}
          </div>
          <a className="about-link" href="#projects">See what I&apos;ve been building <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  )
}

export default About
