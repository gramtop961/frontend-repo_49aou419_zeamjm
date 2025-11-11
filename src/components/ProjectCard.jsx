import { motion } from 'framer-motion'
import { Github, Globe } from 'lucide-react'

export default function ProjectCard({ title, description, tags = [], image, link, repo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
    >
      <div className="relative h-56 w-full overflow-hidden rounded-xl">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-fuchsia-600/20 to-indigo-600/20 text-white/60">
            <span className="text-sm">Preview</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{t}</span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 p-2 text-white hover:bg-white/10">
              <Github size={18} />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 p-2 text-white hover:bg-white/10">
              <Globe size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
