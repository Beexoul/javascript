//Checking if a Number is Prime

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const numberToCheck = 17;
const isNumberPrime = isPrime(numberToCheck);
console.log(`${numberToCheck} is prime: ${isNumberPrime}`);
