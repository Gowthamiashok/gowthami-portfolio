'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gowthamiashok/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gowthamiashok/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gowthamiashok29@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-900 dark:bg-black text-gray-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Gowthami A. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-dark-800 hover:bg-gray-700 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of coffee
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
