import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="display">012345</div>
        <button className="button btn-0">0</button>
        <button className="button btn-1">1</button>
        <button className="button btn-2">2</button>
        <button className="button btn-3">3</button>
        <button className="button btn-4">4</button>
        <button className="button btn-5">5</button>
        <button className="button btn-6">6</button>
        <button className="button btn-7">7</button>
        <button className="button btn-8">8</button>
        <button className="button btn-9">9</button>
        <button className="button btn-dot">.</button>
        <button className="button btn-plus-minus">+/-</button>
        <button className="button btn-equals">=</button>
        <button className="button btn-brackets">()</button>
        <button className="button btn-plus">+</button>
        <button className="button btn-minus">-</button>
        <button className="button btn-divide">÷</button>
        <button className="button btn-multiply">x</button>
        <button className="button btn-delete">⌫</button>
        <button className="button btn-C">C</button>
      </div>
    );
  }
}

export default Calculator;