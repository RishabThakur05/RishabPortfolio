import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import resumePDF from '../assets/resumeAbhinav.pdf' // Import the PDF file

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <span className={styles.logoText}>Abhinav Singh</span>
        </a>
      </div>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.active : ''}`}></div>
      </div>
      
      
      <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <i className="fas fa-home"></i> Home
        </a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
          <i className="fas fa-code"></i> Projects
        </a>
        <a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>
          <i className="fas fa-certificate"></i> Certifications
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
          <i className="fas fa-envelope"></i> Contact
        </a>
        <a href={resumePDF} className={styles.resumeBtn} download>
          <i className="fas fa-file-download"></i> Download CV
        </a>
      </div>
    </nav>
  )
}

export default Navbar