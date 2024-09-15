import React from "react";
import styles from "./BillInput.module.css"

const BillInput = ({ bill, setBill }) => {
  return (
    <div className="input-group">
      <label htmlFor="bill">Bill</label>
      <input
      className={styles.billInput}
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => setBill(parseFloat(e.target.value))}
        placeholder="0.00"
      />
    </div>
  );
};

export default BillInput;
