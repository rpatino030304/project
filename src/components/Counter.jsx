import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementNumber() {
    setCount(count + 1);
  }

  function decrementNumber() { 
    if(count > 0){
      setCount(count - 1);
    }else{
      alert("Less Than Zero");
    }
  }

  function resetNumber() {
    setCount(0);
  }

  return (
    <div className="box-container counter-box">
      <h1 className="counter-title">Bilang</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={incrementNumber}>Increment</button>
        <button onClick={decrementNumber}>Decrement</button>
        <button onClick={resetNumber} className="reset-button">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
