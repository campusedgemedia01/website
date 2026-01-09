import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, ArrowRight } from 'lucide-react'
import './UniversityPartners.css'

const UniversityPartners = () => {
  const partners = [
    {
      name: "Vedam School of Technology",
      type: "Technology Education",
      focus: "Innovation in Tech"
    },
    {
      name: "Polaris School of Technology", 
      type: "Computer Science & AI",
      focus: "Cutting-edge Learning"
    },
    {
      name: "Scaler School of Technology",
      type: "Software Engineering",
      focus: "Industry-Ready Skills"
    },
    {
      name: "Newton School of Technology",
      type: "Full-Stack Development",
      focus: "Practical Training"
    },
    {
      name: "Masai College",
      type: "Tech Education",
      focus: "Career-Focused Learning"
    },
    {
      name: "LPU",
      type: "University",
      focus: "Comprehensive Education"
    },
    {
      name: "Quantum University",
      type: "Technology & Sciences",
      focus: "Future-Ready Skills"
    },
    {
      name: "Rishihood University",
      type: "Liberal Education",
      focus: "Holistic Development"
    },
    {
      name: "Allen Kota",
      type: "Test Preparation",
      focus: "JEE & NEET Excellence"
    },
    {
      name: "Motion Kota",
      type: "Coaching Institute",
      focus: "Competitive Exam Prep"
    },
    {
      name: "Disha Publication",
      type: "Educational Content",
      focus: "Study Materials"
    },
    {
      name: "Oswaal Books",
      type: "Educational Publisher",
      focus: "Quality Publications"
    },
    {
      name: "MTG Books",
      type: "Educational Publisher",
      focus: "Exam Preparation"
    },
    {
      name: "Arihant",
      type: "Publishing House",
      focus: "Academic Excellence"
    },
    {
      name: "Rancho Revision",
      type: "Exam Preparation",
      focus: "Quick Revision"
    },
    {
      name: "Unacademy",
      type: "Ed-Tech Platform",
      focus: "Online Learning"
    },
    {
      name: "Aakash",
      type: "Coaching Institute",
      focus: "Medical & Engineering"
    },
    {
      name: "Vedantu",
      type: "Online Education",
      focus: "Live Learning Platform"
    },
    {
      name: "Masters Union",
      type: "Business School",
      focus: "Entrepreneurship & MBA"
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
            <span>Trusted Partnerships</span>
          </div>
          <h2>Partners We Have Worked With</h2>
          <p className="large-text">
            Proud to collaborate with leading educational institutions, coaching centers, 
            publishers, and ed-tech platforms to deliver exceptional marketing results and reach millions of students.
          </p>
        </motion.div>

        <motion.div 
          className="universities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner, index) => (
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
                <h4 className="university-name">{partner.name}</h4>
                <div className="university-type">{partner.type}</div>
                <p className="university-focus">{partner.focus}</p>
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
              <div className="stat-number">19+</div>
              <div className="stat-label">Brand Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
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
