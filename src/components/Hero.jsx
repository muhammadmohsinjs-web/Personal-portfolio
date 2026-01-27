import { ArrowDown, Linkedin, Mail, FileText, Circle } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '500K+', label: 'Users Impacted' },
    { value: '15+', label: 'Projects Delivered' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-width section-padding pt-28 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1]"
            >
              Frontend Developer
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-white/60 mb-6 leading-relaxed"
            >
              Building scalable EdTech platforms serving{' '}
              <span className="text-violet-400 font-semibold">500K+ users</span>{' '}
              across Saudi Arabia
            </motion.p>

            {/* Current Position */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-8 text-white/40">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                Currently at <span className="text-white/70">Tetco</span>
              </span>
              <span className="hidden sm:inline">·</span>
              <span>React · Next.js · TypeScript</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary group">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </span>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-mohsin-029649178/', label: 'LinkedIn' },
                { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=muhammad.mohsin.js@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-white/40 hover:text-violet-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image & Stats */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex flex-col items-center lg:items-end"
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 rounded-full blur-2xl opacity-60" />

              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}assets/mohsin_pic.png`}
                  alt="Muhammad Mohsin"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-3 border border-violet-500/20 rounded-full animate-spin-slow" />
            </div>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-white/40 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#trusted-by" className="flex flex-col items-center gap-2 text-white/30 hover:text-violet-400 transition-colors group">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="p-2 rounded-full border border-white/10 group-hover:border-violet-500/30 transition-colors"
          >
            <ArrowDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
