//Assumptions:

// '=' is always at the end of the user input
// 'c' is always alone
// '!' can compound (ie. '!!35' is valid and is the same as '35')
// We're not using parenthesis
// BEDMAS rules apply (without the BE)
// the user should '^C' to end the program

let readlineSync = require('readline-sync'), storedValue = 0;
const operatorDMAS = {'/': 2, '*': 2, '+': 1, '-': 1};

//Lets go!
console.log(storedValue);
//1. take input
let input = "25-10*5";//readlineSync.prompt();

//2. validate input
// The only valid characters are: digits, 'c', '+', '-', '*', '/', '!', '='
//throw an error on validate, or clear out the invalid characters
//remove any '=' that are not at the end of the input

//3. process input
// We need to tokenize the input into operators and operands
// we need to sort the ranking of the operands according to 'DMAS'
// lets use regex to break up the tokens and add them to a queue to be processed
let tokens = [];
let operatorStack = [];
input.replace(/\s/g, '').split(/([\+\-\*\/\!\=])/).forEach(token => {
  console.log("TOKEN: ", token);
  //check if this is a operator or operand
  if (parseFloat(token)) {
    //this is an operand
    tokens.push(token);
  } else if (token in operatorDMAS) {
    //confirmed operator - check DMAS
    while (operatorStack.length && operatorDMAS[operatorStack[operatorStack.length - 1]] >= operatorDMAS[token]) {
      tokens.push(operatorStack.pop());
    }
    operatorStack.push(token);
  }
});

while (operatorStack.length) {
  tokens.push(operatorStack.pop());
}

console.log("Operator stack: ", tokens);

//now that we've tokenized and sorted the tokens, we can process the token queue
let stack = [];
tokens.forEach(token => {
  console.log("Processing token: ", token, " with stack: ", stack);
  if (parseFloat(token)) {
    //first operand
    stack.push(parseFloat(token));
  } else {
    //operator
    let operand2 = stack.pop();
    let operand1 = stack.pop();
    let result = 0;
    switch (token) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        break;
    }
    console.log("RESULT: ", result);
    stack.push(result);
  }

});

storedValue = stack.pop();


//4. store result

//5. output result
console.log(storedValue);