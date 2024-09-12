import React from "react";
import styles from "./TipSelector.module.css";

const TipSelector = ({ tipPercentage, setTipPercentage }) => {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="input-group">
      <label>Select Tip %</label>
      <div className={styles.tipButtons}>
        {tipOptions.map((tip) => (
          <button
            key={tip}
            className={tip === tipPercentage ? styles.selected : ""}
            onClick={() => setTipPercentage(tip)}
          >
            {tip}%
          </button>
        ))}
        <button onClick={() => setTipPercentage(0)}>Custom</button>
      </div>
    </div>
  );
};

export default TipSelector;
