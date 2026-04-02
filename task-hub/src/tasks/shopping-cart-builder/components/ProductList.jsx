import styles from "./taskParts.module.css";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h4>Products</h4>
        <span>{products.length}</span>
      </div>

      <div className={styles.list}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
