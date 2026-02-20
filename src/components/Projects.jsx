import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Folder } from 'lucide-react'

const projects = [
  {
    title: 'Tasky',
    description: 'A task management app for organizing work and tracking progress efficiently.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://tasky.muhammadmohsin.dev/',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-violet-400 font-mono text-lg">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Some Things I've Built</h2>
            <div className="h-px bg-gradient-to-r from-violet-500/50 to-transparent flex-1 max-w-xs" />
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Project</h3>
            <p className="text-white/40">A project I've worked on</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-glass-hover p-6 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gradient-to-br from-violet-500/10 to-pink-500/10 rounded-xl">
                    <Folder className="text-violet-400" size={28} />
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-violet-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-white/50 text-sm mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-white/30 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
