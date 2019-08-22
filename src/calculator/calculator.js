import React from 'react';
import './calculator.css';
import BasicButtons from './components/BasicButtons';
import AdvancedButtons from './components/AdvancedButtons';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      savedInnerValue: null,
      operator: null,
      operatorIsPresent: false,
      showAdvancedCalcualtor: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handle_pi_and_e = this.handle_pi_and_e.bind(this);
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
    this.handleLn = this.handleLn.bind(this);
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

  handle_pi_and_e(pi_or_e) {
    const {displayValue, operatorIsPresent} = this.state;
    if (operatorIsPresent) {
      this.setState({
        displayValue: '' + pi_or_e,
        operatorIsPresent: false
      })
    } else if (!operatorIsPresent && displayValue === '') {
      this.setState({
        displayValue: displayValue + pi_or_e
      })
    }
  
  }

  handleDecimal(dot) {
    const {displayValue} = this.state;
    if (displayValue.indexOf('.') === -1 && displayValue !== '') {
      this.setState ({
        displayValue: displayValue + dot,
        operatorIsPresent: false
      })
    }
  }

  handlePositiveOrNegative() {
    const {displayValue} = this.state;
    this.setState({
      displayValue: Math.sign(Number(displayValue)) !== -1 ? '-' + displayValue : displayValue.slice(1),
      operatorIsPresent: false
    })
  }

  handleOperation(inputOperator) {
    const {displayValue, savedInnerValue, operator} = this.state;
    const enteredValue = parseFloat(displayValue);
    const previousValue = parseFloat(savedInnerValue);
    const operators = {
      '+': (firstValue, secondValue) => +(firstValue + secondValue).toFixed(10),
      '-': (firstValue, secondValue) => +(firstValue - secondValue).toFixed(10),
      'x': (firstValue, secondValue) => +(firstValue * secondValue).toFixed(10),
      '÷': (firstValue, secondValue) => +(firstValue / secondValue).toFixed(10),
      'y^x': (firstValue, secondValue) => Math.pow(firstValue, secondValue),
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
        displayValue: (displayValue / 100).toString()
      })
    }
  }

  handleSin() {
    const {displayValue} = this.state;
    const deg = document.querySelector('.deg');
    const rad = document.querySelector('.rad');

    if (displayValue && deg.checked) {
      this.setState({
        displayValue: (Math.sin(displayValue * Math.PI / 180)).toString()
      })
    } else if (displayValue && rad.checked) {
      this.setState({
        displayValue: (Math.sin(displayValue)).toString()
      })
    }
  }

  handleCos() {
    const {displayValue} = this.state;
    const deg = document.querySelector('.deg');
    const rad = document.querySelector('.rad');

    if (displayValue && deg.checked) {
      this.setState({
        displayValue: (Math.cos(displayValue * Math.PI / 180)).toString()
      })
    } else if (displayValue && rad.checked) {
      this.setState({
        displayValue: (Math.cos(displayValue)).toString()
      })
    }
  }

  handleTan() {
    const {displayValue} = this.state;
    const deg = document.querySelector('.deg');
    const rad = document.querySelector('.rad');

    if (displayValue && deg.checked) {
      this.setState({
        displayValue: (Math.tan(displayValue * Math.PI / 180)).toString()
      })
    } else if (displayValue && rad.checked) {
      this.setState({
        displayValue: (Math.tan(displayValue)).toString()
      })
    }
  }

  handleCtg() {
    const {displayValue} = this.state;
    const deg = document.querySelector('.deg');
    const rad = document.querySelector('.rad');

    if (displayValue && deg.checked) {
      this.setState({
        displayValue: (1 / Math.tan(displayValue * Math.PI / 180)).toString()
      })
    } else if (displayValue && rad.checked) {
      this.setState({
        displayValue: (1 / Math.tan(displayValue)).toString()
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
      displayValue: (displayValue).toString()
    })
  }

  handleAbs() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: (Math.abs(displayValue)).toString()
      })
    }
  }

  handleLog() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: (Math.log10(displayValue)).toString()
      })
    }
  }

  handleLn() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: (Math.log(displayValue)).toString()
      })
    }
  }

  handleSquareRoot() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: (Math.sqrt(displayValue)).toString()
      })
    }
  }

  handleDeletion() {
    const {displayValue} = this.state;
    if (displayValue) {
      this.setState({
        displayValue: (displayValue).toString().slice(0, -1),
        operatorIsPresent: false
      })
    }
  }

  handleClearInput() {
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
      <div>
        <div className="calculator">
          <div className="display">{displayValue}</div>
          <BasicButtons 
            handleInput={this.handleInput}
            handleDecimal={this.handleDecimal}
            handlePositiveOrNegative={this.handlePositiveOrNegative}
            handleOperation={this.handleOperation}
            handlePercent={this.handlePercent}
            handleDeletion={this.handleDeletion}
            handleClearInput={this.handleClearInput}
          />
          <button className="advanced-calc" onClick={() => this.handleShowAdvancedButtons()}>◄</button>
          <AdvancedButtons
            handle_pi_and_e={this.handle_pi_and_e}
            handleSin={this.handleSin}
            handleCos={this.handleCos}
            handleTan={this.handleTan}
            handleCtg={this.handleCtg}
            handleFactorial={this.handleFactorial}
            handleAbs={this.handleAbs}
            handleLog={this.handleLog}
            handleLn={this.handleLn}
            handleOperation={this.handleOperation}
            handleSquareRoot={this.handleSquareRoot}
            handleInput={this.handleInput}
          />
        </div>
      </div>
    );
  }
}