import React from "react";
import styles from "./PeopleInput.module.css";

const PeopleInput = ({ people, setPeople }) => {
  return (
    <div className="input-group">
      <label htmlFor="people">Number of People</label>
      <input
        className={styles.peopleInput}
        type="number"
        id="people"
        value={people}
        onChange={(e) => setPeople(parseInt(e.target.value))}
        min="1"
        placeholder="1"
      />
    </div>
  );
};

export default PeopleInput;
