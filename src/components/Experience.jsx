import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Building2, Calendar, MapPin, Star, ArrowUpRight } from 'lucide-react'

const experiences = [
  {
    company: 'Technologies Educational Tatweer (Tetco)',
    position: 'Frontend Developer',
    duration: 'Present',
    location: 'Saudi Arabia',
    description: [
      'Developed modern, responsive frontend interfaces for large-scale educational platforms',
      'Built scalable components using React and Next.js with TypeScript',
      'Improved performance and usability across core platform modules',
      'Collaborated with backend and product teams to deliver new features',
      'Maintained code quality and frontend architecture standards',
    ],
    featuredProject: {
      name: 'Madares Platform',
      url: 'https://madares.sa/',
      description:
        'A large-scale educational platform focused on digital learning and school management solutions. Contributed to building scalable, high-performance frontend features that support a seamless experience for students, teachers, and administrators.',
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
      impact: 'Serving educational institutions across Saudi Arabia',
    },
  },
  {
    company: 'Previous Experience',
    position: 'Frontend Developer',
    duration: 'Previous Role',
    location: 'Remote',
    description: [
      'Built responsive web applications using modern JavaScript frameworks',
      'Collaborated with design teams to implement pixel-perfect UI components',
      'Optimized application performance and improved user experience',
      'Participated in code reviews and maintained coding standards',
    ],
    featuredProject: null,
  },
]

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-violet-400 font-mono text-lg">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Where I've Worked</h2>
            <div className="h-px bg-gradient-to-r from-violet-500/50 to-transparent flex-1 max-w-xs" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab Navigation */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ x: 4 }}
                  className={`relative px-6 py-4 text-left whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'text-violet-400'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {/* Active indicator */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-pink-500 transition-opacity duration-300 ${
                      activeTab === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {/* Hover/Active background */}
                  <span
                    className={`absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent transition-opacity duration-300 ${
                      activeTab === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <span className="relative">{exp.company.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 min-h-[450px]">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: activeTab === index ? 1 : 0,
                    x: activeTab === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className={activeTab === index ? 'block' : 'hidden'}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {exp.position}{' '}
                    <span className="gradient-text">@ {exp.company}</span>
                  </h3>

                  <div className="flex flex-wrap gap-4 text-white/40 text-sm mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-violet-400" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-pink-400" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-white/60 flex items-start gap-3"
                      >
                        <span className="text-violet-400 mt-1">▹</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Featured Project Card */}
                  {exp.featuredProject && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="relative group"
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative card-glass p-6 md:p-8">
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg">
                              <Star className="text-amber-400 fill-amber-400" size={18} />
                            </div>
                            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                              Featured Project
                            </span>
                          </div>
                          <motion.a
                            href={exp.featuredProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-violet-400 hover:text-white
                                     bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30
                                     rounded-lg transition-all duration-300 text-sm font-medium group/btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Visit Project
                            <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </motion.a>
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-4">
                          {exp.featuredProject.name}
                        </h4>

                        <p className="text-white/50 mb-6 leading-relaxed">
                          {exp.featuredProject.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.featuredProject.techStack.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <p className="text-sm text-white/40 flex items-center gap-2">
                          <Building2 size={14} className="text-cyan-400" />
                          {exp.featuredProject.impact}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
