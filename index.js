 // Reference to the display
 const display = document.getElementById('result');
    
 // Variables to store the current input, previous input, and selected operator
 let currentInput = '';
 let previousInput = '';
 let currentOperator = '';

 // Function to update the display
 function updateDisplay(value) {
    document.getElementById('result').textContent = value;
  }

 // Reset all calculator values
 function clearCalculator() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    updateDisplay('0');
  }
  
 
 // The special calculation function with random behavior
 function getSpecialRandomNum(n1, n2, operator) {
   const randomNum = Math.random();
   n1 = parseFloat(n1);
   n2 = parseFloat(n2);
   
   switch (operator) {
     case '+':
       // With 10% probability, subtract instead of adding
       return randomNum <= 0.10 ? n1 - n2 : n1 + n2;
     case '-':
       // With 10% probability, divide instead of subtracting (if valid)
       if (randomNum <= 0.10) {
         return n2 !== 0 ? n1 / n2 : 'Error: Cannot divide by zero';
       } else {
         return n1 - n2;
       }
     case '*':
       // With 10% probability, add instead of multiplying
       return randomNum <= 0.10 ? n1 + n2 : n1 * n2;
     case '/':
       // First, check for division by zero
       if (n2 === 0) return 'Error: Cannot divide by zero';
       // With 10% probability, perform exponentiation instead of division
       return randomNum <= 0.10 ? n1 ** n2 : n1 / n2;
     default:
       return 'Invalid operator';
   }
 }

 
 // Modified event listener for buttons:
 document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (!button.classList.contains('operator') && 
          !button.classList.contains('equals') && 
          !button.classList.contains('special')) {
        currentInput += value;
        updateDisplay(currentInput);
      } else if (button.classList.contains('operator')) {
        if (currentInput !== '') {
          previousInput = currentInput;
        }
        currentOperator = button.getAttribute('data-operator');
        updateDisplay(previousInput + ' ' + currentOperator);
        currentInput = '';
      } else if (button.classList.contains('equals')) {
        if (previousInput !== '' && currentOperator !== '' && currentInput !== '') {
          const result = getSpecialRandomNum(previousInput, currentInput, currentOperator);
          updateDisplay(result);
          currentInput = result.toString();
          previousInput = '';
          currentOperator = '';
        }
      } else if (button.classList.contains('special')) {
        if (value === 'AC') {
          clearCalculator();
        }
        // Implement other special functionalities if needed.
      }
    });
  });


// /* Create a faulty calculator using JS 
// 1. It takes two number as input from the user
// 2. It performs wrong operations as follows:

// + ---> -
// * ---> +
// - ---> /
// / ---> **

// It performs wrong operation 10% of the times
// */
 

// // const prompt = require('prompt-sync')();
// // const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ')
// // const n1 = parseFloat(prompt ('Enter the first number: '));  
// // const n2 = parseFloat(prompt ('Enter the second number: '));  
// function getSpecialRandomNum(n1 , n2, operator)  {
//     const randomNum = Math.random()
//     switch (operator) {
//         case '+':
//           // With 10% probability, subtract instead of adding
//           if (randomNum <= 0.10) {
//             return n1 - n2;
//           } else {
//             return n1 + n2;
//           }
    
//         case '-':
//           // With 10% probability, divide instead of subtracting
//           if (randomNum <= 0.10) {
//             if (n2 !== 0) {
//               return n1 / n2;
//             } else {
//               return 'Error: Cannot divide by zero';
//             }
//           } else {
//             return n1 - n2;
//           }
    
//         case '*':
//           // With 10% probability, add instead of multiplying 
//           if (randomNum <= 0.10) {
//               return n1 + n2;
//           } else {
//             return n1 * n2;
//           }
    
//         case '/':
//           // First, check for division by zero
//           if (n2 === 0) {
//             return 'Error: Cannot divide by zero';
//           }
//           // With 10% probability, power of 2 instead of dividing
//           if (randomNum <= 0.10) {
//             return n1 ** n2;
//           } else {
//             return n1 / n2;
//           }
    
//         default:
//           return 'Invalid operator';
//       }
//     }
    
// // const result = getSpecialRandomNum(n1, n2);
// // console.log('The result is: ' + result);

// // Listen for form submission
// document.getElementById('calcForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Retrieve operator and number values
//     const operator = document.getElementById('operator').value;
//     const n1 = parseFloat(document.getElementById('n1').value);
//     const n2 = parseFloat(document.getElementById('n2').value);

//     // Calculate result using our special function
//     const result = getSpecialRandomNum(n1, n2, operator);

//     // Display the result in the page
//     // document.getElementById('result').textContent = 'The result is: ' + result;
//     const resultElement = document.getElementById('result');
//     resultElement.textContent = 'The result is: ' + result;
//     resultElement.classList.add('show');

    
//   });