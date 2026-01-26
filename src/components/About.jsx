import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-violet-400 font-mono text-lg">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="h-px bg-gradient-to-r from-violet-500/50 to-transparent flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className="text-white/60 text-lg leading-relaxed">
                Hello! I'm Muhammad, a passionate Frontend Developer with a keen eye for
                creating beautiful, performant, and user-friendly web applications.
                My journey in web development started several years ago, and I've been
                hooked on building digital experiences ever since.
              </p>

              <p className="text-white/60 text-lg leading-relaxed">
                Currently, I'm working at{' '}
                <a href="#experience" className="text-violet-400 hover:text-violet-300 transition-colors link-underline">
                  Technologies Educational Tatweer (Tetco)
                </a>
                , where I contribute to large-scale educational technology platforms
                serving real-world institutions across Saudi Arabia. My focus is on
                developing scalable, high-performance frontend solutions that make a
                real impact on students, teachers, and administrators.
              </p>

              <p className="text-white/60 text-lg leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="grid grid-cols-2 gap-3 mt-6"
              >
                {technologies.map((tech) => (
                  <motion.li
                    key={tech}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-white/70 group"
                  >
                    <Zap className="w-4 h-4 text-violet-400 group-hover:text-pink-400 transition-colors" />
                    <span className="group-hover:text-white transition-colors">{tech}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                {/* Animated border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-gradient" />

                <div className="relative">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#0a0a1a]">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/mohsin_pic.png`}
                      alt="Muhammad Mohsin"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-violet-500/30 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-pink-500/30 rounded-xl -z-10" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
