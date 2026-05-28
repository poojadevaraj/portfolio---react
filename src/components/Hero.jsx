export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-tag">Motion Graphic Designer</p>
        <h1 className="hero-title">
          Bringing ideas<br />
          <span className="accent">to life</span><br />
          through motion.
        </h1>
        <p className="hero-sub">
          I craft compelling motion graphics, brand animations, and visual
          stories that move audiences.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary">View My Work</a>
          <a href="#showreel" className="btn-ghost">Watch Showreel</a>
        </div>
      </div>
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>
    </section>
  )
}
