import { motion } from 'framer-motion'

const SKILLS = [
  'Java',
  'C++',
  'C',
  'Go',
  'SQL / NoSQL',
  'Spring Boot',
  'REST APIs',
  'GraphQL',
  'Kafka',
  'gRPC',
  'Redis',
  'MongoDB',
  'Elasticsearch',
  'Docker',
  'Git',
  'IntelliJ IDEA',
  'Postman',
  'SFTP',
  'Competitive Programming',
  'Data Structures',
  'Algorithm Design',
  'Problem Solving',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--color-surface)]/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-10"
        >
          Skills & tools
        </motion.h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-wrap gap-3"
        >
          {SKILLS.map((skill) => (
            <motion.li
              key={skill}
              variants={item}
              className="px-4 py-2 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-zinc-300 text-sm font-medium hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-colors"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
