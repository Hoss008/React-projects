import styles from "./shoppingCartBuilder.module.css";
import CartPanel from "./components/CartPanel";
import ProductList from "./components/ProductList";
import { productCatalog } from "./data/products";

function ShoppingCartBuilderTask() {
  const cartItems = [];
  const totalItems = 0;
  const totalPrice = 0;

  const handleAddToCart = () => null;
  const handleIncrease = () => null;
  const handleDecrease = () => null;
  const handleRemove = () => null;
  const handleCheckout = () => null;

  return (
    <section className={styles.shell}>
      <header className={styles.header}>
        <p className={styles.kicker}>Shopping Cart Task</p>
        <h3>Build Your Cart Logic Here</h3>
        <p>
          This scaffold includes layout and component files only. Add your own
          state management and cart behavior.
        </p>
      </header>

      <div className={styles.grid}>
        <ProductList products={productCatalog} onAddToCart={handleAddToCart} />

        <CartPanel
          cartItems={cartItems}
          totalItems={totalItems}
          totalPrice={totalPrice}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
      </div>
    </section>
  );
}

export default ShoppingCartBuilderTask;
