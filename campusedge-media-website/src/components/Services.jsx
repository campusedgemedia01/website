import React from 'react'
import { motion } from 'framer-motion'
import { Handshake, TrendingUp, Target, Users, BarChart3, Lightbulb, ArrowRight } from 'lucide-react'
import { Link } from 'react-scroll'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: Handshake,
      title: "Brand Partnerships",
      description: "We create authentic connections between your brand and top content creators, ensuring meaningful collaborations that drive real results and build lasting relationships with engaged audiences.",
      features: [
        "Curated creator matching",
        "Authentic content creation",
        "Performance tracking",
        "Long-term partnerships"
      ]
    },
    {
      icon: TrendingUp,
      title: "Influencer Marketing",
      description: "Strategic campaigns that leverage our network of trusted creators and educational institutions to amplify your brand's reach in the tech space with data-driven precision.",
      features: [
        "Strategic campaign planning",
        "Multi-platform execution",
        "Real-time analytics",
        "ROI optimization"
      ]
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: "Proven Track Record",
      description: "Years of successful partnerships with top creators and leading brands"
    },
    {
      icon: Users,
      title: "Strong Relationships",
      description: "Deep connections with tech universities and educational institutions"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategies",
      description: "Advanced analytics and performance tracking for optimal results"
    },
    {
      icon: Lightbulb,
      title: "Authentic Storytelling",
      description: "Creative campaigns that resonate with your target audience"
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
    <section id="services" className="services section">
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
            <span>What We Do</span>
          </div>
          <h2>Our Services</h2>
          <p className="large-text">
            We specialize in creating meaningful connections between brands and audiences 
            through strategic partnerships and innovative marketing campaigns.
          </p>
        </motion.div>

        {/* Main Services */}
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div 
                key={index} 
                className="service-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <div className="feature-dot"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="service-action">
                  <Link to="contact" smooth={true} duration={500} offset={-80}>
                    <button className="service-btn">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="benefits-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="benefits-header text-center">
            <h3>Why Choose CampusEdge Media?</h3>
            <p>
              We bring together years of expertise, strong industry relationships, 
              and innovative strategies to deliver exceptional results for our partners.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div 
                  key={index} 
                  className="benefit-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="benefit-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="services-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Ready to elevate your brand?</h3>
          <p>
            Let's discuss how we can help you connect with your target audience 
            through authentic partnerships and strategic marketing campaigns.
          </p>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="btn-primary services-cta-btn">
              Start Your Campaign
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
