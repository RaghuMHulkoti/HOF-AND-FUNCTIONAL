// Array of numbers
const originalNumbers = [2, 5, 8, 10, 3];

// Array to store even numbers
const evenNumbers = [];

// Using the forEach method to collect even numbers
originalNumbers.forEach(number => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log(evenNumbers);
