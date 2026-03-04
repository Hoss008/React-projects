import styles from "./ProductCard.module.css";

function ProductCard({ imageUrl, title, description, onAddToCart }) {
  return (
    <div className={styles.productCard}>
      <img className={styles.image} src={imageUrl} alt={title} />

      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <p className={styles.description}>{description}</p>

      <button className={styles.button} onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;