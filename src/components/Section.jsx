import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children, muted }) {
  return (
    <section id={id} className={`relative py-24 ${muted ? 'bg-[#0b0b12]' : 'bg-[#0a0a0f]'} text-white`}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(120,70,255,0.15),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
