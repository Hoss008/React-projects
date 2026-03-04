import styles from "./BaseCard.module.css";

function BaseCard() {
  return (
    <div className={styles.card}>
      <p>
        Card Library
      </p>
    </div>
  );
}

export default BaseCard;