import styles from "./taskParts.module.css";

function CartItemRow({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <article className={styles.card}>
      <div>
        <h4>{item.name}</h4>
        <p>Qty: {item.quantity}</p>
      </div>

      <div className={styles.row}>
        <strong>${item.subtotal.toFixed(2)}</strong>
        <div className={styles.inlineActions}>
          <button type="button" onClick={() => onDecrease(item.id)}>
            -
          </button>
          <button type="button" onClick={() => onIncrease(item.id)}>
            +
          </button>
          <button type="button" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItemRow;
