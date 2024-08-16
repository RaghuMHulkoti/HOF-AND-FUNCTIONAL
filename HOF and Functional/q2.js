function printRandomNumber() {
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
        console.log(randomNumber);
    }, 2000);
}

// Start printing random numbers
printRandomNumber();
