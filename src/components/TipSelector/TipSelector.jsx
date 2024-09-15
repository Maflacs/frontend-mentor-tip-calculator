import React, { useState } from "react";
import styles from "./TipSelector.module.css";

const TipSelector = ({ tipPercentage, setTipPercentage }) => {
  const tipOptions = [5, 10, 15, 25, 50];

  // Local state to track custom tip input
  const [customTip, setCustomTip] = useState("");

  // Function to handle custom tip input
  const handleCustomTipChange = (e) => {
    const value = e.target.value;
    setCustomTip(value);
    setTipPercentage(parseFloat(value) || 0); // Update the tip percentage state
  };

  return (
    <div className="input-group">
      <label>Select Tip %</label>
      <div className={styles.tipButtons}>
        {tipOptions.map((tip) => (
          <button
            key={tip}
            className={tip === tipPercentage ? styles.selected : ""}
            onClick={() => {
              setTipPercentage(tip);
              setCustomTip(""); // Clear the custom input when selecting a preset tip
            }}
          >
            {tip}%
          </button>
        ))}

        {/* Custom tip input field */}
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomTipChange}
          className={styles.customInput}
        />
      </div>
    </div>
  );
};

export default TipSelector;
