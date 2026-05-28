import { useRef } from 'react'

export default function ProjectCard({ project, onPlayVideo }) {
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (!project.videoUrl.includes('YOUR_CLOUDINARY') && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handlePlay = () => {
    if (project.videoUrl.includes('YOUR_CLOUDINARY')) {
      alert(`Replace videoUrl for "${project.title}" in src/data/projects.js with your Cloudinary URL.`)
      return
    }
    onPlayVideo(project.videoUrl)
  }

  return (
    <div className="project-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="project-video-wrap">
        <video ref={videoRef} className="project-video" loop muted preload="metadata">
          <source src={project.videoUrl} type="video/mp4" />
        </video>
        <div className="project-overlay">
          <button className="project-play-btn" onClick={handlePlay}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M8 5.5l11 6.5-11 6.5V5.5z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="project-tag">{project.category}</div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-meta">
          {project.tools.map(tool => <span key={tool}>{tool}</span>)}
        </div>
      </div>
    </div>
  )
}
