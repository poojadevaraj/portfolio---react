import { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

const FILTERS = ['all', 'branding', 'explainer', 'social', '3d']

export default function Work({ onPlayVideo }) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="work">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} onPlayVideo={onPlayVideo} />
          ))}
        </div>
      </div>
    </section>
  )
}
