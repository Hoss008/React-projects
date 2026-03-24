import CartItem from "./CartItem";

function Cart() {
  return (
    <aside className="panel cart">
      <div className="panel__header">
        <div>
          <h2>Cart</h2>
          <p>Structure for cart count, total, and selected items.</p>
        </div>
        <span className="badge">2</span>
      </div>

      <div className="cart-summary">
        <div>
          <p>Total items</p>
          <strong>0</strong>
        </div>
        <div>
          <p>Total price</p>
          <strong>$0.00</strong>
        </div>
      </div>

      <div className="cart-items">
        <CartItem />
        <CartItem />
      </div>

      <div className="cart-footer">
        <button type="button" className="button">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default Cart;
