import styles from "./shoppingCartBuilder.module.css";
import CartPanel from "./components/CartPanel";
import ProductList from "./components/ProductList";
import { productCatalog } from "./data/products";

const requirementChecklist = [
  "Products are listed with Add to Cart buttons.",
  "Cart state lives in the parent component.",
  "Lift state up to show item count and total price.",
  "Render a full cart list with Remove actions.",
  "Update state immutably using the spread operator.",
];

function ShoppingCartBuilderTask() {
  // Keep cart state in this parent component when you start coding logic.
  const cartItems = [];
  const totalItems = 0;
  const totalPrice = 0;

  const handleAddToCart = () => null;
  const handleRemove = () => null;

  return (
    <section className={styles.shell}>
      <header className={styles.header}>
        <p className={styles.kicker}>Week 3</p>
        <h3>Shopping Cart (useState)</h3>
        <p>
          Simple starter UI only. Add your own state and handlers step by step.
        </p>

        <ul className={styles.requirements}>
          {requirementChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>

      <div className={styles.grid}>
        <ProductList products={productCatalog} onAddToCart={handleAddToCart} />

        <CartPanel
          cartItems={cartItems}
          totalItems={totalItems}
          totalPrice={totalPrice}
          onRemove={handleRemove}
        />
      </div>
    </section>
  );
}

export default ShoppingCartBuilderTask;
