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

  const [activeFilter, setActiveFilter] = useState('Featured')

  const filters = ['Featured', 'All', 'AI/ML', 'Healthcare', 'Full Stack', 'Analytics', 'Automation']

  const projects = [
    {
      id: 1,
      title: 'Optimizing APU Performance in Metro Trains through Comparative Analysis',
      description: 'Developed a predictive maintenance system for metro train APUs, combining machine learning, deep learning, and time-series models for fault detection and signal forecasting. Used Power BI for sensor analytics, with XGBoost delivering top classification accuracy and hybrid ANN-CNN models excelling in deep learning; supported operations in reducing APU failure rates and service disruptions.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['Machine Learning', 'Deep Learning', 'Time-series Analysis', 'Power BI', 'XGBoost', 'ANN-CNN'],
      liveUrl: 'https://github.com/Gowthamiashok/Optimizing-APU-Performance-in-Metro-Trains-Through-Comparative-Analysis',
      githubUrl: 'https://github.com/Gowthamiashok/Optimizing-APU-Performance-in-Metro-Trains-Through-Comparative-Analysis',
      featured: true,
    },
    {
      id: 2,
      title: 'Cold Email Automation',
      description: 'Designed a workflow automation solution for running cold email campaigns using N8N and Gmail API. Implemented dynamic template rendering, automated file attachment, and scheduler triggers to enable mass outreach for recruitment and networking with personalized content.',
      image: '/api/placeholder/600/400',
      category: 'Automation',
      technologies: ['N8N', 'Gmail API', 'Workflow Automation', 'Email Campaigns', 'Template Rendering', 'Scheduler'],
      liveUrl: 'https://github.com/Gowthamiashok/cold-email-automation',
      githubUrl: 'https://github.com/Gowthamiashok/cold-email-automation',
      featured: true,
    },
    {
      id: 3,
      title: 'Multi Source Knowledge Hub RAG QA using LangChain',
      description: 'Engineered a Retrieval-Augmented Generation (RAG) QA system with LangChain, integrating multiple structured and unstructured data sources. Enabled advanced document retrieval, semantic search, and conversational answering for scalable enterprise knowledge management.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['RAG', 'LangChain', 'Document Retrieval', 'Semantic Search', 'Conversational AI', 'Knowledge Management'],
      liveUrl: 'https://github.com/Gowthamiashok/Multi-Source-Knowledge-Hub-RAG-QA-with-LangChain',
      githubUrl: 'https://github.com/Gowthamiashok/Multi-Source-Knowledge-Hub-RAG-QA-with-LangChain',
      featured: true,
    },
    {
      id: 4,
      title: 'Fine Tuning LLama with PEFT for Question Answering Task using Unsloth',
      description: 'Experimented with fine-tuning Llama models using Parameter-Efficient Fine-Tuning (PEFT) libraries, focusing on question-answering tasks. Leveraged Unsloth for optimized domain adaptation and reduced resource requirements while maintaining high answer quality.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['Llama', 'PEFT', 'Unsloth', 'Fine-tuning', 'Question Answering', 'Domain Adaptation'],
      liveUrl: 'https://github.com/Gowthamiashok/Fine-Tuning-Llama-with-PEFT-for-Question-Answering-Task-using-Unsloth',
      githubUrl: 'https://github.com/Gowthamiashok/Fine-Tuning-Llama-with-PEFT-for-Question-Answering-Task-using-Unsloth',
      featured: true,
    },
    {
      id: 5,
      title: 'Identification and Prediction of Gestational Diabetes',
      description: 'Built machine learning pipelines to identify and forecast gestational diabetes risk in expectant mothers. Applied neural network models and feature selection for improved clinical screening, supporting proactive healthcare interventions.',
      image: '/api/placeholder/600/400',
      category: 'Healthcare',
      technologies: ['Machine Learning', 'Neural Networks', 'Feature Selection', 'Clinical Screening', 'Healthcare Analytics', 'Risk Prediction'],
      liveUrl: 'https://github.com/Gowthamiashok/Gestational_Diabetes',
      githubUrl: 'https://github.com/Gowthamiashok/Gestational_Diabetes',
      featured: true,
    },
    {
      id: 6,
      title: 'Psychological Chatbot',
      description: 'Developed an intelligent conversational agent for preliminary psychological support. Integrated NLP models for emotion detection, stress assessment, and mental wellness recommendations, aiming to enhance user interaction and accessibility.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['NLP', 'Conversational AI', 'Emotion Detection', 'Mental Health', 'Chatbot', 'Psychological Support'],
      liveUrl: 'https://github.com/Gowthamiashok/HealthCare_Chatbot',
      githubUrl: 'https://github.com/Gowthamiashok/HealthCare_Chatbot',
      featured: true,
    },
    {
      id: 7,
      title: 'Fake News Detection using Deep Learning',
      description: 'Implemented hybrid deep learning models (CNN, LSTM, GRU-Attention) for classifying news authenticity. Achieved state-of-the-art accuracy through feature engineering, embedding techniques, and robust cross-validation, enabling effective fake news mitigation.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['Deep Learning', 'CNN', 'LSTM', 'GRU-Attention', 'Feature Engineering', 'Text Classification'],
      liveUrl: 'https://github.com/Gowthamiashok/Fake-News-Detection-using-Deep-Learning',
      githubUrl: 'https://github.com/Gowthamiashok/Fake-News-Detection-using-Deep-Learning',
      featured: false,
    },
    {
      id: 8,
      title: 'Airline Passenger Satisfaction',
      description: 'Designed and published interactive Tableau dashboards to analyze airline passenger satisfaction metrics. Visualized trends, service correlations, and demographic breakdowns to derive actionable insights for airline customer experience improvements.',
      image: '/api/placeholder/600/400',
      category: 'Analytics',
      technologies: ['Tableau', 'Data Visualization', 'Customer Analytics', 'Dashboard Design', 'Business Intelligence', 'Satisfaction Analysis'],
      liveUrl: 'https://github.com/Gowthamiashok/Airline-Passenger-Satisfaction-Analysis-using-Tableau',
      githubUrl: 'https://github.com/Gowthamiashok/Airline-Passenger-Satisfaction-Analysis-using-Tableau',
      featured: false,
    },
    {
      id: 9,
      title: 'Chronic Kidney Disease Prediction and Feature Analysis',
      description: 'Developed supervised learning models for early detection of chronic kidney disease from patient lab records. Conducted feature analysis and interpretable classification, contributing to improved preventive diagnosis.',
      image: '/api/placeholder/600/400',
      category: 'Healthcare',
      technologies: ['Supervised Learning', 'Feature Analysis', 'Medical Diagnosis', 'Predictive Modeling', 'Healthcare Analytics', 'Disease Prediction'],
      liveUrl: 'https://github.com/Gowthamiashok/Chronic-Kidney-Disease-Prediction-Feature-Analysis',
      githubUrl: 'https://github.com/Gowthamiashok/Chronic-Kidney-Disease-Prediction-Feature-Analysis',
      featured: false,
    },
    {
      id: 10,
      title: 'E-commerce Office Supplies Website',
      description: 'Built a full-stack web platform for office supply sales, featuring deep product catalog integration, secure authentication, shopping cart, and payment gateway modules.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['Full Stack Development', 'E-commerce', 'Product Catalog', 'Authentication', 'Shopping Cart', 'Payment Gateway'],
      liveUrl: 'https://github.com/Gowthamiashok/E-Commerce_Office_Supplies_Website',
      githubUrl: 'https://github.com/Gowthamiashok/E-Commerce_Office_Supplies_Website',
      featured: false,
    },
    {
      id: 11,
      title: 'Campus Recruitment Prediction',
      description: 'Used statistical and machine learning methods to predict student placement outcomes based on academic and skill profiles. Delivered decision support through detailed feature analyses for campus recruiters.',
      image: '/api/placeholder/600/400',
      category: 'Analytics',
      technologies: ['Machine Learning', 'Statistical Analysis', 'Predictive Modeling', 'Feature Analysis', 'Recruitment Analytics', 'Decision Support'],
      liveUrl: 'https://github.com/Gowthamiashok/Machine-Learning-Projects/tree/main/Campus%20Recruitment',
      githubUrl: 'https://github.com/Gowthamiashok/Machine-Learning-Projects/tree/main/Campus%20Recruitment',
      featured: false,
    },
    {
      id: 12,
      title: 'Covid 19 Prediction using R',
      description: 'Implemented R-based time-series and regression models to predict regional COVID-19 outbreaks. Cleaned and visualized health datasets to assist public health monitoring.',
      image: '/api/placeholder/600/400',
      category: 'Analytics',
      technologies: ['R Programming', 'Time-series Analysis', 'Regression Models', 'Data Visualization', 'Public Health', 'Epidemiology'],
      liveUrl: 'https://github.com/Gowthamiashok/Machine-Learning-Projects/tree/main/Covid-19%20Prediction%20using%20R',
      githubUrl: 'https://github.com/Gowthamiashok/Machine-Learning-Projects/tree/main/Covid-19%20Prediction%20using%20R',
      featured: false,
    },
    {
      id: 13,
      title: 'Employee Turnover Prediction',
      description: 'Applied HR analytics and classification models for employee attrition forecasting. Identified retention drivers and risk factors using feature engineering and predictive insights.',
      image: '/api/placeholder/600/400',
      category: 'Analytics',
      technologies: ['HR Analytics', 'Classification Models', 'Predictive Analytics', 'Feature Engineering', 'Employee Retention', 'Attrition Analysis'],
      liveUrl: 'https://github.com/Gowthamiashok/Machine-Learning-Projects/tree/main/Employee%20Turnover%20Prediction',
      githubUrl: 'https://github.com/Gowthamiashok/Machine-Learning-Projects/tree/main/Employee%20Turnover%20Prediction',
      featured: false,
    },
    {
      id: 14,
      title: 'Spam Detection',
      description: 'Developed spam classification tools employing NLP feature extraction and supervised learning algorithms like Naïve Bayes and SVM, achieving reliable filtering across messaging datasets.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['NLP', 'Naïve Bayes', 'SVM', 'Feature Extraction', 'Text Classification', 'Spam Filtering'],
      liveUrl: 'https://github.com/Gowthamiashok/Machine-Learning-Projects/tree/main/Spam%20Detection',
      githubUrl: 'https://github.com/Gowthamiashok/Machine-Learning-Projects/tree/main/Spam%20Detection',
      featured: false,
    },
    {
      id: 15,
      title: 'Language Translator using Python',
      description: 'Built a Python application for fast, multi-language text translation, integrating API requests and user-friendly GUI for seamless conversion between global languages.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['Python', 'API Integration', 'GUI Development', 'Translation Services', 'Multi-language Support', 'Text Processing'],
      liveUrl: 'https://github.com/Gowthamiashok/Language_Translator_using_Python',
      githubUrl: 'https://github.com/Gowthamiashok/Language_Translator_using_Python',
      featured: false,
    },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : activeFilter === 'Featured'
    ? projects.filter(project => project.featured)
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
