import { useState } from "react";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./App.css";
import BillingPage from "./components/BillingPage.jsx";
import BillHistory from "./components/BillHistory.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBilling, setShowBilling] = useState(true);
  const [showBillHistory, setShowBillHistory] = useState(false);

  const handleShowBilling = () => {
    setShowBilling(true);
    setShowBillHistory(false);
  };

  const handleShowBillHistory = () => {
    setShowBilling(false);
    setShowBillHistory(true);
  };

  return (
    <div className="container">
      <Navbar />
      {isLoggedIn ? (
        <div className="sidebar-and-bill">
          <Sidebar
            onShowBilling={handleShowBilling}
            onShowBillHistory={handleShowBillHistory}
          />
          {showBilling && <BillingPage />}
          {showBillHistory && <BillHistory />}
        </div>
      ) : (
        <Login setIsLoggedIn={() => setIsLoggedIn(true)} />
      )}
      <Footer />
    </div>
  );
};

export default App;
