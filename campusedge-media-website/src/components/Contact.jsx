import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import './Contact.css'

const Contact = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7060306195",
      description: "Available Monday to Friday, 9 AM - 6 PM IST"
    },
    {
      icon: Mail,
      title: "Email",
      value: "campusedgemedia01@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      description: "Serving clients globally"
    }
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
    hidden: { y: 30, opacity: 0 },
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
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">
            <Send size={20} />
            <span>Get In Touch</span>
          </div>
          <h2>Get In Touch With Us</h2>
          <p className="large-text">
            Ready to elevate your brand through authentic partnerships and strategic 
            influencer marketing? Contact us directly using the information below to discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contact-content-centered">
            {/* Contact Information */}
            <motion.div className="contact-info-section" variants={itemVariants}>
              <div className="contact-info-header">
                <h3>Get in touch</h3>
                <p>
                  We're here to answer your questions and discuss how we can help 
                  your brand connect with the right audience through strategic partnerships.
                </p>
              </div>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div 
                      key={index} 
                      className="contact-info-card"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="info-icon">
                        <IconComponent size={24} />
                      </div>
                      <div className="info-content">
                        <h4 className="info-title">{info.title}</h4>
                        <div className="info-value">{info.value}</div>
                        <p className="info-description">{info.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <div className="contact-cta">
                <h4>Ready to start?</h4>
                <p>
                  Join the brands and creators who trust CampusEdge Media to deliver 
                  exceptional results through authentic partnerships.
                </p>
                <div className="cta-stats">
                  <div className="cta-stat">
                    <div className="stat-number">24hr</div>
                    <div className="stat-label">Response Time</div>
                  </div>
                  <div className="cta-stat">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
