/*
let value1 = 10;
let value2 = 20;
const sum = value1 + value2;
console.log('Sum:',sum) // Output: 30


const diff = value1 - value2
console.log('Difference:',diff) // Output: -10
const diff1 = value2 - value1
console.log('Difference 2 :',diff1) //Output: 10

const multiply = value1 * value2;
console.log('Mutiply:',multiply) // Output: 200

const divide = value1 / value2
console.log('Division:',divide) // Output: 0.5
const divide1 = value2 / value1
console.log('Division 2:',divide1) //Output: 2

// Increase Value by 1
value1 = 10;
value1=value1++;
console.log('Increment operator:',value1);
value1=++value1;
console.log('Increment operator:',value1);


// Decrease Value by 1
value1 = 10;
value1=value1--;
console.log('Decrement operator:',value1);
value1=--value1;
console.log('Decrement operator:',value1);
*/

console.log('Round:',Math.round(2.8)) //Regular rounding
console.log('Ceil:',Math.ceil(2.2)) //Round up 
console.log('Floor:',Math.floor(2.8)) // Round down
console.log('PI value:',Math.PI) // PI value
console.log('Random value:',Math.random()) // Random value between 0 and 1(not inclusive)

// we will use % operator in this activity
const num = 11;
if(num % 2 === 0){
console.log(num,num % 2,'value is even');
}else{
console.log(num,num % 2,'value is odd');
}
// Output: value is even