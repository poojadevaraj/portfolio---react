import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'

export default function App() {
  const [modalSrc, setModalSrc] = useState(null)

  return (
    <>
      <Navbar />
      <Hero />
      <Showreel />
      <Work onPlayVideo={setModalSrc} />
      <About />
      <Contact />
      <Footer />
      <VideoModal src={modalSrc} onClose={() => setModalSrc(null)} />
    </>
  )
}
