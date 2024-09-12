import React from "react";
import styles from "./ResetButton.module.css"

const ResetButton = ({ handleReset }) => {
  return (
    <button className={styles.resetButton} onClick={handleReset}>
      RESET
    </button>
  );
};

export default ResetButton;
