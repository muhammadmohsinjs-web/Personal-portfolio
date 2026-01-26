import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Users, Zap, Shield, ArrowUpRight } from 'lucide-react'

const FeaturedProject = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const metrics = [
    { icon: Users, value: '500K+', label: 'Active Users' },
    { icon: Zap, value: '40%', label: 'Performance Boost' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
  ]

  const contributions = [
    'Architected component library used across 50+ modules',
    'Implemented real-time dashboard for school administrators',
    'Optimized bundle size reducing load time by 40%',
    'Led frontend migration from legacy system to Next.js',
  ]

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'REST API', 'WebSocket'
  ]

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider">
              Featured Case Study
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Project Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Madares Platform
              </h2>

              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                A comprehensive educational platform transforming how schools operate across Saudi Arabia.
                Serving students, teachers, and administrators with modern digital learning tools.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl"
                  >
                    <metric.icon className="w-5 h-5 text-violet-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-white/40 text-xs">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Key Contributions */}
              <div className="mb-8">
                <h3 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
                  Key Contributions
                </h3>
                <ul className="space-y-3">
                  {contributions.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 text-white/60"
                    >
                      <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="https://madares.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/[0.1]
                         rounded-xl text-white hover:bg-violet-500/10 hover:border-violet-500/30
                         transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Live Platform
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              {/* Browser mockup */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a1a]">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/[0.05] rounded-md px-3 py-1 text-white/30 text-xs text-center">
                      madares.sa
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/madares.png`}
                    alt="Madares Platform Screenshot"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl"
              >
                <span className="text-emerald-400 text-sm font-semibold">Live</span>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/10 to-pink-600/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProject
