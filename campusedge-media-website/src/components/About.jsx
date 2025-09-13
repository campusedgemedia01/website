import React from 'react'
import { motion } from 'framer-motion'
import { Award, Target, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-scroll'
import './About.css'

const About = () => {
  const differentiators = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Years of successful partnerships with top creators and leading brands, delivering consistent results and measurable growth.",
      stats: "95% Success Rate"
    },
    {
      icon: Users,
      title: "Strong Relationships",
      description: "Deep connections with leading tech universities and educational institutions, opening unique collaboration opportunities.",
      stats: "8+ University Partners"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Strategies",
      description: "Advanced analytics and performance tracking ensure every campaign is optimized for maximum ROI and engagement.",
      stats: "3x Average ROI"
    },
    {
      icon: Target,
      title: "Authentic Brand Storytelling",
      description: "Creative campaigns that resonate authentically with your target audience, building lasting brand loyalty and trust.",
      stats: "50K+ Engaged Users"
    }
  ]

  const achievements = [
    "100+ successful brand partnerships executed",
    "50,000+ engaged audience members reached",
    "95% client satisfaction and retention rate",
    "Award-winning creative campaigns delivered",
    "24/7 dedicated support and consultation",
    "Industry-leading ROI and performance metrics"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">
            <Target size={20} />
            <span>Why Choose Us</span>
          </div>
          <h2>Why CampusEdge Media?</h2>
          <p className="large-text">
            We combine industry expertise, authentic relationships, and innovative strategies 
            to deliver exceptional results that exceed expectations and drive real growth.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div 
          className="differentiators-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {differentiators.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div 
                key={index} 
                className="differentiator-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="differentiator-header">
                  <div className="differentiator-icon">
                    <IconComponent size={32} />
                  </div>
                  <div className="differentiator-stats">
                    {item.stats}
                  </div>
                </div>

                <div className="differentiator-content">
                  <h3 className="differentiator-title">{item.title}</h3>
                  <p className="differentiator-description">{item.description}</p>
                </div>

                <div className="differentiator-arrow">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* About Content */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="about-grid">
            <div className="about-text">
              <h3>Connecting Brands with Excellence</h3>
              <p>
                At CampusEdge Media, we believe in the power of authentic connections. 
                Our unique position at the intersection of technology, education, and 
                content creation allows us to forge meaningful partnerships that deliver 
                exceptional results for both brands and creators.
              </p>
              <p>
                We don't just run campaigns – we build relationships. Our deep understanding 
                of both the creator economy and educational landscape enables us to craft 
                strategies that resonate with audiences and drive meaningful engagement.
              </p>

              <div className="about-achievements">
                <h4>Our Achievements</h4>
                <ul className="achievements-list">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="achievement-item">
                      <CheckCircle size={20} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="about-visual">
              <div className="visual-card main-card">
                <div className="card-header">
                  <div className="card-icon">
                    <Target size={24} />
                  </div>
                  <h4>Our Mission</h4>
                </div>
                <p>
                  Bridging the gap between innovative brands and influential creators 
                  through strategic partnerships that drive authentic engagement and 
                  meaningful growth in the tech and education sectors.
                </p>
              </div>

              <div className="visual-card secondary-card">
                <div className="card-header">
                  <div className="card-icon">
                    <Users size={24} />
                  </div>
                  <h4>Our Vision</h4>
                </div>
                <p>
                  To become the premier platform for authentic brand partnerships, 
                  connecting the most innovative companies with the most influential 
                  voices in technology and education.
                </p>
              </div>

              <div className="stats-overlay">
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Partnerships</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Audience</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="about-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Ready to partner with us?</h3>
          <p>
            Join the brands and creators who trust CampusEdge Media to deliver 
            exceptional results through authentic partnerships and innovative strategies.
          </p>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="btn-primary about-cta-btn">
              Start Partnership
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default About
