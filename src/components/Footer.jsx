export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Flames·Blue — Crafted with love and photons.</p>
          <div className="text-white/60 text-sm">Built for the impossible.</div>
        </div>
      </div>
    </footer>
  )
}
