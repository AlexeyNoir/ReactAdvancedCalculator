import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      innerValue: null,
      operator: null,
      operatorIsPresent: false
    }
  }

  input(symbol) {
    const {displayValue, operatorIsPresent} = this.state;
    this.setState({
      displayValue: displayValue + symbol
    })
  }

  // operator(symbol) {
  //   const {displayValue} = this.state;
  //   this.setState({
  //     displayValue: displayValue ? displayValue + symbol : displayValue
  //   })
  // }

  plusOrMinus() {
    const {displayValue} = this.state;
    this.setState({
      displayValue: Math.sign(Number(displayValue)) !== -1 ? '-' + displayValue : displayValue.slice(1)
    })
  }

  operation(operator) {
    const {displayValue, innerValue} = this.state;
    const enteredValue = parseFloat(displayValue);
    const operators = {
      '+': (previousValue, displayValue) => previousValue + displayValue,
      '-': (previousValue, displayValue) => previousValue - displayValue,
      'x': (previousValue, displayValue) => previousValue * displayValue,
      '÷': (previousValue, displayValue) => previousValue / displayValue,
      '=': (previousValue, displayValue) => displayValue
    }
    if (operator) {
      const updatedValue = operators[operator](innerValue, enteredValue)
    }
  }

  equals

  deletion() {
    const {displayValue} = this.state;
    this.setState({
      displayValue: displayValue.slice(0, -1)
    })
  }

  clearInput() {
    this.setState({
      displayValue: ''
    })
  }

  render() {
    const {displayValue} = this.state;

    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <button className="button btn-0" onClick={() => this.input(0)}>0</button>
        <button className="button btn-1" onClick={() => this.input(1)}>1</button>
        <button className="button btn-2" onClick={() => this.input(2)}>2</button>
        <button className="button btn-3" onClick={() => this.input(3)}>3</button>
        <button className="button btn-4" onClick={() => this.input(4)}>4</button>
        <button className="button btn-5" onClick={() => this.input(5)}>5</button>
        <button className="button btn-6" onClick={() => this.input(6)}>6</button>
        <button className="button btn-7" onClick={() => this.input(7)}>7</button>
        <button className="button btn-8" onClick={() => this.input(8)}>8</button>
        <button className="button btn-9" onClick={() => this.input(9)}>9</button>
        <button className="button btn-dot" onClick={() => this.input('.')}>.</button>
        <button className="button btn-plus-minus" onClick={() => this.plusOrMinus()}>+/-</button>
        <button className="button btn-equals" onClick={() => this.operation()}>=</button>
        <button className="button btn-brackets">()</button>
        <button className="button btn-plus" onClick={() => this.operation('+')}>+</button>
        <button className="button btn-minus" onClick={() => this.operation('-')}>-</button>
        <button className="button btn-divide" onClick={() => this.operation('÷')}>÷</button>
        <button className="button btn-multiply" onClick={() => this.operation('x')}>x</button>
        <button className="button btn-delete" onClick={() => this.deletion()}>⌫</button>
        <button className="button btn-clear" onClick={() => this.clearInput()}>C</button>
        <div className="message">Error</div>
      </div>
    );
  }
}

export default Calculator;