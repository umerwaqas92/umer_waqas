import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import WhyMe from './components/sections/WhyMe'
import About from './components/sections/About'
import Upwork from './components/sections/Upwork'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import WhatsAppModal from './components/modal/WhatsAppModal'
import WhatsAppFloat from './components/modal/WhatsAppFloat'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <Navbar />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <WhyMe />
        <About />
        <Upwork />
        <Skills />
        <Projects />
        <Experience />
        <Contact onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <WhatsAppFloat onOpen={() => setModalOpen(true)} />
      <WhatsAppModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App
