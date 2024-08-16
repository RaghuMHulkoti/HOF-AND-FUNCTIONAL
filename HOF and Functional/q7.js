// Array of numbers
const originalNumbers = [2, 5, 8, 10, 3];

// Using the forEach method to double the value of each number
originalNumbers.forEach((number, index, array) => {
  array[index] = number * 2;
});

console.log(originalNumbers);
