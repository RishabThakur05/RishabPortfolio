import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Footer.module.css';

const Footer = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs.sendForm(
      'service_erpwp2m', 
      'template_b74cfsm', 
      formRef.current, 
      'jMQWlaQsqsuEdUVsk'
    )
      .then((result) => {
        setFormStatus({ submitting: false, submitted: true, error: null });
        formRef.current.reset();
        setTimeout(() => {
          setFormStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      }, (error) => {
        setFormStatus({ submitting: false, submitted: false, error: error.text });
      });
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <h2 className={styles.contactTitle}>Get In Touch</h2>
        <p className={styles.contactText}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <div className={styles.contactForm}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input type="text" name="user_name" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={formStatus.submitting}>
              {formStatus.submitting ? (
                'Sending...'
              ) : (
                <><i className="fas fa-paper-plane"></i> Send Message</>
              )}
            </button>
            {formStatus.submitted && (
              <p className={styles.successMessage}>Message sent successfully!</p>
            )}
            {formStatus.error && (
              <p className={styles.errorMessage}>Error: {formStatus.error}</p>
            )}
          </form>
        </div>
        
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={`${styles.logo} ${styles.tiltEffect}`}>RT</span>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h3>Navigation</h3>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
              <a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>Certifications</a>
            </div>
            
            <div className={styles.linkColumn}>
              <h3>Contact Info</h3>
              <p><i className="fas fa-envelope"></i> rishabthakur665@gmail.com</p>
              <p><i className="fas fa-phone"></i> +91 6387989439</p>
              <p><i className="fas fa-map-marker-alt"></i> Lucknow</p>
            </div>
          </div>
          
          <div className={styles.socialIcons}>
            <a href="https://github.com/RishabThakur05" target="_blank" rel="noopener noreferrer" className={styles.floatEffect}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/rishabthakur05/" target="_blank" rel="noopener noreferrer" className={styles.floatEffect}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.floatEffect}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:rishabthakur665@gmail.com" className={styles.floatEffect}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Rishab Thakur. All rights reserved.</p>
          <p className={styles.designedBy}>Designed & Built with <span className={styles.heart}>❤</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;