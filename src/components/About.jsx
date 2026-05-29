const skills = ['After Effects', 'Cinema 4D', 'Premiere Pro', 'Illustrator', 'Figma', 'Blender']

const stats = [
  { number: '4+', label: 'Years Experience' },
  { number: '80+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '100%', label: 'Client Satisfaction', accent: true },
]

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-text">
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            Motion designer<br />crafting visual<br /><span className="accent">experiences</span>.
          </h2>
          <p>
            I'm Binish Babu, a motion graphic designer with a passion for creating visuals
            that don't just look good — they communicate, engage, and convert. I combine
            storytelling with technical skill to deliver animations that serve real business goals.
          </p>
          <p>
            From brand identity animations to complex 3D visuals, I work across the full
            motion design spectrum using industry-standard tools.
          </p>
          <div className="skills-grid">
            {skills.map(s => (
              <div key={s} className="skill-item">
                <span className="skill-icon">⚡</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats">
          {stats.map(s => (
            <div key={s.label} className={`stat-card ${s.accent ? 'accent-card' : ''}`}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
