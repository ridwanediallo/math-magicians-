import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    const values = calculate(calculator, e.target.innerText);
    setCalculator(values);
  };

  const { total, next, operation } = calculator;
  return (
    <Container>
      <Row>
        <div className="parent">
          <h2>Do some math!</h2>

          <div className="calculator">
            <div className="output">
              <div>{` ${total || ''} ${operation || ''} ${next || ''}`}</div>
            </div>
            <div className="keypad">
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                AC
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                +/-
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                %
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="orange-bg"
              >
                ÷
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                7
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                8
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                9
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="orange-bg"
              >
                x
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                4
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                5
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                6
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="orange-bg"
              >
                -
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                1
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                2
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                3
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="orange-bg"
              >
                +
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg data-equals span-two"
              >
                0
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="gray-bg"
              >
                .
              </button>
              <button
                onClick={onClickHandler}
                type="button"
                className="orange-bg"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Calculator;
