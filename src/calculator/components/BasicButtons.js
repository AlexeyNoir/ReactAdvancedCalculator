import React from 'react';

const BasicButtons = props => {
  return (
    <div>
      <button className="button btn-0" onClick={() => props.handleInput(0)}>0</button>
      <button className="button btn-1" onClick={() => props.handleInput(1)}>1</button>
      <button className="button btn-2" onClick={() => props.handleInput(2)}>2</button>
      <button className="button btn-3" onClick={() => props.handleInput(3)}>3</button>
      <button className="button btn-4" onClick={() => props.handleInput(4)}>4</button>
      <button className="button btn-5" onClick={() => props.handleInput(5)}>5</button>
      <button className="button btn-6" onClick={() => props.handleInput(6)}>6</button>
      <button className="button btn-7" onClick={() => props.handleInput(7)}>7</button>
      <button className="button btn-8" onClick={() => props.handleInput(8)}>8</button>
      <button className="button btn-9" onClick={() => props.handleInput(9)}>9</button>
      <button className="button btn-dot" onClick={() => props.handleDecimal('.')}>.</button>
      <button className="button btn-plus-minus" onClick={() => props.handlePositiveOrNegative()}>+/-</button>
      <button className="button btn-equals" onClick={() => props.handleOperation('=')}>=</button>
      <button className="button btn-percent" onClick={() => props.handlePercent()}>%</button>
      <button className="button btn-plus" onClick={() => props.handleOperation('+')}>+</button>
      <button className="button btn-minus" onClick={() => props.handleOperation('-')}>-</button>
      <button className="button btn-divide" onClick={() => props.handleOperation('÷')}>÷</button>
      <button className="button btn-multiply" onClick={() => props.handleOperation('x')}>x</button>
      <button className="button btn-delete" onClick={() => props.handleDeletion()}>⌫</button>
      <button className="button btn-clear" onClick={() => props.handleClearInput()}>C</button>
    </div>
  );
};

export default BasicButtons;