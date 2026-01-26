import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Wrench,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'State Management',
    icon: Code2,
    skills: [
      { name: 'Redux', level: 88 },
      { name: 'Redux Toolkit', level: 90 },
      { name: 'Context API', level: 92 },
      { name: 'Zustand', level: 85 },
      { name: 'React Query', level: 87 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 78 },
      { name: 'Express', level: 75 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'Firebase', level: 82 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'Vite', level: 88 },
      { name: 'Webpack', level: 80 },
      { name: 'Jest', level: 78 },
      { name: 'Figma', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-slate-900/30" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-blue-400 font-mono text-xl">04.</span>
            Skills & Technologies
            <span className="h-px bg-slate-700 flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="card-glass p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <category.icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
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

export default Skills
