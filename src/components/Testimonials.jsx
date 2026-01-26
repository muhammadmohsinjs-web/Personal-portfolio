import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Replace with real testimonials
  const testimonials = [
    {
      quote: "Muhammad delivered exceptional frontend work on our platform. His attention to detail and understanding of scalable architecture significantly improved our user experience.",
      author: "Ahmed Al-Rashid",
      role: "Tech Lead",
      company: "Tetco",
      avatar: null,
    },
    {
      quote: "Working with Muhammad was a great experience. He consistently delivered clean, maintainable code and was proactive in suggesting improvements to our UI/UX.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "EdTech Startup",
      avatar: null,
    },
    {
      quote: "His expertise in React and Next.js helped us ship features faster. Muhammad is reliable, communicative, and a valuable team member.",
      author: "Omar Hassan",
      role: "Engineering Manager",
      company: "Tech Company",
      avatar: null,
    },
  ]

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-violet-400 font-mono text-sm mb-4 block">What People Say</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Testimonials
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Card */}
                <div className="h-full card-glass p-6 hover:border-violet-500/20 transition-all duration-500">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-violet-500/30 mb-4" />

                  {/* Quote Text */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-white/60 text-sm font-semibold">
                          {testimonial.author.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="text-white font-medium text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-white/40 text-xs">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/10 to-pink-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Optional: Add LinkedIn Recommendation Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://www.linkedin.com/in/muhammad-mohsin-029649178/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-violet-400 text-sm transition-colors"
            >
              View more recommendations on LinkedIn →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
