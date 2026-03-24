function CartItem() {
  return (
    <article className="cart-item">
      <div className="cart-item__top">
        <div>
          <h3>Cart item</h3>
          <p className="cart-item__tag">Quantity: 1</p>
        </div>
        <span className="price">$0.00</span>
      </div>

      <div className="cart-item__actions">
        <p className="empty-copy">Selected product information goes here.</p>
        <button type="button" className="button--ghost">
          Remove
        </button>
      </div>
    </article>
  );
}

export default CartItem;
