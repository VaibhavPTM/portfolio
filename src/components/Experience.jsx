import { motion } from 'framer-motion'

const JOBS = [
  {
    company: 'Commotion Software Solutions Pvt Ltd',
    role: 'Software Engineer',
    period: 'Jan. 2025 – Present',
    bullets: [
      'Engineered a high-throughput marketing automation platform supporting SMS, MMS, email, RCS, Voice, WhatsApp, and push notifications.',
      'Designed flexible campaign workflows (one-time, scheduled, event-driven, geofence-based) with secure audience ingestion via SFTP.',
      'Optimized system performance to achieve 5K+ TPS across microservices and 25K+ TPS in single-service scenarios.',
      'Developed AI-worker modules with versioning, tool creation, agent orchestration, guardrails, and custom settings.',
      'Built knowledge base module integrating documents, ontologies, and graphs. Implemented real-time voice data transfer using sockets.',
      'Leveraged Kafka, gRPC, Spring Security, GraphQL, REST APIs; Azure Blob, MongoDB, Elasticsearch, Redis.',
    ],
  },
  {
    company: 'GeeksforGeeks',
    role: 'Member Of Technical Staff Intern',
    period: 'Aug. 2024 – Dec. 2024',
    bullets: [
      'Developed and optimized algorithms and data structures for scalable, high-performance systems for software developers.',
      'Built efficient solutions using C++, Java, and C. Contributed to core technical infrastructure and developer experience.',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)]/50 via-[var(--color-border)] to-transparent hidden sm:block" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            {JOBS.map((job, index) => (
              <motion.article
                key={job.company}
                variants={item}
                className="card-hover relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 pl-8 sm:pl-10 hover:border-[var(--color-accent)]/40"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-bg)] hidden sm:block" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-display font-semibold text-lg text-[var(--color-text)]">
                    {job.company}
                  </h3>
                  <span className="text-sm font-medium text-[var(--color-accent)]">{job.period}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-4">{job.role}</p>
                <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed list-disc list-inside">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
