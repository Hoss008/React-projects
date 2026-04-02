import styles from "./taskParts.module.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className={styles.card}>
      <div>
        <h4>{product.name}</h4>
        <p>{product.category}</p>
      </div>

      <div className={styles.row}>
        <strong className={styles.price}>${product.price.toFixed(2)}</strong>
        <button type="button" onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
