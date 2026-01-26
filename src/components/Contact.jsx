import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-blue-400 font-mono text-sm mb-4">05. What's Next?</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>

          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question, want to collaborate, or just want to say
            hi, I'll do my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <Mail size={18} className="text-blue-400" />
              <span>hello@muhammadmohsin.dev</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <MapPin size={18} className="text-blue-400" />
              <span>Available for Remote Work</span>
            </div>
          </div>

          <a
            href="mailto:hello@muhammadmohsin.dev"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Send size={18} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
