// Get all elements by their ids.

const button = document.getElementById('ButtonElement');
const firstInput = document.getElementById('FirstInput');
const secondInput = document.getElementById('SecondInput');
const result = document.getElementById('ResultElement');

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

// Define divide function.

// Define module function.

// Define exponentiation function.

// Define adding float numbers function.

// Add event listener for a button element with addFunction event handler.
button.addEventListener('click', addFunction, false);