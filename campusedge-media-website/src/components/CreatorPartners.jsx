import React from 'react'
import { motion } from 'framer-motion'
import { Youtube, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-scroll'
import './CreatorPartners.css'

// Import creator images
import snehitImg from '../assets/snehit.jpg'
import sankalpImg from '../assets/sankalp jauhari.jpg'
import harshitaImg from '../assets/harshita singh.png'
import eknoorImg from '../assets/eknoor singh.png'
import akashImg from '../assets/akash jaiswal.png'
import collegeImg from '../assets/college wali didi.jpg'
import zakiImg from '../assets/zaki saudagar.png'
import yashImg from '../assets/yash garg.png'
import ritikMImg from '../assets/ritik meghwani.png'
import nitianImg from '../assets/nitian saurabh.png'
import rohitImg from '../assets/rohit shaw.png'
import bharatImg from '../assets/bharat panchal.png'
import ritikBImg from '../assets/ritik baheti.png'
import prashantImg from '../assets/prashant singh iit bombay.png'
import vivaanImg from '../assets/vivaan gupta.png'
import ajayImg from '../assets/ajay singh.jpg'
import rohitNagarImg from '../assets/Rohit Nagar.png'
import aryanZaveriImg from '../assets/Aryan Zaveri.png'
import aryanBhaiyaImg from '../assets/Aryan Bhaiya iit bombay.png'
import jeeNerdsImg from '../assets/Jee Nerds.png'
import iqlipseNovaImg from '../assets/iqlipse Nova.png'
import shubhamKumarImg from '../assets/Shubham Kumar NIT Kurukshetra.png'
import jazbaatiImg from '../assets/Jazbaati Saxena.png'

const CreatorPartners = () => {
  const creators = [
    {
      name: "Sankalp Jauhari",
      niche: "Educational Content",
      description: "Expert in educational technology and career guidance content",
      image: sankalpImg
    },
    {
      name: "Ajay Singh",
      niche: "Tech & Education",
      description: "Educational content creator focused on technology and student success",
      image: ajayImg
    },
    {
      name: "Snehit Mishra",
      niche: "Tech Reviews & Tutorials",
      description: "Leading tech content creator specializing in gadget reviews and programming tutorials",
      image: snehitImg
    },
    {
      name: "Self Padhai - Rohit Nagar",
      niche: "Self-Study & Motivation",
      description: "Motivational content for self-learners and exam preparation",
      image: rohitNagarImg
    },
    {
      name: "Aryan Zaveri",
      niche: "Tech & Programming",
      description: "Programming tutorials and technology insights for students",
      image: aryanZaveriImg
    },
    {
      name: "Aryan Bhaiya IIT Bombay",
      niche: "IIT JEE Preparation",
      description: "IIT Bombay student sharing JEE strategies and academic guidance",
      image: aryanBhaiyaImg
    },
    {
      name: "Akash Jaiswal",
      niche: "Tech News & Reviews",
      description: "Tech enthusiast covering latest gadgets and technology trends",
      image: akashImg
    },
    {
      name: "JEE Nerds",
      niche: "JEE Preparation",
      description: "Comprehensive JEE preparation content and study strategies",
      image: jeeNerdsImg
    },
    {
      name: "Eknoor Singh",
      niche: "Programming & Development",
      description: "Full-stack developer creating coding tutorials and tech insights",
      image: eknoorImg
    },
    {
      name: "Rohit Shaw",
      niche: "Web Development",
      description: "Frontend developer creating modern web development content",
      image: rohitImg
    },
    {
      name: "Harshita Singh",
      niche: "Lifestyle & Tech",
      description: "Popular lifestyle and technology content creator with engaged audience",
      image: harshitaImg
    },
    {
      name: "Iqlipse Nova",
      niche: "JEE Simplified",
      description: "Simplifying JEE concepts with innovative teaching methods",
      image: iqlipseNovaImg
    },
    {
      name: "Shubham Kumar NIT Kurukshetra",
      niche: "Engineering & Tech",
      description: "NIT student sharing engineering insights and tech tutorials",
      image: shubhamKumarImg
    },
    {
      name: "Jazbaati Saxena",
      niche: "Motivational Content",
      description: "Motivational speaker creating inspiring educational content",
      image: jazbaatiImg
    },
    {
      name: "College wali didi",
      niche: "Student Life & Education",
      description: "Educational content focused on student life and academic success",
      image: collegeImg
    },
    {
      name: "Zaki Saudagar",
      niche: "Tech & Innovation",
      description: "Technology innovator sharing insights on emerging tech trends",
      image: zakiImg
    },
    {
      name: "Yash Garg",
      niche: "Programming & Coding",
      description: "Software engineer creating comprehensive programming tutorials",
      image: yashImg
    },
    {
      name: "Ritik Meghwani",
      niche: "Digital Marketing",
      description: "Digital marketing expert sharing strategies and growth hacks",
      image: ritikMImg
    },
    {
      name: "Nitian Saurabh",
      niche: "Career & Tech",
      description: "Career guidance and technology insights for students and professionals",
      image: nitianImg
    },
    {
      name: "Bharat Panchal",
      niche: "Tech Entrepreneurship",
      description: "Entrepreneur sharing startup insights and business technology",
      image: bharatImg
    },
    {
      name: "Ritik Baheti",
      niche: "Data Science & AI",
      description: "Data scientist exploring AI, machine learning, and analytics",
      image: ritikBImg
    },
    {
      name: "Prashant Singh IIT Bombay",
      niche: "IIT JEE & College Life",
      description: "IIT Bombay student sharing JEE preparation and campus experiences",
      image: prashantImg
    },
    {
      name: "Vivaan Gupta",
      niche: "Tech & Motivation",
      description: "Technology content with motivational insights for students",
      image: vivaanImg
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="creators" className="creators section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">
            <Youtube size={20} />
            <span>Premium Creator Network</span>
          </div>
          <h2>Our Creator Partners</h2>
          <p className="large-text">
            We collaborate with top-tier content creators who share our vision of authentic, 
            impactful brand partnerships that resonate with their dedicated audiences.
          </p>
        </motion.div>

        <motion.div 
          className="creators-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {creators.map((creator, index) => (
            <motion.div 
              key={index} 
              className="creator-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="creator-avatar">
                <div className="avatar-image">
                  <img 
                    src={creator.image} 
                    alt={creator.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="avatar-fallback">
                    <Users size={32} />
                  </div>
                </div>
                <div className="creator-badge">
                  <Youtube size={16} />
                </div>
              </div>
              
              <div className="creator-info">
                <h4 className="creator-name">{creator.name}</h4>
                <div className="creator-niche">{creator.niche}</div>
                <p className="creator-description">{creator.description}</p>
              </div>

              <div className="creator-stats">
                <div className="stat">
                  <div className="stat-value">Premium</div>
                  <div className="stat-label">Partner</div>
                </div>
                <div className="creator-arrow">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="creators-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Ready to join our network?</h3>
          <p>
            We're always looking for talented creators who share our passion for 
            authentic brand partnerships and quality content.
          </p>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="btn-primary">
              Join Our Network
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CreatorPartners
