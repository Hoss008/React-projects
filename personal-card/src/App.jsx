import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import styles from "./PersonalCard.module.css";

function PersonalCard({ isAvailable = true }) {

  const skills = ["React" , "Node" , "MongoDB" , "JavaScript"]
   
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
            {skills.map((skill)=>( 
              <li className={styles.skillTag} key={skill}> {skill} </li>
            ))}
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
