
let displayValue = 0;
let firstOperator = null;
let firstNum = null;
let secondOperator = null;
let secondNum =null;
let result;
const buttons = document.querySelectorAll('button');

function displayNum() {
  const display = document.getElementById('display');
  display.innerText = displayValue;
  if(displayValue.length > 9) {
      display.innerText = displayValue.substring(0, 9);
  }
}

displayNum();
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    if(button.classList.contains('number')) {
      inputOperand(button.value);
      displayNum();
  } else if(button.classList.contains('operator')) {
      inputOperator(button.value);
  } else if(button.classList.contains('equals')) {
      inputEquals();
      displayNum();
  } else if(button.classList.contains('decimal')) {
      inputDecimal(button.value);
      displayNum();
  } else if(button.classList.contains('percent')) {
      inputPercent(displayValue);
      displayNum();
  } else if(button.classList.contains('clear'))
      clearDisplay();
      displayNum();
  })
})

function inputOperand(operand) {
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            //1st click - handles first operand input
            displayValue = operand;
        } else if(displayValue === firstNum) {
            //starts new operation after inputEquals()
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        //3rd/5th click - inputs to secondNum
        if(displayValue === firstNum) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputOperator(operator) {
    if(firstOperator != null && secondOperator === null) {
        //4th click - handles input of second operator
        secondOperator = operator;
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), firstOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstNum = displayValue;
        result = null;
    } else if(firstOperator != null && secondOperator != null) {
        //6th click - new secondOperator
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), secondOperator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstNum = displayValue;
        result = null;
    } else { 
        //2nd click - handles first operator input
        firstOperator = operator;
        firstNum = displayValue;
    }
}

function inputEquals() {
  //hitting equals doesn't display undefined before operate()
  if(firstOperator === null) {
      displayValue = displayValue;
  } else if(secondOperator != null) {
      //handles final result
      secondNum = displayValue;
      result = operate(Number(firstNum), Number(secondNum), secondOperator);
      if(result === 'lmao') {
          displayValue = 'lmao';
      } else {
          displayValue = roundAccurately(result, 15).toString();
          firstNum = displayValue;
          secondNum = null;
          firstOperator = null;
          secondOperator = null;
          result = null;
      }
  } else {
      //handles first operation
      secondNum = displayValue;
      result = operate(Number(firstNum), Number(secondNum), firstOperator);
      if(result === 'lmao') {
          displayValue = 'lmao';
      } else {
          displayValue = roundAccurately(result, 15).toString();
          firstNum = displayValue;
          secondNum = null;
          firstOperator = null;
          secondOperator = null;
          result = null;
      }
  }
}

function inputDecimal(dot) {
  if(displayValue === firstNum || displayValue === secondNum) {
      displayValue = '0';
      displayValue += dot;
  } else if(!displayValue.includes(dot)) {
      displayValue += dot;
  } 
}

function inputPercent(num) {
  displayValue = (num/100).toString();
}

function inputSign(num) {
  displayValue = (num * -1).toString();
}

function clearDisplay() {
  displayValue = '0';
  firstNum = null;
  secondNum = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
}

function inputBackspace() {
  if(firstNum != null) {
      firstNum = null;
      updateDisplay();
  }
}

function operate(x, y, op) {
  if(op === '+') {
      return x + y;
  } else if(op === '-') {
      return x - y;
  } else if(op === '*') {
      return x * y;
  } else if(op === '/') {
      if(y === 0) {
          return 'lmao';
      } else {
      return x / y;
      }
  }
}

function roundAccurately(num, places) {
  return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}