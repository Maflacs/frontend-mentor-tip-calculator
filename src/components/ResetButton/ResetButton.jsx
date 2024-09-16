import React from "react";
import styles from "./ResetButton.module.css";

const ResetButton = ({ handleReset, isResultGreaterThanZero }) => {
  return (
    <button
      className={`${styles.resetButton} ${
        isResultGreaterThanZero ? styles.active : styles.inactive
      }`}
      onClick={handleReset}
    >
      RESET
    </button>
  );
};

export default ResetButton;
