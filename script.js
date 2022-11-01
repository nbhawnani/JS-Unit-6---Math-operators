// Increase Value by 1 - Postfix operator
let value1 = 10;
value1=value1++;
console.log('Increment postfix operator:',value1);


// Increase Value by 1 - Prefix operator
value1=++value1;
console.log('Increment prefix operator:',value1);

// Decrease Value by 1 - decrement operator
let value2 = 10;
value2=value2--;
console.log('Decrement postfix operator:',value2);

value2=--value2;
console.log('Decrement prefix operator:',value2);

// Addition operator
 value1 = 11;
 value2 = 2;
const sum = value1 + value2;
console.log('Sum:',sum) // Output: 30

// Difference Operator
const diff = value1 - value2
console.log('Difference:',diff) // Output: -10
const diff1 = value2 - value1
console.log('Difference 2 :',diff1) //Output: 10

// Multiplication operator
const multiply = value1 * value2;
console.log('Mutiply:',multiply) // Output: 200

// Division operator - returns decimal as the result if that is the case
const divide = value1 / value2
console.log('Division:',divide) // Output: 0.5
const divide1 = value2 / value1
console.log('Division 2:',divide1) //Output: 2

//Modulus operator - returns the integer remainder of the division operator
value1=40
value2=15
let modValue=value1%value2 //40/3's remainder
console.log("Modulus:",modValue);


console.log('Round:',Math.round(2.8)) //Regular rounding
console.log('Ceil:',Math.ceil(2.2)) //Round up 
console.log('Floor:',Math.floor(2.8)) // Round down
console.log('PI value:',Math.PI) // PI value
console.log('Random value:',Math.random()) // Random value between 0 and 1(not inclusive)
console.log('Random value between 0 and 10:',Math.random()*10) 
console.log("Squareroot:",Math.sqrt(36));



//Array using random method
let arrColors=["red","green","yellow","pink","blue"]
let index=Math.random();
console.log(index*arrColors.length,arrColors[Math.floor(index*arrColors.length)])


// Min and Max methods
console.log("Min:",Math.min(2,3,-4,0,-10))
console.log("Max:",Math.max(2,3,-4,0,-10))


/*
// we will use % operator in this activity
const num = 11;
if(num % 2 === 0){
console.log(num,num % 2,'value is even');
}else{
console.log(num,num % 2,'value is odd');
}
// Output: value is even
*/

/*
// program for a simple calculator
// take the operator input
const operator = prompt('Enter operator ( either +,-, * or / ): ');
// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
// using if...else if... else
if (operator == '+') {
result = number1 + number2;
}
else if (operator == '-') {
result = number1 - number2;
}
else if (operator == '*') {
result = number1 * number2;
}
else {
result = number1 / number2;
}

console.log('Result:', result)
*/



//Program to present atleast 5 choices to user:
/*
1. Add 2 numbers
2. Subtract 2 numbers
3. Divide
4. Find modulus of
5. Determine if odd or even
6. Determine if divisible by 5
7. Find Max
8. Find Min
9. Round up to nearest integer
10. Round down to nearest integer
11. Round to integer 
12. Find squareroot
13. Find Exponent
14. Generate a random integer in a range
*/