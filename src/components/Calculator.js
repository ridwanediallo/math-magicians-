import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="curr-operand">0</div>
        </div>
        <button type="button" className="gray-bg">
          AC
        </button>
        <button type="button" className="gray-bg">
          +/-
        </button>
        <button type="button" className="gray-bg">
          %
        </button>
        <button type="button" className="orange-bg">
          ÷
        </button>
        <button type="button" className="gray-bg">
          7
        </button>
        <button type="button" className="gray-bg">
          8
        </button>
        <button type="button" className="gray-bg">
          9
        </button>
        <button type="button" className="orange-bg">
          x
        </button>
        <button type="button" className="gray-bg">
          4
        </button>
        <button type="button" className="gray-bg">
          5
        </button>
        <button type="button" className="gray-bg">
          6
        </button>
        <button type="button" className="orange-bg">
          -
        </button>
        <button type="button" className="gray-bg">
          1
        </button>
        <button type="button" className="gray-bg">
          2
        </button>
        <button type="button" className="gray-bg">
          3
        </button>
        <button type="button" className="orange-bg">
          +
        </button>
        <button type="button" className="gray-bg data-equals span-two">
          0
        </button>
        <button type="button" className="gray-bg">
          .
        </button>
        <button type="button" className="orange-bg">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
