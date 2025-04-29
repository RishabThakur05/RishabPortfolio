import React from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Fitness Gym Website",
      description: "A modern gym website showcasing fitness services, membership plans, and training programs with a responsive design for all devices.",
      tech: ["React", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Abhinav0243/Fitness",
      external: "https://gym-one-self.vercel.app/",
    },
    {
      title: "Grocery E-commerce",
      description: "An online grocery shopping platform with product catalog, cart functionality, and seamless checkout process.",
      tech: ["React", "Next.js", "CSS", "E-commerce"],
      github: "https://github.com/Abhinav0243/Grocery-Rishab",
      external: "https://grocery-rishab.vercel.app/",
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce website with product listings, shopping cart, and user-friendly interface.",
      tech: ["React", "MongoDB","NodeJs" ,"CSS", "Shopping Cart"],
      github: "https://github.com/Abhinav0243/cartt",
      external: "https://cartt-two.vercel.app/",
    },
    {
      title: "Weather Forecast App",
      description: "A weather application providing real-time weather information and forecasts with a clean, intuitive interface.",
      tech: ["React", "Weather API", "CSS", "JavaScript"],
      github: "https://github.com/Abhinav0243/Weather-Forecast",
      external: "https://rishabweather-forecast.vercel.app/",
    }
  ];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}></span> Projects
        </h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.content}>
                <p className={styles.projectOverline}>Featured Project</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDescription}>
                  <p>{project.description}</p>
                </div>
                <ul className={styles.techList}>
                  {project.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
