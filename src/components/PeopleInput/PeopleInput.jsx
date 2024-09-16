import React from "react";
import styles from "./PeopleInput.module.css";

const PeopleInput = ({ people, setPeople }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setPeople(value);
  };

  return (
    <div className="input-group">
      <label htmlFor="people">Number of People<span className={styles.zero}>{people === 0 ? "Can't be zero" : ""}</span></label>
      <input
        className={`${styles.peopleInput} ${people === 0 ? styles.error : ""}`} // Dynamically add error class
        type="number"
        id="people"
        value={people}
        onChange={handleChange}
        min="0"
        placeholder="1"
      />
    </div>
  );
};

export default PeopleInput;
