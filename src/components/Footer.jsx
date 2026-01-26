import { Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammad-mohsin-029649178/',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:muhammad.mohsin.js@gmail.com',
    },
  ]

  return (
    <footer className="relative py-12 border-t border-white/[0.05]">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/40
                         hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/10
                         transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={link.name}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 text-sm flex items-center gap-2 justify-center mb-2"
            >
              Designed & Built with{' '}
              <Heart size={14} className="text-pink-500 fill-pink-500 animate-pulse" />{' '}
              by Muhammad Mohsin
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/20 text-xs"
            >
              {new Date().getFullYear()} All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
