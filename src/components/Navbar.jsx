import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/30 shadow-lg shadow-purple-500/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-fuchsia-500 to-indigo-500 animate-pulse"></div>
            <span className="font-semibold tracking-wider text-white">FLAMES·BLUE</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-medium shadow-lg shadow-fuchsia-500/25 hover:shadow-indigo-500/25">
              Let’s talk
            </a>
          </div>

          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 bg-white/5 text-white">
                {l.label}
              </a>
            ))}
            <a href="mailto:hello@example.com" className="flex items-center gap-2 rounded-lg px-3 py-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white">
              <Mail size={18} /> Contact
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
