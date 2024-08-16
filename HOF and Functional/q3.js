function calculateTax(expenses) {
    const taxRate = 0.10; // 10% tax rate
    return expenses.map(expense => {
        const tax = expense.amount * taxRate;
        return {
            ...expense,
            tax: tax
        };
    });
}

// Example usage:
const expenses = [
    { amount: 100, category: 'Groceries' },
    { amount: 200, category: 'Rent' },
    { amount: 50, category: 'Utilities' }
];

const expensesWithTax = calculateTax(expenses);
console.log(expensesWithTax);
/*
Output:
[
    { amount: 100, category: 'Groceries', tax: 10 },
    { amount: 200, category: 'Rent', tax: 20 },
    { amount: 50, category: 'Utilities', tax: 5 }
]
*/
