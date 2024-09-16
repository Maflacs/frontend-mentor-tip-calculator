import React, { useState } from "react";
import BillInput from "./components/BillInput/BillInput";
import TipSelector from "./components/TipSelector/TipSelector";
import PeopleInput from "./components/PeopleInput/PeopleInput";
import Result from "./components/Result/Result";
import "./App.css";

function App() {
  // State variables for bill, tip, and people count
  const [bill, setBill] = useState();
  const [tipPercentage, setTipPercentage] = useState();
  const [people, setPeople] = useState(1);

  // Calculate tip and total per person
  const tipAmount = bill > 0 && tipPercentage && people > 0 ? ((bill * tipPercentage) / 100 / people).toFixed(2) : "0.00";
  const totalAmount = bill > 0 && tipPercentage && people > 0 ? (bill / people + parseFloat(tipAmount)).toFixed(2) : "0.00";

  // Reset function to clear inputs
  const handleReset = () => {
    setBill(0);
    setTipPercentage(); // Reset to default tip percentage
    setPeople(1);
  };

    // Determine if the result is 0 or greater than 0
    const isResultGreaterThanZero = parseFloat(tipAmount) > 0 || parseFloat(totalAmount) > 0;

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
          <Result tipAmount={tipAmount} totalAmount={totalAmount} handleReset={handleReset} isResultGreaterThanZero={isResultGreaterThanZero}/>
        </div>
      </div>
    </div>
  );
}

export default App;
