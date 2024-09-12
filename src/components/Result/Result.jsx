import React from "react";
import styles from "./Result.module.css"

const Result = ({ tipAmount, totalAmount }) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultItem}>
        <div>
          Tip Amount <span>/ person</span>
        </div>
        <div className={styles.amount}>${tipAmount}</div>
      </div>
      <div className={styles.resultItem}>
        <div>
          Total <span>/ person</span>
        </div>
        <div className={styles.amount}>${totalAmount}</div>
      </div>
    </div>
  );
};

export default Result;
