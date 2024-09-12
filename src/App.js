import React, { useState } from "react";
import BillInput from "./components/BillInput/BillInput";
import TipSelector from "./components/TipSelector/TipSelector";
import PeopleInput from "./components/PeopleInput/PeopleInput";
import Result from "./components/Result/Result";
import ResetButton from "./components/ResetButton/ResetButton";
import "./App.css";

function App() {
  // State variables for bill, tip, people, and custom tip
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15); // Default to 15%
  const [people, setPeople] = useState(1);

  // Calculate tip and total per person
  const tipAmount = ((bill * tipPercentage) / 100 / people).toFixed(2);
  const totalAmount = (bill / people + parseFloat(tipAmount)).toFixed(2);

  // Reset function to clear inputs
  const handleReset = () => {
    setBill(0);
    setTipPercentage(15);
    setPeople(1);
  };

  return (
    <div className="container">
      <div className="splitter-title">
        SPLI
        <br />
        TTER
      </div>
      <div className="calculator">
        <div className="inputs">
          <BillInput bill={bill} setBill={setBill} />
          <TipSelector
            tipPercentage={tipPercentage}
            setTipPercentage={setTipPercentage}
          />
          <PeopleInput people={people} setPeople={setPeople} />
        </div>
        <div className="results">
          <Result tipAmount={tipAmount} totalAmount={totalAmount} />
          <ResetButton handleReset={handleReset} />
        </div>
      </div>
    </div>
  );
}

export default App;
