import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TrustedBy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Replace these with actual companies/clients you've worked with
  const companies = [
    { name: 'Tetco', logo: null },
    { name: 'Madares', logo: null },
    { name: 'Ministry of Education', logo: null },
  ]

  const highlights = [
    { label: 'Production Apps', value: 'Enterprise-scale' },
    { label: 'Tech Stack', value: 'React & Next.js' },
    { label: 'Focus Area', value: 'EdTech Platforms' },
  ]

  return (
    <section id="trusted-by" className="py-16 relative" ref={ref}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-width px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Section Label */}
          <p className="text-white/30 text-sm uppercase tracking-widest mb-8">
            Trusted by leading organizations
          </p>

          {/* Company Logos / Names */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-8 opacity-40 group-hover:opacity-70 transition-opacity grayscale"
                  />
                ) : (
                  <span className="text-white/30 group-hover:text-white/50 text-lg font-semibold transition-colors">
                    {company.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quick Highlights */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-1 h-1 bg-violet-500 rounded-full" />
                <span className="text-white/40 text-sm">{item.label}:</span>
                <span className="text-white/70 text-sm font-medium">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}

export default TrustedBy
