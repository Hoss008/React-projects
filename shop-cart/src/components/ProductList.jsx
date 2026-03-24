import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <h2>Products</h2>
          <p>Browse our collection of tech accessories</p>
        </div>
        <span className="badge">{products.length}</span>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            details={product.details}
            onAddToCart={() => console.log(`Added ${product.name} to cart`)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
