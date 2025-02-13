import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers.");
      return;
    }

    let calcResult;
    switch (operator) {
      case "+":
        calcResult = number1 + number2;
        break;
      case "-":
        calcResult = number1 - number2;
        break;
      case "*":
        calcResult = number1 * number2;
        break;
      case "/":
        calcResult = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        calcResult = 0;
    }

    setResult(calcResult);
  };

  return (
    <div className="box-container calculator-box">
      <div className="calculator-card">
        <h1 className="calculator-title">Calculator</h1>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="calculator-input"
        />

        <select
          name="Operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="calculator-select"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="calculator-input"
        />

        <button onClick={handleCalculate} className="calculate-button">
          Calculate
        </button>

        {result !== null && (
          <h2 className="calculator-result">Result: {result}</h2>
        )}
      </div>
    </div>
  );
}

export default Calculator;
