'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-8">

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-max px-4 sm:px-6 lg:px-8 py-8 text-center"
      >
        {/* Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-4"
        >
          <div className="relative">
              <motion.img
                src="Gowthami_Photo.jpg"
              alt="Gowthami A"
              className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Hi, I'm Gowthami A
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-6">
            AI Engineer | Data Science Practitioner | ML Developer
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Data Science practitioner with hands-on experience in healthcare analytics, machine learning, and statistical modeling. Currently exploring Generative AI with a focus on RAG and AI agents.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors duration-200"
            >
              View Projects
            </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16 mt-8"
        >
          {[
            { icon: Github, href: 'https://github.com/Gowthamiashok/', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/gowthamiashok/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:gowthamiashok29@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-500 hover:text-white transition-all duration-300 group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
          <motion.button
            onClick={scrollToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-500 hover:text-white transition-all duration-300"
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
