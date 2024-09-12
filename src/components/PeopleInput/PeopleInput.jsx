import React from "react";

const PeopleInput = ({ people, setPeople }) => {
  return (
    <div className="input-group">
      <label htmlFor="people">Number of People</label>
      <input
        type="number"
        id="people"
        value={people}
        onChange={(e) => setPeople(parseInt(e.target.value) || 1)}
        min="1"
      />
    </div>
  );
};

export default PeopleInput;
