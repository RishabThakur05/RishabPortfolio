import { useState } from 'react'
import styles from './Certifications.module.css'
// Import your certificate images
import cert1 from '../assets/cert1.png'
import cert2 from '../assets/cert2.png'
import cert3 from '../assets/cert3.png'
import cert4 from '../assets/cert4.png' // Add the new certificate image

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  
  const certificates = [
    {
      id: 1,
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Coursera",
      date: "March 2025",
      image: cert1,
    },
    {
      id: 2,
      title: "Server side scripting with Node.js",
      issuer: "Coursera",
      date: "March 2025",
      image: cert2,
    },
    {
      id: 3,
      title: "Data structures and algorithms",
      issuer: "geeksforgeeks",
      date: "July 2024",
      image: cert3,
    },
    {
      id: 4,
      title: "Hack the Chain",
      issuer: "Hackathon",
      date: "February 2024",
      image: cert4,
    }
  ]
  
  const openModal = (cert) => {
    setSelectedCert(cert)
  }
  
  const closeModal = () => {
    setSelectedCert(null)
  }

  return (
    <div className={styles.certifications}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}></span> My Certifications
        </h2>
        
        <div className={styles.grid}>
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className={`${styles.card} ${styles.floatEffect}`}
              onClick={() => openModal(cert)}
            >
              <div className={styles.certImage}>
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className={styles.certContent}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>
                  <i className="fas fa-award"></i> {cert.issuer}
                </p>
                <p className={styles.certDate}>
                  <i className="far fa-calendar-alt"></i> {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedCert && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeBtn} onClick={closeModal}>&times;</span>
            <h3>{selectedCert.title}</h3>
            <p className={styles.certIssuer}>
              <i className="fas fa-award"></i> {selectedCert.issuer}
            </p>
            <p className={styles.certDate}>
              <i className="far fa-calendar-alt"></i> {selectedCert.date}
            </p>
            <div className={styles.certImageLarge}>
              <img src={selectedCert.image} alt={selectedCert.title} />
            </div>
            <p className={styles.certDescription}>{selectedCert.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certifications