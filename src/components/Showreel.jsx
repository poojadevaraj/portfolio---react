import { useState } from 'react'

// Replace with your Cloudinary showreel URL
const SHOWREEL_URL = 'YOUR_CLOUDINARY_SHOWREEL_URL.mp4'

export default function Showreel() {
  const [started, setStarted] = useState(false)

  const handlePlay = () => {
    if (SHOWREEL_URL.includes('YOUR_CLOUDINARY')) {
      alert('Replace SHOWREEL_URL in src/components/Showreel.jsx with your Cloudinary URL.')
      return
    }
    setStarted(true)
  }

  return (
    <section id="showreel">
      <div className="container">
        <div className="section-label">Showreel 2024</div>
        <div className="showreel-wrap">
          {started ? (
            <video className="showreel-video" controls autoPlay>
              <source src={SHOWREEL_URL} type="video/mp4" />
            </video>
          ) : (
            <div className="showreel-placeholder" onClick={handlePlay}>
              <div className="play-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill="currentColor" />
                </svg>
              </div>
              <p>Showreel 2024</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
