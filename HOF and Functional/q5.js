// Sample array of expense objects
const expenses = [
    { id: 1, amount: 50, category: 'Groceries' },
    { id: 2, amount: 20, category: 'Transport' },
    { id: 3, amount: 100, category: 'Groceries' },
    { id: 4, amount: 150, category: 'Entertainment' },
    { id: 5, amount: 30, category: 'Groceries' }
  ];
  
  // Using the reduce method to calculate the total amount of all expenses
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
  
  console.log(totalAmount);
  