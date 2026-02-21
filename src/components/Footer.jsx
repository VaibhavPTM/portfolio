import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-10 px-6 border-t border-[var(--color-border)] bg-[var(--color-surface)]/30"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-zinc-500">
          © {year} <span className="text-zinc-400 font-medium">Vaibhav Vadadoriya</span>
          <span className="text-zinc-600 mx-1.5">·</span>
          <span className="text-zinc-500">Built with React + Vite</span>
        </p>
        <a
          href="#hero"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-[var(--color-accent)] transition-colors"
        >
          Back to top
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </motion.footer>
  )
}
