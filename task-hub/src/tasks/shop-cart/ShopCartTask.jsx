import { useMemo, useState } from "react";
import "./shopCart.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
    details: "High-quality sound with noise cancellation",
  },
  {
    id: 2,
    name: "USB-C Cable",
    category: "Accessories",
    price: 12.99,
    details: "Fast charging and data transfer",
  },
  {
    id: 3,
    name: "Phone Case",
    category: "Protection",
    price: 24.99,
    details: "Durable and stylish protection for your phone",
  },
  {
    id: 4,
    name: "Screen Protector",
    category: "Protection",
    price: 9.99,
    details: "Tempered glass for scratch resistance",
  },
  {
    id: 5,
    name: "Portable Charger",
    category: "Electronics",
    price: 49.99,
    details: "20000mAh capacity, multiple outputs",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 89.99,
    details: "Waterproof with 12-hour battery life",
  },
];

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="shop-product-card">
      <div className="shop-product-card__top">
        <div>
          <h4>{product.name}</h4>
          <p className="shop-item-tag">{product.category}</p>
        </div>
        <span className="shop-price">{formatCurrency(product.price)}</span>
      </div>

      <div className="shop-product-card__actions">
        <p className="shop-empty-copy">{product.details}</p>
        <button
          type="button"
          className="shop-button"
          onClick={() => onAddToCart(product.id)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

function CartItem({ item, onRemoveFromCart }) {
  return (
    <article className="shop-cart-item">
      <div className="shop-cart-item__top">
        <div>
          <h4>{item.product.name}</h4>
          <p className="shop-item-tag">Quantity: {item.quantity}</p>
        </div>
        <span className="shop-price">
          {formatCurrency(item.product.price * item.quantity)}
        </span>
      </div>

      <div className="shop-cart-item__actions">
        <p className="shop-empty-copy">{item.product.details}</p>
        <button
          type="button"
          className="shop-button shop-button--ghost"
          onClick={() => onRemoveFromCart(item.product.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

function ShopCartTask() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    setCartItems((currentItems) => {
      const matchingItem = currentItems.find(
        (item) => item.productId === productId,
      );

      if (!matchingItem) {
        return [...currentItems, { productId, quantity: 1 }];
      }

      return currentItems.map((item) => {
        if (item.productId !== productId) {
          return item;
        }

        return { ...item, quantity: item.quantity + 1 };
      });
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => {
      const matchingItem = currentItems.find(
        (item) => item.productId === productId,
      );

      if (!matchingItem) {
        return currentItems;
      }

      if (matchingItem.quantity === 1) {
        return currentItems.filter((item) => item.productId !== productId);
      }

      return currentItems.map((item) => {
        if (item.productId !== productId) {
          return item;
        }

        return { ...item, quantity: item.quantity - 1 };
      });
    });
  };

  const mappedCartItems = useMemo(() => {
    return cartItems
      .map((item) => {
        const product = products.find(
          (candidate) => candidate.id === item.productId,
        );

        if (!product) {
          return null;
        }

        return {
          product,
          quantity: item.quantity,
        };
      })
      .filter(Boolean);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return mappedCartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [mappedCartItems]);

  const totalPrice = useMemo(() => {
    return mappedCartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
  }, [mappedCartItems]);

  return (
    <main className="shop-cart-shell">
      <header className="shop-cart-header">
        <p className="shop-eyebrow">Migrated Task</p>
        <h3>Shopping cart component structure</h3>
        <p className="shop-subtitle">
          This task now runs inside your Task Hub route using one shared React
          app.
        </p>
      </header>

      <section className="shop-cart-grid">
        <section className="shop-panel">
          <div className="shop-panel__header">
            <div>
              <h4>Products</h4>
              <p>Browse your collection of tech accessories.</p>
            </div>
            <span className="shop-badge">{products.length}</span>
          </div>

          <div className="shop-product-list">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <aside className="shop-panel shop-cart-summary-panel">
          <div className="shop-panel__header">
            <div>
              <h4>Cart</h4>
              <p>Counts and totals update from the same component tree.</p>
            </div>
            <span className="shop-badge">{totalItems}</span>
          </div>

          <div className="shop-cart-summary">
            <div>
              <p>Total items</p>
              <strong>{totalItems}</strong>
            </div>
            <div>
              <p>Total price</p>
              <strong>{formatCurrency(totalPrice)}</strong>
            </div>
          </div>

          <div className="shop-cart-items">
            {mappedCartItems.length > 0 ? (
              mappedCartItems.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onRemoveFromCart={removeFromCart}
                />
              ))
            ) : (
              <p className="shop-empty-copy">
                Your cart is empty. Add products to test this route.
              </p>
            )}
          </div>

          <div className="shop-cart-footer">
            <button
              type="button"
              className="shop-button"
              disabled={!totalItems}
            >
              Checkout
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default ShopCartTask;
