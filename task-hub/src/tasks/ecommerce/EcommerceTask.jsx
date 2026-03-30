import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("/api/cart-items?expand=product");
      setCartItems(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Failed to fetch cart items", error);
      setCartItems([]);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = async (productId, quantity) => {
    await axios.post("/api/cart-items", { productId, quantity });
    await fetchCartItems();
  };

  const updateCartItem = async (productId, quantity) => {
    await axios.put(`/api/cart-items/${productId}`, { quantity });
    await fetchCartItems();
  };

  const updateDeliveryOption = async (productId, deliveryOptionId) => {
    await axios.put(`/api/cart-items/${productId}`, { deliveryOptionId });
    await fetchCartItems();
  };

  const deleteCartItem = async (productId) => {
    await axios.delete(`/api/cart-items/${productId}`);
    await fetchCartItems();
  };

  return (
    <>
      <Routes>
        <Route
          index
          element={<HomePage cartItems={cartItems} onAddToCart={addToCart} />}
        />
        <Route
          path="checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
              onUpdateCartItem={updateCartItem}
              onDeleteCartItem={deleteCartItem}
              onUpdateDeliveryOption={updateDeliveryOption}
            />
          }
        />
        <Route path="orders" element={<OrdersPage cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;
