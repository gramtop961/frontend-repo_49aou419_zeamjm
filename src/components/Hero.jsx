import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(120,70,255,0.25),transparent_60%)]"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-36 md:pt-44">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400"></span>
          Now exploring the impossible
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-5xl font-black leading-tight tracking-tight md:text-7xl"
        >
          Mind‑bending portfolio for the future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="max-w-xl text-white/70"
        >
          A dark, cybernetic canvas where code, design, and motion collide. Scroll to uncover interactions you haven’t seen before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="pointer-events-auto rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:scale-[1.02]">
            See the work
          </a>
          <a href="#contact" className="pointer-events-auto rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Contact
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
    </section>
  )
}
