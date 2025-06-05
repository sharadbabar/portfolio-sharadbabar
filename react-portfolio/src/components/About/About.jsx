import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting witha laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I'm a full-stack developer with strong experience in building
                and optimizing Java-based web applications.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                <b>Master of Science in Computer Science.</b>
                <br />
                <i>
                  State University of New York at Binghamton
                  <br />
                  August 2023 - May 2025
                </i>
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/location.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Location</h3>
              <p>Houston, TX</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
