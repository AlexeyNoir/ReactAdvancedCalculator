import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      savedInnerValue: null,
      operator: null,
      operatorIsPresent: false
    }
  }

  input(symbol) {
    const {displayValue, operatorIsPresent} = this.state;
    if (operatorIsPresent) {
      this.setState({
        displayValue: '' + symbol,
        operatorIsPresent: false
      })
    } else if (!operatorIsPresent) {
      this.setState({
        displayValue: displayValue + symbol
      })
    }
  }

  decimal(dot) {
    const {displayValue} = this.state;
    if (displayValue.indexOf('.') === -1 && displayValue !== '') {
      this.setState ({
        displayValue: displayValue + dot
      })
    }
  }

  positiveOrNegative() {
    const {displayValue} = this.state;
    this.setState({
      displayValue: Math.sign(Number(displayValue)) !== -1 ? '-' + displayValue : displayValue.slice(1)
    })
  }

  operation(inputOperator) {
    const {displayValue, savedInnerValue, operator} = this.state;
    const enteredValue = parseFloat(displayValue);
    const previousValue = parseFloat(savedInnerValue);
    const operators = {
      '+': (firstValue, secondValue) => firstValue + secondValue,
      '-': (firstValue, secondValue) => firstValue - secondValue,
      'x': (firstValue, secondValue) => firstValue * secondValue,
      '÷': (firstValue, secondValue) => firstValue / secondValue,
      '=': (firstValue, secondValue) => secondValue
    }

    if (savedInnerValue === null) {
      this.setState({
        savedInnerValue: displayValue
      })
    }

    if (displayValue) {
      this.setState({
        operator: inputOperator,
        operatorIsPresent: true
      })
    }

    if (operator !== null) {
      const computedValue = operators[operator](previousValue, enteredValue);
      this.setState({
        displayValue: computedValue,
        savedInnerValue: '' + computedValue
      })
    }
  }

  deletion() {
    const {displayValue, savedInnerValue} = this.state;
    this.setState({
      displayValue: displayValue.slice(0, -1),
      savedInnerValue: savedInnerValue.silce(0, -1)
    })
  }

  clearInput() {
    this.setState({
      displayValue: '',
      savedInnerValue: null,
      operator: null,
      operatorIsPresent: false
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
        <button className="button btn-dot" onClick={() => this.decimal('.')}>.</button>
        <button className="button btn-plus-minus" onClick={() => this.positiveOrNegative()}>+/-</button>
        <button className="button btn-equals" onClick={() => this.operation('=')}>=</button>
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