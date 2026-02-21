import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'PostWave',
    description: 'Reddit-like community platform built with Spring Boot and MySQL. JWT auth, REST APIs; users can create/join communities, post articles, upvote/downvote, comment, and save posts.',
    tags: ['Spring Boot', 'Java', 'MySQL', 'REST API', 'JWT'],
    link: 'https://github.com/VaibhavPTM/skill-sync',
    external: true,
  },
  {
    title: 'JobBuddy',
    description: 'Job posting and matching app with Spring Boot and MySQL. Skill-based search, rating system, request/accept workflows, and integrated chat for employer–job seeker interaction.',
    tags: ['Spring Boot', 'Java', 'MySQL', 'REST API'],
    link: '#',
    external: false,
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
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="section-label"
        >
          04 — Projects
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-12"
        >
          Selected projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              variants={card}
              className="group card-hover rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)]/50 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-4xl font-display font-bold text-[var(--color-surface-elevated)]/80">
                0{index + 1}
              </div>
              <h3 className="font-display font-semibold text-lg text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors pr-10">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-surface-elevated)]/80 text-zinc-500 border border-[var(--color-border)]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:gap-3 transition-all"
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
