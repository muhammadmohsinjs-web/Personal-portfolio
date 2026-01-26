import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative hero-gradient">
      <div className="container-width section-padding pt-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-medium mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Muhammad Mohsin.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-400 mb-6"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            I'm a Frontend Developer specializing in building exceptional digital experiences.
            Currently contributing to large-scale educational technology platforms serving
            real-world institutions at{' '}
            <a href="#experience" className="text-blue-400 hover:underline">
              Tetco
            </a>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/muhammadmohsin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/muhammadmohsin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@muhammadmohsin.dev"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
