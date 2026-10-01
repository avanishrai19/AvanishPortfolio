import {
  ArrowUpRight,
  Check,
  CloudSun,
  FileText,
  GitBranch,
  ListTodo,
  Sparkles,
} from 'lucide-react'

const previewContent = {
  health: {
    icon: FileText,
    eyebrow: 'REPORT WORKSPACE',
    title: 'Health report analyzer',
    detail: 'PDF text extraction · AI-assisted review',
    chips: ['Report uploaded', 'Analysis ready'],
  },
  weather: {
    icon: CloudSun,
    eyebrow: 'WEATHER / TODAY',
    title: 'Your day, at a glance',
    detail: 'Current conditions and forecast',
    chips: ['Current weather', 'Forecast'],
  },
  todo: {
    icon: ListTodo,
    eyebrow: 'MY TASKS',
    title: 'A clearer to-do list',
    detail: 'Keep small tasks moving',
    chips: ['Create', 'Update', 'Complete'],
  },
  lottery: {
    icon: Sparkles,
    eyebrow: 'LUCKY DRAW',
    title: 'Try your luck',
    detail: 'A little React random-number game',
    chips: ['Generate', 'Play again'],
  },
}

function ProjectVisual({ project }) {
  const preview = previewContent[project.visual]
  const Icon = preview.icon

  return (
    <div
      aria-label={`${project.title} interface illustration`}
      className="project-visual"
      role="img"
    >
      <div className="project-visual-glow" />
      <div className="mock-window">
        <div className="mock-window-heading">
          <div className="mock-window-label">
            <span>
              <Icon size={14} />
            </span>
            <span>{preview.eyebrow}</span>
          </div>
          <span className="mock-status" />
        </div>
        <p className="mock-title">{preview.title}</p>
        <p className="mock-description">{preview.detail}</p>
        <div className="mock-chips">
          {preview.chips.map((chip, chipIndex) => (
            <span key={chip}>
              {chipIndex === 0 && <Check size={10} />}
              {chip}
            </span>
          ))}
        </div>
      </div>
      <span className="mock-note">UI concept preview</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card${project.featured ? ' is-featured' : ''}`}>
      <ProjectVisual project={project} />
      <div className="project-copy">
        <div className="project-card-heading">
          <div>
            <p className="project-index">
              {project.featured ? 'FEATURED PROJECT' : `PROJECT 0${index + 1}`}
            </p>
            <h3>{project.title}</h3>
          </div>
          {project.featured && (
            <span className="featured-badge">
              <Sparkles size={11} /> Featured
            </span>
          )}
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack" aria-label="Technology stack">
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.github ? (
            <a className="project-link" href={project.github} rel="noreferrer" target="_blank">
              <GitBranch size={14} /> GitHub <ArrowUpRight size={13} />
            </a>
          ) : (
            <span className="project-link unavailable">
              <GitBranch size={14} /> Repository link not provided
            </span>
          )}
          {project.demo && (
            <a
              className="project-link demo-link"
              href={project.demo}
              rel="noreferrer"
              target="_blank"
            >
              Live Demo <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
