//Assumptions:

// '=' is always at the end of the user input
// 'c' is always alone
// '!' can compound (ie. '!!35' is valid and is the same as '35')
// We're not using parenthesis
// BEDMAS rules apply (without the BE)
// the user should '^C' to end the program

let readlineSync = require('readline-sync'), storedValue = 0;

//Lets go!
console.log(storedValue);
//1. take input
let input = readlineSync.prompt();

//2. validate input
// The only valid characters are: digits, 'c', '+', '-', '*', '/', '!', '='
//throw an error on validate, or clear out the invalid characters
//remove any '=' that are not at the end of the input

//3. process input
// We need to tokenize the input into operators and operands
// we need to sort the ranking of the operands according to 'DMAS'

//4. store result

//5. output result
console.log(storedValue);