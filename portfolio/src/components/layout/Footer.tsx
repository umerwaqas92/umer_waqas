import type { JobProfile } from '../../data/jobProfiles'
import { socialLinks } from '../../data/social'

export default function Footer({ job }: { job?: JobProfile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 px-6 border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="text-[1.8rem] font-black gradient-text tracking-tighter">
            Umer Waqas
          </a>
          <p className="text-slate-400 text-[0.88rem] mt-1 max-w-md">
            {job ? `${job.title} — ${job.focus}` : 'AI Full Stack Developer & Flutter Specialist engineering modern digital products with Claude Code & Cursor.'}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:gradient-primary hover:text-white transition-all text-[1.05rem]"
            >
              <i className={link.icon} />
            </a>
          ))}

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary/20 text-primary-light hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer border-none transition-all ml-2"
            title="Back to Top"
          >
            <i className="fas fa-arrow-up text-[0.9rem]" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-slate-900 text-center text-[0.82rem] text-slate-500">
        © {new Date().getFullYear()} Umer Waqas. Built with <span className="text-primary-light font-medium">React</span>, <span className="text-emerald-400 font-medium">Tailwind CSS</span> & <span className="text-purple-400 font-medium">AI-Assisted Workflows</span>.
      </div>
    </footer>
  )
}
