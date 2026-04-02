import { useEffect,useState } from "react";
import "./converter.module.css";

export default function App() {
const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("EUR")
  const [toCurrency, setToCurrency] = useState("USD")
  const [rate, setRate] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
      );
      const data = await res.json();
      setRate(data.rates[toCurrency]);
    }

    fetchData();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{rate} {toCurrency}</p>
    </div>
  );
}
