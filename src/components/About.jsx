import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-8"
        >
          About me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-zinc-400 text-lg leading-relaxed"
        >
          <p>
            Results-driven <span className="text-zinc-300">Software Engineer</span> with 1.5+ years of hands-on experience designing, developing, and optimizing scalable systems and AI-driven platforms. I build high-performance microservices and integrate technologies like <span className="text-[var(--color-accent)]">Kafka</span>, <span className="text-[var(--color-accent)]">gRPC</span>, <span className="text-[var(--color-accent)]">GraphQL</span>, and <span className="text-[var(--color-accent)]">Redis</span>.
          </p>
          <p>
            Strong foundation in competitive programming with <span className="text-zinc-300">ACM ICPC</span> participation and top rankings on Codeforces, CodeChef, and LeetCode. I enjoy fast-paced environments, driving innovation, and ensuring system reliability at scale.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
