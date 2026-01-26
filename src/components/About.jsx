import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Redux',
    'GraphQL',
  ]

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-blue-400 font-mono text-xl">01.</span>
            About Me
            <span className="h-px bg-slate-700 flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-slate-400 text-lg leading-relaxed">
                Hello! I'm Muhammad, a passionate Frontend Developer with a keen eye for
                creating beautiful, performant, and user-friendly web applications.
                My journey in web development started several years ago, and I've been
                hooked on building digital experiences ever since.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                Currently, I'm working at{' '}
                <a href="#experience" className="text-blue-400 hover:underline">
                  Technologies Educational Tatweer (Tetco)
                </a>
                , where I contribute to large-scale educational technology platforms
                serving real-world institutions across Saudi Arabia. My focus is on
                developing scalable, high-performance frontend solutions that make a
                real impact on students, teachers, and administrators.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-4">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-slate-300 flex items-center gap-2"
                  >
                    <span className="text-blue-400">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <div className="relative">
                <div className="w-full aspect-square rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
                      MM
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-blue-500 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
