import { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./App.css";
import BillingPage from "./components/BillingPage.jsx";
import BillHistory from "./components/BillHistory.jsx";
import Stocks from "./components/Stocks.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBilling, setShowBilling] = useState(true);
  const [showBillHistory, setShowBillHistory] = useState(false);
  const [billHistoryUpdated, setBillHistoryUpdated] = useState(false);
  const [showStocks, setShowStocks] = useState(false);

  const handleShowBilling = () => {
    setShowBilling(true);
    setShowBillHistory(false);
    setShowStocks(false);
  };

  const handleShowBillHistory = () => {
    setShowBilling(false);
    setShowBillHistory(true);
    setShowStocks(false);
  };

  const handleBillPrinted = () => {
    setBillHistoryUpdated((prev) => !prev); // Toggle state to trigger re-render
  };

  const handleShowStocks = () =>{
    setShowStocks(true);
    setShowBilling(false);
    setShowBillHistory(false);
  }

  const handlelogout = ()=>{
   setIsLoggedIn(false);
  }

  return (
    <div className="container">
      <Navbar />
      {isLoggedIn ? (
        <div className="sidebar-and-bill">
          <Sidebar
            onShowBilling={handleShowBilling}
            onShowBillHistory={handleShowBillHistory}
            onShowStocks = {handleShowStocks}
            onLogout = {handlelogout}
          />
          {showBilling && <BillingPage onBillPrinted={handleBillPrinted} />}
          {showBillHistory && <BillHistory key={billHistoryUpdated} />}
          {showStocks && <Stocks/>}
        
        </div>
      ) : (
        <Login setIsLoggedIn={() => setIsLoggedIn(true)} />
      )}
      <Footer />
    </div>
  );
};

export default App;
