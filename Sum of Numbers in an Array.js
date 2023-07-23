//Sum of Numbers in an Array



function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log("Sum of the array:", totalSum);
