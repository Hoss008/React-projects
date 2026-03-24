function ProductCard({ price, category, name, details, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-card__top">
        <div>
          <h3>{name}</h3>
          <p className="product-card__tag">{category}</p>
        </div>
        <span className="price">{price}</span>
      </div>

      <div className="product-card__actions">
        <p className="empty-copy">{details}</p>
        <button type="button" className="button" onClick={onAddToCart}>
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
