// import React, { useState, useEffect } from "react";
// import "./BillingPage.css";

// const fetchUnitPrices = () => {
//   return {
//     "Apple": 50,
//     "Banana": 20,
//     "Orange": 30,
//     "Milk": 40,
//     "Bread": 25
//   };
// };

// const getNextBillNo = () => {
//   const lastBillNo = localStorage.getItem("lastBillNo");
//   const newBillNo = lastBillNo ? parseInt(lastBillNo) + 1 : 1000;
//   localStorage.setItem("lastBillNo", newBillNo);
//   return newBillNo;
// };

// const BillingPage = () => {
//   const [billNo, setBillNo] = useState(getNextBillNo());
//   const [unitPrices, setUnitPrices] = useState({});
//   const [items, setItems] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [totalDiscount, setDiscount] = useState(0);
//   const allItems = Object.keys(unitPrices);

//   useEffect(() => {
//     setUnitPrices(fetchUnitPrices());
//   }, []);

//   useEffect(() => {
//     if (search) {
//       setFilteredItems(allItems.filter(item => item.toLowerCase().includes(search.toLowerCase())));
//     } else {
//       setFilteredItems([]);
//     }
//   }, [search, allItems]);

//   const handleItemSelect = (name) => {
//     setSearch("");
//     setFilteredItems([]);

//     const newItem = {
//       id: Date.now(),
//       name,
//       quantity: 1,
//       price: unitPrices[name] || 0,
//       total: unitPrices[name] || 0
//     };

//     setItems([newItem, ...items]); // Add new item at the top
//   };

//   const handleQuantityChange = (index, value) => {
//     const updatedItems = [...items];
//     updatedItems[index].quantity = Number(value);
//     updatedItems[index].total = updatedItems[index].quantity * updatedItems[index].price;
//     setItems(updatedItems);
//   };

//   const handleDiscountChange = (value) => {
//     const discountValue = Number(value);
//     if (discountValue >= 0 && discountValue <= 100) {
//       setDiscount(discountValue);
//     }
//   };

//   const subtotal = items.reduce((acc, item) => acc + item.total, 0);
//   const discountAmount = (subtotal * totalDiscount) / 100;
//   const total = subtotal - discountAmount;
//   const totalItems = new Set(items.map(item => item.name)).size; // Unique item count

//   return (
//     <div className="billing-container">
//       <h2>Billing Information</h2>

//       <div className="bill-info">
//         <p><strong>Bill No:</strong> #{billNo}</p>
//         <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
//         <p><strong>Time:</strong> {new Date().toLocaleTimeString()}</p>
//       </div>

//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search Item..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         {filteredItems.length > 0 && (
//           <ul className="dropdown">
//             {filteredItems.map((item) => (
//               <li key={item} onClick={() => handleItemSelect(item)}>{item}</li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <table className="items-table">
//         <thead>
//           <tr>
//             <th>Item Name</th>
//             <th>Quantity</th>
//             <th>Unit Price</th>
//             <th>Total Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>
//                 <input 
//                   type="number" 
//                   value={item.quantity}  
//                   min="1"
//                   onChange={(e) => handleQuantityChange(index, e.target.value)}
//                 />
//               </td>
//               <td>₹{item.price}</td>
//               <td>₹{item.total}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="summary">
//         <p><strong>Subtotal:</strong> ₹{subtotal.toFixed(2)}</p>
//         <p><strong>Discount (%):</strong> 
//           <input 
//             type="number" 
//             value={totalDiscount}  
//             min="0"
//             max="100"
//             onChange={(e) => handleDiscountChange(e.target.value)}
//           />
//         </p>
//         <p><strong>Discount Amount:</strong> ₹{discountAmount.toFixed(2)}</p>
//         <p><strong>Total Items:</strong> {totalItems}</p>
//         <p className="total"><strong>Total:</strong> ₹{total.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default BillingPage;


import React, { useState, useEffect } from "react";
import "./BillingPage.css";

const fetchUnitPrices = () => {
  return {
    Apple: 50,
    Banana: 20,
    Orange: 30,
    Milk: 40,
    Bread: 25,
  };
};

const getNextBillNo = () => {
  const lastBillNo = localStorage.getItem("lastBillNo");
  const newBillNo = lastBillNo ? parseInt(lastBillNo) + 1 : 1000;
  localStorage.setItem("lastBillNo", newBillNo);
  return newBillNo;
};

const BillingPage = ({ onSaveBill }) => {
  const [billNo, setBillNo] = useState(getNextBillNo());
  const [unitPrices, setUnitPrices] = useState({});
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const allItems = Object.keys(unitPrices);

  useEffect(() => {
    setUnitPrices(fetchUnitPrices());
  }, []);

  useEffect(() => {
    if (search) {
      setFilteredItems(
        allItems.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      setFilteredItems([]);
    }
  }, [search, allItems]);

  const handleItemSelect = (name) => {
    setSearch("");
    setFilteredItems([]);
    const newItem = {
      id: Date.now(),
      name,
      quantity: 1,
      price: unitPrices[name] || 0,
      total: unitPrices[name] || 0,
    };
    setItems([newItem, ...items]);
  };

  const handleQuantityChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = Number(value);
    updatedItems[index].total = updatedItems[index].quantity * updatedItems[index].price;
    setItems(updatedItems);
  };

  const handleDiscountChange = (value) => {
    setTotalDiscount(Number(value));
  };

  const subtotal = items.reduce((acc, item) => acc + item.total, 0);
  const discount = (subtotal * totalDiscount) / 100;
  const total = subtotal - discount;
  const totalItems = new Set(items.map((item) => item.name)).size;

  const handlePrintBill = () => {
    const billDetails = {
      billNo,
      date: new Date().toLocaleString(),
      totalAmount: total.toFixed(2),
    };
    onSaveBill(billDetails);
    alert("Bill printed successfully!");
  };

  return (
    <div className="billing-container">
      <h2>Billing Information</h2>
      <div className="bill-info">
        <p><strong>Bill No:</strong> #{billNo}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        <p><strong>Time:</strong> {new Date().toLocaleTimeString()}</p>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search Item..." value={search} onChange={(e) => setSearch(e.target.value)} />
        {filteredItems.length > 0 && (
          <ul className="dropdown">
            {filteredItems.map((item) => (
              <li key={item} onClick={() => handleItemSelect(item)}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <table className="items-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input type="number" value={item.quantity} min="1" onChange={(e) => handleQuantityChange(index, e.target.value)} />
              </td>
              <td>₹{item.price}</td>
              <td>₹{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <p><strong>Subtotal:</strong> ₹{subtotal.toFixed(2)}</p>
        <p>
          <strong>Discount (%):</strong>
          <input type="number" value={totalDiscount} min="0" onChange={(e) => handleDiscountChange(e.target.value)} />
        </p>
        <p><strong>Total Items:</strong> {totalItems}</p>
        <p className="total"><strong>Total:</strong> ₹{total.toFixed(2)}</p>
        <button className="print-btn" onClick={handlePrintBill}>Print Bill</button>
      </div>
    </div>
  );
};

export default BillingPage;
