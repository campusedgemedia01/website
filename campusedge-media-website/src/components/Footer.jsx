import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowUp } from 'lucide-react'
import { Link } from 'react-scroll'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Brand Partnerships", to: "services" },
        { name: "Influencer Marketing", to: "services" },
        { name: "Creator Network", to: "creators" },
        { name: "University Partnerships", to: "universities" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", to: "about" },
        { name: "Our Team", to: "about" },
        { name: "Careers", to: "contact" },
        { name: "Contact", to: "contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", to: "services" },
        { name: "Blog", to: "contact" },
        { name: "Success Stories", to: "creators" },
        { name: "Partnership Guide", to: "contact" }
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Footer Header */}
          <div className="footer-header">
            <div className="footer-logo">
              <div className="logo-icon">
                <Zap size={24} />
              </div>
              <span className="logo-text">
                <span className="logo-campus">Campus</span>
                <span className="logo-edge">Edge</span>
                <span className="logo-media">Media</span>
              </span>
            </div>
            <p className="footer-tagline">
              Bridging Brands, Creators & Education
            </p>
            <p className="footer-description">
              Your premier tech marketing agency for authentic brand partnerships 
              and strategic influencer marketing that connects innovative brands 
              with influential voices in technology and education.
            </p>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="footer-section">
                <h4 className="section-title">{section.title}</h4>
                <ul className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="footer-link"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="section-title">Get in Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Email:</strong>
                  <a href="mailto:campusedgemedia01@gmail.com" className="contact-link">
                    campusedgemedia01@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <strong>Location:</strong>
                  <span className="contact-text">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 CampusEdge Media. All rights reserved.</p>
              <p className="legal-text">
                Built with passion for connecting brands and creators.
              </p>
            </div>

            <div className="footer-actions">
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <button className="btn-primary footer-cta">
                  Start Partnership
                </button>
              </Link>

              <button 
                onClick={scrollToTop}
                className="scroll-top-btn"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Background Elements */}
      <div className="footer-background">
        <div className="footer-orb footer-orb-1"></div>
        <div className="footer-orb footer-orb-2"></div>
      </div>
    </footer>
  )
}

export default Footer
