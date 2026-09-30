import { education } from '../data/education'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

function ResumePrint() {
  const skills = skillGroups.flatMap((group) => group.skills.map((skill) => skill.learning ? `${skill.name} (learning)` : skill.name))

  return (
    <article className="print-resume" aria-hidden="true">
      <h1>Avanish Rai</h1>
      <p>Full Stack Developer in the Making · Dehradun, Uttarakhand, India</p>
      <p>BCA student interested in web development, React, backend development, and practical applications.</p>
      <h2>Education</h2>
      {education.map((item) => <p key={item.institution}><strong>{item.degree}</strong> · {item.institution} · {item.period} · {item.status}</p>)}
      <h2>Skills</h2>
      <p>{skills.join(' · ')}</p>
      <h2>Selected Projects</h2>
      {projects.map((project) => <p key={project.title}><strong>{project.title}</strong> · {project.description} · {project.stack.join(', ')}</p>)}
      <h2>Certificate</h2>
      <p>Web Technology Certificate · IGNOU / SWAYAM</p>
      <p>GitHub: github.com/avanishrai19</p>
    </article>
  )
}

export default ResumePrint
