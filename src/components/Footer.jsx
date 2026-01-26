import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/muhammadmohsin',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/muhammadmohsin',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@muhammadmohsin.dev',
    },
  ]

  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-500 text-sm flex items-center gap-1 justify-center">
              Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Muhammad Mohsin
            </p>
            <p className="text-slate-600 text-xs mt-1">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
