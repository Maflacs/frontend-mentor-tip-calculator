import React from "react";
import styles from "./Result.module.css";
import ResetButton from "../ResetButton/ResetButton";

const Result = ({ tipAmount, totalAmount, handleReset, isResultGreaterThanZero }) => {
  return (
    <div className={styles.resultContainer}>
      <div>
        <div className={styles.resultItem}>
          <div>
            Tip Amount <br></br>
            <span>/ person</span>
          </div>
          <div className={styles.amount}>${tipAmount}</div>
        </div>
        <div className={styles.resultItem}>
          <div>
            Total <br></br>
            <span>/ person</span>
          </div>
          <div className={styles.amount}>${totalAmount}</div>
        </div>
      </div>
      <ResetButton handleReset={handleReset} isResultGreaterThanZero={isResultGreaterThanZero}/>
    </div>
  );
};

export default Result;
