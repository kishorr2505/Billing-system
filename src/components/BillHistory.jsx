import React from "react";
import "./BillHistory.css";

const BillHistory = () => {
  return (
    <div className="bill-history-container">
      <h2>Bill History</h2>
      <table>
        <thead>
          <tr>
            <th>Bill No</th>
            <th>Date & Time</th>
            <th>Customer Name</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Bill records will be mapped here from state */}
        </tbody>
      </table>
    </div>
  );
};

export default BillHistory;
