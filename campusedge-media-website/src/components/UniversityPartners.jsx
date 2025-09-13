import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, ArrowRight } from 'lucide-react'
import './UniversityPartners.css'

const UniversityPartners = () => {
  const universities = [
    {
      name: "Vedam School of Technology",
      type: "Engineering & Technology",
      focus: "Innovation in Tech Education"
    },
    {
      name: "Polaris School of Technology", 
      type: "Computer Science & AI",
      focus: "Cutting-edge Research"
    },
    {
      name: "Scaler School of Technology",
      type: "Software Engineering",
      focus: "Industry-Ready Skills"
    },
    {
      name: "Newton School of Technology",
      type: "Full-Stack Development",
      focus: "Practical Learning"
    },
    {
      name: "Quantum University",
      type: "Technology & Sciences",
      focus: "Quantum Computing Research"
    },
    {
      name: "MIT WPU",
      type: "Engineering & Management",
      focus: "Holistic Development"
    },
    {
      name: "DTU",
      type: "Engineering & Technology",
      focus: "Academic Excellence"
    },
    {
      name: "NSUT",
      type: "Technology & Engineering",
      focus: "Technical Innovation"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="universities" className="universities section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">
            <GraduationCap size={20} />
            <span>Educational Excellence</span>
          </div>
          <h2>University Partners</h2>
          <p className="large-text">
            Strategic partnerships with leading educational institutions that share our commitment 
            to innovation, technology, and preparing the next generation of digital leaders.
          </p>
        </motion.div>

        <motion.div 
          className="universities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {universities.map((university, index) => (
            <motion.div 
              key={index} 
              className="university-card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="university-header">
                <div className="university-icon">
                  <GraduationCap size={28} />
                </div>
                <div className="university-badge">
                  <Award size={16} />
                </div>
              </div>

              <div className="university-content">
                <h4 className="university-name">{university.name}</h4>
                <div className="university-type">{university.type}</div>
                <p className="university-focus">{university.focus}</p>
              </div>

              <div className="university-footer">
                <div className="partnership-badge">
                  <Users size={16} />
                  <span>Strategic Partner</span>
                </div>
                <div className="university-arrow">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="universities-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">University Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Students Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UniversityPartners
