import { ArrowUpRight } from 'lucide-react'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section className="section-space section-border skills-section" id="skills">
      <div className="section-wrap">
        <div className="section-heading-row">
          <div><p className="eyebrow section-eyebrow">02 / SKILLS</p><h2 className="section-title">What I work with</h2></div>
          <p className="section-intro">I&apos;m building a broad foundation. Technologies marked learning are part of my current study path.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.category}>
              <div className="skill-group-heading"><h3>{group.category}</h3><ArrowUpRight size={16} /></div>
              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li className={`skill-tag${skill.learning ? ' is-learning' : ''}`} key={skill.name}>
                    {skill.name}{skill.learning && <span>Learning</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="learning-note"><span /> Currently learning Node.js, Express.js, MongoDB, and the MERN stack.</p>
      </div>
    </section>
  )
}

export default Skills
