import styles from "./taskParts.module.css";
import CartItemRow from "./CartItemRow";

function CartPanel({
  cartItems,
  totalItems,
  totalPrice,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  return (
    <aside className={styles.panel}>
      <div className={styles.panelHeader}>
        <h4>Cart</h4>
        <span>{totalItems}</span>
      </div>

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
            <CartItemRow
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))
        ) : (
          <p className={styles.empty}>Your cart is empty.</p>
        )}
      </div>

      <button type="button" className={styles.checkout} onClick={onCheckout}>
        Checkout
      </button>
    </aside>
  );
}

export default CartPanel;
