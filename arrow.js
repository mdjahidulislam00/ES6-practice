// function sum (num1, num2){
//     return num1 * num2;
// }

// const sum = function(num1, num2){
//     return num1*num2
// }

// const sum = (num1, num2=10) => num1 * num2;

const sum = (num1, num2) =>{
    const multiplide = num1 * num2;
    const addition = num1 + num2;
    const equation = multiplide - addition;
    return equation;
}
const result = sum (10,3);
console.log(result);