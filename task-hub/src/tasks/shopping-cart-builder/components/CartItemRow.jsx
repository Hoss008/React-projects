import styles from "./taskParts.module.css";

function CartItemRow({ item, onRemove }) {
  return (
    <article className={styles.card}>
      <div>
        <h4>{item.name}</h4>
        <p>Qty: {item.quantity}</p>
      </div>

      <div className={styles.row}>
        <strong>${item.subtotal.toFixed(2)}</strong>
        <button
          type="button"
          className={styles.removeButton}
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default CartItemRow;
