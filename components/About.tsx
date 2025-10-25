'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Programming & Web Development',
      skills: ['Python', 'R', 'MATLAB', 'Java', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Streamlit']
    },
    {
      title: 'Data Science & AI',
      skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Keras', 'NLP', 'Statistics', 'Data Mining', 'LLMs', 'RAG', 'AI Agents', 'n8n Workflows']
    },
    {
      title: 'Data Tools & Analytics',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'Tableau', 'Power BI', 'Excel', 'AWS', 'Docker', 'RESTful APIs', 'Git']
    }
  ]

  const certifications = [
    {
      title: 'Hugging Face AI Agents',
      issuer: 'Hugging Face',
      date: 'July 2025'
    },
    {
      title: 'AWS Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'October 2022'
    },
    {
      title: 'SQL for Data Science',
      issuer: 'Coursera',
      date: 'March 2023'
    },
    {
      title: 'SQL (Basics) Skill Certification Test',
      issuer: 'Hackerrank',
      date: 'February 2025'
    },
    {
      title: 'Python Training',
      issuer: 'Spoken Tutorial Project, IIT Bombay',
      date: 'April 2024'
    },
    {
      title: 'Data Engineering for Everyone',
      issuer: 'Data Camp',
      date: 'June 2022'
    }
  ]

  const timeline = [
    {
      year: 'July 2025 - Present',
      title: 'AI Engineer',
      company: 'Xerago',
      category: 'work',
      description: [
        'Conducted an in-depth assessment of the legacy SQL OLAP environment, documenting data models, dependencies, and reporting workflows to understand existing analytical systems.',
        'Designed the data modernization architecture and led the migration to a scalable EL system using Meltano and ClickHouse, enabling faster analytical queries and storage efficiency.',
        'Built and automated full-load and incremental data migration pipelines, successfully migrating all source systems and establishing a stable EL data layer.',
        'Currently replicating production analytical workflows using dbt, implementing modular and testable transformations to form the new semantic and reporting layer.',
        'Using Apache Arrow (PyArrow) for optimized in-memory columnar processing and efficient interchange between pipeline components.',
        'Orchestrating end-to-end workflows in Apache Airflow, ensuring reliable scheduling, monitoring, and maintainability of enterprise data pipelines.'
      ],
      technologies: ['Apache Airflow', 'Clickhouse', 'Meltano', 'dbt', 'Pyarrow', 'SQL', 'Data Pipelines'],
    },
    {
      year: 'March 2025 - June 2025',
      title: 'Data and Business Analyst Intern',
      company: 'ABEX',
      category: 'internship',
      description: [
        'Cleaned, structured, and optimized large business datasets, improving data workflows and developing interactive Power BI dashboards to support strategic, data-driven decision-making.',
        'Conducted market research and assisted in lead identification, helping uncover new business opportunities and contributing to enhanced client engagement strategies.'
      ],
      technologies: ['Power BI', 'Data Analysis', 'Market Research', 'Business Intelligence', 'Lead Identification'],
    },
    {
      year: 'May 2023 - July 2023',
      title: 'UX Developer Intern',
      company: 'IDP Education India Services LLP',
      category: 'internship',
      description: [
        'Enhanced IDP and IELTS web templates with responsive UI design, implementing media queries to ensure consistent, multi-device performance and accessibility.',
        'Collaborated with design and product teams to align interface improvements with stakeholder requirements and maintain brand and usability standards.'
      ],
      technologies: ['Responsive Design', 'Media Queries', 'UI/UX', 'Web Templates', 'Accessibility', 'Brand Standards'],
    },
    {
      year: 'April 2022 - June 2022',
      title: 'Full Stack and ML Developer Intern',
      company: 'HealthMed Technologies Private Limited',
      category: 'internship',
      description: [
        'Developed Angular-based healthcare inventory management system with Firestore backend and deployed Flask ML models for predictive analytics of kidney disease and COVID-19 risk assessment.',
        'Collaborated with healthcare professionals to gather clinical requirements and ensure model accuracy for real-world medical applications.'
      ],
      technologies: ['Angular', 'Firestore', 'Flask', 'Machine Learning', 'Docker', 'Healthcare Analytics'],
    },
    {
      year: '2023 - Present',
      title: 'M.Sc. Data Science',
      company: 'Vellore Institute of Technology, Chennai',
      category: 'education',
      description: 'Pursuing Master\'s in Data Science with focus on Machine Learning, Deep Learning, NLP, Statistics, LLMs, and RAG. CGPA: 8.44',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Statistics', 'LLMs', 'RAG', 'SQL'],
    },
    {
      year: '2020 - 2023',
      title: 'B.Sc. Data Science',
      company: 'Sri Ramachandra Faculty of Engineering and Technology',
      category: 'education',
      description: 'Bachelor\'s in Data Science covering Python, R, Java, Tableau, Data Mining, Machine Learning, and Flask. CGPA: 9.08',
      technologies: ['Python', 'R', 'Java', 'Tableau', 'Data Mining', 'Machine Learning', 'Flask'],
    },
  ]

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
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data Science practitioner with hands-on experience in healthcare analytics, machine learning, and statistical modeling. 
            Currently exploring Generative AI with a focus on RAG and experimenting with AI agents and automation.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Skills & Expertise</h3>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-xl hover:shadow-lg hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Certifications</h3>
          <div className="flex justify-center">
            <div className="max-w-6xl">
              {/* First row - 3 cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {certifications.slice(0, 3).map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect p-6 rounded-xl hover:shadow-lg hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {cert.date}
                    </p>
                  </motion.div>
                ))}
              </div>
              {/* Second row - remaining cards laid out in three columns */}
              <div className="grid md:grid-cols-3 gap-6 mb-6 max-w-6xl mx-auto">
                {certifications.slice(3).map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: (index + 3) * 0.1 }}
                    className="glass-effect p-6 rounded-xl hover:shadow-lg hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {cert.date}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Career Journey</h3>
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative mb-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-dark-800 transition-colors duration-300 group-hover:bg-blue-500 z-10"></div>
                
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8 ml-auto'}`}>
                  <div className="glass-effect p-6 rounded-xl hover:shadow-lg hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer group text-left">
                    {/* Category Tag */}
                    <div className="flex justify-start mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        item.category === 'work' 
                          ? 'bg-blue-500 text-white' 
                          : item.category === 'internship'
                          ? 'bg-green-500 text-white'
                          : 'bg-purple-500 text-white'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {item.title}
                    </h4>
                    
                    {/* Company and Date */}
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {item.company}
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Description */}
                    {Array.isArray(item.description) ? (
                      <ul className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed list-disc list-inside">
                        {item.description.map((line, i) => (
                          <li key={i} className="mb-1">{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Touch */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Beyond Code</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, 
              or sharing knowledge with the developer community. I'm also an artist who loves creating murals and 
              paintings, often volunteering my artistic skills for community projects. I believe in continuous learning, 
              staying updated with the latest technologies, and using creativity to deliver the best solutions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
