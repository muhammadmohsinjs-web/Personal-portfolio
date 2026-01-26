import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'

const featuredProjects = [
  {
    title: 'Madares Platform',
    description:
      'A comprehensive educational platform serving schools across Saudi Arabia. Built with modern React architecture, featuring real-time updates, role-based dashboards, and seamless integration with backend services.',
    image: null,
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'REST API'],
    liveUrl: 'https://madares.sa/',
    githubUrl: null,
    featured: true,
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'A full-featured admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order tracking capabilities.',
    image: null,
    techStack: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with drag-and-drop functionality, real-time sync, and team collaboration features.',
    image: null,
    techStack: ['React', 'Redux Toolkit', 'Firebase', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
]

const otherProjects = [
  {
    title: 'Weather Dashboard',
    description: 'A weather application with location-based forecasts, interactive maps, and historical data visualization.',
    techStack: ['React', 'OpenWeather API', 'Leaflet'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'A customizable portfolio template built with modern web technologies and smooth animations.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe search application with filtering, favorites, and meal planning features.',
    techStack: ['React', 'TypeScript', 'Spoonacular API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Markdown Editor',
    description: 'A real-time markdown editor with live preview, syntax highlighting, and export options.',
    techStack: ['React', 'CodeMirror', 'Marked.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and file sharing.',
    techStack: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance tracker with budget management, reports, and data visualization.',
    techStack: ['React', 'D3.js', 'LocalStorage'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-blue-400 font-mono text-xl">03.</span>
            Some Things I've Built
            <span className="h-px bg-slate-700 flex-1 max-w-xs" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                {/* Project Image/Placeholder */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? 'md:col-start-6' : ''
                  }`}
                >
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg overflow-hidden glow">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl font-bold gradient-text opacity-30">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-300 rounded-lg" />
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 ${
                    index % 2 === 1
                      ? 'md:col-start-1 md:row-start-1'
                      : 'md:col-start-6'
                  } md:absolute md:w-1/2 ${
                    index % 2 === 1 ? 'md:left-0' : 'md:right-0'
                  }`}
                >
                  <p className="text-blue-400 font-mono text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="card-glass p-6 mb-4">
                    <p className="text-slate-400">{project.description}</p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-3 mb-4 ${
                      index % 2 === 1 ? 'md:justify-end' : ''
                    }`}
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-slate-400 text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? 'md:justify-end' : ''
                    }`}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={22} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="card-glass p-6 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <Folder className="text-blue-400" size={40} />
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-slate-500 text-xs font-mono"
                    >
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
