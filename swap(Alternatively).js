let a = 5;
let b = 10;

console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swap the values without a temporary variable
[a, b] = [b, a];

console.log(`After swapping: a = ${a}, b = ${b}`);
