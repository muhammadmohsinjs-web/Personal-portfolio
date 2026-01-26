import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, ArrowUpRight, Clock, Circle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactOptions = [
    {
      icon: Mail,
      label: 'Email Me',
      description: 'For job opportunities',
      action: 'Send email',
      href: 'mailto:muhammad.mohsin.js@gmail.com',
      primary: true,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      description: 'Quick chat',
      action: 'Message me',
      href: 'https://wa.me/923073495457',
      primary: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      description: 'Connect & chat',
      action: 'Connect',
      href: 'https://www.linkedin.com/in/muhammad-mohsin-029649178/',
      primary: false,
    },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-violet-400 font-mono text-sm mb-4 block">05. What's Next?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              I'm currently open to new opportunities. Whether you have a project in mind,
              a position to fill, or just want to connect — I'd love to hear from you.
            </p>
          </div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">Available for hire</span>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Clock size={14} />
              <span>Typically responds within 24 hours</span>
            </div>
          </motion.div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.href.startsWith('http') || option.href.startsWith('mailto:') ? '_blank' : undefined}
                rel={option.href.startsWith('http') || option.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group p-6 rounded-2xl border transition-all duration-300 text-center ${
                  option.primary
                    ? 'bg-gradient-to-br from-violet-500/20 to-pink-500/10 border-violet-500/30 hover:border-violet-500/50'
                    : 'bg-white/[0.02] border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  option.primary
                    ? 'bg-violet-500/20'
                    : 'bg-white/[0.05]'
                }`}>
                  <option.icon className={`w-5 h-5 ${option.primary ? 'text-violet-400' : 'text-white/60'}`} />
                </div>
                <h3 className="text-white font-semibold mb-1">{option.label}</h3>
                <p className="text-white/40 text-sm mb-3">{option.description}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-medium ${
                  option.primary ? 'text-violet-400' : 'text-white/60'
                } group-hover:gap-2 transition-all`}>
                  {option.action}
                  <ArrowUpRight size={14} />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Or Simple Email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <p className="text-white/30 text-sm mb-4">or reach me directly at</p>
            <a
              href="mailto:muhammad.mohsin.js@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-violet-400 transition-colors text-lg font-medium"
            >
              muhammad.mohsin.js@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
