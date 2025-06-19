import React from 'react';
import styles from './Education.module.css';
import lpuLogo from '../assets/lpu.jpg';

const Education = () => {
  const educationData = {
    university: {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Lovely Professional University, Phagwara, Punjab",
      duration: "2022-2026",
      logo: lpuLogo
    },
    school: {
      name: "Sacred Heart School, Lucknow",
      levels: [
        {
          name: "12th Standard",
          year: "2020"
        },
        {
          name: "10th Standard",
          year: "2018"
        }
      ]
    }
  };

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationList}>
          {/* University Education */}
          <div className={styles.educationItem}>
            <div className={styles.content}>
              <h3 className={styles.degree}>{educationData.university.degree}</h3>
              <p className={styles.university}>{educationData.university.institution}</p>
              <p className={styles.duration}>{educationData.university.duration}</p>
              <img 
                src={educationData.university.logo} 
                alt="LPU Logo" 
                className={styles.universityLogo}
              />
            </div>
          </div>
          
          {/* School Education */}
          <div className={styles.educationItem}>
            <div className={styles.content}>
              <h3 className={styles.degree}>School Education</h3>
              <p className={styles.university}>{educationData.school.name}</p>
              <div className={styles.schoolInfo}>
                {educationData.school.levels.map((level, index) => (
                  <React.Fragment key={level.name}>
                    <div className={styles.schoolLevel}>
                      <p className={styles.levelName}>{level.name}</p>
                      <p className={styles.year}>{level.year}</p>
                    </div>
                    {index < educationData.school.levels.length - 1 && (
                      <div className={styles.divider} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 