import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles.info}>
        <div className={styles.item}>
          <i className="fas fa-envelope"></i>
          <a href="mailto:rishabthakur665@gmail.com">rishabthakur665@gmail.com</a>
        </div>
        <div className={styles.item}>
          <i className="fas fa-phone"></i>
          <a href="tel:+916387989439">+91 6387989439</a>
        </div>
      </div>
    </div>
  )
}

export default Contact