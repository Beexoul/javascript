// Filtering Even Numbers from an Array

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbersArray);
console.log("Even Numbers:", evenNumbers);
