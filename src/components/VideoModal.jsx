import { useEffect, useRef } from 'react'

export default function VideoModal({ src, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (src && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [src])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!src) return null

  return (
    <div className="modal open">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <video ref={videoRef} id="modalVideo" controls>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
