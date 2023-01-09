import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should be able to add two numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const addButton = container.getByTestId('operator-add');
    fireEvent.click(addButton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('Should be able to subtract', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtractButton = container.getByTestId('operator-subtract');
    fireEvent.click(subtractButton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  });

  it('Should be able to multiply', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiplyButton = container.getByTestId('operator-multiply');
    fireEvent.click(multiplyButton);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  });

  it('Should be able to divide', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divideButton = container.getByTestId('operator-divide');
    fireEvent.click(divideButton);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  });
  

  it('Should be able to divide', () => {
    const button6 = container.getByTestId('number6');
    fireEvent.click(button6);
    fireEvent.click(button6);
    fireEvent.click(button6);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('666');
  });

  it('Should be able to clear', () => {

    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const addButton = container.getByTestId('operator-add');
    fireEvent.click(addButton);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const clear = container.getByTestId('clear');
    fireEvent.click(clear);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('2');
  });

})