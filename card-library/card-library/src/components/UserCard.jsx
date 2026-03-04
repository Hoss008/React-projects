import React from "react";
import styles from "./UserCard.module.css";

function UserCard({ name, role, skills }) {
  return (
    <div className={styles.userCard}>
      <h1 className={styles.name}> {name}</h1>
      <h2 className={styles.role}> {role} </h2>
      <div className={styles.role}>{skills}</div>
    </div>
  );
}

export default UserCard;
