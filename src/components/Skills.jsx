import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['Java', 'C++', 'C', 'Go'],
  },
  {
    label: 'Backend & APIs',
    items: ['Spring Boot', 'REST APIs', 'GraphQL', 'gRPC', 'Kafka'],
  },
  {
    label: 'Data & Storage',
    items: ['SQL / NoSQL', 'MongoDB', 'Elasticsearch', 'Redis'],
  },
  {
    label: 'Tools & Practices',
    items: ['Docker', 'Git', 'IntelliJ IDEA', 'Postman', 'SFTP'],
  },
  {
    label: 'Problem solving',
    items: ['Competitive Programming', 'Data Structures', 'Algorithm Design', 'Problem Solving'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[var(--color-surface)]/40 relative">
      <div className="max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="section-label"
        >
          03 — Skills
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-12"
        >
          Skills & tools
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-8"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div key={group.label} variants={item}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={item}
                    className="px-4 py-2 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-zinc-300 text-sm font-medium hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
