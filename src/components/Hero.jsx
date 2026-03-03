import { motion } from 'framer-motion'
import heroPhoto from '../assets/Gemini_Generated_Image_vmfpjjvmfpjjvmfp.png'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-24 pb-20 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--color-accent)] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--color-accent)]/40 blur-[100px]"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_50%,rgba(245,158,11,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left: content */}
        <div className="flex-1 text-center lg:text-left order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-text)] tracking-tight mb-4"
          >
            <span className="text-gradient">Vaibhav</span>
            <br />
            <span className="text-[var(--color-text)]">Vadadoriya</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Software Engineer building <span className="text-zinc-300">scalable systems</span> &{' '}
            <span className="text-zinc-300">AI-driven platforms</span>. Microservices, algorithms & high-performance systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold shadow-lg shadow-[var(--color-accent-glow)] hover:shadow-xl hover:shadow-[var(--color-accent-glow)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View work
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        {/* Right: image — hidden on mobile, circle on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex flex-1 justify-end order-2 items-center"
        >
          <div className="relative w-full max-w-md">
            <div className="aspect-square max-h-[70vh] w-full rounded-full overflow-hidden ring-2 ring-[var(--color-accent)]/30 shadow-2xl shadow-black/30">
              <img
                src={heroPhoto}
                alt="Vaibhav Vadadoriya"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent -z-10 blur-2xl" aria-hidden />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 z-10 cursor-pointer text-zinc-500 hover:text-[var(--color-accent)] transition-colors no-underline"
        aria-label="Scroll to About"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
        >
          <motion.span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
        </motion.div>
      </motion.a>
    </section>
  )
}
