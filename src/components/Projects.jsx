import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="section-space section-border" id="projects">
      <div className="section-wrap">
        <div className="section-heading-row">
          <div><p className="eyebrow section-eyebrow">03 / SELECTED WORK</p><h2 className="section-title">Projects I&apos;ve built</h2></div>
          <p className="section-intro">A mix of practical web apps and experiments. Previews below are interface illustrations, not product screenshots.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
