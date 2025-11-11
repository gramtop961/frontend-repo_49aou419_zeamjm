import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

const projects = [
  {
    title: 'Neon Commerce',
    description: 'A headless storefront with realtime 3D previews and AI-assisted merchandising.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Sentient UI',
    description: 'Autonomous UI components that morph based on user intent and context.',
    tags: ['React', 'ML', 'Design Systems'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Orbital Studio',
    description: 'A multiplayer motion design playground powered by WebRTC and CRDTs.',
    tags: ['WebRTC', 'Framer Motion', 'CRDT'],
    link: '#',
    repo: '#',
  },
]

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />

      <Section id="projects" eyebrow="Selected Work" title="Projects that bend reality">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section id="about" muted eyebrow="About" title="Designer‑developer fuelled by curiosity">
        <div className="mx-auto max-w-3xl text-white/80 leading-relaxed">
          I craft immersive, high‑performance interfaces where motion, depth, and clarity co‑exist. My work explores the edge between utility and spectacle—making products feel alive while staying brutally usable.
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s build the never‑before">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4">
            <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Your name" />
            <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Email" />
            <textarea rows="5" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Tell me about your impossible idea" />
            <button className="mt-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:scale-[1.02]">Send</button>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
