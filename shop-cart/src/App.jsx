import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import "./App.css";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$79.99",
    details: "High-quality sound with noise cancellation",
  },
  {
    id: 2,
    name: "USB-C Cable",
    category: "Accessories",
    price: "$12.99",
    details: "Fast charging and data transfer",
  },
  {
    id: 3,
    name: "Phone Case",
    category: "Protection",
    price: "$24.99",
    details: "Durable and stylish protection for your phone",
  },
  {
    id: 4,
    name: "Screen Protector",
    category: "Protection",
    price: "$9.99",
    details: "Tempered glass for scratch resistance",
  },
  {
    id: 5,
    name: "Portable Charger",
    category: "Electronics",
    price: "$49.99",
    details: "20000mAh capacity, multiple outputs",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: "$89.99",
    details: "Waterproof with 12-hour battery life",
  },
];

function App() {
  const [onCart, setOnCart] = useState();
  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <h1>Shopping cart component structure</h1>
          <p className="subtitle"></p>
        </div>
      </header>

      <section className="app-grid">
        <ProductList products={products} />
        <Cart />
      </section>
    </main>
  );
}

export default App;
