import { useEffect, useState } from "react";
import styles from "./converter.module.css";

function ConverterTask() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const handleInput = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD",
      );
      const json = await res.json();
      setAmount(json);
    }
    //clean up function later
    fetchData();
  }, []);

  return (
    <div className={styles.App}>
      <input type="number" value={amount} onChange={handleInput} />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}

export default ConverterTask;
