import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Building2, Calendar, MapPin, Star } from 'lucide-react'

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
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-blue-400 font-mono text-xl">02.</span>
            Where I've Worked
            <span className="h-px bg-slate-700 flex-1 max-w-xs" />
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab Navigation */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-700">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap text-sm font-medium transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                    activeTab === index
                      ? 'text-blue-400 border-blue-400 bg-blue-400/10'
                      : 'text-slate-400 border-transparent hover:text-blue-400 hover:bg-slate-800/50'
                  }`}
                >
                  {exp.company.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 min-h-[400px]">
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
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.position}{' '}
                    <span className="text-blue-400">@ {exp.company}</span>
                  </h3>

                  <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-slate-400 flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1.5">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Featured Project Card */}
                  {exp.featuredProject && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="card-glass p-6 glow"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Star
                            className="text-yellow-400 fill-yellow-400"
                            size={20}
                          />
                          <span className="text-xs font-medium text-yellow-400 uppercase tracking-wider">
                            Featured Project
                          </span>
                        </div>
                        <a
                          href={exp.featuredProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                        >
                          Visit Project
                          <ExternalLink size={16} />
                        </a>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-3">
                        {exp.featuredProject.name}
                      </h4>

                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {exp.featuredProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.featuredProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-slate-500 flex items-center gap-2">
                        <Building2 size={14} />
                        {exp.featuredProject.impact}
                      </p>
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
