import styles from "./ProductCard.module.css";

function ProductCard() {
  imageUrl =
    "https://plus.unsplash.com/premium_photo-1681313825348-7f2fe67e4e8f?q=80&w=2216&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className={styles.header}>
      <img className={styles.image} src={imageUrl} alt="A description of the image for accessibility" />
    </div>
  );
}

export default ProductCard;
