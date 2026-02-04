import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-6"
        >
          About me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-zinc-400 text-lg leading-relaxed"
        >
          <p>
            I'm a developer who cares about clean code, performance, and user experience. I enjoy turning ideas into
            real products—from concept to deployment.
          </p>
          <p>
            When I'm not coding, I like to stay curious: reading, experimenting with new tools, and contributing to
            open source when I can.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
