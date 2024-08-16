function calculateTotalPrice(items) {
    let total = 0;
    items.forEach(item => {
        total += item.price;
    });
    return total;
}

// Example usage:
const items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 }
];

const totalPrice = calculateTotalPrice(items);
console.log(`Total Price: $${totalPrice}`); // Output: Total Price: $60
