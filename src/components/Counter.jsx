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
      alert("Opps you reach Zero");
    }
  }

  function resetNumber() {
    setCount(0);
  }

  return (
    <div>
       
      <p>Count: {count}</p>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={decrementNumber}>Decrement</button>
      <button onClick={resetNumber}>Reset</button>
    </div>
  );
}

export default Counter;