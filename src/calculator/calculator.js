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
    this.handleInput = this.handleInput.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handlePositiveOrNegative = this.handlePositiveOrNegative.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleShowAdvancedButtons = this.handleShowAdvancedButtons.bind(this);
    this.handlePercent = this.handlePercent.bind(this);
    this.handleSquareRoot = this.handleSquareRoot.bind(this);
    this.handleSin = this.handleSin.bind(this);
    this.handleCos = this.handleCos.bind(this);
    this.handleTan = this.handleTan.bind(this);
    this.handleCtg = this.handleCtg.bind(this);
    this.handleFactorial = this.handleFactorial.bind(this);
    this.handleAbs = this.handleAbs.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    this.handleLog = this.handleLog.bind(this);
  }

  handleInput(symbol) {
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

  handleDecimal(dot) {
    const {displayValue} = this.state;
    if (displayValue.indexOf('.') === -1 && displayValue !== '') {
      this.setState ({
        displayValue: displayValue + dot
      })
    }
  }

  handlePositiveOrNegative() {
    const {displayValue} = this.state;
    this.setState({
      displayValue: Math.sign(Number(displayValue)) !== -1 ? '-' + displayValue : displayValue.slice(1)
    })
  }

  handleOperation(inputOperator) {
    const {displayValue, savedInnerValue, operator} = this.state;
    const enteredValue = parseFloat(displayValue);
    const previousValue = parseFloat(savedInnerValue);
    const operators = {
      '+': (firstValue, secondValue) => firstValue + secondValue,
      '-': (firstValue, secondValue) => firstValue - secondValue,
      'x': (firstValue, secondValue) => firstValue * secondValue,
      '÷': (firstValue, secondValue) => firstValue / secondValue,
      'y^x': (firstValue, secondValue) => Math.pow(firstValue, secondValue),
      'ln': (firstValue, secondValue) => Math.round(Math.log(secondValue) / Math.log(firstValue)),
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

  handleShowAdvancedButtons() {
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

  handlePercent() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: displayValue / 100
      })
    }
  }

  handleSin() {
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

  handleCos() {
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

  handleTan() {
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

  handleCtg() {
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

  handleFactorial() {
    let {displayValue} = this.state;
    if (displayValue && (displayValue === 0 || displayValue === 1)) {
      this.setState ({
        displayValue: 1
      })
    }
    for (let i = displayValue - 1; i >= 1; i--) {
      displayValue *= i;
    }
    this.setState ({
      displayValue: displayValue
    })
  }

  handleAbs() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: Math.abs(displayValue)
      })
    }
  }

  handleLog() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: Math.log10(displayValue)
      })
    }
  }

  handleSquareRoot() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: Math.sqrt(displayValue)
      })
    }
  }

  handleDeletion() {
    const {displayValue} = this.state;
    this.setState({
      displayValue: displayValue.slice(0, -1)
    })
  }

  handleClearInput() {
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
          <button className="button btn-0" onClick={() => this.handleInput(0)}>0</button>
          <button className="button btn-1" onClick={() => this.handleInput(1)}>1</button>
          <button className="button btn-2" onClick={() => this.handleInput(2)}>2</button>
          <button className="button btn-3" onClick={() => this.handleInput(3)}>3</button>
          <button className="button btn-4" onClick={() => this.handleInput(4)}>4</button>
          <button className="button btn-5" onClick={() => this.handleInput(5)}>5</button>
          <button className="button btn-6" onClick={() => this.handleInput(6)}>6</button>
          <button className="button btn-7" onClick={() => this.handleInput(7)}>7</button>
          <button className="button btn-8" onClick={() => this.handleInput(8)}>8</button>
          <button className="button btn-9" onClick={() => this.handleInput(9)}>9</button>
          <button className="button btn-dot" onClick={() => this.handleDecimal('.')}>.</button>
          <button className="button btn-plus-minus" onClick={() => this.handlePositiveOrNegative()}>+/-</button>
          <button className="button btn-equals" onClick={() => this.handleOperation('=')}>=</button>
          <button className="button btn-percent" onClick={() => this.handlePercent()}>%</button>
          <button className="button btn-plus" onClick={() => this.handleOperation('+')}>+</button>
          <button className="button btn-minus" onClick={() => this.handleOperation('-')}>-</button>
          <button className="button btn-divide" onClick={() => this.handleOperation('÷')}>÷</button>
          <button className="button btn-multiply" onClick={() => this.handleOperation('x')}>x</button>
          <button className="button btn-delete" onClick={() => this.handleDeletion()}>⌫</button>
          <button className="button btn-clear" onClick={() => this.handleClearInput()}>C</button>
        </div>
        <button className="advanced-calc" onClick={() => this.handleShowAdvancedButtons()}>◄</button>
        <div>
          <div className="deg-radio-button">
            <input className='deg' name="unit" type="radio" value="degree" id="degree" defaultChecked/>
            <label for="degree">deg</label>
          </div>
          <div className="rad-radio-button">
            <input className='rad' name="unit" type="radio" value="radian" id="radian" />
            <label for="radian">rad</label>
          </div>
          <button className="button btn-sin" onClick={() => this.handleSin()}>sin</button>
          <button className="button btn-cos" onClick={() => this.handleCos()}>cos</button>
          <button className="button btn-tan" onClick={() => this.handleTan()}>tan</button>
          <button className="button btn-ctg" onClick={() => this.handleCtg()}>ctg</button>
          <button className="button btn-factorial" onClick={() => this.handleFactorial()}>x!</button>
          <button className="button btn-absoluteValue" onClick={() => this.handleAbs()}>|x|</button>
          <button className="button btn-log" onClick={() => this.handleLog()}>log</button>
          <button className="button btn-ln" onClick={() => this.handleOperation('ln')}>ln</button>
          <button className="button btn-power" onClick={() => this.handleOperation('y^x')}>y<sup>x</sup></button>
          <button className="button btn-root" onClick={() => this.handleSquareRoot()}>√</button>
          <button className="button btn-𝜋" onClick={() => this.handleInput(Math.PI)}>𝜋</button>
          <button className="button btn-e" onClick={() => this.handleInput(Math.E)}>e</button>          
        </div>
      </div>
      {/* <div className="message">{message}</div> */}
      </div>
    );
  }
}

export default Calculator;