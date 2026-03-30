import { useEffect, useState } from "react";
import styles from "./Converter.module.css";

export default function App() {
  const [currency, setCurrency] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInput = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD"
      );
      const json = await res.json();
      setCurrency(json);
    }
    //clean up function later
    fetchData();
  }, []);

  return (
    <>
      <input type="text" />
      <select>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </>
  );
}
