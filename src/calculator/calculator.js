import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      savedInnerValue: null,
      operator: null,
      operatorIsPresent: false,
      message: '',
      showAdvancedCalcualtor: false
    };
    this.input = this.input.bind(this);
    this.decimal = this.decimal.bind(this);
    this.positiveOrNegative = this.positiveOrNegative.bind(this);
    this.operation = this.operation.bind(this);
    this.showButtons = this.showAdvancedButtons.bind(this);
    this.percent = this.percent.bind(this);
    this.squareRoot = this.squareRoot.bind(this);
    this.sin = this.sin.bind(this);
    this.cos = this.cos.bind(this);
    this.tan = this.tan.bind(this);
    this.factorial = this.factorial.bind(this);
    this.deletion = this.deletion.bind(this);
    this.clearInput = this.clearInput.bind(this);
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
        displayValue: '' + computedValue,
        savedInnerValue: '' + computedValue
      })
    }
  }

  showAdvancedButtons() {
    const {showAdvancedCalcualtor} = this.state;

    let calculatorWidth = document.querySelector('.calculator');
    let pressedButton = document.querySelector('.advanced-calc');

    if (!showAdvancedCalcualtor) {
      calculatorWidth.style.width = '370px';
      pressedButton.style.transform = 'rotate(180deg)';
      this.setState({
        showAdvancedCalcualtor: true
      })
    } else {
      calculatorWidth.style.width = '220px';
      pressedButton.style.transform = 'rotate(0deg)';
      this.setState({
        showAdvancedCalcualtor: false
      });
    }
  }

  percent() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: displayValue / 100
      })
    }
  }

  sin() {
    const {displayValue} = this.state;
    const deg = document.querySelector('.deg');
    const rad = document.querySelector('.rad');

    if (displayValue && deg.checked) {
      this.setState({
        displayValue: Math.sin(displayValue * Math.PI / 180)
      })
    } else if (displayValue && rad.checked) {
      this.setState({
        displayValue: Math.sin(displayValue)
      })
    }
  }

  cos() {
    const {displayValue} = this.state;
    const deg = document.querySelector('.deg');
    const rad = document.querySelector('.rad');

    if (displayValue && deg.checked) {
      this.setState({
        displayValue: Math.cos(displayValue * Math.PI / 180)
      })
    } else if (displayValue && rad.checked) {
      this.setState({
        displayValue: Math.cos(displayValue)
      })
    }
  }

  tan() {
    const {displayValue} = this.state;
    const deg = document.querySelector('.deg');
    const rad = document.querySelector('.rad');

    if (displayValue && deg.checked) {
      this.setState({
        displayValue: Math.tan(displayValue * Math.PI / 180)
      })
    } else if (displayValue && rad.checked) {
      this.setState({
        displayValue: Math.tan(displayValue)
      })
    }
  }

  ctg() {
    const {displayValue} = this.state;
    const deg = document.querySelector('.deg');
    const rad = document.querySelector('.rad');

    if (displayValue && deg.checked) {
      this.setState({
        displayValue: 1 / Math.tan(displayValue * Math.PI / 180)
      })
    } else if (displayValue && rad.checked) {
      this.setState({
        displayValue: 1 / Math.tan(displayValue)
      })
    }
  }

  factorial(displayValue) {
    // const {displayValue} = this.state;
    if (displayValue && displayValue != 1) {
      this.setState({
        displayValue: displayValue * (displayValue - 1)
      })
    } else {
      this.setState({
        displayValue: 1
      })
    }
  }

  squareRoot() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: Math.sqrt(displayValue)
      })
    }
  }

  deletion() {
    const {displayValue} = this.state;
    this.setState({
      displayValue: displayValue.slice(0, -1)
    })
  }

  clearInput() {
    this.setState({
      displayValue: '',
      savedInnerValue: null,
      operator: null,
      operatorIsPresent: false,
      message: ''
    })
  }

  render() {
    const {displayValue, message} = this.state;

    return (
      <div>
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="button-set-1">
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
          <button className="button btn-percent" onClick={() => this.percent()}>%</button>
          <button className="button btn-plus" onClick={() => this.operation('+')}>+</button>
          <button className="button btn-minus" onClick={() => this.operation('-')}>-</button>
          <button className="button btn-divide" onClick={() => this.operation('÷')}>÷</button>
          <button className="button btn-multiply" onClick={() => this.operation('x')}>x</button>
          <button className="button btn-delete" onClick={() => this.deletion()}>⌫</button>
          <button className="button btn-clear" onClick={() => this.clearInput()}>C</button>
        </div>
        <button className="advanced-calc" onClick={() => this.showAdvancedButtons()}>◄</button>
        <div>
          <div className="deg-radio-button">
            <input className='deg' name="unit" type="radio" value="degree" id="degree" defaultChecked/>
            <label for="degree">deg</label>
          </div>
          <div className="rad-radio-button">
            <input className='rad' name="unit" type="radio" value="radian" id="radian" />
            <label for="radian">rad</label>
          </div>
          <button className="button btn-sin" onClick={() => this.sin()}>sin</button>
          <button className="button btn-cos" onClick={() => this.cos()}>cos</button>
          <button className="button btn-tan" onClick={() => this.tan()}>tan</button>
          <button className="button btn-ctg" onClick={() => this.ctg()}>ctg</button>
          <button className="button btn-log">log</button>
          <button className="button btn-In">In</button>
          <button className="button btn-factorial" onClick={() => this.factorial()}>x!</button>
          <button className="button btn-root" onClick={() => this.squareRoot()}>√</button>
          <button className="button btn-power">y<sup>x</sup></button>
          <button className="button btn-absoluteValue">|x|</button>
          <button className="button btn-𝜋" onClick={() => this.input(Math.PI)}>𝜋</button>
          <button className="button btn-e" onClick={() => this.input(Math.E)}>e</button>          
        </div>
      </div>
      {/* <div className="message">{message}</div> */}
      </div>
    );
  }
}

export default Calculator;