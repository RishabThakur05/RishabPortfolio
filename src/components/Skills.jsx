import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['JavaScript', 'Java', 'C++', 'Python', 'SQL', 'Kotlin', 'XML']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Power BI']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React.js', 'Node.js']
    },
    {
      category: 'Technical Skills',
      items: ['DSA', 'Database Management Systems (DBMS)', 'Problem-Solving']
    },
    {
      category: 'Soft Skills',
      items: ['Problem-solving', 'Code optimization', 'Effective collaboration in development teams']
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
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