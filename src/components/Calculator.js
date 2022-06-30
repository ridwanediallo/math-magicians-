import React, { Component } from 'react';
import calculate from '../logic/calculate';

import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (e) => {
    const values = calculate(this.state, e.target.innerText);
    this.setState(values);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="output">
          <div className="curr-operand">{` ${total || ''} ${operation || ''} ${next || ''}`}</div>
        </div>
        <div className="keypad">
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            AC
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            +/-
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            %
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="orange-bg"
          >
            ÷
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            7
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            8
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            9
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="orange-bg"
          >
            x
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            4
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            5
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            6
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="orange-bg"
          >
            -
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            1
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            2
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            3
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="orange-bg"
          >
            +
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg data-equals span-two"
          >
            0
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="gray-bg"
          >
            .
          </button>
          <button
            onClick={this.onClickHandler}
            type="button"
            className="orange-bg"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
