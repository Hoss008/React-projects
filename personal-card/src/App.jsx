import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import styles from "./PersonalCard.module.css";

function PersonalCard({ isAvailable = true }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.name}>Hossam Hassan</h1>
          <h2 className={styles.title}>Software Engineer</h2>
        </div>
        <div className={styles.skillsSection}>
          <p className={styles.skillsTitle}>Skills</p>
          <ul className={styles.skillsList}>
            <li className={styles.skillTag}>React</li>
            <li className={styles.skillTag}>Node.js</li>
            <li className={styles.skillTag}>MongoDB</li>
            <li className={styles.skillTag}>JavaScript</li>
          </ul>
        </div>

        {isAvailable ? (
          <button className={styles.contactBtn}>Available For Hire</button>
        ) : (
          <button className={styles.contactBtn}>Not Available</button>
        )}
      </div>
    </>
  );
}
export default PersonalCard;
