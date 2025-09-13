import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Creators', to: 'creators' },
    { name: 'Universities', to: 'universities' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' }
  ]

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={500} className="logo">
            <div className="logo-icon">
              <Zap size={24} />
            </div>
            <span className="logo-text">
              <span className="logo-campus">Campus</span>
              <span className="logo-edge">Edge</span>
              <span className="logo-media">Media</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-primary">Get Started</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav 
          className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button 
              className="btn-primary mobile-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </Link>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
