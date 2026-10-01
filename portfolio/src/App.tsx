import { resolveJobProfile } from './data/jobProfiles'
import { useEffect, useState } from 'react'
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
  const [job, setJob] = useState(() => resolveJobProfile(window.location.search))

  useEffect(() => {
    const onPopState = () => setJob(resolveJobProfile(window.location.search))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const title = `Umer Waqas | ${job?.title ?? 'AI Full Stack Developer'}`
    const description = job?.summary ?? 'AI Full Stack Developer crafting end-to-end solutions with React, Next.js, Node.js, Python, Flutter, and AI integration.'
    document.title = title
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector(selector)?.setAttribute('content', description)
    }
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector(selector)?.setAttribute('content', title)
    }
  }, [job])

  return (
    <div>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero job={job} onOpenModal={() => setModalOpen(true)} />
        <Projects />
        <About job={job} />
        <Skills key={job?.id ?? 'general'} job={job} />
        <Experience />
        <WhyMe />
        <Upwork />
        <Contact onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer job={job} />
      <WhatsAppFloat onOpen={() => setModalOpen(true)} />
      <WhatsAppModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App
