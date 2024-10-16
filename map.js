// const numbers = [5, 10, 20, 30];

// function doubleIt(num) {
//     console.log('num now',num)
//   return num * 2;
// }

// const result = numbers.map(doubleIt);
// console.log(result)

const newArray = (numbers) => numbers*2;
const numbers =[50,100,200,4900];
const result =  numbers.map(newArray);
console.log(result);


const evenNumbers = numbers.map(n => n*2);
console.log(evenNumbers)
