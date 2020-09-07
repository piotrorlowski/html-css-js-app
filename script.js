// Get all elements by their ids.

const button = document.getElementById('ButtonElement');
const firstInput = document.getElementById('FirstInput');
const secondInput = document.getElementById('SecondInput');
const result = document.getElementById('ResultElement');

const button_multiply = document.getElementById('ButtonElement_multiply');
const firstInput_multiply = document.getElementById('FirstInput_multiply');
const secondInput_multiply = document.getElementById('SecondInput_multiply');
const result_multiply = document.getElementById('ResultElement_multiply');

// Define add function.

const addFunction = function () {
  // Get values from inputs
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  // Check if those values.lengths are different than 0.
  if (firstValue.length === 0 && secondValue.length === 0) {
    result.innerHTML = 'No values were provided in inputs';
  } else {
    // If those values.length are different than 0 then do sum operation with '+' operator.
    sum = parseInt(firstValue) + parseInt(secondValue);
    // Set innerHTML of paragraph to firstValue + secondValue = sum.
    result.innerHTML = `${firstValue} + ${secondValue} = ${sum}`;
  }
};

// Define multiply function.
const multiplyFunction = function () {
  // Get values from inputs
  const firstValue = firstInput_multiply.value;
  const secondValue = secondInput_multiply.value;
  // Check if those values.lengths are different than 0.
  if (firstValue.length === 0 && secondValue.length === 0) {
    result_multiply.innerHTML = 'No values were provided in inputs';
  } else {
    // If those values.length are different than 0 then do sum operation with '+' operator.
    sum = parseInt(firstValue) * parseInt(secondValue);
    // Set innerHTML of paragraph to firstValue + secondValue = sum.
    result_multiply.innerHTML = `${firstValue} * ${secondValue} = ${sum}`;
  }
};

// Define divide function.

// Define modulo function.

// Define exponentiation function.

// Define adding float numbers function.

// Add event listener for a button element with addFunction event handler.
button.addEventListener('click', addFunction, false);
button_multiply.addEventListener('click', multiplyFunction, false);