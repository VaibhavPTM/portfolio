import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-[var(--color-border)]"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {year} Your Name. Built with React + Vite.</p>
        <a href="#hero" className="text-zinc-500 hover:text-[var(--color-accent)] transition-colors">
          Back to top
        </a>
      </div>
    </motion.footer>
  )
}
