import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Trophy } from 'lucide-react'
import { Link } from 'react-scroll'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const stats = [
    { icon: Users, value: "50K+", label: "Creators Network" },
    { icon: Star, value: "95%", label: "Success Rate" },
    { icon: Trophy, value: "100+", label: "Brand Partners" }
  ]

  return (
    <section id="hero" className="hero section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-text">
              🚀 Premier Tech Marketing Agency
            </span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Connecting Brands with Top 
            <span className="text-gradient"> Content Creators</span> & 
            <span className="text-gradient"> Educational Excellence</span>
          </motion.h1>

          <motion.p className="hero-subtitle large-text" variants={itemVariants}>
            Your premier tech marketing agency for authentic brand partnerships 
            and strategic influencer marketing that drives real results and meaningful connections.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-primary hero-cta">
                Partner With Us
                <ArrowRight size={20} />
              </button>
            </Link>
            
            <Link to="services" smooth={true} duration={500} offset={-80}>
              <button className="btn-secondary">
                <Play size={20} />
                Watch Our Story
              </button>
            </Link>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="visual-card card-1">
            <div className="card-content">
              <div className="card-icon">
                <Users size={32} />
              </div>
              <h4>Creator Network</h4>
              <p>Premium partnerships with top content creators</p>
            </div>
          </div>

          <div className="visual-card card-2">
            <div className="card-content">
              <div className="card-icon">
                <Trophy size={32} />
              </div>
              <h4>Brand Success</h4>
              <p>Proven track record with leading tech brands</p>
            </div>
          </div>

          <div className="visual-card card-3">
            <div className="card-content">
              <div className="card-icon">
                <Star size={32} />
              </div>
              <h4>Educational Excellence</h4>
              <p>Strategic partnerships with top universities</p>
            </div>
          </div>

          {/* Central floating element */}
          <div className="visual-card card-center">
            <div className="card-content">
              <div className="card-icon center-icon">
                <ArrowRight size={32} />
              </div>
              <h4>Connect</h4>
              <p>Bridging brands and creators</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  )
}

export default Hero
