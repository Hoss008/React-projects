import styles from "./taskParts.module.css";
import CartItemRow from "./CartItemRow";

function CartPanel({ cartItems, totalItems, totalPrice, onRemove }) {
  return (
    <aside className={styles.panel}>
      <div className={styles.panelHeader}>
        <h4>Cart</h4>
        <span>{totalItems}</span>
      </div>

      <p className={styles.helperText}>Full cart list</p>

      <div className={styles.summary}>
        <p>
          Items: <strong>{totalItems}</strong>
        </p>
        <p>
          Total: <strong>${totalPrice.toFixed(2)}</strong>
        </p>
      </div>

      <div className={styles.list}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItemRow key={item.id} item={item} onRemove={onRemove} />
          ))
        ) : (
          <p className={styles.empty}>Your cart is empty.</p>
        )}
      </div>
    </aside>
  );
}

export default CartPanel;
