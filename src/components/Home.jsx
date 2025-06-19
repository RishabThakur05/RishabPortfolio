import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import profileImage from '../assets/RishabPhoto.jpg'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = 'Rishab Thakur';
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>Hi, I'm Rishab Thakur</h1>
          <h2 className={styles.tagline}>Full Stack Web Developer | B.Tech CSE Student at LPU</h2>
          <p className={styles.description}>
            I am a passionate web developer currently pursuing a B.Tech in Computer Science at Lovely Professional University, Phagwara. I am a motivated and results-driven Computer Science and Engineering graduate seeking a challenging position as a Web Developer within a large organization. I offer a strong foundation in Java, C++, Data Structures and Algorithms, React.js, Node.js, PHP, MongoDB, data analysis, and project management. I have a proven ability to drive efficiency, deliver successful outcomes, and collaborate within cross-functional teams.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://github.com/RishabThakur05" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/rishabthakur05/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="tel:+916387989439" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone"></i>
            </a>
            <a href="mailto:rishabthakur665@gmail.com">
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
            <img src={profileImage} alt="Rishab Thakur" className={styles.profileImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home