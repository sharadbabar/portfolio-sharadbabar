import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:sharadbabar2010@gmail.com">sharadbabar2010@gmail.com</a>
        </li>

         <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
            <a href="www.linkedin.com/in/sharadbabar10">linkedin.com/in/sharadbabar10</a>
        </li>

         <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
            <a href="https://github.com/sharadbabar">github.com/sharadbabar</a>
        </li>
    </ul>

    
  </footer>
}
