import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Buttons() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
    // Update the display value
    const { total, next } = newData;
    const newDisplayValue = next || total || '0';
    setDisplayValue(newDisplayValue);
  };
  return (
    <div className="buttons">
      <div className="display">{displayValue}</div>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('AC')}>AC</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('%')}>%</button>
      <button className="button math-symbols" type="button" onClick={() => handleButtonClick('÷')}>÷</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('7')}>7</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('8')}>8</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('9')}>9</button>
      <button className="button math-symbols" type="button" onClick={() => handleButtonClick('x')}>x</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('4')}>4</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('5')}>5</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('6')}>6</button>
      <button className="button math-symbols" type="button" onClick={() => handleButtonClick('-')}>-</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('1')}>1</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('2')}>2</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('3')}>3</button>
      <button className="button math-symbols" type="button" onClick={() => handleButtonClick('+')}>+</button>
      <button className="button numbers-and-extras number0" type="button" onClick={() => handleButtonClick('0')}>0</button>
      <button className="button numbers-and-extras" type="button" onClick={() => handleButtonClick('.')}>.</button>
      <button className="button math-symbols" type="button" onClick={() => handleButtonClick('=')}>=</button>
    </div>
  );
}
export default Buttons;
