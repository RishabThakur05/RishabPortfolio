import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      title: "Weather Forecast App",
      description: "Developed a comprehensive weather application using MERN stack that provides real-time weather updates, forecasts, and historical weather data with interactive visualizations.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenWeather API"],
      date: "January 2023",
      github: "https://github.com/Abhinav0243/Weather-Forecast",
      demo: "https://rishabweather-forecast.vercel.app/"
    },
    {
      title: "Grocery Selling Website",
      description: "Built a full-featured grocery e-commerce platform using Node.js and Express with secure payment integration, inventory management, and order tracking functionality.",
      tech: ["Node.js", "Express.js", "MySQL", "JavaScript", "Bootstrap"],
      date: "March 2023",
      github: "https://github.com/Abhinav0243/Grocery-Rishab",
      demo: "https://grocery-rishab.vercel.app/"
    },
    {
      title: "E-Commerce Platform",
      description: "Created a scalable e-commerce solution with MERN stack featuring user authentication, product management, shopping cart functionality, and secure payment processing.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
      date: "August 2023",
      github: "https://github.com/Abhinav0243/cartt",
      demo: "https://cartt-two.vercel.app/"
    },
    {
      title: "Gym Website",
      description: "Designed and developed a responsive gym website using React that showcases membership plans, trainer profiles, class schedules, and includes a BMI calculator.",
      tech: ["React.js", "JavaScript", "CSS", "HTML", "Firebase"],
      date: "October 2023",
      github: "https://github.com/Abhinav0243/Fitness",
      demo: "https://gym-one-self.vercel.app/"
    }
  ]

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}></span> Some Things I've Built
        </h2>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.projectContent}>
                <p className={styles.projectOverline}>Featured Project</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDescription}>
                  <p>{project.description}</p>
                </div>
                <div className={styles.tech}>
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects