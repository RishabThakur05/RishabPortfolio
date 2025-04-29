import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import profileImage from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>Abhinav Singh.</h1>
          <h2 className={styles.tagline}>Full Stack Developer</h2>
          <p className={styles.description}>
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm a BTech CSE student at Lovely Professional University focused on
            creating accessible, human-centered products.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://github.com/Abhinav0243" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/abhinav-singh-81069624b/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="tel:+918853490243" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone"></i>
            </a>
            <a href="mailto:abhinavsingh6574@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className={styles.buttons}>
            <a href="#projects" className={`${styles.primaryBtn} ${styles.floatEffect}`} onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}>
              <i className="fas fa-code"></i> Check out my work
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={`${styles.imageWrapper} ${styles.tiltEffect}`}>
            <img src={profileImage} alt="Abhinav Singh" className={styles.profileImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home