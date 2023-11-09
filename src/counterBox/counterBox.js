import "./CounterBox.css";
import React, { useState } from "react";

function CounterBox() {
  const [Countervalue, setState] = useState(0);
  return (
    <div className="Container">
      <div>
        <h1>Counter Application</h1>
        <div className="counterNumber">{Countervalue}</div>
        <div className="buttonContainer">
          <button
            className="decreaseBTN"
            onClick={() => setState(Countervalue - 1)}
          >
            Decrease
          </button>
          <button
            className="increaseBTN"
            onClick={() => setState(Countervalue + 1)}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterBox;
