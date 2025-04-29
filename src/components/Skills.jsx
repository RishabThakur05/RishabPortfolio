import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express', 'Python',  'RESTful APIs', 'MongoDB']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'GitHub', 'VS Code', 'Postman']
    },
    
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{skill.category}</h3>
              <div className={styles.skillsList}>
                {skill.items.map((item, itemIndex) => (
                  <span key={itemIndex} className={styles.skillItem}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 