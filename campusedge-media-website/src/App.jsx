import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import CreatorPartners from './components/CreatorPartners'
import UniversityPartners from './components/UniversityPartners'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <CreatorPartners />
        <UniversityPartners />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
