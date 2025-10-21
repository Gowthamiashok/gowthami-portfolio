'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Filter } from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Research', 'AI/ML', 'Healthcare', 'Full Stack', 'Analytics']

  const projects = [
    {
      id: 1,
      title: 'Optimizing APU Performance in Metro Trains Through Comparative Analysis',
      description: 'Co-authored a faculty-supervised research paper prepared for submission to IEEE Access. Designed a predictive maintenance framework for metro APUs and conducted comparative analysis of time-series (VAR), machine learning, and deep learning models; visualized insights in Power BI to support operations and reduce equipment failure rates.',
      image: '/api/placeholder/600/400',
      category: 'Research',
      technologies: ['Time-series Analysis', 'Machine Learning', 'Deep Learning', 'Power BI', 'Predictive Maintenance', 'VAR Models'],
      liveUrl: 'https://github.com/Gowthamiashok/Optimizing-APU-Performance-in-Metro-Trains-Through-Comparative-Analysis',
      githubUrl: 'https://github.com/Gowthamiashok/Optimizing-APU-Performance-in-Metro-Trains-Through-Comparative-Analysis',
      featured: true,
    },
    {
      id: 2,
      title: 'Multi-Source Knowledge Hub: RAG Q&A with LangChain',
      description: 'Developed a centralized Q&A system by integrating sources like Arxiv and Wikipedia using Retrieval-Augmented Generation (RAG) and LangChain, demonstrating proficiency in GenAI pipelines and advanced NLP techniques.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['RAG', 'LangChain', 'GenAI', 'NLP', 'Arxiv API', 'Wikipedia API', 'Python'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Identification and Prediction of Gestational Diabetes',
      description: 'Conducted comparative analysis of multiple neural architectures (FNN, CNN, RNN, hybrid CNN-RNN) for predictive modeling of gestational diabetes, improving accuracy for better healthcare outcomes and clinical decision support.',
      image: '/api/placeholder/600/400',
      category: 'Healthcare',
      technologies: ['Deep Learning', 'TensorFlow', 'PyTorch', 'CNN', 'RNN', 'Healthcare Analytics', 'Medical ML'],
      liveUrl: 'https://github.com/Gowthamiashok/Gestational_Diabetes',
      githubUrl: 'https://github.com/Gowthamiashok/Gestational_Diabetes',
      featured: true,
    },
    {
      id: 4,
      title: 'Healthcare Inventory Management System',
      description: 'Developed Angular-based healthcare inventory management system with Firestore backend and deployed Flask ML models for predictive analytics of kidney disease and COVID-19 risk assessment using Docker.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['Angular', 'Firestore', 'Flask', 'Machine Learning', 'Docker', 'Healthcare Analytics', 'Predictive Modeling'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Psychological Chatbot for Mental Health Support',
      description: 'Developed a rule-based mental health chatbot using ANN model, incorporating basic NLP techniques (tokenization, stop-word removal, stemming, lemmatization) to preprocess user inputs and provide context-aware emotional support and guidance.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['ANN', 'NLP', 'Tokenization', 'Stemming', 'Lemmatization', 'Mental Health', 'Chatbot'],
      liveUrl: 'https://github.com/Gowthamiashok/HealthCare_Chatbot',
      githubUrl: 'https://github.com/Gowthamiashok/HealthCare_Chatbot',
      featured: false,
    },
    {
      id: 6,
      title: 'Business Intelligence Dashboard',
      description: 'Cleaned and structured large business datasets, optimized data workflows, and developed interactive Power BI dashboards to support strategic, data-driven decision-making and market research analysis.',
      image: '/api/placeholder/600/400',
      category: 'Analytics',
      technologies: ['Power BI', 'Data Analysis', 'Business Intelligence', 'Market Research', 'Data Visualization', 'Dashboard Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="projects" className="section-padding">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-max"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my work in machine learning and AI, cloud architecture, and web development. As well as open source contributions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className={`grid gap-8 ${
            filteredProjects.length === 1 
              ? 'grid-cols-1 justify-center max-w-md mx-auto'
              : filteredProjects.length === 2
              ? 'grid-cols-1 md:grid-cols-2 justify-center max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-800 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300 text-lg font-semibold text-center px-4">{project.title}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-400 text-sm rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-500 dark:text-yellow-400 text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 text-center group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-center text-sm py-2 px-6"
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Interested in Working Together?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Let's Discuss Your Project
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
