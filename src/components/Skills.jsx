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
    color: 'violet',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Angular', level: 82 },
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
    color: 'pink',
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
    color: 'cyan',
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
    color: 'amber',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'Firebase', level: 82 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    color: 'emerald',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    color: 'orange',
    skills: [
      { name: 'Vite', level: 88 },
      { name: 'Webpack', level: 80 },
      { name: 'Jest', level: 78 },
      { name: 'Agentic AI', level: 80 },
      { name: 'Figma', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getColorClasses = (color) => {
    const colors = {
      violet: { bg: 'from-violet-500/20 to-violet-500/5', bar: 'from-violet-500 to-purple-500', icon: 'text-violet-400' },
      pink: { bg: 'from-pink-500/20 to-pink-500/5', bar: 'from-pink-500 to-rose-500', icon: 'text-pink-400' },
      cyan: { bg: 'from-cyan-500/20 to-cyan-500/5', bar: 'from-cyan-500 to-blue-500', icon: 'text-cyan-400' },
      amber: { bg: 'from-amber-500/20 to-amber-500/5', bar: 'from-amber-500 to-orange-500', icon: 'text-amber-400' },
      emerald: { bg: 'from-emerald-500/20 to-emerald-500/5', bar: 'from-emerald-500 to-green-500', icon: 'text-emerald-400' },
      orange: { bg: 'from-orange-500/20 to-orange-500/5', bar: 'from-orange-500 to-red-500', icon: 'text-orange-400' },
    }
    return colors[color] || colors.violet
  }

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-violet-400 font-mono text-lg">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
            <div className="h-px bg-gradient-to-r from-violet-500/50 to-transparent flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color)

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  className="card-glass p-6 group hover:border-white/[0.15] transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${colorClasses.bg} rounded-xl`}>
                      <category.icon className={colorClasses.icon} size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white/70 text-sm">{skill.name}</span>
                          <span className="text-white/40 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1.2,
                              delay: categoryIndex * 0.1 + skillIndex * 0.08,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className={`h-full bg-gradient-to-r ${colorClasses.bar} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
