import React from "react";

const BillInput = ({ bill, setBill }) => {
  return (
    <div className="input-group">
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
        placeholder="0.00"
      />
    </div>
  );
};

export default BillInput;
