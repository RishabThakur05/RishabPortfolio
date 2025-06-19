import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import resumePDF from '../assets/GeneralCVrisihabFinal.pdf'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <span className={styles.logoText}>Rishab Thakur</span>
        </a>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>
              Education
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </li>
          <li>
            <a href={resumePDF} className={styles.resumeBtn} download>
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar