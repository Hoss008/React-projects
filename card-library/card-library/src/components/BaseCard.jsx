import styles from "./BaseCard.module.css";

function BaseCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export default BaseCard;
