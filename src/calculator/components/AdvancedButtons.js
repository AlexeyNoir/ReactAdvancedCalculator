import React from 'react';

const AdvancedButtons = props => {
  return (
    <div>
      <div className="deg-radio-button">
        <input className='deg' name="unit" type="radio" value="degree" id="degree" defaultChecked/>
        <label for="degree">deg</label>
      </div>
      <div className="rad-radio-button">
        <input className='rad' name="unit" type="radio" value="radian" id="radian" />
        <label for="radian">rad</label>
      </div>
      <button className="button btn-sin" onClick={() => props.handleSin()}>sin</button>
      <button className="button btn-cos" onClick={() => props.handleCos()}>cos</button>
      <button className="button btn-tan" onClick={() => props.handleTan()}>tan</button>
      <button className="button btn-ctg" onClick={() => props.handleCtg()}>ctg</button>
      <button className="button btn-factorial" onClick={() => props.handleFactorial()}>x!</button>
      <button className="button btn-absoluteValue" onClick={() => props.handleAbs()}>|x|</button>
      <button className="button btn-log" onClick={() => props.handleLog()}>log</button>
      <button className="button btn-ln" onClick={() => props.handleOperation('ln')}>ln</button>
      <button className="button btn-power" onClick={() => props.handleOperation('y^x')}>y<sup>x</sup></button>
      <button className="button btn-root" onClick={() => props.handleSquareRoot()}>√</button>
      <button className="button btn-𝜋" onClick={() => props.handleInput(Math.PI)}>𝜋</button>
      <button className="button btn-e" onClick={() => props.handleInput(Math.E)}>e</button>
    </div>
  );
};

export default AdvancedButtons;