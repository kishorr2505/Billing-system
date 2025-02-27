import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import './Stocks.css'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stocks = () => {
  const [stocks, setStocks] = useState({
    Apple: 50,
    Banana: 30,
    Orange: 40,
    Milk: 20,
    Bread: 35,
  });

  const addStock = () => {
    const item = prompt("Enter item name:");
    const quantity = parseInt(prompt("Enter stock quantity"));

    if (item && quantity > 0) {
      setStocks((prevStocks) => ({ ...prevStocks, [item]: (prevStocks[item] || 0) + quantity }));
    } else {
      alert("Invalid input!");
    }
  };

  const data = {
    labels: Object.keys(stocks),
    datasets: [
      {
        label: "Stock Quantity",
        data: Object.values(stocks),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="stocks-container">
      <h2>Stock Levels</h2>
      <Bar data={data} />
      <button onClick={addStock}>Add Stock</button>
    </div>
  );
};

export default Stocks;
