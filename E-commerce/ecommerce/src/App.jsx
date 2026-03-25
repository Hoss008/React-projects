import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'

function App() {
    const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/cart-items?expand=product").then((response) => {
      setCartItems(response.data);
    });
  }, []);

  return (
    <>
    <Routes>
    <Route index element={<HomePage cartItems={cartItems} />} />
    <Route path="checkout" element={<CheckoutPage cartItems={cartItems} />} />
    <Route path="orders" element={<OrdersPage cartItems={cartItems} />} />
    </Routes>
    </>
  )
}

export default App
