import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Project One',
    description: 'A short description of what this project does—tech used and the problem it solves.',
    tags: ['React', 'Tailwind', 'Vite'],
    link: '#',
    external: true,
  },
  {
    title: 'Project Two',
    description: 'Another project: focus on impact and outcome. Keep it concise and scannable.',
    tags: ['Node.js', 'API', 'Database'],
    link: '#',
    external: true,
  },
  {
    title: 'Project Three',
    description: 'Third project to show range—could be open source, side project, or work sample.',
    tags: ['TypeScript', 'Figma'],
    link: '#',
    external: true,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-10"
        >
          Selected projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              variants={card}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)]/50 transition-colors"
            >
              <h3 className="font-display font-semibold text-lg text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-[var(--color-surface-elevated)] text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline"
              >
                View project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
