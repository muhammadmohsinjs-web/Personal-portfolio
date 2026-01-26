import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Folder, ArrowUpRight } from 'lucide-react'

const featuredProjects = [
  {
    title: 'Madares Platform',
    description:
      'A comprehensive educational platform serving schools across Saudi Arabia. Built with modern React architecture, featuring real-time updates, role-based dashboards, and seamless integration with backend services.',
    image: '/assets/madares.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'REST API'],
    liveUrl: 'https://madares.sa/',
    featured: true,
    color: 'violet',
  },
  {
    title: 'AI Sidekick',
    description:
      'An intelligent AI-powered productivity platform that helps users automate tasks, generate content, and streamline workflows with advanced machine learning capabilities.',
    image: '/assets/ai-sidekick.png',
    techStack: ['React', 'Next.js', 'TypeScript', 'AI/ML', 'Tailwind CSS'],
    liveUrl: 'https://www.trysidekick.io/',
    featured: true,
    color: 'pink',
  },
]

const otherProjects = [
  {
    title: 'Weather Dashboard',
    description: 'A weather application with location-based forecasts, interactive maps, and historical data visualization.',
    techStack: ['React', 'OpenWeather API', 'Leaflet'],
    liveUrl: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'A customizable portfolio template built with modern web technologies and smooth animations.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe search application with filtering, favorites, and meal planning features.',
    techStack: ['React', 'TypeScript', 'Spoonacular API'],
    liveUrl: '#',
  },
  {
    title: 'Markdown Editor',
    description: 'A real-time markdown editor with live preview, syntax highlighting, and export options.',
    techStack: ['React', 'CodeMirror', 'Marked.js'],
    liveUrl: '#',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and file sharing.',
    techStack: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveUrl: '#',
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance tracker with budget management, reports, and data visualization.',
    techStack: ['React', 'D3.js', 'LocalStorage'],
    liveUrl: '#',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getGradientClass = (color) => {
    const gradients = {
      violet: 'from-violet-600/30 to-purple-600/30',
      pink: 'from-pink-600/30 to-rose-600/30',
      cyan: 'from-cyan-600/30 to-blue-600/30',
    }
    return gradients[color] || gradients.violet
  }

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

          {/* Featured Projects */}
          <div className="space-y-32 mb-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative grid md:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                {/* Project Image/Placeholder */}
                <motion.div
                  className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${getGradientClass(project.color)} rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                    <div className={`relative aspect-video bg-gradient-to-br ${getGradientClass(project.color)} rounded-2xl overflow-hidden`}>
                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-[#0a0a1a]/20 group-hover:bg-transparent transition-colors duration-500" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[#0a0a1a]/60" />
                          <div className="w-full h-full flex items-center justify-center relative">
                            <span className="text-8xl font-bold gradient-text opacity-40">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        </>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 relative z-10 ${
                    index % 2 === 1
                      ? 'md:col-start-1 md:row-start-1'
                      : 'md:col-start-6'
                  } md:absolute md:w-[55%] ${
                    index % 2 === 1 ? 'md:left-0' : 'md:right-0'
                  }`}
                >
                  <p className="text-violet-400 font-mono text-sm mb-3">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 group">
                    {project.title}
                  </h3>
                  <div className="card-glass p-6 mb-5">
                    <p className="text-white/60 leading-relaxed">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-3 mb-5 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-white/40 text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white/50 hover:text-violet-400 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={22} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Other Noteworthy Projects
            </h3>
            <p className="text-white/40">A collection of projects I've worked on</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-glass-hover p-6 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gradient-to-br from-violet-500/10 to-pink-500/10 rounded-xl">
                    <Folder className="text-violet-400" size={28} />
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-violet-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-white/50 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

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
