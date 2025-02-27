// import React, { useState, useEffect } from "react";
// import "./BillHistory.css";

// const BillHistory = () => {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     const savedBills = JSON.parse(localStorage.getItem("billHistory")) || [];
//     setBills(savedBills);
//   }, []);

//   return (
//     <div className="bill-history-container">
//       <h2>Bill History</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Bill No</th>
//             <th>Date & Time</th>
//             <th>Total Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bills.length > 0 ? (
//             bills.map((bill, index) => (
//               <tr key={index}>
//                 <td>{bill.billNo}</td>
//                 <td>{bill.dateTime}</td>
//                 <td>₹{bill.total.toFixed(2)}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">No bills available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BillHistory;

import React, { useEffect, useState } from "react";
import "./BillHistory.css";

const BillHistory = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const storedBills = JSON.parse(localStorage.getItem("billHistory")) || [];
    setBills(storedBills);
  }, []);

  return (
    <div className="bill-history-container">
      <h2>Bill History</h2>
      {bills.length === 0 ? (
        <p>No previous bills found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Bill No</th>
              <th>Date & Time</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr key={index}>
                <td>#{bill.billNo}</td>
                <td>{bill.dateTime}</td>
                <td>₹{bill.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BillHistory;
