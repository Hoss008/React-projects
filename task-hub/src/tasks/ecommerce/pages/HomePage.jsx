import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./HomePage.css";
import { formatMoney } from "../utils/money";

function HomePage({ cartItems, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const resolveImagePath = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("/")) return path;
    return `/${path}`;
  };

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Failed to load products", error);
        setProducts([]);
      }
    };

    getHomeData();
  }, []);

  const getSelectedQuantity = (productId) => selectedQuantities[productId] ?? 1;

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [productId]: quantity,
    }));
  };

  const handleAddToCart = async (productId) => {
    try {
      await onAddToCart(productId, getSelectedQuantity(productId));
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  return (
    <>
      <Header cart={cartItems} />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <div className="product-image-container">
                <img
                  className="product-image"
                  src={resolveImagePath(product.image)}
                />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {product.name}
              </div>

              <div className="product-rating-container">
                <img
                  className="product-rating-stars"
                  src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
                />
                <div className="product-rating-count link-primary">
                  {product.rating.count}
                </div>
              </div>

              <div className="product-price">
                {formatMoney(product.priceCents)}
              </div>

              <div className="product-quantity-container">
                <select
                  value={getSelectedQuantity(product.id)}
                  onChange={(event) =>
                    handleQuantityChange(product.id, Number(event.target.value))
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className="product-spacer"></div>

              <div className="added-to-cart">
                <img src="/images/icons/checkmark.png" />
                Added
              </div>

              <button
                className="add-to-cart-button button-primary"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
